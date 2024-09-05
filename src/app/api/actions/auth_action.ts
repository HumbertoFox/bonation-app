'use server';
import { createSessionToken } from '../modules/createtoken';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
const prisma = new PrismaClient();
export async function loginAuth(formData: FormData) {
    const cpf = formData.get('cpf') as string;
    const password = formData.get('password') as string;
    try {
        if (!cpf || !password) {
            return { status: 400, Error: true, message: 'CPF e senha são obrigatórios!' };
        };
        const user = await prisma.user.findFirst({
            where: { cpf }
        });
        if (!user) {
            return { status: 400, Error: true, message: 'Usuário ou senha invalido!' };
        };
        if (user.isblocked === true) {
            return { status: 401, Error: true, message: 'Usuário ou senha invalido!' }
        };
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return { status: 400, Error: true, message: 'Usuário ou senha invalido!' }
        };
        const user_telephone = await prisma.telephone.findFirst({
            where: { telephone: user.telephone }
        });
        await createSessionToken({ sub: user.user_id, cpf: user.cpf, email: user_telephone?.email });
        return { status: 200, Error: false, message: 'Login realizado com sucesso!' };
    } catch (error) {
        return { status: 500, Error: true, message: 'Erro interno do BD!' };
    } finally {
        await prisma.$disconnect();
    };
};