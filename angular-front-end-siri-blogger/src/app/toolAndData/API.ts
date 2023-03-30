const host = "http://localhost:5000"
const api = {
    saveAnImage: `${host}/api/account/loadImage/`,
    getAnImage: `${host}/api/image/getImage/`,
    createAnAccount: `${host}/api/account/createAccount/`,
    getAnAccountById: `${host}/api/account/getAccount/`,
    getAnAccountByEmailAndPassword: `${host}/api/account/getAccountByEmailAndPassword/`
}


export default api
