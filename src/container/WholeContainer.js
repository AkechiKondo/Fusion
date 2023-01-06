import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DataContext } from './../provider/DataProvider';

const Stack = createNativeStackNavigator()

export default function WholeContainer() {
    const [ data, setData ] = useContext(DataContext);
    return (
        <NavigationContainer>
            <Stack.Navigator>
            {
                data.isSignout ? (
                <Stack.Screen name="SignIn" component={SignInScreen} />
                ) : (
                <Stack.Screen name="MainFrame" component={MainFrame} />
                )
            }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

        