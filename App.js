import 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import StackNav from './src/navigation/StackNav';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <StackNav />
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({});
