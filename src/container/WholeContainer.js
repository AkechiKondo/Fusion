import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DataContext } from './../provider/DataProvider';
import MainFrame from './MainContainer';
import SignInScreen from './../screen/SignInScreen';

const Stack = createNativeStackNavigator()

export default function WholeContainer() {
    const {isSignout: [ isSignout, setIsSignout ]} = useContext(DataContext);
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
            {
                !isSignout ? (
                <Stack.Screen name="SignIn" component={SignInScreen} />
                ) : (
                <Stack.Screen name="MainFrame" component={MainFrame} />
                )
            }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

        