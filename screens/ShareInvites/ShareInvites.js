import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';

import colors from '../../utils/colors';
import fontStyles from '../../utils/fontStyles';
import NextButton from '../../components/NextButton';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ShareInvites = props => {
  const [searchWord, setSearchWord] = useState();
  return (
    <View style={styles.screen}>
      <View style={styles.topView}>
        <Text style={{...fontStyles.SemiBold, ...styles.topText}}>
          Share invites with friends who aren't here yet...
        </Text>
        <View style={styles.inputRow}>
          <Ionicons
            name="search-sharp"
            color={colors.search_text_color}
            size={25}
          />
          <View style={styles.inputView}>
            <TextInput
              autoCapitalize="none"
              placeholder="Search your contacts"
              keyboardType="default"
              placeholderTextColor={colors.grey}
              style={{...fontStyles.SemiBold, ...styles.textInput}}
              maxLength={11}
              type="number"
              value={searchWord}
              onChangeText={value => {
                setSearchWord(value);
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.bottomView}>
        <NextButton
          text="Skip for now"
          opacity={1}
          onPress={() => {
            props.navigation.navigate('FollowFriends');
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
    width: '100%',
    paddingHorizontal: 15,
  },
  topText: {
    fontSize: 26,
    textAlign: 'center',
    marginHorizontal: 15,
  },
  bottomView: {
    marginBottom: 30,
  },
  inputRow: {
    backgroundColor: colors.dark_background_color,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputView: {
    flex: 6,
  },
  textInput: {
    fontSize: 20,
    paddingVertical: 0,
    marginLeft: 5,
    color: colors.search_text_color,
  },
});

export default ShareInvites;
