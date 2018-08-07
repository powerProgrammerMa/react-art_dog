import React,{Component} from "react"
import {Link} from "react-router"
import { message, Button } from 'antd';
import axios from "axios";
axios.defaults.baseURL="http://localhost:7780"
export default class Rigester extends Component{

    register=()=>{
        var tel = this.refs.tel.value;
        var password = this.refs.password.value;
        var dbpassword = this.refs.dbpassword.value;
        console.log(tel);
        var ptel = /^1[3|4|5|8][0-9]\d{8}$/;
        if(!ptel.test(tel)){
                alert("手机号错误！");
                return;
        }
        if(dbpassword!=password){
            alert("两次密码输入不一致！");
            return;
        }
        if(password.length<6 && password.length<20){
            alert("密码长度不能小于6或者大于20！");
            return;
        }
        axios.post("/register",
            {
                username:tel,
                password,
            }
        ).then((res)=>{
            console.log(res);
            if(res.data==1){
                alert("注册成功");
                this.props.router.push("/login");
            }else{
                alert("用户已存在");
            }

        })   
    }
    render(){
        return (
            <div className="login">
                <div className="logintop">
                   <Link to="/login"> <i className="iconfont icon-jiantouyou"></i></Link>
                    <span>手机号注册</span>
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
                    <p>
                        <i className="iconfont icon-mima"></i>
                        <input type="password" ref="dbpassword" placeholder="确认密码"/>
                    </p>

                    <button onClick={this.register}>注册</button>
                    <Link to="/login"><p className="ss">稍后注册》》</p></Link>
                </div>
            </div>
        )
    }
}  