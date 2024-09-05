'use server';
import { cookies } from 'next/headers';
export function destroySession() {
    cookies().delete('sessiontoken');
};