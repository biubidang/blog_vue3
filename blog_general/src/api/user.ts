import service from "../utils/request"
import {LoginData, RegisterData, UserInfoData} from "@/types";


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
export function uploadimg(data:FormData) {
    return service({
        url: "/upload",
        method: "post",
        headers: {"content-type": false,
        },

        data,
    })
}
export function getUserInfo(){
    return service({
        url:"/user/userinfo",
        method:"get",
    })
}
export function updateUserInfo(data:UserInfoData){
    return service({
        url:"/user/userinfo",
        method:"put",
        data
    })
}

