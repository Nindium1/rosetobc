import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: NextRequest) {
    try {
        const books = await prisma.book.findMany({
            orderBy: {
                createdAt: "desc",
            },
            include: {
                reviews: {
                    where: {
                        status: "APPROVED",
                    },
                    select: {
                        id: true,
                        rating: true,
                        comment: true,
                        reviewer: true,
                        createdAt: true,
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
