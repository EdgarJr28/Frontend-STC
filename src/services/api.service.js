import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const token = import.meta.env.VITE_API_TOKEN;

const apiService = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

// Función para obtener artículos de la API
export const getArticles = async () => {
    try {
        const headers = token ? { Authorization: `Bearer ${token}` } : {};

        const response = await apiService.get('/articles', { headers });
        return response.data;
    } catch (error) {
        throw error;
    }
};
// Función para guardar artículos en la API
export const newArticles = async (data) => {
    try {
        console.log(data);
        const headers = token ? { Authorization: `Bearer ${token}` } : {};

        const response = await apiService.post('/articles/save', data, { headers });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error while saving new article:', error);
        throw error;
    }
};


export default apiService;