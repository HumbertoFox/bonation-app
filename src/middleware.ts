import { NextRequest, NextResponse } from "next/server";
export const config = {
    matcher: '/((?!_next/static|_next/image|faction.ico).*)',
};
const publicRoutes = ['/login', '/menu/registeruser'];
export function middleware(req: NextRequest) {
    const pathname = req.nextUrl.pathname;
    if (publicRoutes.includes(pathname)) {
        return NextResponse.next();
    };
    const sessiontoken = null;
    if (!sessiontoken) {
        return NextResponse.redirect(new URL('/login', req.url));
    };
    return NextResponse.next();
};