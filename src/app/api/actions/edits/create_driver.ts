'use server';
import { PrismaClient } from '@prisma/client';
import { cookies } from 'next/headers';
import { openSessionToken } from '@/app/api/modules/opentoken';
const prisma = new PrismaClient();
export async function CreateDriver(formData: FormData) {
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
    const cnh = formData.get('cnh') as string;
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
        const existingDriver = await prisma.driver.findFirst({ where: { cnh } });
        if (!existingDriver) {
            return { status: 400, Error: true, message: 'Motorista não cadastrado!' };
        };
        const exitingCpf = await prisma.cpf.findUnique({ where: { cpf } });
        if (exitingCpf) {
            await prisma.cpf.update({
                where: { cpf },
                data: { name, dateofbirth }
            });
        } else {
            return { status: 400, Error: true, message: 'CPF Não cadastrado!' };
        };
        const existingTelephone = await prisma.telephone.findUnique({ where: { telephone } });
        if (existingTelephone) {
            await prisma.telephone.update({
                where: { telephone },
                data: { email }
            });
        } else {
            await prisma.telephone.create({ data: { telephone, email } });
        };
        const existingZipcode = await prisma.zipcode.findUnique({ where: { zipcode } });
        if (existingZipcode) {
            await prisma.zipcode.update({
                where: { zipcode },
                data: { street, district, city }
            });
        } else {
            await prisma.zipcode.create({ data: { zipcode, street, district, city } });
        };
        let existingAddress = await prisma.address.findFirst({ where: { zipcode, numresidence, typeresidence, building, block, livingapartmentroom } });
        if (existingAddress) {
            existingAddress = await prisma.address.update({
                where: { address_id: existingAddress.address_id },
                data: { address_id: existingAddress.address_id, numresidence, typeresidence, building, block, livingapartmentroom, referencepoint }
            });
        } else {
            existingAddress = await prisma.address.create({ data: { zipcode, numresidence, typeresidence, building, block, livingapartmentroom, referencepoint } });
        };
        await prisma.driver.update({
            where: { cnh },
            data: { telephone, address_id: existingAddress.address_id, user_id: existingUser.user_id }
        });
        return { status: 201, Error: false, message: 'Motorista Editado com Sucesso!' };
    } catch (error) {
        console.error(error);
        return { status: 500, Error: true, message: 'Erro Interno do BD!' };
    } finally {
        await prisma.$disconnect();
    };
};