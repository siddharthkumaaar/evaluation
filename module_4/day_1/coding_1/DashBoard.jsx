import React, { Component } from 'react'

// import { LoginContext } from './LoginForm'

class DashBoard extends Component{
    
    render(){

        return(
            <div style={{fontWeight:"bolder", margin:20, padding:20}}>
                <div >Email:{this.props.email},  Token:{this.props.token}</div>
            </div>
           
        )
    }
}

export default DashBoard