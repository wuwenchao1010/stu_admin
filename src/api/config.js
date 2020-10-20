import axios from "axios";

axios.defaults.baseURL =  "http://www.chst.vip"

axios.defaults.withCredentials = true; //允许请求携带认证

//创建请求拦截器,可以给每个请求都携带上想要传递的内容

// axios.interceptors.request.use(config => {
//     if (config.url == "/users/login") {
//         return config
//     } else {
//         let token = localStorage.getItem('wf-token')
//         config.headers['authorization'] = token;
//         //放行
//         return config
//     }

// })
axios.create({
    timeout: 4000
})

export default axios