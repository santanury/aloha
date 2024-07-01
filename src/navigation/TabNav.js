import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import normalize from '../utils/helpers/normalize';
import {COLORS, FONTS, icons} from '../constants';

import Home from '../screens/Home';
import Hula from '../screens/Hula';
import Surfing from '../screens/Surfing';
import Volcano from '../screens/Volcano';

const Tab = createBottomTabNavigator();

const TAB_ARRAY = [
  {
    name: 'Home',
    component: Home,
    icon: icons.home,
  },
  {
    name: 'Hula',
    component: Hula,
    icon: icons.hula,
  },
  {
    name: 'Surfing',
    component: Surfing,
    icon: icons.surfing,
  },
  {
    name: 'Volcano',
    component: Volcano,
    icon: icons.volcano,
  },
];

const TabButton = props => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);

  return (
    <TouchableOpacity // tab button
      onPress={onPress}
      activeOpacity={1}
      style={styles.tabButton}>
      <View style={styles.tabButton}>
        <Image // tab icon
          ref={viewRef}
          duration={500}
          resizeMode="contain"
          style={[
            styles.tabIcon,
            {tintColor: focused ? COLORS.primary : COLORS.secondary},
          ]}
          source={item.icon}
        />
        <Text // tab name
          style={[
            styles.tabName,
            {
              color: focused ? COLORS.primary : COLORS.secondary,
            },
          ]}>
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const TabNav = () => {
  return (
    <Tab.Navigator //
      initialRouteName={'Home'}
      screenOptions={styles.screenOptions}
      backBehavior="history">
      {TAB_ARRAY.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.name}
          component={item.component}
          options={{
            tabBarLabel: item.name,
            tabBarIcon: ({focused, color}) => (
              <Image // default icon
                resizeMode="contain"
                style={[styles.tabIcon, {...(focused && {tintColor: color})}]}
                source={item.icon}
              />
            ),
            tabBarButton: props => <TabButton {...props} item={item} />,
          }}
        />
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
      height: normalize(70),
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: COLORS.white,
    },
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: normalize(70),
  },
  tabIcon: {
    width: normalize(20),
    height: normalize(20),
    resizeMode: 'contain',
  },
  tabName: {
    fontSize: normalize(10),
    fontFamily: FONTS.IBMPlexMonoSemiBold,
  },
});
