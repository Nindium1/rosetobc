import { cookies } from "next/headers";
import { NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "./prisma";

const SESSION_COOKIE_NAME = "admin_session";
const SESSION_EXPIRY = 7 * 24 * 60 * 60 * 1000; // 7 days

export async function hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
}

export async function verifyPassword(
    password: string,
    hashedPassword: string
): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
}

export async function createSession(adminId: string) {
    const cookieStore = await cookies();
    const sessionData = {
        adminId,
        expiresAt: Date.now() + SESSION_EXPIRY,
    };

    cookieStore.set(SESSION_COOKIE_NAME, JSON.stringify(sessionData), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: SESSION_EXPIRY / 1000,
        path: "/",
    });
}

export async function getSession() {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get(SESSION_COOKIE_NAME);

    if (!sessionCookie) {
        return null;
    }

    try {
        const sessionData = JSON.parse(sessionCookie.value);

        if (sessionData.expiresAt < Date.now()) {
            await deleteSession();
            return null;
        }

        return sessionData;
    } catch {
        return null;
    }
}

export async function deleteSession() {
    const cookieStore = await cookies();
    cookieStore.delete(SESSION_COOKIE_NAME);
}

export async function isAuthenticated(): Promise<boolean> {
    const session = await getSession();
    return !!session;
}

export async function getCurrentAdmin() {
    const session = await getSession();

    if (!session) {
        return null;
    }

    const admin = await prisma.admin.findUnique({
        where: { id: session.adminId },
        select: {
            id: true,
            email: true,
            name: true,
            createdAt: true,
        },
    });

    return admin;
}
