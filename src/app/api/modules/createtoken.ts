'use server';
import * as jose from 'jose';
import { cookies } from 'next/headers';
import { openSessionToken } from './opentoken';
export async function createSessionToken(payload = {}) {
    try {
        const secret = new TextEncoder().encode(process.env.AUTH_SECRET);
        const sessiontoken = await new jose.SignJWT(payload).setProtectedHeader({ alg: 'HS256' }).setExpirationTime('1d').sign(secret);
        const { exp } = await openSessionToken(sessiontoken);
        cookies().set('sessiontoken', sessiontoken, {
            path: '/',
            domain: 'donation-app-seven.vercel.app',
            secure: true,
            httpOnly: true,
            sameSite: 'strict',
            expires: new Date((exp as number) * 1000)
        });
    } catch (error) {
        console.error('Error creating session token:', error);
        throw new Error('Failed to create session token');
    };
};