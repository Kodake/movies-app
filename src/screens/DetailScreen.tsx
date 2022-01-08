import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button, Text, View } from 'react-native'

const DefailScreen = () => {

    const navigation: any = useNavigation();
    return (
        <View>
            <Text>DefailScreen</Text>

            <Button
                title="Ir a HomeScreen"
                onPress={() => navigation.navigate('HomeScreen')}
            />
        </View>
    )
}

export default DefailScreen;
