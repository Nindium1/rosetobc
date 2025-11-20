import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/lib/prisma";
import { verifyPassword, createSession } from "@/lib/auth";

const loginSchema = z.object({
    email: z.string().email("Valid email is required"),
    password: z.string().min(1, "Password is required"),
});

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const validatedData = loginSchema.parse(body);

        const admin = await prisma.admin.findUnique({
            where: { email: validatedData.email },
        });

        if (!admin) {
            return NextResponse.json(
                { error: "Invalid email or password" },
                { status: 401 }
            );
        }

        const isValidPassword = await verifyPassword(
            validatedData.password,
            admin.password
        );

        if (!isValidPassword) {
            return NextResponse.json(
                { error: "Invalid email or password" },
                { status: 401 }
            );
        }

        await createSession(admin.id);

        return NextResponse.json({
            success: true,
            message: "Login successful",
            admin: {
                id: admin.id,
                email: admin.email,
                name: admin.name,
            },
        });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { error: "Validation failed", details: error.errors },
                { status: 400 }
            );
        }

        console.error("Error during login:", error);
        return NextResponse.json({ error: "Failed to login" }, { status: 500 });
    }
}
