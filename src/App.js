import React, { Component, Fragment } from 'react';
import CalenderOuterLayout from './Component/CalenderOuterLayout';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                <CalenderOuterLayout/>
               
            </Fragment>
         );
    }
}
 
export default App;