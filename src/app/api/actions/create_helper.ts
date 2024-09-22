'use server';
import { PrismaClient } from '@prisma/client';
import { cookies } from 'next/headers';
import { openSessionToken } from '../modules/opentoken';
const prisma = new PrismaClient();
export async function CreateHelper(formData: FormData) {
    const sessionTokenCookies = cookies().get('sessiontoken');
    let userCpf: string | any;
    if (sessionTokenCookies) {
        const { value } = sessionTokenCookies;
        const { cpf } = await openSessionToken(value);
        userCpf = cpf;
    };
    const existingUser = await prisma.user.findFirst({ where: { cpf: userCpf, isblocked: false } });
    if (!existingUser) {
        return { status: 401, Error: true, message: 'Usuário não autenticado!' };
    };
    const name = formData.get('name') as string;
    const dateofbirth = formData.get('dateofbirth') as string;
    const cpf = formData.get('cpf') as string;
    const telephone = formData.get('telephone') as string;
    const email = formData.get('email') as string;
    const zipcode = formData.get('zipcode') as string;
    const typeresidence = formData.get('typeresidence') as string;
    const street = formData.get('street') as string;
    const district = formData.get('district') as string;
    const city = formData.get('city') as string;
    const numresidence = formData.get('numresidence') as string;
    const building = formData.get('building') as string;
    const block = formData.get('block') as string;
    const livingapartmentroom = formData.get('livingapartmentroom') as string;
    const referencepoint = formData.get('referencepoint') as string;
    try {
        const existingHelper = await prisma.helper.findFirst({ where: { cpf } });
        if (existingHelper) {
            return { status: 400, Error: true, message: 'Ajudante já cadastrado!' };
        };
        const exitingCpf = await prisma.cpf.findUnique({ where: { cpf } });
        const existingTelephone = await prisma.telephone.findUnique({ where: { telephone } });
        const existingZipcode = await prisma.zipcode.findUnique({ where: { zipcode } });
        let existingAddress = await prisma.address.findFirst({ where: { zipcode, numresidence, typeresidence, building, block, livingapartmentroom } });
        if (!exitingCpf) {
            await prisma.cpf.create({ data: { cpf, name, dateofbirth } });
        };
        if (!existingTelephone) {
            await prisma.telephone.create({ data: { telephone, email } });
        };
        if (!existingZipcode) {
            await prisma.zipcode.create({ data: { zipcode, street, district, city } });
        };
        if (!existingAddress) {
            existingAddress = await prisma.address.create({ data: { zipcode, numresidence, typeresidence, building, block, livingapartmentroom, referencepoint } });
        };
        await prisma.helper.create({ data: { cpf, telephone, address_id: existingAddress.address_id, user_id: existingUser.user_id } });
        return { status: 200, Error: false, message: 'Ajudante Cadastrado com Sucesso!' };
    } catch (error) {
        console.error(error);
        return { status: 500, Error: true, message: 'Erro Interno do BD!' };
    } finally {
        await prisma.$disconnect();
    };
};