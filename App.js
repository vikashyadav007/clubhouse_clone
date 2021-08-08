import React from 'react';
import {StatusBar} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import AppNavigation from './AppNavigation/AppNavigation';

import colors from './utils/colors';

const App = props => {
  return (
    <SafeAreaProvider>
      <StatusBar
        backgroundColor={colors.background_color}
        barStyle="dark-content"
        showHideTransition="slide"
      />
      <AppNavigation />
    </SafeAreaProvider>
  );
};

export default App;
