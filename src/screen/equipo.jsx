import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { getPlayersByTeam } from '../services/apikl';
import JugadorCard from '../components/JugadorCard';

export default function equipo() {
    const [players, setPlayersbyTeam] = useState([])
    useEffect(() => {
        getPlayersByTeam().then((data) => {
            console.log(data)
            setPlayersbyTeam(data)
        })
    }, [teamId]);




    return (
        <View style={styles.container}>
            <FlatList
                data={players}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <JugadorCard key={item.id} item={players} />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    playerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    photo: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    playerInfo: {
        flex: 1,
    },
    playerName: {
        fontSize: 18,
    },
    position: {
        color: '#888',
    },
    media: {
        backgroundColor: '#f0ad4e',
        padding: 5,
        borderRadius: 3,
    },
    mediaText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
