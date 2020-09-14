import React, { Component } from 'react'

import styles from './display.module.css'

export default class Display extends Component{
    constructor(props){
        super(props);
        this.state = {
            filter:""
        }
    }
    render(){
        const {tabledata} = this.props
        const {filter} = this.state
        console.log(this.state.filter)
        return(
            <div className={styles.mainDiv}>
                <div className={styles.filterdiv}>
                    <label htmlFor="filter">Filter By:</label>
                    <select name="filter" onChange={(e)=>this.setState({
                        filter:e.target.value
                    })}>
                        <option value="all">All</option>
                        <option value="remotejob">Remote Job</option>
                        <option value="nonremotejob">Non Remote Job</option>
                    </select>
                </div>
                {
                    tabledata.sort((a,b)=>(a.salary-b.salary)).filter((a)=>{return filter==="nonremotejob"? !a.remote : a.remote || filter==="all" ? a:"" || filter===""? a:""}).map((item)=>(
                <div key={item.id} className={styles.nav}>
                    <div><img className={styles.iimg} src={item.url} alt={item.cname}/></div>
                    <table>
                        <thead>
                            <tr>
                                <td>Company Name</td>
                                <td>Title</td>
                                <td>Salary</td>
                                <td>Location</td>
                                <td>Remote</td>
                                <td>Posted Date</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{item.cname}</td>
                                <td>{item.title}</td>
                                <td>{item.salary}</td>
                                <td>{item.location}</td>
                                <td>{item.remote ? <div className={styles.green}></div>:<div className={styles.red}></div> }</td>
                                <td>{item.tdate}</td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>
                ))}
            </div>
        )
    }
}