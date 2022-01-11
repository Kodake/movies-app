import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import currencyFormatter from 'currency-formatter';

import Icon from 'react-native-vector-icons/Ionicons';
import { Cast } from '../interfaces/credits.interface';
import { MovieFull } from '../interfaces/movie.interface';
import ActorItem from './ActorItem';

interface Props {
    movieFull: MovieFull;
    cast: Cast[];
}

const MovieDetails = ({ movieFull, cast }: Props) => {
    return (
        <>
            {/* Detalles */}
            <View style={styles.details}>
                <View style={styles.detailsRow}>
                    <Icon
                        name='star-outline'
                        color='grey'
                        size={16}
                    />

                    <Text style={styles.average}>{movieFull.vote_average}</Text>

                    <Text style={styles.genres}>
                        - {movieFull.genres.map(g => g.name).join(', ')}
                    </Text>
                </View>

                {/* Historia */}
                <Text style={styles.history}>
                    Historia
                </Text>

                {/* Overview */}
                <Text style={styles.overview}>
                    {movieFull.overview}
                </Text>

                {/* Budget */}
                <Text style={styles.budget}>
                    Presupuesto
                </Text>

                <Text style={styles.budgetCurrency}>
                    {currencyFormatter.format(movieFull.budget, { code: 'USD' })}
                </Text>
            </View>

            <View style={styles.actorsItems}>
                {/* Actores */}
                <Text style={styles.actor}>
                    Actores
                </Text>

                <FlatList
                    data={cast}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <ActorItem actor={item} />}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pinchGestureEnabled={true}
                    style={styles.flatListStyle}
                />

                {/* <ActorItem actor={cast[0]} /> */}
            </View>

            {/* Casting */}
        </>
    )
}

const styles = StyleSheet.create({
    details: {
        marginHorizontal: 20,
    },
    detailsRow: {
        flexDirection: 'row'
    },
    average: {
        marginLeft: 5
    },
    genres: {
        marginLeft: 5
    },
    history: {
        fontSize: 23,
        marginTop: 10,
        fontWeight: 'bold'
    },
    overview: {
        fontSize: 16
    },
    budget: {
        fontSize: 23,
        marginTop: 10,
        fontWeight: 'bold'
    },
    budgetCurrency: {
        fontSize: 18,
    },
    actorsItems: {
        marginTop: 10,
        marginBottom: 100
    },
    actor: {
        fontSize: 23,
        marginTop: 10,
        fontWeight: 'bold',
        marginHorizontal: 20
    },
    flatListStyle: {
        marginTop: 10,
        height: 70
    },
    casting: {

    }
})

export default MovieDetails;
