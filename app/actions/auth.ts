"use server";

import { db } from "@/db";
import { users } from "@/db/schema";
import { createSession, deleteSessionTokenCookie, setSessionTokenCookie, validateSession } from "@/lib/auth";
import { eq } from "drizzle-orm";
import { scryptSync, randomBytes, timingSafeEqual } from "crypto";
import { redirect } from "next/navigation";
import { z } from "zod";

const authSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
});

function hashPassword(password: string): string {
    const salt = randomBytes(16).toString("hex");
    const derivedKey = scryptSync(password, salt, 64);
    return `${salt}:${derivedKey.toString("hex")}`;
}

function verifyPassword(password: string, hash: string): boolean {
    const [salt, key] = hash.split(":");
    const keyBuffer = Buffer.from(key, "hex");
    const derivedKey = scryptSync(password, salt, 64);
    return timingSafeEqual(keyBuffer, derivedKey);
}

export async function signUp(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const validated = authSchema.safeParse({ email, password });
    if (!validated.success) {
        return { error: "Invalid email or password" };
    }

    const existingUser = await db.query.users.findFirst({
        where: eq(users.email, email),
    });

    if (existingUser) {
        return { error: "User already exists" };
    }

    const userId = Math.random().toString(36).substring(2, 15);
    const passwordHash = hashPassword(password);

    await db.insert(users).values({
        id: userId,
        email,
        passwordHash,
    });

    const session = await createSession(userId);
    await setSessionTokenCookie(session.id, session.expiresAt);

    redirect("/dashboard");
}

export async function login(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const validated = authSchema.safeParse({ email, password });
    if (!validated.success) {
        return { error: "Invalid email or password" };
    }

    const user = await db.query.users.findFirst({
        where: eq(users.email, email),
    });

    if (!user || !verifyPassword(password, user.passwordHash)) {
        return { error: "Incorrect email or password" };
    }

    const session = await createSession(user.id);
    await setSessionTokenCookie(session.id, session.expiresAt);

    redirect("/dashboard");
}

export async function logout() {
    const { session } = await validateSession();
    if (session) {
        await deleteSessionTokenCookie();
    }
    redirect("/login");
}
