import {ArticleListData} from "@/types";
import service from "@/utils/request";

export function articleList(query:ArticleListData){
    return service({
        url:"/article/articleList",
        method:"get",
        headers:{
            isToken:false
        },
        params:query
    })
}
export function hotArticleList(){
    return service({
        url:"/article/hotArticleList",
        method:"get",
        headers:{
            isToken:false
        },
    })
}
//todo
export function articleDetail(articleId:number){
    return service({
        url:"/article/"+articleId,
        method:"get",
        headers:{
            isToken:false
        },
    })
}
//todo
export function updateViewCounts(articleId:number){
    return service({
        url:"/article/updateViewCount/"+articleId,
        method:"get",
        headers:{
            isToken:false
        },
    })
}
