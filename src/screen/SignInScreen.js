import { useState, useContext } from 'react'
import React from 'react'
import { StyleSheet, View, ScrollView, TextInput } from 'react-native';
import { Text, Input, Button, CheckBox, Icon } from '@rneui/themed';


import { logIn } from './../api/login';
import { DataContext } from '../provider/DataProvider';

export default function SignInScreen({navigation}) {
    const [checkRemember, setCheckRemember] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {userToken: [userToken, setUserToken]} = useContext(DataContext);
    return (
        <View>
            {/* <View style={styles.formView}>
                <View style={styles.titleView}>
                    <Text h4 style={{textAlign: 'center'}}>
                        Please enter your login information
                    </Text>
                    <View> */}
                        <TextInput 
                            placeholder="Username*" 
                            onChangeText={value => setUsername(value)}
                            value={username}
                        />
                        {/* <Input 
                            placeholder="Password*" 
                            onChangeText={value => setPassword(value)}
                            value={password}
                        />
                        <View style={{ flexDirection: 'row' }}>
                            <CheckBox
                                center
                                title="Remember Me"
                                checked={checkRemember}
                                checkedIcon="dot-circle-o"
                                uncheckedIcon="circle-o"  
                                onPress={() => setCheckRemember(!checkRemember)}
                            />
                            <Button 
                                title={'LOG IN'}
                                onPress={() => {
                                    const res = logIn(username, password);
                                    if(res.success) {
                                        setUserToken(res.data.token);
                                        navigation.navigate('MainFrame');
                                    }
                                }}
                            />
                        </View>
                    </View>
                </View>
            </View> */}
        </View>
        
    )
}

const styles = StyleSheet.create({
    titleView: {
        top: 50
    },
    formView: {
       alignContent: 'center'
    }
  });