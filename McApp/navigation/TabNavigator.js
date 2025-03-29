import React from 'react';
import Home from '../screens/Home';
import Juegos from '../screens/juegos';
import Lealtad from '../screens/Lealtad';
import Pedido from '../screens/Pedido';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Inico" component={Home} 
            options={{
                tabBarIcon: () =>(
                    <Ionicons name="home-outline" size={30} color={'#62bec0'}/>
                )
            }} />
            <Tab.Screen name="Lealtad" component={Lealtad} 
            options={{
                tabBarIcon: () =>(
                    <Ionicons name="heart-half-outline" size={30} color={'#62bec0'}/>
                )
            }}/>
            <Tab.Screen name="Pedido" component={Pedido} 
            options={{
                tabBarIcon: () =>(
                    <Ionicons name="fast-food-outline" size={29} color={'#62bec0'}/>
                )
            }}/>
            <Tab.Screen name="Juegos" component={Juegos} 
            options={{
                tabBarIcon: () =>(
                    <Ionicons name="game-controller-outline" size={25} color={'#62bec0'}/>
                )
            }}/>
        </Tab.Navigator>
    );
};

export default TabNavigator;
