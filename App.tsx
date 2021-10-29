import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from './src/feature/splash/SplashScreen';
import FeedScreen from './src/feature/Feed/screen/FeedScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Main" component={FeedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
