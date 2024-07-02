import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES, images} from '../constants';
import normalize from '../utils/helpers/normalize';

// components
import Header from '../components/Header';
import SportCard from '../components/SportCard';
import GuideCard from '../components/GuideCard';
import BookButton from '../components/BookButton';

const Volcano = ({navigation, route}) => {
  const TOP_SPORTS = [
    {
      title: 'Maui',
      image: images.maui,
    },
    {
      title: 'Kauai',
      image: images.kauai,
    },
    {
      title: 'Honolulu',
      image: images.honolulu,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <ImageBackground
          style={styles.hoarding}
          imageStyle={{resizeMode: 'cover'}}
          source={images.volcano}>
          <Text style={[styles.hoardingTxt, {color: COLORS.white}]}>
            Volcano
          </Text>
        </ImageBackground>

        <Text // description
          style={[styles.desc, {marginBottom: SIZES.paddingHuge}]}>
          Volcanic conditions can change at any time. The Hawaiian Volcano
          Observatory (HVO) is responsible for monitoring the volcanoes in
          Hawaii. The HVO is one of five USGS Volcano Observatories that monitor
          volcanoes within the United States.
        </Text>

        {/* TOP SPORTS */}

        <>
          <Text style={styles.sectionHead}>Top sports</Text>
          {TOP_SPORTS.map((item, index) => (
            <SportCard key={index} {...{...item, index}} />
          ))}
        </>

        <View style={styles.low}>
          <>
            <Text style={[styles.sectionHead, {marginTop: SIZES.paddingLg}]}>
              Travel Guide
            </Text>
            <GuideCard />
          </>
        </View>
      </ScrollView>
      <BookButton />
    </SafeAreaView>
  );
};

export default Volcano;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  hoarding: {
    width: SIZES.width,
    height: SIZES.height * 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SIZES.paddingHuge,
  },
  hoardingTxt: {
    fontFamily: FONTS.IBMPlexMonoBold,
    textAlign: 'center',
    fontSize: normalize(43),
    color: COLORS.white,
  },
  desc: {
    fontSize: normalize(15),
    fontFamily: FONTS.IBMPlexMonoRegular,
    color: COLORS.black,
    marginBottom: normalize(10),
    paddingHorizontal: SIZES.paddingSm,
  },
  sectionHead: {
    fontFamily: FONTS.IBMPlexMonoBold,
    fontSize: normalize(15),
    paddingHorizontal: SIZES.paddingSm,
    color: COLORS.black,
    marginBottom: SIZES.paddingSm,
  },
  low: {
    width: SIZES.width,
    backgroundColor: COLORS.primary + 10,
    paddingVertical: SIZES.paddingHuge,
    paddingBottom: normalize(140),
    marginTop: SIZES.paddingHuge * 2,
  },
});
