import React, { Component } from 'react';
import axios from 'axios';
import {
  Link
} from "react-router-dom";


class Home extends Component {
  constructor(){
    super()
    this.state={
      data:[]
    }
  }
  async componentDidMount(){
     const res=await axios.get('http://127.0.0.1:5000/api/show')
     .then(data=>{
     this.setState({data:data.data})
     })

  }
  del=async (id)=>{
   
    await axios.delete(`http://localhost:5000/api/delete/${id}`);
    this.componentDidMount();
    
  }
    render() {
        return (
            <div>
               <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Village</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {this.state.data.map(item=>{
      return(
        <tr key={item._id}>
        <th >{item.name}</th>
      <td>{item.village}</td>
        <td><Link to={`/Edit/${item._id}`} ><button type="button" className="btn btn-primary">Edit</button></Link></td>
        <td><button type="button" onClick={()=>this.del(item._id)} className="btn btn-danger">Delete</button></td>
      </tr>
      )
    })}
   
   
  </tbody>
</table>
            </div>
        );
    }
}

export default Home;