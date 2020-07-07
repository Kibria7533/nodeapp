import React, { Component } from 'react';
import axios from 'axios';

class Add extends Component {
    constructor(){
        super()
        this.state={
            name:"",
            village:""
        }
    }
    set=e=>{
        const name=e.target.name;
        const value=e.target.value;
        this.setState({[name]:value});
    }
    sub=async(e)=>{
        e.preventDefault();
      await axios.post('mongodb+srv://kibria:bikal3ta@cluster0.ak8uw.mongodb.net/Cluster0?retryWrites=true&w=majority/api/save',this.state);
    }
    render() {
        return (
            <div>
                <form className="form-inline" onSubmit={this.sub}>
                    <div className="form-group mb-2">
                        <input type="text" name="name" onChange={this.set} className="form-control" value={this.state.name} placeholder="Enter your Name"></input>
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                     
                        <input type="text" name="village" onChange={this.set} className="form-control" value={this.state.village} placeholder="Enter your village"></input>
                    </div>
                    <button type="submit" className="btn btn-primary mb-2">Submit</button>
                </form>
            </div>
        );
    }
}

export default Add;