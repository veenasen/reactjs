import React from "react";
class SetStateComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={content:"Welcome All"}
    }
    changeContent(){
        this.setState({content:"Thank You"})
    }
    render(){
        return(
            <>
            <h1>{this.state.content}</h1>
            <button onClick={()=>this.changeContent()}>Click</button>
            </>
        )
    }
}
export default SetStateComponent