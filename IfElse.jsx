import React from "react";

class IfElse extends React.Component{
    constructor(props){
        super(props)
        this.state={islogging : false}
    }
    render(){
        if(this.state.islogging){return<h1>Welcome Veenasen</h1>}
        else{return<h1>Welcome Guest</h1>}
    }
}
export default IfElse