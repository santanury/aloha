import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const Home = ({navigation, route}) => {
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Hula');
        }}>
        <Text>Home</Text>
      </TouchableOpacity>
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
});
