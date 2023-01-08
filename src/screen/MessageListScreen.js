import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { DataContext } from './../provider/DataProvider';
import { getMsgList } from './../api/getMsgList';
import MessageItem from '../component/MessageItem';
import { FlatList } from 'react-native';
import { StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';

export default function MessageListScreen(navigation) {
    const {
        msgList: [msgList, setMsgList],
        userid: [userid, setUserid]
    } = useContext(DataContext);
    useEffect(() => {
        refresh();
    }, []);
    const renderItem = ({ msg }) => (
        <MessageItem msg={msg} onPress={() => {
            navigation.navigate('ShowMessage', msg);    
        }} />
    );
    const refresh = () => {
        const res = getMsgList(userid);
        setMsgList(res.events);
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={msgList}
                renderItem={renderItem} 
                keyExtractor={(msg) => msg.message_id}  
            >
            </FlatList> 
            <View style={styles.bottomContainer}>
                <Button
                    title="Refresh"
                    icon={{
                        name: 'refresh',
                        type: 'font-awesome',
                        size: 15
                    }}
                    iconContainerStyle={{ marginRight: 3 }}
                    onPress={refresh}
                />
                <Button
                    title="Write a new Message"
                    icon={{
                        name: 'envelope',
                        type: 'font-awesome',
                        size: 15
                    }}
                    iconContainerStyle={{ marginRight: 3 }}
                    onPress={() => { 
                        navigation.navigate('NewMessage');
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column'
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})