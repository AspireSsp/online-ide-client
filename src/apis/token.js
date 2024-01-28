
export const getToken = ()=>{
    const token = JSON.parse(localStorage.getItem('token'));
    return token
}
