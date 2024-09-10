export type FormSearch = {
    search: string;
};
export type InputSearch = {
    search?: string;
};
export type TitleValue = {
    title: string;
    value: string;
};
export type FormFullValues = {
    title: string;
    value: string;
    page: string;
    subpage: string;
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
export type InputsDonations = {
    coddonation?: number;
}