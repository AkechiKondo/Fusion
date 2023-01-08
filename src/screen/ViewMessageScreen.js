import { View, Text } from 'react-native'
import React from 'react'
import { Button, Input } from '@rneui/themed';

export default function ViewMessageScreen(route, navigation) {
  const msg = route.params;

  return (
    <View>
      <View style={{flexDirection: 'row-reverse'}}>
        <Button
          title="Close"
          icon={{
              name: 'close',
              type: 'font-awesome',
              size: 15
          }}
          iconContainerStyle={{ marginRight: 3 }}
          onPress={navigation.goBack()}
        />
      </View>
      <View style={styles.rowContainer}>
        <Text>From</Text>
        <Input value={msg.from_address} />
      </View>
      <View style={styles.rowContainer}>
        <Text>Received</Text>
        <Input value={msg.queue_time} />
      </View>
      <View styel={styles.columnContainer}>
        <Text>Message</Text>
        <Input value={msg.message} />
        msg.priority && <Text>
          This message was sent with <Text style={{color: '#f00'}}>High Priority!</Text>
        </Text>
      </View>
      <View style={styles.rowReverseContainer}>
      <Button
        title="Reply"
        icon={{
            name: 'reply',
            type: 'font-awesome',
            size: 15
        }}
        iconContainerStyle={{ marginRight: 3 }}
        onPress={() => {navigation.navigate("NewMessage", msg)}}
      /> 
      <Button
        title="Delete"
        icon={{
            name: 'trash',
            type: 'font-awesome',
            size: 15
        }}
        iconContainerStyle={{ marginRight: 3 }}
        onPress={() => {
          
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
  rowContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
  },
  columnContainer: {
    flexDirection: 'column',
  },
  rowReverseContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center'
  }
});
