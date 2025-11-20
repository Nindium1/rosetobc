import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getCurrentAdmin } from "@/lib/auth";
import { z } from "zod";

const bookSchema = z.object({
    title: z.string().min(1, "Title is required"),
    author: z.string().min(1, "Author is required"),
    description: z.string().optional(),
    imageUrl: z.string().url().optional(),
});

export async function POST(request: NextRequest) {
    try {
        const admin = await getCurrentAdmin();

        if (!admin) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        const body = await request.json();
        const validatedData = bookSchema.parse(body);

        const book = await prisma.book.create({
            data: validatedData,
        });

        return NextResponse.json(
            {
                success: true,
                message: "Book created successfully",
                data: book,
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

        console.error("Error creating book:", error);
        return NextResponse.json(
            { error: "Failed to create book" },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        const admin = await getCurrentAdmin();

        if (!admin) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        const books = await prisma.book.findMany({
            orderBy: {
                createdAt: "desc",
            },
            include: {
                _count: {
                    select: {
                        reviews: true,
                    },
                },
            },
        });

        return NextResponse.json({ books });
    } catch (error) {
        console.error("Error fetching books:", error);
        return NextResponse.json(
            { error: "Failed to fetch books" },
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
                { error: "Book ID is required" },
                { status: 400 }
            );
        }

        const body = await request.json();
        const validatedData = bookSchema.partial().parse(body);

        const book = await prisma.book.update({
            where: { id },
            data: validatedData,
        });

        return NextResponse.json({
            success: true,
            message: "Book updated successfully",
            data: book,
        });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { error: "Validation failed", details: error.errors },
                { status: 400 }
            );
        }

        console.error("Error updating book:", error);
        return NextResponse.json(
            { error: "Failed to update book" },
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
                { error: "Book ID is required" },
                { status: 400 }
            );
        }

        await prisma.book.delete({
            where: { id },
        });

        return NextResponse.json({
            success: true,
            message: "Book deleted successfully",
        });
    } catch (error) {
        console.error("Error deleting book:", error);
        return NextResponse.json(
            { error: "Failed to delete book" },
            { status: 500 }
        );
    }
}
