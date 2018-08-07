import React,{Component} from "react"
import iScroll from "../../../../libs/iscroll.js"
export default class Community extends Component{
    render(){
        return (
            <div>
                 <div id="pullUp">
                                <span className="pullUpIcon"></span>
                                <span className="pullUpLabel">加载更多...</span>
                </div>
                        <ul  id="wrapper"  ref="icll">
                           <li>1</li>
                           <li>1</li>
                           <li>1</li>
                           <li>1</li>
                           <li>1</li>
                           <li>1</li>
                           <li>1</li>
                           <li>1</li>
                           <li>1</li>
                           <li>1</li>
                           <li>1</li>
                           <li>1</li>
                           <li>1</li>
                           <li>1</li>
                           <li>1</li>
                           <li>1</li>
                           <li>1</li>
                           <li>1</li>
                           <li>1</li>
                           <li>1</li>
                        </ul>
                <div id="pullDown">
                    <span className="pullDownIcon"></span>
                    <span className="pullDownLabel">下拉刷新...</span>
                </div>
                
            </div>
        )
    }

    componentDidUpdate(){
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
        function loaded(){
            pullDownEl = document.getElementById('pullDown');
            pullDownOffset = pullDownEl.offsetHeight;  
            pullUpEl = document.getElementById('pullUp');
            pullUpOffset = pullUpEl.offsetHeight; 

            myScroll =  new iScroll(that.refs.icll,{
                vScroll:true,      //false禁用垂直方向滚动条
                vScrollbar:true,   //隐藏滚动条
                hideScrollbar:true, //用户没有操作时候默认(true)隐藏滚动条 false不隐藏
                fadeScrollbar:true,
                bounce:true,   //是否有反弹效果
                lockDirection:true, //当某一方向滚动时，会锁住另一方向的滚动
                useTransition:true,  //是否使用css3过渡效果
                topOffset:-40,    //已经滚动的基准值
                
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
                    console.log(aaa);
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