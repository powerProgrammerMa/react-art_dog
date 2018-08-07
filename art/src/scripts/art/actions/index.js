

import store from "../store"
import axios from "axios"
// thunk   注入 dispatch
export function gethometopbanner(){
    return axios.get("/hometopbanner")
        .then(res=>{
            console.log(res.data)
           return  store.dispatch({type:"gethometopbanner",preload:res.data})
        })
        
}

export function gettwo(){
    return axios.get("/two")
        .then(res=>{
            console.log(res.data)
           return  store.dispatch({type:"gettwo",preload:res.data})
        })
        
}

export function getone(){
    return axios.get("/one")
        .then(res=>{
            console.log(res.data)
           return  store.dispatch({type:"getone",preload:res.data})
        })
        
}
export function getthree(){
    return axios.get("/three")
        .then(res=>{
            console.log(res.data)
           return  store.dispatch({type:"getthree",preload:res.data})
        })
        
}


//获取shopping数据
export function getshopping(){
    return axios.get("/shopping")
        .then(res=>{
            console.log(res.data)
           return  store.dispatch({type:"getshopping",preload:res.data})
        })
        
}




//获取详情页数据
export function getdetails(id){
    return axios.get("/getdetails",{
        params:{
            id:id
        }
    })
        .then(res=>{
            console.log(res.data)
           return  store.dispatch({type:"getdetails",preload:res.data})
        })
        
}


//获取购物车数据
export function getcar(username){
    return axios.get("/getcar",{
        params:{
            username
        }
    })
        .then(res=>{
            console.log(res.data)
           return  {type:"getcar",preload:res.data}
        })
        
}

//单个选中数据
export function setnum(index){
    return store.dispatch({type:"setnum",preload:index})
}

//点击+
export function inc(index,num){
    var obj = {
        index,
        num
    }
    return {type:"inc",preload:obj}
}

//点击+
export function del(index,num){
    var obj = {
        index,
        num
    }
    return {type:"del",preload:obj}
}


//点击全选
export function all(car,checked){
    console.log(4);
    return {type:"all",preload:{car,checked}}
}


//点击测试
export function aa(){
    return {type:"aa"}
}

