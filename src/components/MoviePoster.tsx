import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Movie } from '../interfaces/movie.interface';

interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}

const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const navigation: any = useNavigation();

    return (
        <TouchableOpacity 
        onPress={() => navigation.navigate('DetailScreen', movie)}
        activeOpacity={0.65}
        style={{
            width,
            height,
            marginHorizontal: 2,
            paddingBottom: 20,
            paddingHorizontal: 7
        }}>
            <Image
                source={{ uri }}
                style={styles.image}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7
    }
})

export default MoviePoster;
