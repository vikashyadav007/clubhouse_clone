import React from 'react';
import {View, Text, StyleSheet, Modal, Dimensions} from 'react-native';
import colors from '../../../utils/colors';
import fontStyles from '../../../utils/fontStyles';

const {width} = Dimensions.get('window');

const AlertModal = props => {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={props.visible}
      presentationStyle="overFullScreen"
      onDismiss={props.handleCancel}>
      <View style={styles.screen}>
        <View style={styles.whiteContainer}>
          <Text style={{...fontStyles.SemiBold, ...styles.title}}>
            Are you sure?
          </Text>
          <Text style={{...fontStyles.Regular, ...styles.subTitle}}>
            Clubhouse will be pretty quiet for you.
          </Text>
          <View style={styles.buttonRow}>
            <Text
              style={{...fontStyles.SemiBold, ...styles.button}}
              onPress={props.handleSubmit}>
              NEVER MIND
            </Text>
            <Text
              style={{...fontStyles.SemiBold, ...styles.button}}
              onPress={props.handleSubmit}>
              YES
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    flex: 1,
    justifyContent: 'center',
  },
  whiteContainer: {
    backgroundColor: colors.white,
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 25,
    position: 'absolute',
    width: width * 0.9,
  },
  title: {
    fontSize: 20,
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 18,
    paddingBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  button: {
    fontSize: 18,
    color: colors.blue,
    marginLeft: 40,
  },
});

export default AlertModal;
