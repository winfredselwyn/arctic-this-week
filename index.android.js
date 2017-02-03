import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { Scene, Router, Actions } from 'react-native-router-flux';
import AppShell from './src/MainApp';
import SwipeView from './src/views/swipe-view';
import Test from './src/components/test';
import reducers from './src/reducers';


const createStoreWithMiddleware = applyMiddleware(
  promise,
)(createStore);


const scenes = Actions.create(
  <Scene key="root">
    <Scene key="shell" component={AppShell} title="Arctic This Week" />
    <Scene key="test" component={Test} titleStyle={{ textAlign: 'left', marginLeft: -150 }} />
    <Scene key="swipeView" component={SwipeView} title="Top 5 This Week" />
  </Scene>,
);


export default class arctic_this_week extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <Router scenes={scenes} />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('arctic_this_week', () => arctic_this_week);
