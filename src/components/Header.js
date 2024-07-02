import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES, images} from '../constants';
import normalize from '../utils/helpers/normalize';

const Header = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.headerImg} source={images.aloha} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: SIZES.width,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: normalize(15),
    backgroundColor: COLORS.white,
  },
  headerImg: {
    width: SIZES.width * 0.6,
    height: SIZES.height * 0.05,
    resizeMode: 'contain',
  },
});
