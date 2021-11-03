import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from '@src/common/screen/SplashScreen';
import TabScreen from '@src/feature/tabView/screen/TabScreen';
import LoginScreen from '@src/feature/login/screen/LoginScreen';
import SignUpScreen from '@src/feature/login/screen/SignUpScreen';
import ModifyProfileScreen from '@src/feature/profile/screen/ModifyProfileScreen';

const Stack = createNativeStackNavigator();

const navigaterConfigureation = {headerShown: false};

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={navigaterConfigureation}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Main" component={TabScreen} />
        <Stack.Screen name="Profile" component={ModifyProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
