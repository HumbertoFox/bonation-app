export const viaCepApi = async (zipcode: string) => {
    try {
        const BASE_URL = `https://viacep.com.br/ws/${zipcode}/json/`
        const response = await fetch(BASE_URL);
        return await response.json();
    } catch (Error) {
        console.error(Error);
    };
};