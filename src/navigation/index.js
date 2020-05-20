import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Feelings from '../screens/Feelings';
import MyFeeling from '../screens/MyFeeling';

const Stack = createStackNavigator();

const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Feelings" component={Feelings} />
      <Stack.Screen name="MyFeeling" component={MyFeeling} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigation;
