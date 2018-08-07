import React,{Component} from "react"
import {connect} from "react-redux"
import { Carousel } from 'antd';
import {getshopping} from "../../actions"
import iScroll from "../../../../libs/iscroll.js"

@connect(
    (state)=>({...state})
)

export default class Shopping extends Component{
    componentWillMount(){
       this.props.dispatch(getshopping());
    }
    godetails=(idx)=>{
        console.log(idx);
        this.props.router.push("/details?id="+idx);
    }
    render(){
        console.log(this.props);
        var banner=[];
        const {shopping} = this.props;
        if(shopping){
            console.log(shopping);
        }
       
        var oli=[];
        shopping.map((item,index)=>{
             oli = item.derivativeList.map((i,idx)=>{
                    return(
                        <li key={idx} onClick={()=>this.godetails(i.id)}>
                            <img src={i.pictureUrl} />
                            <p>{i.goodsName}</p>
                            <p>￥{i.sellingPrice}</p>
                        </li>
                    )
                })
            return oli;
            })
       
        return (
            <div className="shopping">
             
                <div className="topbanner">

                <Carousel autoplay>
                    {
                        shopping.map((item,index)=>{
                         var banner = item.banner.map((i,idx)=>{
                                return(
                                    <img src={i.picUrl} alt={i.name} key={idx}/>
                                )
                            })
                        return banner;
                        })
                    }
                </Carousel>
                </div>
                <div className="olist">
                    <ul>
                    {
                        shopping.map((item,index)=>{
                         var oli = item.GoodsCategoriesList.map((i,idx)=>{
                                return(
                                    <li key={idx}>
                                        <p><span>Custom Made</span><br/><span>{i.name}</span></p>
                                        <img src={require("../../../../assets/images/pic"+(idx+1)+".jpg")} alt={i.name}/>
                                    </li>
                                )
                            })
                        return oli;
                        })
                    }
                    </ul>
                </div>

                <div className="artlife">
                   <div className="toplife">
                        <div>
                            <img src={require("../../../../assets/images/jian.jpg")}/>
                            <span>艺术衍生</span>
                        </div>
                       
                        <span>MORE<i className="iconfont icon-jiantouyou"></i></span>
                   </div>

                   <div className="shoppinglist" id="wrapper">
                   
                        <div id="pullUp">
                                <span className="pullUpIcon"></span>
                                <span className="pullUpLabel">加载更多...</span>
                            </div>
                        <ul    ref="icll">
                            {oli}
                        </ul>
                        <div id="pullDown">
                            <span className="pullDownIcon"></span>
                            <span className="pullDownLabel">下拉刷新...</span>
                        </div>
                   </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        console.log(iScroll);
        var that = this;
        var myScroll="";
        var myiscroll,
            pullDownEl, pullDownOffset,_maxScrollY,
            pullUpEl, pullUpOffset,refresh=0,loadmore=0;
    
        var url = "http://47.94.208.182:3000/movie"
        function init(){
            axios.get("http://47.94.208.182:3000/movie",{params:{

            }}).then(res=>{
                console.log(res);
                that.list = res.data;
                // ajax 请求success refresh
                myScroll.refresh();
            })
        }
        // 下拉刷新完毕请求ajax
        function pullDownAction(){
            // 刷新 
           
        }
        //  上拉加载更多 完毕后 请求ajax
        function pullUpAction(){
           
        }
        // loaded()
        function loaded(){
            pullDownEl = document.getElementById('pullDown');
            pullDownOffset = pullDownEl.offsetHeight;  
            pullUpEl = document.getElementById('pullUp');
            pullUpOffset = pullUpEl.offsetHeight; 
            var aa = document.getElementById("wrapper")
            console.log(aa);
            myScroll =  new iScroll.iScroll("wrapper",{
                vScroll:true,      //false禁用垂直方向滚动条
                vScrollbar:true,   //隐藏滚动条
                hideScrollbar:true, //用户没有操作时候默认(true)隐藏滚动条 false不隐藏
                fadeScrollbar:true,
                bounce:true,   //是否有反弹效果
                lockDirection:true, //当某一方向滚动时，会锁住另一方向的滚动
                useTransition:true,  //是否使用css3过渡效果
                topOffset:pullDownOffset,    //已经滚动的基准值
                
                //表示滚动条重新 刷新  每次改变滚动区域的dom结构后必须重新刷新你的iscroll
                onRefresh: ()=>{
                    console.log(this);
                    _maxScrollY = this.maxScrollY = this.maxScrollY + pullUpOffset;
                    
                    if (pullDownEl.className.match('loading')) {
                        pullDownEl.className = '';
                        pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新...';
                    } else if (pullUpEl.className.match('loading')) {
                        pullUpEl.className = '';
                        pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载更多...';
                    }
                },
                //表示滚动条开始滑动
                onScrollMove: ()=>{
                // this.y  滚动条滚动的值,滚动区域滚动大大小;
                // this.maxScrollY  滚动条滚动到底部可走的最大距离  负数
                // this.minScrollY  滚动条滚动到顶部可走的最大距离  负数
                // console.log(this.maxScrollY);
                    console.log("aaa");
                    if (this.y > 5 && !pullDownEl.className.match('flip')) {
                        pullDownEl.className = 'flip';
                        pullDownEl.querySelector('.pullDownLabel').innerHTML = '松开刷新...';  //松开刷新
                        this.minScrollY = 0;   //加载中可见
                        
                    } else if (this.y < 5 && pullDownEl.className.match('flip')) {
                        pullDownEl.className = '';
                        pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新...';
                        
                        this.minScrollY = -pullDownOffset;   //自动回到初始位置
                    } else if (this.y <= (_maxScrollY - pullUpOffset) && !pullUpEl.className.match('flip')) {
                        pullUpEl.className = 'flip';
                        pullUpEl.querySelector('.pullUpLabel').innerHTML = '松开加载...';
                        this.maxScrollY = this.maxScrollY - pullUpOffset;
                    } else if (this.y > (_maxScrollY - pullUpOffset) && pullUpEl.className.match('flip')) {
                        pullUpEl.className = '';
                        pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载更多...';
                        this.maxScrollY = this.maxScrollY + pullUpOffset;
                    }
                },
                //表示滚动条滑动结束时候
                onScrollEnd: ()=> {
                    console.log("aa")
                    if (pullDownEl.className.match('flip')) {
                        pullDownEl.className = 'loading';
                        pullDownEl.querySelector('.pullDownLabel').innerHTML = '加载中...';
                        pullDownAction();	// ajax调用
                    } else if (pullUpEl.className.match('flip')) {
                        pullUpEl.className = 'loading';
                        pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载更多...';
                        pullUpAction();	// ajax调用
                    }
                }
            });
           
        }
        document.addEventListener("touchstart",(event)=>{console.log(event),event.preventDefault()},!1);
        document.addEventListener("DOMContentLoaded",loaded,!1);// DOMContentLoaded 所有的dom 加载完毕
        console.log(myScroll);
    }
} 