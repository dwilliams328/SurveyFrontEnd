import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import AllSurvey from './components/AllSurvey';
import Home from './components/Home';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name = 'Home' component = {Home}></Stack.Screen>
      <Stack.Screen name = 'AllSurvey' component = {AllSurvey}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
