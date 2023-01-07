import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import NotificationScreen from '../screen/NotificationScreen';
import InboxContainer from './InboxContainer';
import SettingsScreen from '../screen/SettingsScreen';


const Tab = createBottomTabNavigator();

export default function MainFrame() {
    return (
        <NavigationContainer independent={true} >
            <Tab.Navigator screenOptions={{
                headerShown: false
            }}>
                <Tab.Screen name="Inbox" component={InboxContainer} />
                <Tab.Screen name="Notification" component={NotificationScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}