// @ts-ignore
// @ts-ignore

import axios from "axios";


const service = axios.create({
    baseURL: "http://localhost:8088",
    timeout: 10000,
    // 请求头
    headers: {
        "Content-Type": "application/json;charset=UTF-8",
    },
});
// @ts-ignore
// 请求拦截
service.interceptors.request.use((config)=>{
    config.headers=config.headers||{}
    if(localStorage.getItem('token')){
        config.headers.token=localStorage.getItem('token')||""
    }
    return config
})

//响应拦截

service.interceptors.response.use((res)=> {
    const code: number = res.data.code
    if (code != 200) {
        return Promise.reject(res.data)
    }
    return res.data
}, (err) =>{
        console.log(err);
})
export default service;

