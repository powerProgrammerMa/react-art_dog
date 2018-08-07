import React,{Component} from "react"
import {Link} from "react-router"
import {connect} from "react-redux"
@connect(
    (state)=>({...state})
)

export default class Foot extends Component{
    static defaultProps={
       
    }

    render(){
        const {footList} = this.props
        return(
            <div className="foot">
                {
                    footList.map((item,i)=>{
                        return(
                        <Link key={i} to={item.path} activeClassName="active">
                            <i className={item.icon}></i>
                            <span>{item.txt}</span>
                        </Link>
                        )
                    })
                }
            </div>
        )
    }
}