import { NextRequest, NextResponse } from "next/server";

export const config = {
    matcher: '/((?!_next/static|_next/image|faction.ico).*)',
};

const publicRoutes = ['/', '/menu/registeruser'];

export function middleware(req: NextRequest) {
    const pathname = req.nextUrl.pathname;

    if (publicRoutes.includes(pathname)) {
        return NextResponse.next();
    };

    const session = null;
    if (!session) {
        return NextResponse.redirect(new URL('/', req.url));
    };


    return NextResponse.next();
};