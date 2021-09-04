import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import fontStyles from '../../../utils/fontStyles';

import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../../utils/colors';

const ItemView = props => {
  return (
    <View style={styles.screen}>
      <View style={styles.left}>
        <View style={styles.imageView}>
          <Image
            source={{uri: props.item.imageUrl}}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <Text style={{...fontStyles.SemiBold, ...styles.text}}>
          {props.item.name}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.right}
        onPress={() => {
          props.onPress(props.item.id);
        }}>
        {props.selected.includes(props.item.id) === true ? (
          <AntDesign name="checkcircle" color={colors.blue} size={30} />
        ) : (
          <AntDesign name="pluscircleo" color={colors.blue} size={30} />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 18,
  },
  imageView: {},
  text: {
    marginLeft: 20,
    fontSize: 16,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 8,
  },
});

export default ItemView;
