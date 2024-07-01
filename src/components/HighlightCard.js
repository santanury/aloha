import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SIZES, FONTS, COLORS, icons} from '../constants';
import normalize from '../utils/helpers/normalize';

const HighlightCard = props => {
  const {image, title, desc, onPress} = props;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.container}>
      <Image // banner
        style={styles.banner}
        source={image}
      />

      <View // lower container
        style={styles.low}>
        <Text // heading
          style={styles.heading}>
          {title}
        </Text>
        <Text // description
          style={styles.desc}>
          {desc}
        </Text>

        <View // button
          style={styles.button}>
          <Image style={styles.arrow} source={icons.arrow} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HighlightCard;

const styles = StyleSheet.create({
  container: {
    width: SIZES.width * 0.85,
    flex: 1,
    marginRight: SIZES.paddingSm,
    borderRadius: normalize(10),
    overflow: 'hidden',
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  banner: {
    width: '100%',
    height: SIZES.height * 0.22,
    resizeMode: 'cover',
  },
  low: {
    padding: SIZES.paddingMd,
    backgroundColor: COLORS.white,
  },
  heading: {
    fontSize: normalize(24),
    fontFamily: FONTS.IBMPlexMonoBold,
    color: COLORS.primary,
    marginBottom: normalize(10),
  },
  desc: {
    fontSize: normalize(15),
    fontFamily: FONTS.IBMPlexMonoRegular,
    color: COLORS.black,
    marginBottom: normalize(10),
  },
  button: {
    padding: normalize(12),
    backgroundColor: COLORS.primary + 20,
    borderRadius: normalize(100),
    alignSelf: 'flex-end',
    marginBottom: normalize(15),
  },
  arrow: {
    width: normalize(15),
    height: normalize(15),
    resizeMode: 'contain',
  },
});
