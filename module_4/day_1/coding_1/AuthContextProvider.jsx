import React, { createContext, Component } from 'react'

export const AuthContext = createContext()

export default class AuthContextProvider extends Component{
    constructor(props){
        super(props);
        this.state = {
            isAuth: false
        }
    }

    toggleAuth = ()=>{
        this.setState({
            isAuth: !this.state.isAuth
        })
    }
    render(){
        const {isAuth} = this.state
        const {toggleAuth} = this
        return(
            <AuthContext.Provider value={{isAuth,toggleAuth}}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}