'use server';
import { cookies } from 'next/headers';
export async function RemoveSessionToken() {
    cookies().delete('sessiontoken');
};