import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../constants';
import normalize from '../utils/helpers/normalize';

const BookButton = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {}}
      style={styles.container}>
      <Text style={styles.title}>Book a trip</Text>
    </TouchableOpacity>
  );
};

export default BookButton;

const styles = StyleSheet.create({
  container: {
    width: SIZES.width * 0.9,
    alignSelf: 'center',
    paddingVertical: normalize(7),
    backgroundColor: COLORS.primary,
    position: 'absolute',
    bottom: normalize(85),
    borderRadius: normalize(7),
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    shadowColor: COLORS.primary,
    // shadow left
  },
  title: {
    fontFamily: FONTS.IBMPlexMonoBold,
    color: COLORS.white,
    fontSize: normalize(14),
  },
});
