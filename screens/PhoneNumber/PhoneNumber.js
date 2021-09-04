import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import colors from '../../utils/colors';
import fontStyles from '../../utils/fontStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';

import india_flag from '../../assets/india_flag.png';
import NextButton from '../../components/NextButton';

const PhoneNumber = props => {
  const [number, setNumber] = useState();

  function handleNumberInput(text) {
    let formattedText = text.split(' ').join('');
    if (formattedText.length > 0) {
      formattedText = formattedText.match(new RegExp('.{1,5}', 'g')).join(' ');
    }
    setNumber(formattedText);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.topView}>
        <Text style={{...fontStyles.SemiBold, ...styles.topText}}>
          Sign in with your phone #
        </Text>
      </View>
      <View style={styles.centerView}>
        <View style={styles.whiteContainer}>
          <View style={styles.imageView}>
            <Image
              source={india_flag}
              style={styles.india_flag_image}
              resizeMode="cover"
            />
          </View>
          <View style={styles.countryCodeView}>
            <Text style={{...fontStyles.SemiBold, ...styles.countrycodeText}}>
              +91
            </Text>
            <AntDesign name="caretdown" size={12} color={colors.black} />
          </View>
          <View style={styles.inputView}>
            <TextInput
              placeholder="Phone Number"
              keyboardType="number-pad"
              placeholderTextColor={colors.grey}
              style={{...fontStyles.SemiBold, ...styles.textInput}}
              maxLength={11}
              type="number"
              value={number}
              onChangeText={value => {
                handleNumberInput(value);
              }}
            />
          </View>
        </View>
        <Text style={{...fontStyles.Regular, ...styles.agreementText}}>
          By entering your number, you're agreeing to our{' '}
          <Text style={styles.clickableText}>Terms of Service</Text> and{' '}
          <Text style={styles.clickableText}>Privacy Policy</Text> Thanks!
        </Text>
      </View>
      <View style={styles.bottomView}>
        <NextButton
          text="Next"
          opacity={number ? (number.length === 11 ? 1 : 0.5) : 0.5}
          onPress={() => {
            props.navigation.navigate('OtpSCreen');
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
    marginTop: 20,
  },
  topText: {
    fontSize: 25,
  },
  centerView: {
    marginHorizontal: 20,
  },
  imageView: {
    flex: 1.5,
  },
  india_flag_image: {
    height: 25,
    width: 35,
  },
  whiteContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 2,
    paddingHorizontal: 10,
  },
  countryCodeView: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 2,
  },
  inputView: {
    flex: 6,
  },
  countrycodeText: {
    fontSize: 18,
    marginRight: 5,
  },
  agreementText: {
    fontSize: 13,
    textAlign: 'center',
    marginTop: 10,
    color: colors.grey,
  },
  clickableText: {
    color: colors.blue,
    textDecorationLine: 'underline',
  },
  bottomView: {
    paddingBottom: 40,
  },
  textInput: {
    fontSize: 18,
  },
});

export default PhoneNumber;
