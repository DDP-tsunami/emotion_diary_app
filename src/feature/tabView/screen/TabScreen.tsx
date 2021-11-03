import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import FeedScreen from '@src/feature/emotion/screen/FeedScreen';
import MyPageScreen from '@src/feature/emotion/screen/MyPageScreen';
import AddEmotionScreen from '@src/feature/emotion/screen/AddEmotionScreen';
import AlarmListScreen from '@src/feature/alarm/screen/AlarmListScreen';
import FriendListScreen from '@src/feature/friend/screen/FriendListScreen';

const TabView = createBottomTabNavigator();

const TabScreen = () => {
  return (
    <TabView.Navigator screenOptions={{headerShown: false}}>
      <TabView.Screen name="MyPage" component={MyPageScreen} />
      <TabView.Screen name="Feed" component={FeedScreen} />
      <TabView.Screen name="Emotion/Add" component={AddEmotionScreen} />
      <TabView.Screen name="Friends" component={FriendListScreen} />
      <TabView.Screen name="Alarm" component={AlarmListScreen} />
    </TabView.Navigator>
  );
};

export default TabScreen;
