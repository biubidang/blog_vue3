export  interface LoginData{
    username:string,
    password:string
}
export interface RegisterData{
    username:string,
    password:string,
    e_mail:string,
    nickname:string
}
export  interface ArticleListData{
    pageNum:number,
    pageSize:number,
    categoryId:number,

}

