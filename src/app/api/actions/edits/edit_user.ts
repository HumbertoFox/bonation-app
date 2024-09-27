'use server';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
const prisma = new PrismaClient();
export async function CreateUser(formData: FormData) {
    const fields = [
        'name', 'telephone', 'zipcode', 'typeresidence',
        'street', 'district', 'city', 'numresidence',
        'building', 'block', 'livingapartmentroom',
        'referencepoint', 'password'
    ];
    for (const field of fields) {
        const value = formData.get(field);
        if (!value || value.toString().trim() === '') {
            return { status: 400, Error: true, message: `${field} não pode ser vazio!` };
        };
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
    const password = formData.get('password') as string;
    const hashPassword = await bcrypt.hash(password, 12);
    try {
        const existingUser = await prisma.user.findFirst({ where: { cpf } });
        if (!existingUser) {
            return { status: 400, Error: true, message: 'Usuário Não cadastrado!' };
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
        await prisma.user.update({
            where: { user_id: existingUser.user_id },
            data: { cpf, telephone, password: hashPassword, address_id: existingAddress.address_id }
        });
        return { status: 201, Error: false, message: 'Usuário Editado com Sucesso!' };
    } catch (error) {
        console.error(error);
        return { status: 500, Error: true, message: 'Erro Interno do BD!' };
    } finally {
        await prisma.$disconnect();
    };
};