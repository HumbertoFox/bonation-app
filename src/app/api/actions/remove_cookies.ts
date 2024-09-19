'use server';
import { RemoveSessionToken } from '@/app/api/modules/removesession';
export async function GetRemoveCookies() {
    await RemoveSessionToken();
};