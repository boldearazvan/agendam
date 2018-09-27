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


    showContent = () => {

    };



  render() {

    const mainMenuItems = [{title:'Agenda', href:'/agenda', showContent:this.showContent}, {title:'Calendar', href:'/calendar', showContent:this.showContent}];

    // store.dispatch(displayContent('Agenda'));
    // store.dispatch(displayContent('Calendar'));

    //   store.dispatch({
    //       type: 'DISPLAY_CONTENT',
    //       payload: 'Calendar'
    //   });

    console.log('store.GetState: ',store.getState());
    console.log('app props: ', this.props);

    return (
          <div className="App">
              <Header items={mainMenuItems} someProps={this.props}/>



              {store.getState().displayContent === 'Agenda' && <div>Agenda</div>}
              {store.getState().displayContent === 'Calendar' && <div>Calendar</div>}
          </div>
    );
  };
}

function mapStateToProps(state){
    return {
        displayContent : state.displayContent
    }
}

function mapDispatchToProps(dispatch){
    return {
        dispatchDisplayContent: () => dispatch({type: 'DISPLAY_CONTENT'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;