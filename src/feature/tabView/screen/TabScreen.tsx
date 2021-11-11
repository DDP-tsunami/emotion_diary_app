import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import FeedScreen from '@src/feature/emotion/screen/FeedScreen';
import MyPageScreen from '@src/feature/emotion/screen/MyPageScreen';
import AddEmotionScreen from '@src/feature/emotion/screen/AddEmotionScreen';
import AlarmListScreen from '@src/feature/alarm/screen/AlarmListScreen';
import FriendListScreen from '@src/feature/friend/screen/FriendListScreen';
import MyPageIcon from '../components/icons/MyPageIcon';
import FeedIcon from '../components/icons/FeedIcon';
import AddIcon from '../components/icons/AddIcon';
import FriendIcon from '../components/icons/FriendIcon';
import AlarmIcon from '../components/icons/AlarmIcon';

const TabView = createBottomTabNavigator();

const TabScreen = () => {
  return (
    <TabView.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {position: 'absolute', height: 60},
      }}>
      <TabView.Screen
        name="MyPage"
        component={MyPageScreen}
        options={{
          tabBarIcon: ({focused, size}) => (
            <MyPageIcon fucused={focused} size={size} />
          ),
        }}
      />
      <TabView.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarIcon: ({focused, size}) => (
            <FeedIcon fucused={focused} size={size} />
          ),
        }}
      />
      <TabView.Screen
        name="Emotion/Add"
        component={AddEmotionScreen}
        options={{
          tabBarIcon: ({focused, size}) => (
            <AddIcon fucused={focused} size={size} />
          ),
        }}
      />
      <TabView.Screen
        name="Friends"
        component={FriendListScreen}
        options={{
          tabBarIcon: ({focused, size}) => (
            <FriendIcon fucused={focused} size={size} />
          ),
        }}
      />
      <TabView.Screen
        name="Alarm"
        component={AlarmListScreen}
        options={{
          tabBarIcon: ({focused, size}) => (
            <AlarmIcon fucused={focused} size={size} />
          ),
        }}
      />
    </TabView.Navigator>
  );
};

export default TabScreen;
