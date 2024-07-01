import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES, images} from '../constants';
import normalize from '../utils/helpers/normalize';

const GuideCard = props => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.name}>Hadwin Malano</Text>
        <Text style={styles.detail}>Guide since 2012</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => {}} style={styles.btn}>
            <Text style={styles.contactTxt}>Contact</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Image style={styles.img} source={images.hadwin} />
    </View>
  );
};

export default GuideCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    paddingHorizontal: SIZES.paddingMd,
    paddingVertical: SIZES.paddingSm,
    marginHorizontal: SIZES.paddingMd,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: normalize(7),
    overflow: 'hidden',
  },
  left: {flex: 1, marginBottom: normalize(5)},
  name: {
    fontFamily: FONTS.IBMPlexMonoSemiBold,
    color: COLORS.black,
    fontSize: normalize(20),
    marginBottom: normalize(5),
  },
  detail: {
    fontFamily: FONTS.IBMPlexMonoRegular,
    color: COLORS.black,
    fontSize: normalize(15),
    marginBottom: SIZES.paddingLg,
  },
  btn: {
    borderWidth: normalize(1),
    borderColor: COLORS.primary,
    borderRadius: normalize(7),
    paddingHorizontal: SIZES.paddingMd,
    paddingVertical: normalize(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactTxt: {
    fontFamily: FONTS.IBMPlexMonoBold,
    color: COLORS.primary,
    fontSize: normalize(15),
  },
  img: {
    height: normalize(60),
    width: normalize(60),
    resizeMode: 'contain',
    borderRadius: normalize(100),
  },
});
