'use server';
import { NextRequest, NextResponse } from 'next/server';
import { isSessionValid } from '@/app/api/modules/isvalid';
export const config = { matcher: '/((?!_next/static|_next/image|faction.ico).*)' };
const publicRoutes = ['/login'];
export async function middleware(req: NextRequest) {
    const pathname = req.nextUrl.pathname;
    if (publicRoutes.includes(pathname)) {
        return NextResponse.next();
    };
    const sessiontoken = await isSessionValid();
    if (!sessiontoken) {
        const isAPIRoute = pathname.startsWith('/api');
        if (isAPIRoute) {
            return { status: 401, Error: true, message: 'Não autorizado' };
        };
        return NextResponse.redirect(new URL('/login', req.url));
    };
    return NextResponse.next();
};