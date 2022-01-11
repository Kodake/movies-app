import React from 'react'
import { ActivityIndicator, Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MoviePoster from '../components/MoviePoster';
import useMovies from '../hooks/useMovies';
import Carousel from 'react-native-snap-carousel';
import HorizontalSlider from '../components/HorizontalSlider';

const { width: windowWidth } = Dimensions.get('window')

const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
    const { top } = useSafeAreaInsets();

    if (isLoading) {
        return (
            <View style={styles.activityStyle}>
                <ActivityIndicator color='red' size={100} />
            </View>
        )
    }

    return (
        <ScrollView>
            <View style={{ marginTop: top + 20 }}>

                {/* Carousel Principal */}
                <View style={{ height: 440 }}>
                    <Carousel
                        data={nowPlaying!}
                        renderItem={({ item }: any) => <MoviePoster movie={item} />}
                        sliderWidth={windowWidth}
                        itemWidth={300}
                        inactiveSlideOpacity={0.9}
                    />
                </View>

                {/* En Cine */}
                <HorizontalSlider title='En Cine' movies={nowPlaying!} />

                {/* Populares */}
                <HorizontalSlider title='Populares' movies={popular!} />

                {/* Top Rated */}
                <HorizontalSlider title='Top Rated' movies={topRated!} />

                {/* Upcoming */}
                <HorizontalSlider title='Upcoming' movies={upcoming!} />
            </View>
        </ScrollView>
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
