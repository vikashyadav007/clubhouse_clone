import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import colors from '../../utils/colors';

import wave_hand from '../../assets/wave_hand.png';
import celebration from '../../assets/celebration.png';

import fontStyles from '../../utils/fontStyles';

const Welcome = props => {
  return (
    <View style={styles.screen}>
      <View style={styles.centerItem}>
        <Image
          source={wave_hand}
          style={styles.wave_hand_image}
          resizeMode="cover"
        />
        <Text style={{...fontStyles.KalamBold, ...styles.clubhouseText}}>
          clubhouse
        </Text>
      </View>
      <View style={styles.bottomItem}>
        <View style={styles.container}>
          <Image
            source={celebration}
            style={styles.celebration_image}
            resizeMode="cover"
          />
          <Text style={{...fontStyles.SemiBold, ...styles.welcomeText}}>
            Welcome in!
          </Text>
          <AntDesign name="arrowright" color={colors.white} size={20} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background_color,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wave_hand_image: {
    height: 75,
    width: 75,
  },
  celebration_image: {
    height: 25,
    width: 20,
  },
  clubhouseText: {
    fontSize: 55,
  },
  centerItem: {
    alignItems: 'center',
  },

  bottomItem: {
    position: 'absolute',
    bottom: 40,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.blue,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 30,
  },
  welcomeText: {
    color: colors.white,
    paddingHorizontal: 10,
    fontSize: 20,
  },
});

export default Welcome;
