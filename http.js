import axios from 'axios'

let instance = axios.create({
  timeout:3000
})

//添加请求拦截器
axios.interceptors.request.use((config)=>{
  // console.log(config)
  if(process.env.NODE_ENV=='production'){
    //
  }else{
    config.baseURL = 'http://localhost:8080'
  }
  return config
},(err)=>{
  return Promise.reject(err)
})

//添加响应拦截器
axios.interceptors.response.use((response)=>{
  if(response.status==200){
    return response.data
  }else{
    return Promise.reject(response)
  }

},(err)=>{
  return Promise.reject(err)
})
let httpPlugin = {
  install(Vue){
    Object.defineProperty(Vue.prototype,'$http',{
      value:instance
    })
  }
}
export { instance }
export default httpPlugin;
