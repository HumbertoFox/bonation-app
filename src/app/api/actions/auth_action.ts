'use server';
import { createSessionToken } from '../modules/createtoken';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
const prisma = new PrismaClient();
export async function LoginAuth(formData: FormData) {
    const cpf = formData.get('cpf') as string;
    const password = formData.get('password') as string;
    try {
        if (!cpf || !password) {
            return { status: 400, Error: true, message: 'CPF e Senha são Obrigatórios!' };
        };
        const user = await prisma.user.findFirst({ where: { cpf } });
        if (!user) {
            return { status: 400, Error: true, message: 'Usuário ou Senha Invalido!' };
        };
        if (user.isblocked === true) {
            return { status: 401, Error: true, message: 'Usuário ou Senha Invalido!' }
        };
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return { status: 400, Error: true, message: 'Usuário ou Senha Invalido!' }
        };
        const user_telephone = await prisma.telephone.findFirst({ where: { telephone: user.telephone } });
        await createSessionToken({ sub: user.user_id, cpf: user.cpf, email: user_telephone?.email });
        return { status: 202, Error: false, message: 'Login Realizado com Sucesso!' };
    } catch (error) {
        console.error(error);
        return { status: 500, Error: true, message: 'Erro Interno do BD!' };
    } finally {
        await prisma.$disconnect();
    };
};