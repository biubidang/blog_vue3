// @ts-ignore
// @ts-ignore

import axios from "axios";
import {ElMessage} from "element-plus";


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
    const isToken = (config.headers || {}).isToken === false
    config.headers=config.headers||{}
    if(localStorage.getItem('token')&& !isToken){
        config.headers.token=localStorage.getItem('token')||""
    }
    return config
})

//响应拦截

service.interceptors.response.use((res)=> {
    const code: number = res.data.code
    if (code != 200) {
        ElMessage.error("操作失败")
        return Promise.reject(res.data)

    }
    return res.data
}, (err) =>{
        console.log(err);
})
export default service;


