import React, { Component } from 'react'
import styles from './homepage.module.css'

import { AuthContext } from './AuthContextProvider'

export default class HomePage extends Component{

    render(){
        const {isAuth,toggleAuth} = this.context
        return(
            <div>
                <div className={styles.nav}>
                    <h3>Home Page</h3>
                    
                    <button style={!isAuth ?{display:"none"}:{display:"block"}}onClick={toggleAuth}>LOGOUT</button>
                
                </div>
                
            </div>
        )
    }
}

HomePage.contextType = AuthContext

