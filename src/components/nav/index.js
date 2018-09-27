import React, { Component } from 'react';
import HeaderItem from '../../ui/components/headerItem';

import './nav.css';



class Nav extends React.Component {
    constructor(props){
        super(props);
        console.log('nav received props: ',props);
        // this.state = {activeTab: 'Agenda'};
    };

    activateTab = (tabTitle) => {
        // this.setState({activeTab: tabTitle});
        //dispatch
    };

    render() {
        console.log(this.props);
        const items =  this.props.items;
        return (
            <ul className="nav nav-tabs">
                {
                    items.map((item) =>  <HeaderItem
                        active={this.props.activeTab === item.title ? true : false}
                        key={item.title}
                        item={item}
                        onClick={this.activateTab}
                        showContent={item.showContent}
                    />)
                }
            </ul>);
    };

}

export default Nav;