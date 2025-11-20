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

        const reviews = await prisma.review.findMany({
            orderBy: {
                createdAt: "desc",
            },
            include: {
                book: {
                    select: {
                        id: true,
                        title: true,
                        author: true,
                    },
                },
            },
        });

        return NextResponse.json({ reviews });
    } catch (error) {
        console.error("Error fetching reviews:", error);
        return NextResponse.json(
            { error: "Failed to fetch reviews" },
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
                { error: "Review ID is required" },
                { status: 400 }
            );
        }

        const body = await request.json();
        const validatedData = updateStatusSchema.parse(body);

        const review = await prisma.review.update({
            where: { id },
            data: { status: validatedData.status },
        });

        return NextResponse.json({
            success: true,
            message: `Review ${validatedData.status.toLowerCase()}`,
            data: review,
        });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { error: "Validation failed", details: error.errors },
                { status: 400 }
            );
        }

        console.error("Error updating review:", error);
        return NextResponse.json(
            { error: "Failed to update review" },
            { status: 500 }
        );
    }
}

export async function DELETE(request: NextRequest) {
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
                { error: "Review ID is required" },
                { status: 400 }
            );
        }

        await prisma.review.delete({
            where: { id },
        });

        return NextResponse.json({
            success: true,
            message: "Review deleted successfully",
        });
    } catch (error) {
        console.error("Error deleting review:", error);
        return NextResponse.json(
            { error: "Failed to delete review" },
            { status: 500 }
        );
    }
}
