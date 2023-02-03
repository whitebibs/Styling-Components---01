import React from "react";

export class Welcome extends React.Component{
    render(){
        return(
            <div> 
                <h4 className="welcome">Welcome, {this.props.name}</h4>
            </div>
        )
    }
}