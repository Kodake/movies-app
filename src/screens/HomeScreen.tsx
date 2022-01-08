import React from 'react'
import { ActivityIndicator, Dimensions, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MoviePoster from '../components/MoviePoster';
import useMovies from '../hooks/useMovies';
import Carousel from 'react-native-snap-carousel';

const { width: windowWidth } = Dimensions.get('window')

const HomeScreen = () => {

    const { peliculasEnCine, isLoading } = useMovies();
    const { top } = useSafeAreaInsets();

    if (isLoading) {
        return (
            <View style={styles.activityStyle}>
                <ActivityIndicator color='red' size={100} />
            </View>
        )
    }

    return (
        <View style={{ marginTop: top + 20 }}>
            {/* <MoviePoster
                movie={peliculasEnCine[0]}
            /> */}

            <View style={{ height: 440 }}>
                <Carousel
                    data={peliculasEnCine}
                    renderItem={({ item }: any) => <MoviePoster
                        movie={item}
                    />}
                    sliderWidth={windowWidth}
                    itemWidth={300}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    activityStyle: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    }
})

export default HomeScreen;
