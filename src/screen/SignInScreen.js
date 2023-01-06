import * as React from 'react'
import { View, ScrollView } from 'react-native';
import { Text, Input, Button } from '@rneui/themed';

import { logIn } from './../api/login';
import { DataProvider } from '../provider/DataProvider';

export default function SignInScreen({navigation}) {
    const [checkRemember, setCheckRemember] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [ data, setData ] = useContext(DataProvider);
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.formView}>
                <View style={styles.titleView}>
                    <Text h3>
                        Please enter your login information
                    </Text>
                    <View>
                        <Input 
                            placeholder="Username*" 
                            onChangeText={value => setUsername(value)}
                        />
                        <Input 
                            placeholder="Password*" 
                            onChangeText={value => setPassword(value)}
                        />
                        <View style={{ flexDirection: 'row' }}>
                            <CheckBox
                                center
                                title="Click Here"
                                checked={check1}
                                onPress={() => setCheckRemember(checkRemember)}
                            />
                            <Button 
                                title={'LOG IN'}
                                onPress={() => {
                                    const res = logIn(username, password);
                                    if(res.success) {
                                        setData({
                                            ...data,
                                            token: res.data.token
                                        });
                                        navigation.navigate('MainFrame');
                                    }
                                }}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    titleView: {
        alignItems: 'center',
        flex: 1
    },
    formView: {
        alignItems: 'center'
    }
  });