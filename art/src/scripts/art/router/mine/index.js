import React,{Component} from "react"
import {connect} from "react-redux"
import {Link} from "react-router";
@connect(
    (state)=>({...state})
)
export default class Mine extends Component{

    render(){
        const {username} = this.props;
        return (
            <div className="my">
                <div className="mytop">
                    <Link to="/login"><img src={require("../../../../assets/images/login.jpg")}/></Link>
                  
                    <span>{username}</span>
                </div>
                <div className="mybottom">
                    <ul>
                        <li>
                            <p><i className="iconfont icon-wodedingdan"></i><span>我的订单</span></p><i className="iconfont icon-jiantouyou"></i>
                        </li>
                        <li>
                        <p><i className="iconfont icon-wodeshouhuodizhi"></i><span>我的收货地址</span></p><i className="iconfont icon-jiantouyou"></i>
                        </li>
                        <li>
                        <p><i className="iconfont icon-wodeshoucang"></i><span>我的收藏</span></p><i className="iconfont icon-jiantouyou"></i>
                        </li>
                        <li>
                        <p><i className="iconfont icon-shezhi"></i><span>设置</span></p><i className="iconfont icon-jiantouyou"></i>
                        </li>
                       
                    </ul>
                </div>
            </div>
        )
    }
}  