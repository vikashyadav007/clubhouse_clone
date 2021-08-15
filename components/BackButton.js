import React from 'react';
import {View, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import colors from '../utils/colors';

const OtpSCreen = props => {
  return (
    <View style={styles.screen}>
      <AntDesign name="left" color={colors.black} size={24} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    alignItems: 'flex-start',
    marginHorizontal: 20,
  },
});

export default OtpSCreen;
