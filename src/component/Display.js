import React, {Component} from 'react';
import "./Display.css";

class Display extends Component {
    render(){
        return(
            <div style={{color:"white"}}><h1>Simple Calculator</h1>
            <div className="Display">
               
                {this.props.data}
            </div>
            </div>
        );
    }
}

export default Display;