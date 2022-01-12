import React, { useRef } from 'react'
import { Animated, Button, StyleSheet, View } from 'react-native'
import useFade from '../hooks/useFade';

const FadeScreen = () => {

    const { opacity, fadeIn, fadeOut } = useFade();

    return (
        <View style={styles.parentFade}>
            <Animated.View style={{
                backgroundColor: '#084F6A',
                width: 150,
                height: 150,
                borderColor: 'white',
                borderWidth: 10,
                marginBottom: 10,
                opacity: opacity
            }} />

            <Button
                title='FadeIn'
                onPress={() => fadeIn()}
            />

            <Button
                title='FadeOut'
                onPress={() => fadeOut()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    parentFade: {
        flex: 1,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FadeScreen;
