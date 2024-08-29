'use server';
import { PrismaClient } from "@prisma/client";
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export default async function CreateUser(formData: FormData) {
    const name = formData.get('name') as string;
    const dateofbirth = formData.get('dateofbirth') as string;
    const cpf = formData.get('cpf') as string;
    const telephone = formData.get('telephone') as string;
    const email = formData.get('email') as string;
    const zipcode = formData.get('zipcode') as string;
    const street = formData.get('street') as string;
    const district = formData.get('district') as string;
    const city = formData.get('city') as string;
    const nunresidence = formData.get('nunresidence') as string;
    const building = formData.get('building') as string;
    const block = formData.get('block') as string;
    const livingapartmentroom = formData.get('livingapartmentroom') as string;
    const password = formData.get('password') as string;

    const hashPassword = await bcrypt.hash(password, 10);

    try {
        const existingUser = await prisma.user.findFirst({ where: { cpf } });

        if (existingUser) {
            return { status: 400, Error: true, message: 'Usuário já cadastrado!' };
        };

        const exitingCpf = await prisma.cpf.findUnique({ where: { cpf } });

        const existingTelephone = await prisma.telephone.findUnique({ where: { telephone } });

        const existingZipcode = await prisma.zipcode.findUnique({ where: { zipcode } });

        let existingAddress = await prisma.address.findFirst({
            where: { zipcode, nunresidence, building, block, livingapartmentroom }
        });

        if (!exitingCpf) {
            await prisma.cpf.create({
                data: { cpf, name, dateofbirth }
            });
        };

        if (!existingTelephone) {
            await prisma.telephone.create({
                data: { telephone, email }
            });
        };

        if (!existingZipcode) {
            await prisma.zipcode.create({
                data: { zipcode, street, district, city }
            });
        };

        if (!existingAddress) {
            existingAddress = await prisma.address.create({
                data: { zipcode, nunresidence, building, block, livingapartmentroom }
            });
        };

        await prisma.user.create({
            data: { cpf, telephone, password: hashPassword, address_id: existingAddress.address_id }
        });

        return { status: 200, Error: false, message: 'Usuário cadastrado com Sucesso!' };

    } catch (Rrror) {
        console.error(Error);
        return { status: 500, Error: true, message: 'Erro interno do BD!' };
    };
};