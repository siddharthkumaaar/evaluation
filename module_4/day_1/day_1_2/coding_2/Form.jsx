import React, { Component } from 'react'
import {v4 as uuid} from 'uuid'
import styles from './form.module.css';
import Display from './Display';

export default class Form extends Component{
    constructor(props){
        super(props);

        this.state ={
            title:"",
            salary:"",
            cname:"",
            location:"",
            remote:"",
            url:"",
            data:[]

        }
    }

    // shouldComponentUpdate(nextProps){
        
    // }

    handleSubmit = (e)=>{
        e.preventDefault()
        const {title,salary,cname,location,remote,url,data} = this.state

        let d = new Date()
        let year = d.getFullYear()
        let month = d.getMonth()+1
        let date = d.getDate()
        let fullDate = date+"-"+month+"-"+year

        let item = {
            id: uuid(),
            title:title,
            salary:salary,
            cname:cname,
            location:location,
            remote:remote,
            url:url,
            tdate:fullDate

        }

        this.setState({
            data:[...data,item]
        })
    }

    render(){
        const {data} = this.state

        console.log(data)
        return(
            <div>
                <div>
                    <form onSubmit={this.handleSubmit} className={styles.frm}>
                        <div>
                            <label htmlFor="title">Title:</label>
                            <input type="text" name="title" 
                            value={this.state.title}
                            onChange={(e)=>this.setState({
                                title:e.target.value
                            })}
                            placeholder="Title"
                            />
                        </div>
                        <div>
                            <label htmlFor="salary">Salary:</label>
                            <input type="number" name="salary" 
                                value={this.state.salary}
                                onChange={(e)=>this.setState({
                                    salary:e.target.value
                              })}
                               placeholder="Salary"
                            />
                        </div>
                        <div>
                            <label htmlFor="cname">Company Name:</label>
                            <input type="text" name="cname" 
                            value={this.state.cname}
                            onChange={(e)=>this.setState({
                                cname:e.target.value
                            })}
                            placeholder="Company Name"
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="location">Location:</label>
                            <select name="location" onChange={(e)=>this.setState({
                                location:e.target.value
                            })}>
                                <option>Select Location....</option>
                                <option value="Bangalore">Bangalore</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Delhi ">Delhi</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="remote">Remote:</label>
                            <input type="checkbox" name="remote" 
                            value={this.state.remote}
                            onChange={(e)=>this.setState({
                                remote:e.target.checked ? true : false
                            })}
                            />
                        </div>
                        <div>
                            <label htmlFor="url">Company Logo:</label>
                            <input type="text" name="url" 
                            value={this.state.url}
                            onChange={(e)=>this.setState({
                                url:e.target.value
                            })}
                            placeholder="Company Logo Url"
                            />
                        </div>
                        <input type="submit" value="UPLOAD JOB"/>
                    </form>
                </div>
                <div>
                    <Display tabledata={data}/>
                </div>
            </div>
        )
    }
}