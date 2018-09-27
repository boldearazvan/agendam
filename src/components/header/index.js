import React, { Component } from 'react';

import './Header.css';

import Nav from '../nav';

class Header extends React.Component {


    render(){
        console.log('headerReceivedProps: ',this.props);
        this.props.someProps.dispatchDisplayContent();
        return (
            <div className="container-fluid headerContainer">
                {this.props.items.length ? <Nav items={this.props.items}/> : null}
            </div>
        );
    }


}

export default Header;