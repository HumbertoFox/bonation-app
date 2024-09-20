'use server';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export async function SearchDonor(formData: FormData) {
    const codtel = formData.get('codtel') as string;
    if (!codtel) {
        return { status: 400, Error: true, message: 'ID/Telefone Não encontrado!' };
    };
    const includeData = {
        donor_telephone: true,
        donor_cpnj: {
            include: {
                enterprise_donor: true
            }
        },
        donor_address_id: {
            include: {
                address_zipcode: true
            }
        }
    };
    try {
        let donor;
        if (codtel.length === 11) {
            donor = await prisma.donor.findFirst({
                where: { telephone: codtel },
                include: includeData
            });
        }
        if (!donor && codtel.length <= 9) {
            donor = await prisma.donor.findFirst({
                where: {
                    donor_id: parseInt(codtel, 10)
                },
                include: includeData
            });
        };
        if (!donor) {
            return { status: 400, Error: true, message: 'Doador Não encontrado!' };
        };
        const detailsDonor = {
            donor_id: donor.donor_id,
            name: donor.name,
            telephone: donor.telephone,
            contact1: donor.donor_telephone.contact1,
            contact2: donor.donor_telephone.contact2,
            cnpj: donor.cnpj,
            corporatename: donor.donor_cpnj?.corporatename,
            zipcode: donor.donor_address_id.address_zipcode.zipcode,
            typeresidence: donor.donor_address_id.typeresidence,
            street: donor.donor_address_id.address_zipcode.street,
            district: donor.donor_address_id.address_zipcode.district,
            city: donor.donor_address_id.address_zipcode.city,
            numresidence: donor.donor_address_id.numresidence,
            referencepoint: donor.donor_address_id.referencepoint,
            building: donor.donor_address_id.building,
            block: donor.donor_address_id.block,
            livingapartmentroom: donor.donor_address_id.livingapartmentroom
        };
        return { status: 200, Error: false, message: 'Doador Encontrado!', detailsDonor };
    } catch (error) {
        console.error(error);
        return { status: 500, Error: true, message: 'Erro Interno do BD!' };
    } finally {
        await prisma.$disconnect();
    };
};