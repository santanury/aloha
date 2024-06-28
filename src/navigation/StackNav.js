import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import TabNav from './TabNav';
import Home from '../screens/Home';
import Hula from '../screens/Hula';
const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        options={{gestureEnabled: false}}
        screenOptions={{headerShown: false}}
        initialRouteName="Home">
        <Stack.Screen name="TabNav" component={TabNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNav;
