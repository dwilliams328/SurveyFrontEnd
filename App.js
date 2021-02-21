import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import AllSurvey from './components/AllSurvey';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = 'AllSurvey' component = {AllSurvey}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
