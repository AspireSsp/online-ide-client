import axios from "axios"
// export const baseUrl=`http://localhost:8000/api/v1/`
export const baseUrl=`https://code-editer.onrender.com/api/v1/`
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
    catch (error) {
        // console.log(error)
        throw error
    }
}
export const postUrlEncoded = async (url, data) => {
    try {
        const res = await axios.post(baseUrl + url, data, 
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        )
        return { statusCode: res.status, data: res.data };
    }
    catch (error) {
        // console.log(error)
        throw error
    }
}

export const patch = async (url, data) => {
    try {
        const res = await axios.patch(baseUrl + url, data, {headers})
        return { statusCode: res.status, data: res.data };
    }
    catch (error) {
        // console.log(error)
        throw error;
    }
}

export const get = async (url) => {
    try {
        const res = await axios.get(baseUrl + url, {headers});
        return { statusCode: res.status, data: res.data }
    }
    catch (error) {
        // console.log(error)
        throw error;
    }
}

export const deletethis = async (url) => {
    try {
        const res = await axios.delete(baseUrl + url, {headers});
        return { statusCode: res.status, data: res.data }
    }
    catch (error) {
        // console.log(error)
        throw(error)
    }
}