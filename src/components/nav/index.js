import React, { Component } from 'react';
import HeaderItem from '../../ui/components/headerItem';
import store from '../../store';
import './nav.css';



class Nav extends React.Component {
    constructor(props){
        super(props);
        console.log('nav received props: ',props);
    };

    activateTab = (tabTitle) => {
        console.log('tabTitle: ',tabTitle);
        this.props.dispatch(this.props.makeActive(tabTitle));
    };


    render() {
        console.log(this.props);
        const items =  this.props.items;
        return (
            <ul className="nav nav-tabs">
                {
                    items.map((item) =>  <HeaderItem
                        active={store.getState().displayContent === item.title ? true : false}
                        key={item.title}
                        item={item}
                        onClick={this.activateTab}
                    />)
                }
            </ul>);
    };

}

export default Nav;