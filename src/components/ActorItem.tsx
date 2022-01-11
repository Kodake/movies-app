import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Cast } from '../interfaces/credits.interface'

interface Props {
    actor: Cast;
}

const ActorItem = ({ actor }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

    return (
        <View style={styles.rowStyle}>
            {
                actor.profile_path && (
                    <Image
                        source={{ uri }}
                        style={styles.imageStyle}
                    />
                )
            }


            <View style={styles.actorInfo}>
                <Text style={styles.actorName}>{actor.name}</Text>

                <Text style={styles.character}>{actor.character}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    rowStyle: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        height: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 18,
        marginHorizontal: 20,
        paddingRight: 15
    },
    imageStyle: {
        width: 50,
        height: 50,
        borderRadius: 10
    },
    actorInfo: {
        marginLeft: 10,
        marginTop: 4
    },
    actorName: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    character: {
        fontSize: 16,
        opacity: 0.7
    }
})

export default ActorItem;
