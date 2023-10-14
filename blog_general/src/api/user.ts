import service from "../utils/request"
import {LoginData, RegisterData} from "@/types";


export  function  login(data:LoginData){
    return service({
         url:"/login",
        method:"post",
        headers:{
            isToken:false
        },
        data
    })
}
//todo
export function register(data:RegisterData){
    return service({
        url:"user/register",
        method:"post",
        headers:{
            isToken:false
        },
        data
    })
}

export function logout(){
    return service({
        url:"/logout",
        method:"post",
    })
}
//todo
export function uploadimg(){
    return service({
        url:"upload",
        method:"post",
    })
}
//todo
export function getUserInfo(){
    return service({
        url:"/user/userinfo",
        method:"get",
    })
}
//todo
export function updateUserInfo(){
    return service({
        url:"/user/userinfo",
        method:"put",
    })
}

