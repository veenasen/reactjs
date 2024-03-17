import React from "react";

class TernaryOperator extends React.Component{
    constructor(props){
        super(props)
        this.state={islogging : false}
    }
    render(){
        return(this.state.islogging ? (<div>Welcome Veena</div>) : (<div>Welcome Guest</div>))
    }
}
export default TernaryOperator