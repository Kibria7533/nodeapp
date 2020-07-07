import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import Home from './Home';
import Edit from './Edit';
import Add from './Add';
class Navbar extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <a className="navbar-brand" href="/">CRUD</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                    <NavLink   className="nav-link" exact activeStyle={{ color: "blue" }} to="/">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                    <NavLink className="nav-link" exact activeStyle={{ color: "blue" }} to="/Edit">Edit</NavLink>
                                    </li>
                                    <li className="nav-item">
                                    <NavLink  className="nav-link" exact activeStyle={{ color: "blue" }} to="/Add">Add</NavLink>
                                    </li>


                                </ul>
                                </div>
   
                        </nav>
                           
                            <Switch>
                                <Route exact path="/" component={Home} />


                                <Route exact path="/Edit/:id" component={Edit} />

                                <Route exact path="/Add" component={Add} />

                            </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default Navbar;