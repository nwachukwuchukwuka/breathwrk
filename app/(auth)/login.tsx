import { useAuth } from '@/context/AuthContext';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

const Divider = ({ text }: { text: string }) => (
    <View className="flex-row items-center w-full my-6">
        <View className="flex-1 h-px bg-gray-200 " />
        <Text className="text-white/70 mx-4 text-lg font-bold">{text}</Text>
        <View className="flex-1 h-px bg-gray-200" />
    </View>
);

const LoginScreen = () => {
    const router = useRouter();
    const scale = useSharedValue(1)
    const opacity = useSharedValue(1)
    const [isLoginModalVisible, setLoginModalVisible] = useState(false);
    const { setIsShowingSplash } = useAuth();



    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }],
    }))


    useEffect(() => {
        scale.value = withRepeat(
            withTiming(3, { duration: 3000 }),
            -1,
            true
        ),
            opacity.value = withRepeat(
                withTiming(0, { duration: 2000 }),
                -1,
                true
            )
    }, []);

    const gradientColors = ['#004d00', '#006400', '#00a000'] as const;


    return (
        <View className='flex-1'>
            <LinearGradient
                colors={gradientColors}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{ flex: 1 }}
            >

                <View className="flex-1 bg-black/70 p-6 pt-0">
                    <SafeAreaView className="flex-1 justify-between">
                        {/* Header */}
                        <View className="flex-row justify-between items-center mb-8">
                            <TouchableOpacity onPress={() => {
                                router.back()
                                setIsShowingSplash(false)
                            }}
                                className="p-2 -ml-2">
                                <Feather name="arrow-left" size={24} color="white" />
                            </TouchableOpacity>
                            <Text className="text-white text-lg font-bold tracking-wider">breathwrk</Text>
                            <TouchableOpacity onPress={() => router.replace('/GetStartedGoals')}>
                                <Text className="text-white/80 text-base">Skip</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Main Content */}
                        <View className="items-center gap-[50px]">
                            <Text className="text-white text-3xl font-bold text-center leading-tight">
                                Backed by neuroscience{'\n'}used by millions
                            </Text>

                            {/* Concentric Circles Graphic */}
                            <View
                                className=' bg-white/5 rounded-full justify-center items-center relative'
                                style={{
                                    width: 300,
                                    height: 300,

                                }}
                            >

                                <Animated.View
                                    className=" bg-white/10 rounded-full absolute "
                                    style={[
                                        {
                                            width: 100,
                                            height: 100,
                                        }
                                        , animatedStyle]}>


                                </Animated.View>
                                <View
                                    className=' rounded-full bg-white/20 absolute'
                                    style={{
                                        width: 99,
                                        height: 99,
                                    }}

                                />
                            </View>

                        </View>

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

                            <TouchableOpacity onPress={() => setLoginModalVisible(true)} className="items-center pb-10">
                                <Text className="text-gray-400 text-2xl">
                                    Have another account?
                                </Text>
                                <Text className="text-white text-xl">
                                    Login
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </SafeAreaView>
                </View>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isLoginModalVisible}
                    onRequestClose={() => {
                        setLoginModalVisible(!isLoginModalVisible);
                    }}>
                    <View className="flex-1 justify-end bg-black/50">
                        <View className="h-[92%] w-full bg-[#55584A] p-6 rounded-t-2xl">
                            <SafeAreaView className="flex-1">
                                {/* Modal Header */}
                                <View className="flex-row items-center mb-24">
                                    <TouchableOpacity onPress={() => setLoginModalVisible(false)} className="absolute z-10 p-1">
                                        <Feather name="arrow-left" size={24} color="white" />
                                    </TouchableOpacity>
                                    <Text className="text-white text-xl font-bold flex-1 text-center">Login</Text>
                                </View>

                                {/* Login Form */}
                                <View>
                                    <TextInput
                                        placeholder="Email"
                                        placeholderTextColor="#D3D3D3"
                                        className="text-white border-b border-gray-400 pb-3 mb-8 text-base"
                                        keyboardType="email-address"
                                        autoCapitalize="none"
                                    />
                                    <TextInput
                                        placeholder="Password"
                                        placeholderTextColor="#D3D3D3"
                                        className="text-white border-b border-gray-400 pb-3 mb-8 text-base"
                                        secureTextEntry
                                    />

                                    <TouchableOpacity
                                        className="bg-white rounded-full py-4 items-center mt-10"
                                        onPress={() => {
                                            // Handle login logic here
                                            setLoginModalVisible(false); // Close modal on login attempt
                                        }}
                                    >
                                        <Text className="text-black text-lg font-bold">Log in</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity className="items-center mt-6">
                                        <Text className="text-white font-semibold">Reset Password</Text>
                                    </TouchableOpacity>
                                </View>
                            </SafeAreaView>
                        </View>
                    </View>
                </Modal>
            </LinearGradient>


        </View>

    );
};

export default LoginScreen;