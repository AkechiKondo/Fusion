import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Image, TextInput } from 'react-native';

import LogoImg from '../asset/img/logo.gif'

export default function Header() {
    const [username, setUsername] = useState('');
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Fusion Mobile
            </Text>
            <TextInput 
                placeholder="Username*" 
                onChangeText={value => setUsername(value)}
                value={username}
            />
            <Image source={LogoImg} style={styles.img} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#6f90c5',
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        textAlign: 'left',
        color: 'white',
        fontSize: 25
    },
    img: {
    }
});