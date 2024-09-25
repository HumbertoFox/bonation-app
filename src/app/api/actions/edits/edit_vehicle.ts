'use server';
import { PrismaClient } from '@prisma/client';
import { cookies } from 'next/headers';
import { openSessionToken } from '@/app/api/modules/opentoken';
const prisma = new PrismaClient();
export async function CreateVehicle(formData: FormData) {
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
    const model = formData.get('model') as string;
    const chassi = formData.get('chassi') as string;
    const plate = formData.get('plate') as string;
    const km = formData.get('km') as string;
    try {
        const existingChassi = await prisma.vehicle.findUnique({ where: { chassi } });
        if (!existingChassi) {
            return { status: 404, Error: true, message: 'Veículo não cadastrado!' };
        };
        await prisma.vehicle.update({
            where: { chassi },
            data: { model, chassi, plate, km, user_id: existingUser.user_id }
        });
        return { status: 201, Error: false, message: 'Veículo Cadastrado com Sucesso!' };
    } catch (error) {
        console.error(error);
        return { status: 500, Error: true, message: 'Erro Interno do BD!' };
    } finally {
        await prisma.$disconnect();
    };
};