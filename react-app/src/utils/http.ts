// axios的封装处理

// 1、根域名配置
// 2、超市请求
// 3、请求拦截器 / 响应拦截器
import axios from "axios";


const http = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 50000,
});


// 请求拦截器（在请求发送执之前)
http.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => Promise.reject(err)
);

// 响应拦截器（在响应返回到客户端之前)
http.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    // if (err.response.status === 401) {
    //   removeToken();
    //   router.navigate("/login");
    //   window.location.reload();
    // }
    return Promise.reject(err);
  }
);

export { http };
