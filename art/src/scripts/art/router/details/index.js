import React,{Component} from "react"
import {connect} from "react-redux"
import { Carousel } from 'antd';
import {getdetails} from "../../actions"
import iScroll from "../../../../libs/iscroll.js"
import {Link} from "react-router"
import axios from "axios";
@connect(
    (state)=>({...state})
)

export default class Details extends Component{
    componentWillMount(){
        var url = this.props.location.query.id;
        console.log(url);
       this.props.dispatch(getdetails(url));
    }
    goback=()=>{
        this.props.router.go(-1);
    }
    jioncar=()=>{
        console.log(123);
        const {details} = this.props;
        if(!localStorage.username){
            alert("你还没有登录哦！");
            this.props.router.push("/login");
            return;
        }
        axios.post("/car",{
            username:localStorage.username,
            id:details[0].id,
            img:details[0].pictureUrl,     
            price:details[0].sellingPrice, 
            name:details[0].goodsName
        }).then((res)=>{
            console.log(res);
            alert("加入购物车成功！");
        })
    }
    gocar=()=>{
        this.props.router.push("/car");
    }
    render(){
        const {details} =this.props;
        console.log(details);

        var banner = details.map((item,index)=>{
           var list =item.pictureList.map((item,index)=>{
                return(
                   <img src={item.picPath} key={index} title={item.picName}/> 
                )
            })
            return list;
            
        })

        return (
            <div className="details">
               <div className="topbanner">
                    <Carousel>
                        {banner}
                    </Carousel>
                    <i className="iconfont icon-jiantouyou" onClick={this.goback}></i>
               </div>
                <div className="picprice">
                    {
                        details.map((item,index)=>{
                           
                             return (
                                 <div key={index}>
                                    <p>{item.goodsName}</p>
                                    <p>￥{item.sellingPrice}</p>
                                </div>
                             )
                             
                         })
                    }
                </div>
           
                <div className="detail" >
                       <h1>商品描述</h1>
                       {
                           details.map((item,index)=>{
                                return(
                                    <div key={index} className="bottom" dangerouslySetInnerHTML={{__html:item.goodsDesc}}>

                                    </div>
                                )
                           })
                       }
                </div>

                <div className="join">
                       <i className="iconfont icon-gouwuche" onClick={this.gocar}></i>
                       <div className="all">
                            <div className="joincar" onClick={this.jioncar}>加入购物车</div>
                            <div className="sole">立即购买</div>
                        </div>
                       
                </div>
            </div>
        )
    }

       
} 