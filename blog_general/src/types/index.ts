export  interface LoginData{
    username:string,
    password:string
}
export interface RegisterData{
    username:string,
    nickname:string
    password:string,
    e_mail:string,

}
export  interface ArticleListData{
    pageNum:number,
    pageSize:number,
    categoryId:number,

}
export  interface UserInfoData{
    id:number,
    nickName:string,
    e_mail:string,
    avatar:string,
}

