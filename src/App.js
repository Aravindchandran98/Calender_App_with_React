import React, { Component, Fragment } from 'react';
import CalenderOuterLayout from './Component/CalenderOuterLayout';
import HomeComponent from './Component/HomeComponent/Home';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        // return (  
        //     <Fragment>   
        //         <CalenderOuterLayout/>
        //        <h1>hello aravind</h1>
        return ( 
            <Fragment>
                <div style = {{backgroundImage : `url("/bg_img.jpg")` }}>
                <HomeComponent/>
                </div>
            </Fragment>
         );
    }
}
 
export default App;