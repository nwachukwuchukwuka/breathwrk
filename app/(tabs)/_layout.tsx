import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Redirect, Tabs } from 'expo-router';
import React from 'react';

export default function TabsLayout() {
    const isAuthenticated = false
    if (!isAuthenticated) return <Redirect href="/get-started" />

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    backgroundColor: '#0d0d0d',
                    borderTopWidth: 0,
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