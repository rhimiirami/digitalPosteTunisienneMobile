
import React, { Component } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Components/Home';
import OneRun from './src/Components/OneRun';
import TwoRun from './src/Components/TwoRun';
import ThreeRun from './src/Components/ThreeRun';
import SignIn from './src/Components/SignIn';
import HomeAdmin from './src/Components/HomeAdmin';
import HomeClient from './src/Components/HomeClient';

import ProfileClient from './src/Components/ProfileClient';
import ProfileAdmin from './src/Components/ProfileAdmin';
import SignUp from './src/Components/SignUp';
import SignUpAccount from './src/Components/SignUpAccount';
import DemandeCarteCredit from './src/Components/DemandeCarteCredit';
import DemandeCarnetCheque from './src/Components/DemandeCarnetCheque';
import ListeClients from './src/Components/ListeClients';
import ListeComptesPostales from './src/Components/ListeComptesPostales';
import ContactSiege from './src/Components/ContactSiege';



class App extends Component {
  render() {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeClient" screenOptions={{ headerShown: false }} >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="OneRun" component={OneRun} />
          <Stack.Screen name="TwoRun" component={TwoRun} />
          <Stack.Screen name="ThreeRun" component={ThreeRun} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="HomeAdmin" component={HomeAdmin} />
          <Stack.Screen name="HomeClient" component={HomeClient} />
          <Stack.Screen name="ProfileClient" component={ProfileClient} />
          <Stack.Screen name="ProfileAdmin" component={ProfileAdmin} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="DemandeCarteCredit" component={DemandeCarteCredit} />
          <Stack.Screen name="DemandeCarnetCheque" component={DemandeCarnetCheque} />
          <Stack.Screen name="SignUpAccount" component={SignUpAccount} />
          <Stack.Screen name="ListeClients" component={ListeClients} />
          <Stack.Screen name="ListeComptesPostales" component={ListeComptesPostales} />
          <Stack.Screen name="ContactSiege" component={ContactSiege} />
        </Stack.Navigator>
      </NavigationContainer >
    )
  }
}
export default App;
