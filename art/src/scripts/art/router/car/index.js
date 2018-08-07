import React,{Component} from "react"
import {connect} from "react-redux"
import { Carousel } from 'antd';
import {getcar,setnum,del,inc,all,aa} from "../../actions"
import iScroll from "../../../../libs/iscroll.js"
import {Link} from "react-router"
import axios from "axios";
@connect(
    (state)=>({...state})
)

export default class Details extends Component{
    componentWillMount(){
        console.log(localStorage.username);
       this.props.dispatch(getcar(localStorage.username));
    }
    goback=()=>{
        this.props.router.go(-1);
    }
    cli=(e,index)=>{
        console.log(e.target.checked);

        this.props.dispatch(setnum(index));
    }
    dele=(index,num)=>{
        console.log(index+"------"+num);
        if(num==1){
            return;
        }else{
            num--;
            this.props.dispatch(del(num));
        }
    }
    increase=(index,num)=>{
        console.log(index+"------"+num);
        if(num==10){
            return;
        }else{
            num++;
            this.props.dispatch(inc(num));
        }
    }
    bb=()=>{
        this.props.dispatch(aa());
    }
    allcli=(e)=>{
        console.log(e.target.checked);
       
        const {car} = this.props;
        var len = car.length;



        if(e.target.checked){
            
            for(var i=0;i<len;i++){
                car[i].check=true;
            }
            
        }else{
            for(var j=0;j<len;j++){
                car[j].check=false;
                
            }
            
        }
         
        this.props.dispatch(all(car,e.target.checked));
    }
    handle= ()=>{

    }
    getcontent=()=>{
        const {car} =this.props;
        console.log(car);
       
        if(car.length){
            
            var list = car.map((item,index)=>{
                console.log(car[0].check);
               return( <div className="details" key={index}>
                    <div className="inn">
                    <input type="checkbox" checked={item.check} onChange={(e)=>this.cli(e,index)} />
                    <img src={item.img} />
                    </div>
                    <div className="num">
                        <p>{item.name}</p>
                        <div className="num-b">
                            <input type="button" onClick={()=>this.dele(index,item.num)} value="-"/>
                            <input type="text" value={item.num} onChange={this.handle}/>
                            <input type="button" value="+"  onClick={()=>this.increase(index,item.num)}/>
                            <span>￥{item.price}</span>
                        </div>
                    </div>
                </div>
               )
            })
            return list
        }else{
            return(
                <div className="none">空空如也！快去选购吧！</div>
            )
        }
    }
   
    render(){
        const {car,count,q,checked} =this.props;
        
        console.log(car);

        return (
            <div className="car">
                <div className="top">
                    <i onClick={this.goback} className="iconfont icon-jiantouyou"></i>
                    <span>购物车</span>
                </div>
                <div className="detail">
                    {
                        this.getcontent()
                    }
                </div>
                <div className="bottom">
                    
                    <p className="check" ><input  type="checkbox" 
                     checked={checked} onChange={(e)=>this.allcli(e)} /><span>全选</span></p>
                   <div className="go">
                    <p>￥{q[0]}</p>
                    <div onClick={this.bb}>下单</div>
                    </div>
                </div>
            </div>
        )
    }

       
} 