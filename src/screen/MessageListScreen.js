import { View, Text } from 'react-native'
import React from 'react'
import { DataContext } from './../provider/DataProvider';

export default function MessageListScreen() {
    useContext(DataContext);
    return (
        <View>
           <Text>MessageListScreen</Text>
        </View>
    )
}