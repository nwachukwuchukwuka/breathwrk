import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';
import { FlatList, ImageBackground, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import AudioSettingsModal from './AudioSettingsModal';
import DurationSelectorModal from './DurationSelectorModal';


const breathingExercises = [
    {
        id: '1',
        title: 'Calm',
        inhale: 4,
        exhale: 6,
        duration: '5 min',
        details: [ 
            {
                key: 'desc',
                text: 'Calm was designed to reduce stress and soothe the mind while lowering your heart rate and blood pressure.'
            },
            {
                key: 'benefits',
                text: 'Regular practice can lead to improved focus, better sleep, and a greater sense of well-being.'
            },
            {
                key: 'how-to',
                text: 'Find a comfortable position. We will guide you through each step of the exercise.'
            },
        ]
    },
    {
        id: '2',
        title: 'Sleep',
        inhale: 4,
        exhale: 8,
        duration: '10 min',
        details: [
            {
                key: 'desc',
                text: 'A slow-paced exercise to prepare your body and mind for a restful night\'s sleep.'
            },
            {
                key: 'benefits',
                text: 'This technique helps activate the parasympathetic nervous system, promoting relaxation.'
            }
        ]
    },
];



const BreathingExerciseDetailScreen = () => {
    const { id } = useLocalSearchParams<{ id: string }>();
    const router = useRouter();
    const [isFavorited, setIsFavorited] = useState(false);
    const [isPhone, setIsPhone] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAudioModalVisible, setAudioModalVisible] = useState(false);
    const [isDurationModalVisible, setDurationModalVisible] = useState(false);
    const [currentDuration, setCurrentDuration] = useState(5); 



    const handleFavoriteToggle = () => {
        setIsFavorited(previousState => !previousState);
    };
    const handlePhoneToggle = () => {
        setIsPhone(previousState => !previousState);
    };


    const exercise = breathingExercises.find(ex => ex.id === id) || breathingExercises[0];


    const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
        if (viewableItems.length > 0) {
            setActiveIndex(viewableItems[0].index);
        }
    }).current;

    const viewabilityConfig = useRef({ itemVisiblePercentThreshold: 50 }).current;



    return (
        <ImageBackground
            source={require('../../../../assets/images/explore-bg.png')}
            className="flex-1"
        >
            <View className="flex-1 bg-black/70">
                <SafeAreaView className="">
                    <View className="flex-row justify-between items-center mx-8 pt-[25px]">
                        <TouchableOpacity className="bg-white/5 p-3 rounded-full" onPress={handleFavoriteToggle}>
                            <FontAwesome
                                name={isFavorited ? "heart" : "heart-o"}
                                size={18}
                                color="white"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => router.back()}>
                            <AntDesign name="close" size={28} color="gray" />
                        </TouchableOpacity>
                    </View>

                    {/* MAIN CONTENT: Centered */}
                    <View className="items-center">
                        <View className="bg-white/10 flex-row gap-[40px] p-4 px-[50px] rounded-2xl items-center mt-[30px]">
                            <View className="items-center">
                                <Fontisto name="open-mouth" size={40} color="white" />
                                <View className="flex-row items-center mt-1">
                                    <Text className="text-white font-bold text-lg ml-1">{exercise.inhale}</Text>
                                </View>
                            </View>
                            <View className="items-center">
                                <Fontisto name="zipper-mouth" size={40} color="white" />
                                <View className="flex-row items-center mt-1">
                                    <Text className="text-white font-bold text-lg ml-1">{exercise.exhale}</Text>
                                </View>
                            </View>
                        </View>

                        <Text className="text-white text-5xl font-semibold mt-12">{exercise.title}</Text>

                        <View className="h-28 mt-16">
                            <FlatList
                                data={exercise.details}
                                renderItem={({ item }) => (
                                    <View className="w-screen px-12 justify-center items-center">
                                        <Text className="text-white/80 text-2xl font-semibold text-center">
                                            {item.text}
                                        </Text>
                                    </View>
                                )}
                                horizontal
                                pagingEnabled
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={(item) => item.key}
                                onViewableItemsChanged={onViewableItemsChanged}
                                viewabilityConfig={viewabilityConfig}
                            />
                        </View>


                        <View className="items-center mt-[50px]">
                            <View className="flex-row space-x-2 mb-6">
                                {exercise.details.map((_, index) => (
                                    <View
                                        key={index}
                                        className={`w-2 h-2 mr-2 rounded-full ${activeIndex === index ? 'bg-white' : 'bg-white/40'
                                            }`}
                                    />
                                ))}
                            </View>
                        </View>

                    </View>

                    {/* BOTTOM CONTROLS */}
                    <View className="items-center ">
 
                        <View className="flex-row items-center justify-between w-full px-6">



                            <TouchableOpacity className="bg-white/5 w-16 h-16 rounded-full justify-center items-center border border-white/5" onPress={handlePhoneToggle}>
                                <MaterialCommunityIcons name={isPhone ? "vibrate" : "vibrate-off"} size={24} color="white" />
                            </TouchableOpacity>

                            <View className="shadow-xl shadow-white/60">
                                <View className="w-[140px] h-[140px] rounded-full bg-white justify-center items-center">
                                    <Text className="text-black text-[28px] font-bold">Start</Text>
                                </View>
                            </View>

                            <TouchableOpacity className="bg-white/5 w-16 h-16 rounded-full justify-center items-center border border-white/5" onPress={() => setAudioModalVisible(true)}
                            >
                                <FontAwesome name="exchange" size={22} color="white" />
                            </TouchableOpacity>
                        </View>

                   

                        <TouchableOpacity
                            onPress={() => setDurationModalVisible(true)}
                            className="mt-[25px] bg-white/5 rounded-[25px] py-[12px] px-[40px] border border-white/5"
                        >
                            <Text className="text-white text-lg">{currentDuration} min</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
                <AudioSettingsModal
                    visible={isAudioModalVisible}
                    onClose={() => setAudioModalVisible(false)}
                />
                <DurationSelectorModal
                    visible={isDurationModalVisible}
                    onClose={() => setDurationModalVisible(false)}
                    initialDuration={currentDuration}
                    onSave={(newDuration) => {
                        setCurrentDuration(newDuration);
                    }}
                />
            </View>
        </ImageBackground>
    );
};

export default BreathingExerciseDetailScreen;