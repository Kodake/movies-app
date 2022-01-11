import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { Movie } from "../interfaces/movie.interface";
import DetailScreen from "../screens/DetailScreen";
import HomeScreen from "../screens/HomeScreen";

export type RootStackParams = {
    HomeScreen: undefined;
    DetailScreen: Movie;
}

const Stack = createStackNavigator<RootStackParams>();

const Navigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                // gestureEnabled: true,
            }}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen
                options={{
                    headerShown: true,
                    headerTitle: '',
                    headerTransparent: true,
                    headerTintColor: 'white'
                }}
                name="DetailScreen" component={DetailScreen} />
        </Stack.Navigator>
    );
}

export default Navigation;