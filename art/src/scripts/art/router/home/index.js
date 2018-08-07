import React,{Component} from "react"
import {connect} from "react-redux"
import { Carousel } from 'antd';
import {gethometopbanner,getone,gettwo,getthree} from "../../actions"

@connect(
    (state)=>({...state})
)

export default class Home extends Component{
    componentWillMount(){
        this.props.dispatch(gethometopbanner());
       
        this.props.dispatch(getone());
        // this.props.dispatch(gettwo());
        // this.props.dispatch(getthree());
    }
    render(){
        console.log(this.props);
        const {hometopbanner,one,two,three} = this.props;
        console.log(two);
        var list = hometopbanner.map((item,index)=>{
            return(
                <img src={item.topicPic} key={index}/>
            )
        })
        var olist1 = one.map((item,index)=>{
            
            return <img src={item.worksPic} key={index}/>
            
        }) 
        var olist2 = two.map((item,index)=>{
            
            return <img src={item.worksPic} key={index}/>
            
        }) 
        var olist3 = three.map((item,index)=>{
            
            return <img src={item.worksPic} key={index}/>
            
        })
        return (
            <div className="home">
                <div className="topbanner">

                <Carousel autoplay>
                    {list}
                </Carousel>
                </div>
                <div className="homenav">
                   <ul>
                       <li> <i className="iconfont icon-zuopin"></i><span>作品</span></li>
                       <li> <i className="iconfont icon-read"></i><span>阅读</span></li>
                       <li> <i className="iconfont icon-yishujia"></i><span>艺术家</span></li>
                       <li> <i className="iconfont icon-dingzhi"></i><span>定制</span></li>
                    </ul>
                </div>

                <div className="tuijian">
                    <div className="top">
                        <span>展览推荐</span><span>MORE<i className="iconfont icon-jiantouyou"></i></span>
                    </div>
                   

                   
                    <div className="tuijianimg">
                    <Carousel>
                        {olist1}
                    </Carousel>
                        <p>"途中喜迎"郑雨晴作品展</p>
                        <p>敷衍社|北京</p>
                        <p>2017.11.18-12.14</p>
                    </div>
{/* 
                    <div className="tuijianimg">
                    <Carousel>
                        {olist2}
                    </Carousel>
                        <p>"途中喜迎"郑雨晴作品展</p>
                        <p>敷衍社|北京</p>
                        <p>2017.11.18-12.14</p>
                    </div>


                    <div className="tuijianimg">
                    <Carousel>
                        {olist3}
                    </Carousel>
                        <p>"途中喜迎"郑雨晴作品展</p>
                        <p>敷衍社|北京</p>
                        <p>2017.11.18-12.14</p>
                    </div> */}
                    
                </div>
            </div>
        )
    }
} 