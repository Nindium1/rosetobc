import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { z } from "zod";

const reviewSchema = z.object({
    bookId: z.string().min(1, "Book ID is required"),
    reviewer: z.string().min(1, "Reviewer name is required"),
    rating: z.number().min(1).max(5, "Rating must be between 1 and 5"),
    comment: z
        .string()
        .min(10, "Please provide at least 10 characters in your review"),
});

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const validatedData = reviewSchema.parse(body);

        // Check if book exists
        const book = await prisma.book.findUnique({
            where: { id: validatedData.bookId },
        });

        if (!book) {
            return NextResponse.json(
                { error: "Book not found" },
                { status: 404 }
            );
        }

        const review = await prisma.review.create({
            data: validatedData,
        });

        return NextResponse.json(
            {
                success: true,
                message:
                    "Your review has been submitted and is pending approval!",
                data: review,
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

        console.error("Error creating review:", error);
        return NextResponse.json(
            { error: "Failed to submit review" },
            { status: 500 }
        );
    }
}

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const bookId = searchParams.get("bookId");

        const where = {
            status: "APPROVED" as const,
            ...(bookId && { bookId }),
        };

        const reviews = await prisma.review.findMany({
            where,
            include: {
                book: {
                    select: {
                        id: true,
                        title: true,
                        author: true,
                    },
                },
            },
            orderBy: {
                createdAt: "desc",
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
