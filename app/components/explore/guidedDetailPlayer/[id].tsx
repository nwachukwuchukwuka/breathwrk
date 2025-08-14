import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Slider from '@react-native-community/slider';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ImageBackground, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import InfoModal from './InfoModal';

const PlayerScreen = () => {
    const router = useRouter();
    const { title, guide } = useLocalSearchParams<{ title: string, guide: string }>();
    const [isInfoModalVisible, setInfoModalVisible] = useState(false);

    // State for player controls
    const [isPlaying, setIsPlaying] = useState(true);
    const [isFavorited, setIsFavorited] = useState(false);
    const [progress, setProgress] = useState(0.15); 
    const totalDuration = 301; 
    const formatTime = (seconds: number) => {
        const flooredSeconds = Math.floor(seconds);
        const mins = Math.floor(flooredSeconds / 60);
        const secs = flooredSeconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return (
        <ImageBackground
            // source={require('../../assets/images/explore-bg.png')}
            source={require('../../../../assets/images/explore-bg.png')}
            className="flex-1"
        >
            <View className="flex-1 bg-black/80 p-8 pt-[70px]">
                {/* <Stack.Screen options={{ headerShown: false }} /> */}
                <SafeAreaView className="flex-1 justify-between mb-[80px]">
                    {/* Header */}
                    <View className="flex-row justify-between items-center">
                        <TouchableOpacity onPress={() => router.back()} className="">
                            <Feather name="chevron-left" size={28} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setInfoModalVisible(true)} className="p-2">
                            <Feather name="info" size={24} color="white" />
                        </TouchableOpacity>
                    </View>


                    {/* Player Controls */}
                    <View>
                        {/* Title and Favorite Button */}
                        <View className="flex-row justify-between items-center mb-4">
                            <View>
                                <Text className="text-white text-3xl font-bold">{title}</Text>
                                <Text className="text-white/70 text-lg">with {guide}</Text>
                            </View>
                            <TouchableOpacity onPress={() => setIsFavorited(p => !p)}>
                                <FontAwesome
                                    name={isFavorited ? "heart" : "heart-o"}
                                    size={24}
                                    color="white"
                                />
                            </TouchableOpacity>
                        </View>

                        {/* Progress Slider */}
                        <Slider
                            style={{ width: '100%', height: 40 }}
                            minimumValue={0}
                            maximumValue={1}
                            value={progress}
                            onValueChange={setProgress}
                            minimumTrackTintColor="#FFFFFF"
                            maximumTrackTintColor="rgba(255, 255, 255, 0.3)"
                            thumbTintColor="#FFFFFF"
                        />

                        {/* Time Stamps */}
                        <View className="flex-row justify-between w-full -mt-2">
                            <Text className="text-white/70 text-sm">{formatTime(progress * totalDuration)}</Text>
                            <Text className="text-white/70 text-sm">{formatTime(totalDuration)}</Text>
                        </View>

                        {/* Main Control Buttons */}
                        <View className="flex-row justify-around items-center mt-6">
                            <TouchableOpacity className="bg-white/5 w-16 h-16 rounded-full justify-center items-center border border-white/5">
                                <MaterialCommunityIcons name="rewind-15" size={26} color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => setIsPlaying(p => !p)}
                                className="bg-white w-20 h-20 rounded-full justify-center items-center"
                            >
                                <FontAwesome name={isPlaying ? "pause" : "play"} size={28} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity className="bg-white/5 w-16 h-16 rounded-full justify-center items-center border border-white/5">
                                <MaterialCommunityIcons name="fast-forward-15" size={26} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>

                <InfoModal
                    visible={isInfoModalVisible}
                    onClose={() => setInfoModalVisible(false)}
                    title={title}
                    guide={guide}
                />
            </View>
        </ImageBackground>
    );
};

export default PlayerScreen;