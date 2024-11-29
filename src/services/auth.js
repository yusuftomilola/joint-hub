import { axiosInstance } from "../utils/axios";


export async function adminLogin(data) {
    try {
        const response = await axiosInstance.post('/admin/auth/login', data);
        return response.data;
    } catch (error) {
        console.error('Error during admin login:', error.response || error);
        throw error.response ? error.response.data : { message: 'Network error' };
    }
}
