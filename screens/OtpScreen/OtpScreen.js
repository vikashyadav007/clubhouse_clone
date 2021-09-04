import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

import NextButton from '../../components/NextButton';
import fontStyles from '../../utils/fontStyles';
import colors from '../../utils/colors';
import BackButton from '../../components/BackButton';
const OtpSCreen = props => {
  const [otp, setOtp] = useState();
  return (
    <View style={styles.screen}>
      <View style={styles.topView}>
        <BackButton />
        <View style={styles.topTextView}>
          <Text style={{...fontStyles.SemiBold, ...styles.topText}}>
            Ok, check your texts
          </Text>
          <Text style={{...fontStyles.SemiBold, ...styles.topText}}>
            - we sent you a
          </Text>
          <Text style={{...fontStyles.SemiBold, ...styles.topText}}>
            verification code!
          </Text>
        </View>
      </View>
      <View style={styles.centerView}>
        <View style={styles.whiteContainer}>
          <TextInput
            placeholder="******"
            style={{...fontStyles.SemiBold, ...styles.textInput}}
            keyboardType="number-pad"
            placeholderTextColor={colors.grey}
            maxLength={6}
            type="number"
            value={otp}
            onChangeText={value => {
              setOtp(value);
            }}
          />
        </View>
        <Text style={{...fontStyles.Bold, ...styles.tapToSendText}}>
          Didn't receive it? Tap to send
        </Text>
      </View>
      <View style={styles.bottomView}>
        <NextButton
          text="Next"
          opacity={otp ? (otp.length === 6 ? 1 : 0.5) : 0.5}
          onPress={() => {
            props.navigation.navigate('FullName');
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
    width: '100%',
  },
  topTextView: {
    width: '100%',
    alignItems: 'center',
    marginTop: 22,
  },
  topText: {
    fontSize: 22,
  },
  centerView: {
    paddingHorizontal: 20,
  },
  whiteContainer: {
    backgroundColor: colors.white,
    paddingVertical: 10,
  },
  textInput: {
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 0,
  },
  tapToSendText: {
    color: colors.blue,
    fontSize: 13,
    marginTop: 12,
  },

  bottomView: {
    paddingBottom: 40,
  },
});

export default OtpSCreen;
