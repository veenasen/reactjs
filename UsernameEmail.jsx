import React from "react";
export default class UsernameEmail extends React.Component{
    state={
        userName:"",
        email:"",
    }
    render(){
        return(
            <div>
                <input type="text" name="userName" placeholder="Enter your name" onChange={(e)=>this.setState({userName: e.target.value})}/>
                <input type="text" name="email" placeholder="Enter your mail id" onChange={(e)=>this.setState({email: e.target.value})}/>
                <p>{this.state.userName}</p>
                <p>{this.state.email}</p>
            </div>
        )
    }
}