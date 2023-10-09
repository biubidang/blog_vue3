import service from "@/utils/request";

export function allLink(){
    return service({
        url:"/friendlink/allLink",
        method:"get",
        headers:{
            isToken:false
        }
    })
}
