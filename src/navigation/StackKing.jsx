import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import equipo from '../screen/equipo';
import kingsleague from '../screen/kingsleague';

const KingStack = createNativeStackNavigator();

export default function StackKing() {
    return (
        <KingStack.Navigator>
            <KingStack.Screen
                name="kingsleague"
                component={kingsleague}
            />
            <CharacterStack.Screen
                name="equipo"
                component={equipo}
            />
        </KingStack.Navigator>
    )
}