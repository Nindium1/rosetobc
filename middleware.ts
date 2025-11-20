import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;

    // Protect admin dashboard routes
    if (path.startsWith("/admin/dashboard")) {
        const sessionCookie = request.cookies.get("admin_session");

        if (!sessionCookie) {
            return NextResponse.redirect(new URL("/admin", request.url));
        }

        try {
            const sessionData = JSON.parse(sessionCookie.value);

            // Check if session is expired
            if (sessionData.expiresAt < Date.now()) {
                const response = NextResponse.redirect(
                    new URL("/admin", request.url)
                );
                response.cookies.delete("admin_session");
                return response;
            }
        } catch {
            return NextResponse.redirect(new URL("/admin", request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/dashboard/:path*"],
};
