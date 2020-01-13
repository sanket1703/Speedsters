import React from 'react';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


import home from './screens/home';
import test from './screens/test';
export default class App extends React.Component {
  render() {
    return (
          <AppContainer/> 
    );
  }
}


const AppStackNavigator = createStackNavigator({

 
  home: {
    screen: home,
    navigationOptions : {
          header : null
    }
  },

  test : {
    screen :test
  },
  
});

const AppContainer = createAppContainer(AppStackNavigator)

