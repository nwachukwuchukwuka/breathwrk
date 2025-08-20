import { selectableGoalsData, textStepsContent } from '@/constants/onBoardingData';
import * as Haptics from "expo-haptics";
import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
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

type OnBoardingStepFourProps = {
    selectedGoals: string[];
    setSelectedGoals: React.Dispatch<React.SetStateAction<string[]>>;
    currentStep: number;
};


const OnBoardingStepFive: React.FC<OnBoardingStepFourProps> = ({
    selectedGoals, setSelectedGoals, currentStep
}) => {

    const verticalPosition = useSharedValue(20)
    const fadeValue = useSharedValue(0)

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: verticalPosition.value }],
        opacity: fadeValue.value
    }))

    useEffect(() => {
        if (currentStep === 4) {
            verticalPosition.value = withTiming(0, { duration: 1000 })
            fadeValue.value = withTiming(1, { duration: 1000 })
        }

    }, [currentStep])

    const toggleGoalSelection = (id: string) => {
        Haptics.selectionAsync();

        setSelectedGoals(prev =>
            prev.includes(id) ? prev.filter(gId => gId !== id) : [...prev, id]
        );
    };

    return (
        <Animated.View className="flex-1" style={animatedStyle}>
            <View>
                <Text className="text-white text-4xl font-bold text-center mt-[60px]">
                    {textStepsContent[4].line1}
                </Text>
                <Text className="text-white/70 font-bold text-base text-center mt-2">
                    {textStepsContent[4].line2}
                </Text>
            </View>
            <View className="mt-12">
                {selectableGoalsData.map(goal => (
                    <GoalItem
                        key={goal.id}
                        item={goal}
                        isSelected={selectedGoals.includes(goal.id)}
                        onPress={() => toggleGoalSelection(goal.id)}
                    />
                ))}
            </View>
        </Animated.View>
    )
}

export default OnBoardingStepFive

