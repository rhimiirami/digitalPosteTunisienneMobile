
import React, { Component } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Components/Home';
import OneRun from './src/Components/OneRun';
import TwoRun from './src/Components/TwoRun';
import ThreeRun from './src/Components/ThreeRun';
import SignIn from './src/Components/SignIn';
import HomeAdmin from './src/Components/HomeAdmin'



class App extends Component {
  render() {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeAdmin" screenOptions={{
          headerShown: false
        }} >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="OneRun" component={OneRun} />
          <Stack.Screen name="TwoRun" component={TwoRun} />
          <Stack.Screen name="ThreeRun" component={ThreeRun} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="HomeAdmin" component={HomeAdmin} />
        </Stack.Navigator>
      </NavigationContainer >
    )
  }
}
export default App;