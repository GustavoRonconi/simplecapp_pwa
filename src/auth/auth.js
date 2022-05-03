const TOKEN = 'token'
const REFRESH_TOKEN = 'refresh_token'



const isLogged = () => {
    sessionStorage.getItem(TOKEN)
    localStorage.getItem(REFRESH_TOKEN)
}

const login = tokenValue => {
    sessionStorage.setItem(TOKEN, tokenValue)
    localStorage.setItem(REFRESH_TOKEN, tokenValue)

}

const logout = () => {
    sessionStorage.removeItem(TOKEN)
    localStorage.removeItem(REFRESH_TOKEN)

}

export {
    isLogged,
    login,
    logout
}

