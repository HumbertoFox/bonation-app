export type FormSearch = {
    search: string;
    searchDonorCodTel: (result: any) => void;
};
export type InputSearch = {
    codtel?: string;
};
export type TitleValueProps = {
    title: string;
    value: string;
    searchDonationCod: {
        coddonation: string;
    } | any;
    searchDonorResult: {
        donorcode: string;
    } | any;
};
export type FormFullValues = {
    title: string;
    value: string;
    page: string;
    subpage: string;
    searchDonorCodTel: {
        donorcode: string;
        name: string;
        telephone: string;
        contact1: string;
        contact2: string;
        zipcode: string;
        typeresidence: string;
        nunresidence: string;
        street: string;
        district: string;
        city: string;
        residence: string;
        cnpj: string;
        building: string;
        block: string;
        livingapartmentroom: string;
        referencepoint: string;
    } | any;
};
export type AlertMessageState = {
    message?: string;
    Error: boolean;
    page?: string;
    clickDonation?: boolean;
    onClose?: () => void;
};
export type Inputs = {
    modelo?: string;
    chassi?: string;
    plate?: string;
    km?: number;
    donorcode?: string;
    dateofbirth?: Date;
    name?: string;
    cpf?: string;
    telephone?: string;
    contact1?: string;
    contact2?: string;
    email?: string;
    cnh?: number;
    zipcode?: string;
    typeresidence?: string;
    nunresidence?: string;
    street?: string;
    district?: string;
    city?: string;
    residence?: string;
    cnpj?: string;
    building?: string;
    block?: string;
    livingapartmentroom?: string;
    referencepoint?: string;
    password?: string;
    isblocked?: boolean;
};
export type InputsDonationsProps = {
    coddonation?: number;
};
export type CodTelResponse = {
    donorcode?: string;
    name?: string;
    telephone?: string;
    contact1?: string;
    contact2?: string;
    zipcode?: string;
    typeresidence?: string;
    nunresidence?: string;
    street?: string;
    district?: string;
    city?: string;
    residence?: string;
    cnpj?: string;
    building?: string;
    block?: string;
    livingapartmentroom?: string;
    referencepoint?: string;
};
export type CodResponse = {
    coddonation?: string;
};