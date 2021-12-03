const TOKEN ='token'

const isLogged = () => sessionStorage.getItem(TOKEN)

const login = tokenValue => {
    sessionStorage.setItem(TOKEN, tokenValue)
}

const logout = () =>
sessionStorage.removeItem(TOKEN)

export {
    isLogged,
    login,
    logout
}