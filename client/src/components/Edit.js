import React, { Component } from 'react';
import axios from 'axios';
class Edit extends Component {
    constructor(){
        super()
        this.state={
            name:"",
            village:""
        }
    }
    async componentDidMount(){
        const res=await axios.get('http://127.0.0.1:5000/api/show')
        .then(data=>{
       
        {data.data.map(item=>{
               if(this.props.match.params.id===item._id){
                   this.setState({name:item.name,village:item.village});
               }
             })}
        })
   
     }
  
    set=e=>{
        const name=e.target.name;
        const value=e.target.value;
        this.setState({[name]:value});
    }
    sub=async(e)=>{
        e.preventDefault();
      await axios.patch(`http://localhost:5000/api/update/${this.props.match.params.id}`,this.state);
    }
    render() {
        return (
            <div> <form className="form-inline"  onSubmit={this.sub}>
                <div className="form-group mb-2">
                    <input type="text"name="name" onChange={this.set} value={this.state.name} className="form-control" ></input>
                </div>
                <div className="form-group mx-sm-3 mb-2">

                    <input type="text" name="village" onChange={this.set} value={this.state.village} className="form-control" ></input>
                </div>
                <button type="submit" className="btn btn-primary mb-2">Save Edit</button>
            </form>
            </div>
        );
    }
}

export default Edit;