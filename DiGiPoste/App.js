
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
import Acceuil from './src/Components/Acceuil';
import ProfileClient from './src/Components/ProfileClient';
import ProfileAdmin from './src/Components/ProfileAdmin';
import SignUp from './src/Components/SignUp';
import SignUpAccount from './src/Components/SignUpAccount';
import DemandeCarteCredit from './src/Components/DemandeCarteCredit';
import ListeClients from './src/Components/ListeClients';
import ListeComptesPostales from './src/Components/ListeComptesPostales';
import ContactSiege from './src/Components/ContactSiege';
import CovertisseurDevises from './src/Components/CovertisseurDevises';
import ListeDemandeCarteCredit from './src/Components/ListeDemandeCarteCredit';
import ListeDemandeCarnetCheque from './src/Components/ListeDemandeCarnetCheque';
import Simuler from './src/Components/Simuler';
import Graph from './src/Components/Graph';
import LocalisationAgences from './src/Components/LocalisationAgences';
import TransactionsClient from './src/Components/TransactionsClient';
import DetailsTransactions from './src/Components/DetailsTransactions';
import TransfertArgent from './src/Components/TransfertArgent';
import modifProfilClient from './src/Components/modifProfilClient';
import UpdateClient from './src/Components/UpdateClient';



class App extends Component {
  render() {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="OneRun" screenOptions={{ headerShown: false }} >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="OneRun" component={OneRun} />
          <Stack.Screen name="TwoRun" component={TwoRun} />
          <Stack.Screen name="ThreeRun" component={ThreeRun} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="HomeAdmin" component={HomeAdmin} />
          <Stack.Screen name="HomeClient" component={HomeClient} />
          <Stack.Screen name="Acceuil" component={Acceuil} />
          <Stack.Screen name="ProfileClient" component={ProfileClient} />
          <Stack.Screen name="ProfileAdmin" component={ProfileAdmin} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="DemandeCarteCredit" component={DemandeCarteCredit} />
          <Stack.Screen name="SignUpAccount" component={SignUpAccount} />
          <Stack.Screen name="ListeClients" component={ListeClients} />
          <Stack.Screen name="ListeComptesPostales" component={ListeComptesPostales} />
          <Stack.Screen name="ContactSiege" component={ContactSiege} />
          <Stack.Screen name="CovertisseurDevises" component={CovertisseurDevises} />
          <Stack.Screen name="ListeDemandeCarteCredit" component={ListeDemandeCarteCredit} />
          <Stack.Screen name="ListeDemandeCarnetCheque" component={ListeDemandeCarnetCheque} />
          <Stack.Screen name="Simuler" component={Simuler} />
          <Stack.Screen name="Graph" component={Graph} />
          <Stack.Screen name="LocalisationAgences" component={LocalisationAgences} />
          <Stack.Screen name="TransactionsClient" component={TransactionsClient} />
          <Stack.Screen name="DetailsTransactions" component={DetailsTransactions} />
          <Stack.Screen name="TransfertArgent" component={TransfertArgent} />
          <Stack.Screen name="modifProfilClient" component={modifProfilClient} />
          <Stack.Screen name="UpdateClient" component={UpdateClient} />
        </Stack.Navigator>
      </NavigationContainer >
    )
  }
}
export default App;
