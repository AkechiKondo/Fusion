import { Button } from '@rneui/base';
import * as React from 'react'
import { View, Text, ScrollView } from 'react-native';


export default function MessageListScreen() {

    return (
        <View>
            <ScrollView>
                
            </ScrollView>
            <View style={styles.buttonView}>
                <Button>
                    
                </Button>
            </View>
        </View>
    )
}

const styles  = StyleSheet.create({
    buttonView : {
        flex: 1,
        flexDirection: 'row',
    }
});