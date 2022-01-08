import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { Movie } from '../interfaces/movie.interface';

interface Props {
    movie: Movie;
}

const MoviePoster = ({ movie }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    return (
        <View style={{
            width: 300,
            height: 420,
        }}>
            <Image
                source={{ uri }}
                style={styles.image}
            />
        </View>
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
        shadowRadius: 7,
    }
})

export default MoviePoster;
