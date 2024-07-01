import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES, images} from '../constants';
import normalize from '../utils/helpers/normalize';

// components
import Header from '../components/Header';
import HighlightCard from '../components/HighlightCard';
import CategoryCard from '../components/CategoryCard';
import GuideCard from '../components/GuideCard';
import BookButton from '../components/BookButton';

const Home = ({navigation, route}) => {
  const HIGHLIGHTS = [
    {
      image: images.surfing,
      title: 'Surfing',
      desc: 'Best Hawaiian islands for surfing.',
      onPress: () => navigation.navigate('Surfing'),
    },
    {
      image: images.hula,
      title: 'Hula',
      desc: 'Try it yourself.',
      onPress: () => navigation.navigate('Hula'),
    },
    {
      image: images.volcano,
      title: 'Volcano',
      desc: 'Volcanic conditions can change at any time.',
      onPress: () => navigation.navigate('Volcano'),
    },
  ];

  const CATEGORIES = [
    {title: 'Adventure', onPress: () => {}},
    {title: 'Culinary', onPress: () => {}},
    {title: 'Eco-tourism', onPress: () => {}},
    {title: 'Family', onPress: () => {}},
    {title: 'Sport', onPress: () => {}},
  ];

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{}}
        showsVerticalScrollIndicator={false}>
        <Header />

        {/* HOARDING */}

        <ImageBackground
          style={styles.hoarding}
          imageStyle={{resizeMode: 'cover'}}
          source={images.welcomeHwi}>
          <Text style={[styles.hoardingTxt, {color: COLORS.white + 90}]}>
            Welcome
          </Text>
          <Text style={[styles.hoardingTxt, {marginBottom: normalize(25)}]}>
            to Hawaii
          </Text>
        </ImageBackground>

        {/* HIGHLIGHTS */}
        <>
          <Text style={styles.sectionHead}>Highlights</Text>
          <FlatList
            data={HIGHLIGHTS}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) =>
              HighlightCard({...item, index, navigation})
            }
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.highList}
            contentContainerStyle={{paddingLeft: SIZES.paddingSm}}
          />
        </>

        <View style={styles.low}>
          {/* CATEGORIES */}

          <>
            <Text style={styles.sectionHead}>Categories</Text>
            {CATEGORIES.map((category, index) => (
              <CategoryCard key={index} {...{...category, navigation}} />
            ))}
          </>

          {/* TRAVEL GUIDE */}

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

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hoarding: {
    width: SIZES.width,
    height: SIZES.height * 0.6,
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
  sectionHead: {
    fontFamily: FONTS.IBMPlexMonoBold,
    fontSize: normalize(15),
    paddingHorizontal: SIZES.paddingSm,
    color: COLORS.black,
    marginBottom: SIZES.paddingSm,
  },
  highList: {
    width: SIZES.width,
    marginBottom: SIZES.paddingHuge,
  },
  low: {
    width: SIZES.width,
    backgroundColor: COLORS.primary + 10,
    paddingVertical: SIZES.paddingHuge,
    paddingBottom: normalize(145),
  },
});
