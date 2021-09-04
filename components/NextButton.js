import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import fontStyles from '../utils/fontStyles';
import colors from '../utils/colors';

import AntDesign from 'react-native-vector-icons/AntDesign';

const NextButton = props => {
  return (
    <TouchableOpacity
      activeOpacity={props.opacity === 0.5 ? 1 : 0.6}
      onPress={() => {
        props.opacity === 1 && props.onPress();
      }}>
      <View style={{...styles.blueContainer, opacity: props.opacity}}>
        <Text style={{...fontStyles.SemiBold, ...styles.text}}>
          {props.text}
        </Text>
        <AntDesign name="arrowright" color={colors.white} size={20} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  blueContainer: {
    backgroundColor: colors.blue,
    flexDirection: 'row',
    paddingHorizontal: 70,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 30,
  },
  text: {
    color: colors.white,
    fontSize: 20,
    marginRight: 10,
  },
});

export default NextButton;
