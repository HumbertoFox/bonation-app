'use server';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export async function SearchDriver(formData: FormData) {
    const cnh = formData.get('cnh') as string;
    if (!cnh) {
        return { status: 400, Error: true, message: 'CNH Não encontrado!' };
    };
    try {
        const driver = await prisma.driver.findFirst({
            where: { cnh },
            include: {
                driver_cpf: true,
                driver_telephone: true,
                driver_address_id: {
                    include: { address_zipcode: true }
                }
            }
        });
        if (!driver) {
            return { status: 400, Error: true, message: 'Motorista Não encontrado!' };
        };
        const detailsDriver = {
            cnh: driver.cnh,
            cpf: driver.cpf,
            dateofbirth: driver.driver_cpf.dateofbirth,
            name: driver.driver_cpf.name,
            telephone: driver.telephone,
            email: driver.driver_telephone.email,
            zipcode: driver.driver_address_id.zipcode,
            typeresidence: driver.driver_address_id.typeresidence,
            street: driver.driver_address_id.address_zipcode.street,
            district: driver.driver_address_id.address_zipcode.district,
            city: driver.driver_address_id.address_zipcode.city,
            numresidence: driver.driver_address_id.numresidence,
            referencepoint: driver.driver_address_id.referencepoint,
            building: driver.driver_address_id.building,
            block: driver.driver_address_id.block,
            livingapartmentroom: driver.driver_address_id.livingapartmentroom
        };
        return { status: 200, Error: false, message: 'Motorista Encontrado!', detailsDriver };
    } catch (error) {
        console.error(error);
        return { status: 500, Error: true, message: 'Erro Interno do BD!' };
    } finally {
        await prisma.$disconnect();
    };
};