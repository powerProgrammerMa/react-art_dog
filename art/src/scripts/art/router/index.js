import React, {Component} from "react"
import {render} from "react-dom"
import {browserHistory,Router,Route, IndexRedirect} from "react-router"


import App from "./app"
import Home from "./home"
import Community from "./community"
import Shopping  from "./shopping"
import Mine from "./mine"
import Lgion from "./login";
import Register from "./register";
import Details from "./details";
import Car from "./car";

export default class Routes extends Component{
    render(){
        return(
                <Router history={browserHistory}>
                    <Route path="/" component={App}>
                        <IndexRedirect to="/home" />
                        <Route path="home" component={Home}/>
                        <Route path="community" component={Community}/>
                        <Route path="shopping" component={Shopping}/>
                        <Route path="mine" component={Mine}/>
                    </Route> 
                    <Route path="/login" component={Lgion}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/details" component={Details}/>
                    <Route path="/car" component={Car}/>
                </Router>
        )
    }
}
