import api from "./axiosConfig";

export default async function sendRegister(data) {
    try {
        let response = await api.post('/register', data)
        return response.data
    }
    catch (e) {
        alert(e.message)
    }
    
}