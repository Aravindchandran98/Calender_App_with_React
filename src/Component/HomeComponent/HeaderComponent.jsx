import React, { Component, Fragment } from 'react';
import Register from './../AuthComponent/Register';
import Login from './../AuthComponent/Login';
class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {  
        return ( 
            <Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand" href="#">Hidden brand</a>
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <button className="btn btn-dark m-10">Register</button>
                        <button className="btn btn-dark m-10">Login</button>
                        </ul>
                    </div>
                    </div>
                </nav>
            </Fragment>
         );
    }
}
 
export default HeaderComponent;