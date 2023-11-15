/* eslint-disable react/prop-types */
/* eslint-disable react/require-render-return */
import React from "react"

class Clock extends React.Component {
    render(){
        <h1>
            <span>Hello {new Date().toLocaleTimeString(this.props.locale)}</span>
        </h1>
    }
}

export default Clock;