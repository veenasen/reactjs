import React from "react";
class PropsClassComponent extends React.Component{
    render()
    {
        return(
            <>
            <h1>Hello {this.props.name} for Props Class Component Example</h1>
            </>
        )
    }
}
export default PropsClassComponent