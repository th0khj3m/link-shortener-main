import { pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: text("id").primaryKey(),
    email: varchar("email", { length: 255 }).notNull().unique(),
    passwordHash: text("password_hash").notNull(),
});

export const sessions = pgTable("sessions", {
    id: text("id").primaryKey(),
    userId: text("user_id")
        .notNull()
        .references(() => users.id),
    expiresAt: timestamp("expires_at", {
        withTimezone: true,
        mode: "date",
    }).notNull(),
});

export const links = pgTable("links", {
    id: text("id").primaryKey(),
    originalUrl: text("original_url").notNull(),
    shortCode: text("short_code").notNull().unique(),
    description: text("description"),
    userId: text("user_id").references(() => users.id),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "date" })
        .defaultNow()
        .notNull(),
});

export type User = typeof users.$inferSelect;
export type Session = typeof sessions.$inferSelect;
export type Link = typeof links.$inferSelect;
