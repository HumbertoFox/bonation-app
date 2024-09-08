'use server';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export async function CreateDonor(formData: FormData) {
    const name = formData.get('name') as string;
    const telephone = formData.get('telephone') as string;
    const contact1 = formData.get('contact1') as string;
    const contact2 = formData.get('contact2') as string;
    const cnpj = formData.get('cnpj') as string;
    const enterprise = formData.get('enterprise') as string;
    const zipcode = formData.get('zipcode') as string;
    const typeresidence = formData.get('typeresidence') as string;
    const street = formData.get('street') as string;
    const district = formData.get('district') as string;
    const city = formData.get('city') as string;
    const numresidence = formData.get('numresidence') as string;
    const building = formData.get('building') as string;
    const block = formData.get('block') as string;
    const livingapartmentroom = formData.get('livingapartmentroom') as string;
    try {

    } catch (error) {

    } finally {
        await prisma.$disconnect();
    };
};