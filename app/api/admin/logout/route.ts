import { NextResponse } from "next/server";
import { deleteSession } from "@/lib/auth";

export async function POST() {
    try {
        await deleteSession();

        return NextResponse.json({
            success: true,
            message: "Logout successful",
        });
    } catch (error) {
        console.error("Error during logout:", error);
        return NextResponse.json(
            { error: "Failed to logout" },
            { status: 500 }
        );
    }
}
