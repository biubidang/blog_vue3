import service from "@/utils/request";

export function categoryList(){
    return service({
        url:"/category/categoryList",
        method:"get",
        headers:{
            isToken:false
        }
    })

}
