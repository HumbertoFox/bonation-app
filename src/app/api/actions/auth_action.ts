'use server';
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export default async function CreatUser(formData: FormData) {
    try {
        const name = formData.get('name') as string;
        const cpf = formData.get('cpf') as string;
        const zipcode = formData.get('zipcode') as string;
        const street = formData.get('street') as string;
        const neighborhod = formData.get('neighborhod') as string;
        const city = formData.get('city') as string;
        const nunresidence = formData.get('nunresidence') as string;
        const building = formData.get('building') as string;
        const block = formData.get('block') as string;
        const livingapartmentroom = formData.get('livingapartmentroom') as string;
        const password = formData.get('password') as string;

        const hashPassword = await bcrypt.hash(password, 10);

        

        redirect('/menu');
    } catch (error) {
        console.error(error);
    };
};