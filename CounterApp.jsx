import React from "react";
class CounterApp extends React.Component{
    constructor(props){
        super(props)
        this.state={count:0}
    }
    increment(){
        this.setState({count:this.state.count+1})
    }
    decrement(){
        this.setState({count:this.state.count-1})
    }
    reset(){
        this.setState({count:0})
    }
    render(){
        return(
            <>
            <h1>Count Value - {this.state.count}</h1>
            <p><button onClick={()=>this.increment()}>Increment</button>
            <button onClick={()=>this.decrement()}>Decrement</button>
            <button onClick={()=>this.reset()}>Reset</button></p>
            </>
        )
    }
}
export default CounterApp