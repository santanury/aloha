import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import normalize from '../utils/helpers/normalize';

import Home from '../screens/Home';
import Hula from '../screens/Hula';
import Surfing from '../screens/Surfing';
import Volcano from '../screens/Volcano';

const Tab = createBottomTabNavigator();

const TAB_ARRAY = [
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'Hula',
    component: Hula,
  },
  {
    name: 'Surfing',
    component: Surfing,
  },
  {
    name: 'Volcano',
    component: Volcano,
  },
];

const TabNav = () => {
  return (
    <Tab.Navigator //
      initialRouteName={'Home'}
      screenOptions={styles.screenOptions}
      backBehavior="history">
      {TAB_ARRAY.map((tab, index) => (
        <Tab.Screen key={index} name={tab.name} component={tab.component} />
      ))}
    </Tab.Navigator>
  );
};

export default TabNav;

const styles = StyleSheet.create({
  screenOptions: {
    headerShown: false,
    lazy: true,
    unmountOnBlur: true,
    tabBarStyle: {
      // height: normalize(70),
      // position: 'absolute',
      // bottom: 0,
      // left: 0,
      // right: 0,
      // borderTopRightRadius: normalize(20),
      // borderTopLeftRadius: normalize(20),
      // backgroundColor: COLORS.appBg1,
    },
  },
});
