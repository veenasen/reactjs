import React from "react";
class ClassStateComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={content:"State Class Component"}
    }
    render(){
        return(
            <h1>This is Example of {this.state.content}</h1>
        )  
    }
}
export default ClassStateComponent