// @ts-ignore
// @ts-ignore

import axios from "axios";
import {ElMessage} from "element-plus";
import {useRouter} from "vue-router";

const router=useRouter()
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
// SUCCESS(200,"操作成功"),
//     // 登录
//
//     NEED_LOGIN(401,"需要登录后操作"),
//     NO_OPERATOR_AUTH(403,"无权限操作"),
//     SYSTEM_ERROR(500,"出现错误"),
//     USERNAME_EXIST(501,"用户名已存在"),
//     PHONENUMBER_EXIST(502,"手机号已存在"), EMAIL_EXIST(503, "邮箱已存在"),
//     REQUIRE_USERNAME(504, "必需填写用户名"),
//     LOGIN_ERROR(505,"用户名或密码错误"), FILE_TYPE_ERROR(506,"上传文件类型错误" ),
//     USERNAME_NOT_NULL(507, "用户名不能为空"), PASSWORD_NOT_NULL(508, "密码不能为空"),
//     EMAIL_NOT_NULL(509,"邮箱不能为空" ), NICKNAME_NOT_NULL(510,"昵称不能为空" ),
//     NICKNAME_EXIST(511, "昵称已存在");
service.interceptors.response.use((res)=> {
    const code: number = res.data.code
    if (code != 200) {
        ElMessage.error("操作失败")
        if(code== 401){
            ElMessage.warning("登录失效了捏")
            localStorage.removeItem('userInfo')
            localStorage.removeItem("token")
        }
        else if(code==403){
            ElMessage.warning("没有权限操作哦")
        }
        else if(code==500){
            ElMessage.error("出错啦┭┮﹏┭┮")
        }
        else if(code==501){
            ElMessage.warning("有这个用户名了")
        }
        else if(code==502){
            ElMessage.warning("手机号存在了")
        }
        else if(code==503){
            ElMessage.warning("邮箱已经存在了")
        }
        else if(code==504){
            ElMessage.warning("必须填写用户名！")
        }
        else if(code==505){
            ElMessage.warning("用户名或密码错误┭┮﹏┭┮")
        }
        else if(code==506){
            ElMessage.warning("上传文件类型错误")
        }
        else if(code==507){
            ElMessage.warning("用户名不能为空")
        }
        else if(code==508){
            ElMessage.warning("密码不能为空")
        }
        else if(code==509){
            ElMessage.warning("邮箱不能为空")
        }
        else if(code==510){
            ElMessage.warning("昵称不能为空")
        }
        else if(code==511){
            ElMessage.warning("昵称已经存在啦")
        }

        return Promise.reject(res.data)

    }

    return res.data
}, (err) =>{
        console.log(err);
})
export default service;


