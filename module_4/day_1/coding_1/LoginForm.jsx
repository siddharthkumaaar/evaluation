import React, { Component, createContext} from 'react'
import axios from 'axios'
import DashBoard from './DashBoard'
import {AuthContext} from './AuthContextProvider' 
// export const LoginContext  = createContext()

export default class LoginForm extends Component{

    constructor(props){
        super(props);
        this.state = {
              email:"",
              pword:"",  
              token:"",
              status:false
        }
    }

    // shouldComponentUpdate(nextProps){
    //     return nextProps.email !== this.props.email
    // }

    handleSubmit = (e)=>{
        const {email,pword} = this.state
        const {toggleAuth} = this.context
        e.preventDefault()
        console.log(this.state.email,this.state.pword)
        axios.post('https://reqres.in/api/login?', {
            email: email,
            password: pword
          })
          .then(response=> {
            console.log(response.data.token);
            var tkn = response.data.token
            this.setState({
                token:tkn,
                status:true
            });
            toggleAuth()
          })
          .catch(error=>{
            console.log(error);
          });
    }

    render(){
        const {isAuth,toggleAuth} = this.context
        console.log('context is:',isAuth,toggleAuth)
        const {email,token} = this.state
        return(
            <div>
               
               
                {isAuth ?<DashBoard token={token} email={email}/>:
                 <div>
                 <form onSubmit={this.handleSubmit}> 
                     <div style={{margin:10}}>
                     <label htmlFor="email">Email:</label>
                     <input type="email" name="email" value={this.state.email} 
                     onChange={(e)=>this.setState({
                         email:e.target.value
                     })}
                     placeholder="Email"
                     />
                     </div>
                     <div style={{margin:10}}>
                     <label htmlFor="pword">Password:</label>
                     <input type="password" name="pword" value={this.state.pword}
                     onChange={(e)=>this.setState({
                         pword:e.target.value
                     })}
                     placeholder="password"
                     />
                     </div>
                     <div style={{margin:10}}>
                         <input type="submit" value="LOGIN"/>
                     </div>
                 </form>
             </div>
                }
            </div>
        )
    }
}

LoginForm.contextType = AuthContext