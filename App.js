import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import Login from './screens/login';
import Home from './screens/home'


export default function App() {
  return (
        <AppContainer/>
  );
}

const switchNavigator = createSwitchNavigator({
  Home:{screen:Home},
  Login:{screen:Login}
})

const AppContainer = createAppContainer(switchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
