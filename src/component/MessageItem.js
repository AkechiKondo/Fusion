import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

export default function MessageItem(msg) {
  return (
    <View>
      <Text style={styles.title}>msg.message</Text>
      <View style={styles.bottomView}>
        <Text>
          msg.time
        </Text>
        <Text>
          msg.status_text
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 15
  },
  bottomView: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
})