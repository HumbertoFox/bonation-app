'use server';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export async function SearchUser(formData: FormData) {
    const cpf = formData.get('cpf') as string;
    if (!cpf) {
        return { status: 400, Error: true, message: 'CPF Não encontrado!' };
    };
    try {
        const user = await prisma.user.findFirst({
            where: { cpf },
            include: {
                user_cpf: true,
                user_telephone: true,
                user_address_id: {
                    include: { address_zipcode: true }
                }
            }
        });
        if (!user) {
            return { status: 400, Error: true, message: 'Usuário Não encontrado!' };
        };
        const detailsUser = {
            cpf: user.cpf,
            dateofbirth: user.user_cpf.dateofbirth,
            name: user.user_cpf.name,
            telephone: user.telephone,
            email: user.user_telephone.email,
            zipcode: user.user_address_id.zipcode,
            typeresidence: user.user_address_id.typeresidence,
            street: user.user_address_id.address_zipcode.street,
            district: user.user_address_id.address_zipcode.district,
            city: user.user_address_id.address_zipcode.city,
            numresidence: user.user_address_id.numresidence,
            referencepoint: user.user_address_id.referencepoint,
            building: user.user_address_id.building,
            block: user.user_address_id.block,
            livingapartmentroom: user.user_address_id.livingapartmentroom
        };
        return { status: 200, Error: false, message: 'Usuário Encontrado!', detailsUser };
    } catch (error) {
        console.error(error);
        return { status: 500, Error: true, message: 'Erro Interno do BD!' };
    } finally {
        await prisma.$disconnect();
    };
};