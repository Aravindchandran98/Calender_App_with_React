import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent';
class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <HeaderComponent/>
        );
    }
}
 
export default HomeComponent;