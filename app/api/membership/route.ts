import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { z } from "zod";

const membershipRequestSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Valid email is required"),
    reason: z
        .string()
        .min(
            10,
            "Please provide at least 10 characters explaining why you want to join"
        ),
});

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const validatedData = membershipRequestSchema.parse(body);

        // Check if email already exists
        const existing = await prisma.membershipRequest.findFirst({
            where: {
                email: validatedData.email,
                status: "PENDING",
            },
        });

        if (existing) {
            return NextResponse.json(
                { error: "A pending request with this email already exists" },
                { status: 400 }
            );
        }

        const membershipRequest = await prisma.membershipRequest.create({
            data: validatedData,
        });

        return NextResponse.json(
            {
                success: true,
                message:
                    "Your membership request has been submitted successfully!",
                data: membershipRequest,
            },
            { status: 201 }
        );
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { error: "Validation failed", details: error.errors },
                { status: 400 }
            );
        }

        console.error("Error creating membership request:", error);
        return NextResponse.json(
            { error: "Failed to submit membership request" },
            { status: 500 }
        );
    }
}
