import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Redirect, Tabs } from 'expo-router';
import React from 'react';
import { useAuth } from '../../context/AuthContext';


export default function TabsLayout() {
    const { isAuthenticated } = useAuth();
    if (!isAuthenticated) return <Redirect href="/get-started" />



    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    backgroundColor: 'rgba(13, 13, 13, 0.2)', // 70% opaque
                    borderTopWidth: 0,
                    position: 'absolute', // optional, makes transparency visible above content
                    elevation: 0,         // removes shadow on Android
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <Entypo name="circle" size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="explore"
                options={{
                    title: 'Explore',
                    tabBarIcon: ({ color }) => <Feather name="search" size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="activity"
                options={{
                    title: 'Activity',
                    tabBarIcon: ({ color }) => <FontAwesome6 name="chart-simple" size={24} color={color} />,
                }}
            />
        </Tabs>
    );
}