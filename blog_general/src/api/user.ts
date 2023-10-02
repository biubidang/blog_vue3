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
export function uploadimg(){
    return service({
        url:"upload",
        method:"post",
    })
}
export function getUserInfo(){
    return service({
        url:"/user/userinfo",
        method:"get",
    })
}
export function updateUserInfo(){
    return service({
        url:"/user/userinfo",
        method:"put",
    })
}

