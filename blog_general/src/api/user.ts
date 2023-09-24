import service from "../utils/request"
import {LoginData} from "@/types";


export  function  login(data:LoginData){
    return service({
         url:"/login",
        method:"post",
        data
    })


}
