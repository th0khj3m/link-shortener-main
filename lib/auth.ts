import { db } from "@/db";
import { sessions, users, type Session, type User } from "@/db/schema";
import { eq } from "drizzle-orm";
import { cookies } from "next/headers";
import { cache } from "react";

export const SESSION_COOKIE_NAME = "auth_session";

export const validateSession = cache(async (): Promise<{ user: User; session: Session } | { user: null; session: null }> => {
    const sessionId = (await cookies()).get(SESSION_COOKIE_NAME)?.value ?? null;
    if (!sessionId) {
        return { user: null, session: null };
    }

    const result = await db
        .select({ user: users, session: sessions })
        .from(sessions)
        .innerJoin(users, eq(sessions.userId, users.id))
        .where(eq(sessions.id, sessionId));

    if (result.length < 1) {
        return { user: null, session: null };
    }

    const { user, session } = result[0];

    if (Date.now() >= session.expiresAt.getTime()) {
        await db.delete(sessions).where(eq(sessions.id, session.id));
        return { user: null, session: null };
    }

    if (Date.now() >= session.expiresAt.getTime() - 1000 * 60 * 60 * 24 * 15) {
        session.expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30);
        await db
            .update(sessions)
            .set({ expiresAt: session.expiresAt })
            .where(eq(sessions.id, session.id));
    }

    return { user, session };
});

export async function invalidateSession(sessionId: string): Promise<void> {
    await db.delete(sessions).where(eq(sessions.id, sessionId));
}

export async function createSession(userId: string): Promise<Session> {
    const sessionId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const session: Session = {
        id: sessionId,
        userId,
        expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
    };
    await db.insert(sessions).values(session);
    return session;
}

export async function setSessionTokenCookie(token: string, expiresAt: Date): Promise<void> {
    (await cookies()).set(SESSION_COOKIE_NAME, token, {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        expires: expiresAt,
        path: "/",
    });
}

export async function deleteSessionTokenCookie(): Promise<void> {
    (await cookies()).set(SESSION_COOKIE_NAME, "", {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        maxAge: 0,
        path: "/",
    });
}
