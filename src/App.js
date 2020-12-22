import React, { Component, Fragment } from 'react';
import CalendarComponent from './Component/CalendarComponent';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                <CalendarComponent/>
               
            </Fragment>
         );
    }
}
 
export default App;