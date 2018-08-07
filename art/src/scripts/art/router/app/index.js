import React,{Component} from "react"

import Foot from "../../components/foot"
import Head from "../../components/head"



export default class app extends Component{

    render(){
        return (
            <div className="oapp">
                <Head/>
                <div className="main">
                {this.props.children}
                </div>
                <Foot/>
            </div>
        )
    }

} 