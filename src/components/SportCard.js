import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import normalize from '../utils/helpers/normalize';
import {COLORS, FONTS, SIZES} from '../constants';

const SportCard = props => {
  const {title, index, image} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>
        {index + 1}. {title}
      </Text>
      <Image source={image} style={styles.img} />
    </View>
  );
};

export default SportCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: normalize(5),
    shadowColor: COLORS.primary,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
    backgroundColor: COLORS.white,
    marginBottom: SIZES.paddingSm,
    marginHorizontal: SIZES.paddingSm,
  },
  txt: {
    fontFamily: FONTS.IBMPlexMonoBold,
    fontSize: normalize(15),
    paddingHorizontal: SIZES.paddingSm,
    color: COLORS.primary,
  },
  img: {
    width: SIZES.width * 0.35,
    height: normalize(55),
    resizeMode: 'cover',
    borderTopRightRadius: normalize(5),
    borderBottomRightRadius: normalize(5),
  },
});
