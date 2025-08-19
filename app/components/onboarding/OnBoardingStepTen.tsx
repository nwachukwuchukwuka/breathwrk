import { textStepsContent, whenToDoBreathWrk } from '@/constants/onBoardingData';
import * as Haptics from "expo-haptics";
import LottieView from 'lottie-react-native';
import React, { useEffect, useState } from 'react';
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';




const GoalItem = ({ item, isSelected, onPress }: { item: any, isSelected: boolean, onPress: () => void }) => (
    <TouchableOpacity
        onPress={onPress}
        className={` p-5 rounded-2xl flex-row items-center mb-4  ${isSelected ? 'bg-white' : 'bg-white/10'
            }`}
    >
        <Text className="text-2xl mr-4">{item.emoji}</Text>
        <Text className={`${isSelected ? 'text-black' : 'text-white'} text-lg font-semibold`}>{item.text}</Text>
    </TouchableOpacity>
);


const OnBoardingStepTen = ({ showThanks, setShowThanks, setCurrentStep, currentStep }) => {
    const [selectedTime, setSelectedTime] = useState<string[]>([]);

    // const toggleGoalSelection = (id: string) => {
    //     setSelectedTime(prev =>
    //         prev.includes(id) ? prev.filter(gId => gId !== id) : [...prev, id]
    //     );
    // };

    const toggleGoalSelection = (id: string) => {
        Haptics.selectionAsync();
        setSelectedTime(prev => (prev === id ? null : id));
    };


    const handleHighFive = () => {
        Haptics.selectionAsync();
        setShowThanks(true);

        setTimeout(() => {
            setCurrentStep(11);
        }, 3000);
    };

    const verticalPosition = useSharedValue(40)
    const fadeValue = useSharedValue(0)

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: verticalPosition.value }],
        opacity: fadeValue.value
    }))

    useEffect(() => {

        if (currentStep === 10) {
            verticalPosition.value = withTiming(0, { duration: 1000 })
            fadeValue.value = withTiming(1, { duration: 1000 })
        }

    }, [currentStep])

    return (
        <View className="flex-1">
            <Animated.View style={animatedStyle}>
                <View>
                    <Text className="text-white text-4xl font-bold text-center mt-[100px]">
                        {textStepsContent[10].line1}
                    </Text>
                    <Text className="text-white/70 font-bold text-base text-center mt-2">
                        {textStepsContent[10].line2}
                    </Text>
                </View>
                <View className="mt-8">
                    {whenToDoBreathWrk.map(goal => (
                        <GoalItem
                            key={goal.id}
                            item={goal}
                            isSelected={selectedTime.includes(goal.id)}
                            onPress={() => toggleGoalSelection(goal.id)}
                        />
                    ))}
                </View>
            </Animated.View>

            {showThanks && (
                <View className='flex-1 absolute '>
                    <LottieView style={{ height: 800, width: 800 }} source={require('../../../assets/images/Confetti.json')} autoPlay loop={false} />
                </View>
            )}

            {selectedTime.length > 0 && (
                <View className='items-center'>
                    <Pressable
                        onPress={handleHighFive}
                        className='bg-white rounded-full w-40 h-40 items-center mt-24'>
                        <Image
                            source={require('../../../assets/images/high-five.png')}
                            className="w-[80px] h-full"
                            resizeMode="contain"
                        />
                    </Pressable>
                    <Text className="text-white text-md font-bold mt-2">High five to commit</Text>

                    <Text className="text-white/20 text-md font-bold mt-4">Press here</Text>
                </View>
            )}

        </View>
    )
}

export default OnBoardingStepTen

const styles = StyleSheet.create({})