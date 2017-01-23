import React, { Component } from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import MenuBar from './components/header';
import AllNews from './views/all-news';


// let store = createStore(reducers, applyMiddleware(promise));


export default class MainApp extends Component {
  render() {
    return (
        <View>
          <MenuBar />
          <Animatable.View animation="fadeIn">
            <AllNews />
          </Animatable.View>
        </View>
    );
  }
}
