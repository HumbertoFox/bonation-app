'use server';
import { NextRequest, NextResponse } from 'next/server';
import { RemoveSessionToken } from '@/app/api/modules/removesession';
export async function GET(req: NextRequest): Promise<NextResponse> {
    await RemoveSessionToken();
    return NextResponse.redirect(new URL('/login', req.url));
};