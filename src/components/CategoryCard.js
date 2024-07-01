import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import normalize from '../utils/helpers/normalize';
import {COLORS, FONTS, SIZES, icons} from '../constants';

const CategoryCard = props => {
  const {title, onPress} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image style={styles.icon} source={icons.arrow} />
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: SIZES.paddingSm,
    backgroundColor: COLORS.white,
    borderRadius: normalize(7),
    paddingHorizontal: SIZES.paddingLg,
    paddingVertical: SIZES.paddingMd,
    marginBottom: normalize(7),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: FONTS.IBMPlexMonoRegular,
    fontSize: normalize(15),
    color: COLORS.black,
  },
  icon: {
    width: normalize(15),
    height: normalize(15),
    resizeMode: 'contain',
  },
});
