import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getCurrentAdmin } from "@/lib/auth";
import { z } from "zod";

const updateStatusSchema = z.object({
    status: z.enum(["APPROVED", "REJECTED"]),
});

export async function GET() {
    try {
        const admin = await getCurrentAdmin();

        if (!admin) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        const requests = await prisma.membershipRequest.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });

        return NextResponse.json({ requests });
    } catch (error) {
        console.error("Error fetching membership requests:", error);
        return NextResponse.json(
            { error: "Failed to fetch membership requests" },
            { status: 500 }
        );
    }
}

export async function PATCH(request: NextRequest) {
    try {
        const admin = await getCurrentAdmin();

        if (!admin) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");

        if (!id) {
            return NextResponse.json(
                { error: "Request ID is required" },
                { status: 400 }
            );
        }

        const body = await request.json();
        const validatedData = updateStatusSchema.parse(body);

        const membershipRequest = await prisma.membershipRequest.update({
            where: { id },
            data: { status: validatedData.status },
        });

        return NextResponse.json({
            success: true,
            message: `Membership request ${validatedData.status.toLowerCase()}`,
            data: membershipRequest,
        });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { error: "Validation failed", details: error.errors },
                { status: 400 }
            );
        }

        console.error("Error updating membership request:", error);
        return NextResponse.json(
            { error: "Failed to update membership request" },
            { status: 500 }
        );
    }
}
