import axios from "axios"
export const baseUrl=`http://localhost:8000/api/v1/`
const token = JSON.parse(localStorage.getItem('token'));

const headers = {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
};

export const post = async (url, data) => {
    try {
        const res = await axios.post(baseUrl + url, data, {headers})
        return { statusCode: res.status, data: res.data };
    }
    catch (e) {
        console.log(e)
        return {
            statusCode: e?.response?.data?.error?.statusCode || 404,
            message: (e.response.data === undefined) ? e?.message : e?.response?.data?.error?.message
        }
    }
}

export const patch = async (url, data) => {
    try {
        const res = await axios.patch(baseUrl + url, data, {headers})
        return { statusCode: res.status, data: res.data };
    }
    catch (e) {
        console.log(e)
        return {
            statusCode: e?.response?.data?.error?.statusCode || 404,
            message: (e.response.data === undefined) ? e?.message : e?.response?.data?.error?.message
        }
    }
}

export const get = async (url) => {
    try {
        const res = await axios.get(baseUrl + url, {headers});
        return { statusCode: res.status, data: res.data }
    }
    catch (err) {
        console.log(err)
    }
}

export const deletethis = async (url) => {
    try {
        const res = await axios.delete(baseUrl + url, {headers});
        return { statusCode: res.status, data: res.data }
    }
    catch (err) {
        console.log(err)
    }
}