import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Welcome from '../screens/Welcome/Welcome';
import PhoneNumber from '../screens/PhoneNumber/PhoneNumber';

const flowStack = createStackNavigator();

function FlowStack() {
  return (
    <flowStack.Navigator>
      <flowStack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <flowStack.Screen
        name="PhoneNumber"
        component={PhoneNumber}
        options={{headerShown: false}}
      />
    </flowStack.Navigator>
  );
}

const AppNavigation = props => {
  return (
    <NavigationContainer>
      <FlowStack />
    </NavigationContainer>
  );
};

export default AppNavigation;
