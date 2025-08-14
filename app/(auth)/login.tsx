import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
import React from 'react';
import { ImageBackground, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

const Divider = ({ text }: { text: string }) => (
    <View className="flex-row items-center w-full my-6">
        <View className="flex-1 h-px bg-gray-200" />
        <Text className="text-white/70 mx-4 text-lg">{text}</Text>
        <View className="flex-1 h-px bg-gray-200" />
    </View>
);

const LoginScreen = () => {
    const router = useRouter();

    return (
        <ImageBackground
            source={require('../../assets/images/explore-bg.png')}
            className="flex-1"
        >
            <View className="flex-1 bg-black/80 p-6">
                <SafeAreaView className="flex-1 justify-between">
                    {/* Header */}
                    <View className="flex-row justify-between items-center">
                        <TouchableOpacity onPress={() => router.back()} className="p-2 -ml-2">
                            <Feather name="arrow-left" size={24} color="white" />
                        </TouchableOpacity>
                        <Text className="text-white text-lg font-bold tracking-wider">breathwrk</Text>
                        <TouchableOpacity onPress={() => router.replace('/explore')}>
                            <Text className="text-white/80 text-base">Skip</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Main Content */}
                    <View className="items-center">
                        <Text className="text-white text-3xl font-bold text-center leading-tight">
                            Backed by neuroscience{'\n'}used by millions
                        </Text>

                        {/* Concentric Circles Graphic */}
                        <View className="my-16 items-center justify-center">
                            <View className="w-60 h-60 bg-white/5 rounded-full justify-center items-center">
                                <View className="w-44 h-44 bg-white/10 rounded-full justify-center items-center">
                                    <View className="w-28 h-28 bg-white/20 rounded-full" />
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Login Options */}
                    <View>
                        <Divider text="Continue with" />

                        <View className="flex-row justify-center gap-6">
                            <TouchableOpacity className="bg-white w-20 h-20 rounded-full justify-center items-center">
                                <FontAwesome name="apple" size={32} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity className="bg-white w-20 h-20 rounded-full justify-center items-center">
                                <FontAwesome name="google" size={28} color="black" />
                            </TouchableOpacity>
                        </View>

                        <Divider text="Or" />

                        <TouchableOpacity className="items-center pb-10">
                            <Text className="text-gray-400 text-lg">
                                Have another account?
                            </Text>
                            <Text className="text-white text-lg">
                                Login
                            </Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </View>
        </ImageBackground>
    );
};

export default LoginScreen;