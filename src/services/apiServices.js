import axios from "axios"

const baseURL = 'https://61b212bac8d4640017aaf19c.mockapi.io/api/v1'

export default async function sendRegister(data) {
    try {
        let response = await axios.post(baseURL + '/register', data)
        return response.data
    }
    catch (e) {
        alert(e.message)
    }

}