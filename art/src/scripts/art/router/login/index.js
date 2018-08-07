import React,{Component} from "react"
import {Link} from "react-router"
import axios from "axios";
export default class Lgion extends Component{
    login=()=>{
        var tel = this.refs.tel.value;
        var password = this.refs.password.value;
     
        console.log(tel);
        var ptel = /^1[3|4|5|8][0-9]\d{8}$/;
        if(!ptel.test(tel)){
                alert("手机号错误！");
                return;
        }
        if(password.length<6 && password.length<20){
            alert("密码长度不能小于6或者大于20！");
            return;
        }
        axios.post("/login",
            {
                username:tel,
                password,
            }
        ).then((res)=>{
            console.log(res);
            if(res.data==1){
                alert("登录成功");
                localStorage.username =  tel;
                this.props.router.push("/home");
            }else{
                alert("登陆失败");
            }

        })   
    }
    render(){
        return (
            <div className="login">
                <div className="logintop">
                   <Link to="/mine"> <i className="iconfont icon-jiantouyou"></i></Link>
                    <span>手机号登录</span>
                </div>

                <div className="loginbottom">
                    <p>
                        <i className="iconfont icon-wode"></i>
                        <input type="text" ref="tel" placeholder="手机号"/>
                    </p>
                    <p>
                        <i className="iconfont icon-mima"></i>
                        <input type="password" ref="password" placeholder="密码"/>
                    </p>

                    <button onClick={this.login}>登录</button>
                    <Link to="/register"><p className="ss">立即注册》》</p></Link>
                </div>
            </div>
        )
    }
}  