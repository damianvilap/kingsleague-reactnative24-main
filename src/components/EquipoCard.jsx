import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

export default function EquipoCard({ item }) {
    return (
        <View style={styles.row}>
            <Image source={{ uri: item.logo }} style={styles.logo} />
            <Text style={styles.teamName}>{item.nombre}</Text>
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
