//ajax请求函数模块
// axios+promise：1.实现统一处理异常
//        2.异步获取的不是response,而是response.data
import axios from 'axios'
export default function ajax(url,data={},method='GET') {
  return new Promise((resolve,reject)=>{
    //执行异步ajax
    let promise
    if(method==='GET'){
      promise=axios.get(url,{
        params:data
      })
    }else{
      promise=axios.post(url,data)
    }
    promise.then(response=>{
      resolve(response.data)
    }).catch(error=>{
      alert('请求出错'+error.msg)
    })
  })
}
