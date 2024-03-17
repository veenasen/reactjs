import React from "react";
export default class ReactClass extends React.Component{
    state={
        value:""
    }
    render(){
        return(
            <div>
                <input type="text" onChange={(e)=>this.setState({value: e.target.value})}/>
                <p>{this.state.value}</p>
            </div>
        )
    }
}