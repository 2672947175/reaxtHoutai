import axios from 'axios';

// 设置默认访问路径
axios.defaults.baseURL = "http://127.0.0.1:7001"

// 请求拦截 响应拦截 Interceptors 拦截器
axios.interceptors.response.use((res) => {
    return res.data
}, (err) => {
    Promise.reject(err)
})
export let getpage = () => {
    // 使用 axios
    return axios.get(`/bg`);
}
// export default {
//     getpage
// }