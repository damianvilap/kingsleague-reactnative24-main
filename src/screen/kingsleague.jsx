import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { getTeams } from '../services/apikl';
import EquipoCard from '../components/EquipoCard';

export default function kingsleague() {
    const [teams, setTeams] = useState([])
    useEffect(() => {
        getTeams().then((data) => {
            console.log(data)
            setTeams(data)
        })
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={teams}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.teamItem} onPress={() => navigation.navigate('Players', { teamId: item.id, teamName: item.nombre })}>
                        <EquipoCard key={item.id} item={teams} />
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    teamItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    logo: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    teamName: {
        fontSize: 18,
    },
});