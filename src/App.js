import React, { Component } from 'react';
// import logo from './logo.svg';
import {connect} from 'react-redux';
import store from './store';

import './App.css';
import Header from './components/header';
import {displayContent} from './reducers';


class App extends Component {
    constructor(props){
      super(props);
      console.log('app constructor props: ',props);
    };


  render() {

    const mainMenuItems = [{title:'Agenda', href:'/agenda'}, {title:'Calendar', href:'/calendar'}];



    return (
          <div className="App">
              <Header items={mainMenuItems} someProps={this.props}/>

              <div className="contentContainer">
                  {store.getState().displayContent === 'Agenda' && <div>Agenda</div>}
                  {store.getState().displayContent === 'Calendar' && <div>Calendar</div>}
              </div>
          </div>
    );
  };
}

function mapStateToProps(state){
    return {
        displayContent : state.displayContent,
        displayContentHandler: displayContent
    }
}


export default connect(mapStateToProps)(App);