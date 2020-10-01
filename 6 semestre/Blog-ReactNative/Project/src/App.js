import React, {Component} from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducers from '../reducers';
import Routes  from '../components/Routes';

class App extends Component {
  render(){

    const state= createStore(reducers,{},applyMiddleware(thunk))


    return(
      <Provider store={state}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
