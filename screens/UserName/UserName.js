import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

import colors from '../../utils/colors';
import fontStyles from '../../utils/fontStyles';
import NextButton from '../../components/NextButton';

const UserName = props => {
  const fixed = '@';
  const [userName, setUserName] = useState(fixed);
  const [error, setError] = useState();

  function containsSpecialCharacters(str) {
    var regex = /[ !#$%^&*()+\-=\[\]{};':"\\|,<>\/?]/g;
    return regex.test(str);
  }

  function getOpacity() {
    if (
      !userName ||
      containsSpecialCharacters(userName) ||
      userName.length < 5
    ) {
      return 0.5;
    } else {
      return 1;
    }
  }

  return (
    <View style={styles.screen}>
      <View style={styles.topView}>
        <Text style={{...fontStyles.SemiBold, ...styles.topText}}>
          Pick a username
        </Text>
      </View>
      <View style={styles.centerView}>
        <View style={styles.whiteContainer}>
          <TextInput
            style={{...fontStyles.Regular, ...styles.textInput}}
            keyboardType="default"
            placeholderTextColor={colors.grey}
            value={userName}
            onChangeText={value => {
              if (containsSpecialCharacters(value)) {
                setError('Special character not allowed');
                console.log('Special character not allowed');
              } else {
                setError('');
              }
              if (value.length === 0) {
                setUserName(fixed);
              } else {
                setUserName(`${value}`);
              }
            }}
          />
        </View>
        <Text style={{...fontStyles.Regular, ...styles.errorText}}>
          {error}
        </Text>
      </View>
      <View style={styles.bottomView}>
        <NextButton
          text="Next"
          opacity={getOpacity()}
          onPress={() => {
            props.navigation.navigate('AddPhoto');
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
  },
  topText: {
    fontSize: 25,
  },
  centerView: {
    width: '100%',
    alignItems: 'center',
  },
  whiteContainer: {
    backgroundColor: colors.white,
    width: 250,
  },
  textInput: {
    textAlign: 'center',
    fontSize: 20,
  },
  errorText: {
    fontSize: 10,
    color: colors.red,
    marginTop: 10,
  },
  bottomView: {
    marginBottom: 30,
  },
});

export default UserName;
