import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MessageListScreen from '../screen/MessageListScreen';
import NewMessageScreen from '../screen/NewMessageScreen';
import ViewMessageScreenn from '../screen/ViewMessageScreenn';

const Stack = createNativeStackNavigator();

export default function InboxContainer() {
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="MessageList" component={MessageListScreen} />
            <Stack.Screen name="NewMessage" component={NewMessageScreen} />
            <Stack.Screen name="ViewMessage" component={ViewMessageScreenn} />
        </Stack.Navigator>
    </NavigationContainer>
}