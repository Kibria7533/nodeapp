import React, { Component } from 'react';
import Navbar from './components/Navbar';


class App extends Component {
  render() {
    return (
     <div className="container-fluid">
       <div className="row m-auto">
         <div className="col-lg-8 ">
           <Navbar/>

         </div>

       </div>

     </div>

    );
  }
}

export default App;
