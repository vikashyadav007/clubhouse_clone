import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

import colors from '../../utils/colors';
import fontStyles from '../../utils/fontStyles';
import NextButton from '../../components/NextButton';

const FullName = props => {
  const [first, setFirst] = useState();
  const [last, setLast] = useState();

  return (
    <View style={styles.screen}>
      <View style={styles.topView}>
        <Text style={{...fontStyles.SemiBold, ...styles.topText}}>
          What's your full name?
        </Text>
      </View>
      <View style={styles.centerView}>
        <View style={styles.nameRow}>
          <View style={styles.whiteContainer}>
            <TextInput
              placeholder="First"
              style={{...fontStyles.SemiBold, ...styles.textInput}}
              keyboardType="default"
              placeholderTextColor={colors.grey}
              value={first}
              onChangeText={value => {
                setFirst(value);
              }}
            />
          </View>
          <View style={styles.whiteContainer}>
            <TextInput
              placeholder="Last"
              style={{...fontStyles.SemiBold, ...styles.textInput}}
              keyboardType="default"
              placeholderTextColor={colors.grey}
              value={last}
              onChangeText={value => {
                setLast(value);
              }}
            />
          </View>
        </View>
        <Text style={{...fontStyles.Regular, ...styles.centerText}}>
          People use their real names on Clubhouse
        </Text>
      </View>
      <View style={styles.bottomView}>
        <NextButton
          opacity={
            first && last
              ? first.length >= 1 && last.length >= 1
                ? 1
                : 0.5
              : 0.5
          }
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

  nameRow: {
    flexDirection: 'row',
  },
  whiteContainer: {
    flex: 1,
    backgroundColor: colors.white,
    marginHorizontal: 10,
  },
  textInput: {
    textAlign: 'center',
    fontSize: 20,
  },
  centerText: {
    fontSize: 13,
    marginTop: 15,
    color: colors.grey,
  },
  bottomView: {
    marginBottom: 30,
  },
});

export default FullName;
