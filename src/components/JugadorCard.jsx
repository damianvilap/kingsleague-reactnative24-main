import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

export default function JugadorCard({ item }) {
    return (
        <View style={styles.playerItem}>
            <Image source={{ uri: item.foto }} style={styles.photo} />
            <View style={styles.playerInfo}>
                <Text style={styles.playerName}>{item.nombre}</Text>
                <Text style={styles.position}>{item.posicion}</Text>
            </View>
            <View style={styles.media}>
                <Text style={styles.mediaText}>Media {item.media}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 80,
        height: 80
    },
    row: {
        flex: 1,
        flexDirection: "row",
        margin: 10
    },
    column: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    text: {
        fontSize: 18
    }
});