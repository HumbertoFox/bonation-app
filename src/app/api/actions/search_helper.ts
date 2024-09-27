'use server';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export async function SearchHelper(formData: FormData) {
    const cpf = formData.get('cpf') as string;
    if (!cpf) {
        return { status: 400, Error: true, message: 'CPF Não encontrado!' };
    };
    try {
        const helper = await prisma.helper.findFirst({
            where: { cpf },
            include: {
                helper_cpf: true,
                helper_telephone: true,
                helper_address_id: {
                    include: { address_zipcode: true }
                }
            }
        });
        if (!helper) {
            return { status: 400, Error: true, message: 'Ajudante Não encontrado!' };
        };
        const detailsHelper = {
            cpf: helper.cpf,
            dateofbirth: helper.helper_cpf.dateofbirth,
            name: helper.helper_cpf.name,
            telephone: helper.telephone,
            email: helper.helper_telephone.email,
            zipcode: helper.helper_address_id.zipcode,
            typeresidence: helper.helper_address_id.typeresidence,
            street: helper.helper_address_id.address_zipcode.street,
            district: helper.helper_address_id.address_zipcode.district,
            city: helper.helper_address_id.address_zipcode.city,
            numresidence: helper.helper_address_id.numresidence,
            referencepoint: helper.helper_address_id.referencepoint,
            building: helper.helper_address_id.building,
            block: helper.helper_address_id.block,
            livingapartmentroom: helper.helper_address_id.livingapartmentroom
        };
        return { status: 200, Error: false, message: 'Ajudante Encontrado!', detailsHelper };
    } catch (error) {
        console.error(error);
        return { status: 500, Error: true, message: 'Erro Interno do BD!' };
    } finally {
        await prisma.$disconnect();
    };
};