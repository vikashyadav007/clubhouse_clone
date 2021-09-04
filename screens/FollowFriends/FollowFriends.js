import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import colors from '../../utils/colors';
import fontStyles from '../../utils/fontStyles';
import NextButton from '../../components/NextButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ItemView from './components/ItemView';
import {ScrollView} from 'react-native-gesture-handler';

const FollowFriends = props => {
  const [data, setData] = useState([
    {
      id: 1,
      name: 'Mahindra Singh Dhoni',
      imageUrl:
        'https://biographyly.com/wp-content/uploads/2020/05/Ms-Dhoni.jpg',
    },
    {
      id: 2,
      name: 'Salman Khan',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP-3dsLefwao3uaEXtl3srpsxAakfh1e_pQNK3BWL5UkNMYirGPrrqgrWn2GfdBK_Z5ns&usqp=CAU',
    },
    {
      id: 3,
      name: 'Deepika Padukone',
      imageUrl:
        'https://m.media-amazon.com/images/M/MV5BNGFlYzAyYjgtNzRjNS00NmE4LTliOGYtYzBkYzU5MzRhMDM0XkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_UY1200_CR85,0,630,1200_AL_.jpg',
    },
    {
      id: 4,
      name: 'Rashmika Mandana',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyY9fZfltDuB-qvhAa8AQHC_qMH76QQZyOCw&usqp=CAU',
    },
    {
      id: 5,
      name: 'Rashi Khanna',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQULO1DktiTBpKBwF0wErJdYRfn6MC3cenCw&usqp=CAU',
    },
    {
      id: 6,
      name: 'Kajal Agarwal',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt7S7bWI3dr24TYOo0MJetA7dq5NbbGVCsGg&usqp=CAU',
    },
    {
      id: 7,
      name: 'Kiara Advani',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiqaJQPRbkY2GKLH2-MhE-DHsZLcAgm6X77Q&usqp=CAU',
    },
    {
      id: 8,
      name: 'Pooja Hegde',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQJLmHuMtc_E_1RTM5o9VGSfnhp9VNR4Yrkg&usqp=CAU',
    },
    {
      id: 9,
      name: 'Nidhi Agerwal',
      imageUrl:
        'https://www.filmibeat.com/img/popcorn/profile_photos/nidhhi-agerwal-20190805160918-38386.jpg',
    },

    {
      id: 10,
      name: 'Hrithik Roshan',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE6QTEi6fM5z6La1_lq9X3PhKi5F5zSXf81A&usqp=CAU',
    },
  ]);
  const [selected, setSelected] = useState([1, 2, 3, 6]);

  function handleFollow(id) {
    if (selected.includes(id)) {
      setSelected(selected.filter(_id => _id !== id));
    } else {
      setSelected(prevData => [...prevData, id]);
    }
  }

  return (
    <View style={styles.screen}>
      <View style={styles.topView}>
        <Text style={{...fontStyles.SemiBold, ...styles.topText}}>
          Follow new friends to have access to their rooms
        </Text>
      </View>

      <View style={styles.listView}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <ItemView
                item={item}
                selected={selected}
                onPress={handleFollow}
              />
            )}
            keyExtractor={item => item.name}
          />
          <View style={styles.bottomPadding} />
        </ScrollView>
      </View>
      <View style={styles.blurBackground6} />
      <View style={styles.blurBackground5} />
      <View style={styles.blurBackground4} />
      <View style={styles.blurBackground3} />
      <View style={styles.blurBackground2} />
      <View style={styles.blurBackground1} />

      <View style={styles.bottomView}>
        <NextButton
          text={selected.length === 0 ? 'Skip this' : 'Follow'}
          opacity={1}
          onPress={() => {
            // props.navigation.navigate('UserName');
          }}
        />
        <Text
          style={{...fontStyles.Bold, ...styles.bottomText}}
          onPress={() => {
            if (selected.length !== 0) {
              setSelected([]);
            }
          }}>
          {selected.length === 0
            ? 'Or use our suggestions. Yolo!'
            : 'Deselect all'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomText: {
    marginTop: 12,
    color: colors.blue,
  },
  screen: {
    flex: 1,
    backgroundColor: colors.background_color,
    alignItems: 'center',
  },
  topView: {
    marginTop: 20,
    width: '100%',
    flex: 1.4,
  },
  topText: {
    fontSize: 26,
    textAlign: 'center',
  },
  bottomView: {
    paddingBottom: 25,
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
  },
  blurBackground6: {
    backgroundColor: colors.background_color,
    position: 'absolute',
    bottom: 110,
    height: 10,
    width: '100%',
    opacity: 0.2,
  },
  blurBackground5: {
    backgroundColor: colors.background_color,
    position: 'absolute',
    bottom: 100,
    height: 10,
    width: '100%',
    opacity: 0.3,
  },
  blurBackground4: {
    backgroundColor: colors.background_color,
    position: 'absolute',
    bottom: 100,
    height: 20,
    width: '100%',
    opacity: 0.5,
  },
  blurBackground3: {
    backgroundColor: colors.background_color,
    position: 'absolute',
    bottom: 80,
    height: 20,
    width: '100%',
    opacity: 0.6,
  },
  blurBackground2: {
    backgroundColor: colors.background_color,
    position: 'absolute',
    bottom: 60,
    height: 20,
    width: '100%',
    opacity: 0.8,
  },
  blurBackground1: {
    backgroundColor: colors.background_color,
    position: 'absolute',
    bottom: 0,
    height: 60,
    width: '100%',
    opacity: 1,
  },
  listView: {
    width: '100%',
    paddingHorizontal: 15,
    // paddingBottom: 40,
    flex: 8.5,
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
  bottomPadding: {
    paddingBottom: 120,
  },
});

export default FollowFriends;
