import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header';

class App extends Component {
    constructor(props){
      super(props);
      this.state ={
          showContentFor: 'Agenda'
      };
    };

    showContent = (menuItem) => {
        this.setState({showContentFor: menuItem});
    };

  render() {

    const mainMenuItems = [{title:'Agenda', href:'/agenda', showContent:this.showContent}, {title:'Calendar', href:'/calendar', showContent:this.showContent}];
    console.log('app state:',this.state);
    return (
      <div className="App">
          <Header items={mainMenuItems}/>


        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          {this.state.showContentFor === 'Agenda' && <div>Agenda</div>}
          {this.state.showContentFor === 'Calendar' && <div>Calendar</div>}
      </div>
    );
  };
}

export default App;
