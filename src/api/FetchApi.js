import axios from "axios";


const apiUrl = 'https://like-deena-team1revounext-24ba131b.koyeb.app/api/products';


export const getProduct = async () => {
    try {
        const response = await axios.get(apiUrl);
        console.log(response);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const getProductById = async (id) => {
    try {
        const response = await axios.get(`${apiUrl}/${id}`);
        console.log(response);
        return response.data;
    } catch(error) {
        console.log(error);
        return null;
    }
};