// De 10-203
import React, { Component } from "react";
import { Link } from 'react-router-dom'

class Logo extends Component {

    render() {

        const size = {

            height: this.props.size ? this.props.size : 105,
            width: this.props.size ? this.props.size : 105,

        }


        return(

            <div className="logo-main">
                
                <Link to="/" />

                <img
                    style={size}
                    alt="daily smarty ui logo big"
                    src="/assets/ds_circle_logo.png"
                />

            </div>

        )
    }
}

export default Logo;