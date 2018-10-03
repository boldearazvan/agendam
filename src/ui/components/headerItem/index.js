import React, { Component } from 'react';
import './headerItem.css';



class HeaderItem extends React.Component{

    render(){
        return <li className={'nav-item'}>
            <a
                className={this.props.active ? 'nav-link active' : 'nav-link'}
                href={this.props.item.href}
                onClick={(e) => {e.preventDefault(); this.props.onClick(this.props.item.title); }}
            >
                {this.props.item.title}
            </a>
        </li>;
    }

}

export default HeaderItem;