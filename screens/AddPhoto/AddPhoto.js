import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import colors from '../../utils/colors';
import fontStyles from '../../utils/fontStyles';
import NextButton from '../../components/NextButton';

import add_image from '../../assets/add_image.png';

const FullName = props => {
  return (
    <View style={styles.screen}>
      <View style={styles.topView}>
        <Text
          style={{...fontStyles.SemiBold, ...styles.skipText}}
          onPress={() => {
            props.navigation.navigate('ShareInvites');
          }}>
          Skip
        </Text>
        <Text style={{...fontStyles.SemiBold, ...styles.topText}}>
          Great! Now add a Photo?
        </Text>
      </View>
      <View style={styles.centerView}>
        <View style={styles.whiteContainer}>
          <Image source={add_image} style={styles.image} resizeMode="contain" />
        </View>
      </View>
      <View style={styles.bottomView}>
        <NextButton
          text="Next"
          opacity={0.5}
          onPress={() => {
            // props.navigation.navigate('UserName');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background_color,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topView: {
    marginTop: 12,
    width: '100%',
    paddingHorizontal: 30,
  },
  skipText: {
    textAlign: 'right',
    marginBottom: 30,
    color: colors.grey,
  },
  topText: {
    fontSize: 25,
    textAlign: 'center',
  },
  whiteContainer: {
    backgroundColor: colors.white,
    borderRadius: 70,
    height: 170,
    width: 170,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomView: {
    marginBottom: 30,
  },
  image: {
    height: 120,
    width: 120,
  },
});

export default FullName;
