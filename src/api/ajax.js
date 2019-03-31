// 用于发送ajax请求的函数模块
import axios from 'axios'

export default function ajax (url,data={},method='GET') {
  return new Promise((resolve, reject)=>{
    let result
    if(method==='GET'){
      result = axios.get(url,{params:data})
    }else {
      result = axios.post(url,data)
    }
    result
      .then((response)=>{
        resolve(response.data)
      })
      .catch(err=>{console.log('请求失败',err)})
  })
}
