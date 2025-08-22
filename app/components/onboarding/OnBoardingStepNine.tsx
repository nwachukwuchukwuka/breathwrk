import { textStepsContent } from '@/constants/onBoardingData';
import * as Haptics from "expo-haptics";
import React, { useEffect, useRef } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';


type OnBoardingStepEightProps = {
    isHolding: boolean;
    setIsHolding: React.Dispatch<React.SetStateAction<boolean>>;
    holdDuration: number;
    setHoldDuration: React.Dispatch<React.SetStateAction<number>>;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    currentStep: number;
};

const OnBoardingStepNine: React.FC<OnBoardingStepEightProps> = ({
    isHolding,
    setIsHolding,
    setHoldDuration,
    holdDuration,
    setCurrentStep,
    currentStep
}) => {


    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);



    useEffect(() => {
        if (currentStep === 7) {
            const timer = setTimeout(() => {
                setCurrentStep(8);
            }, 2000);


            return () => clearTimeout(timer);
        }
    }, [currentStep]);

    const handlePressIn = () => {
        Haptics.selectionAsync();

        setIsHolding(true);
        setHoldDuration(0);

        intervalRef.current = setInterval(() => {
            setHoldDuration(prevDuration => {
                const newDuration = prevDuration + 10;

                if (newDuration % 1000 === 0) {
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                }

                return newDuration;
            });
        }, 10);
    };

    const handlePressOut = () => {
        setIsHolding(false);
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        if (holdDuration > 100) {
            setCurrentStep(9);
        }
    };

    const fadeValue = useSharedValue(0)

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: fadeValue.value
    }))

    useEffect(() => {

        if (currentStep === 8) {
            fadeValue.value = withTiming(1, { duration: 1000 })
        }

    }, [currentStep])



    return (
        <View className="absolute items-center bottom-32">
            {isHolding && (
                <View className='absolute top-[100px] items-center'>
                    <Text className="text-white text-7xl font-bold  ">
                        {(holdDuration / 1000).toFixed(1)}
                    </Text>
                    <Text className="text-white text-4xl font-semibold">seconds</Text>
                </View>
            )}
            <View>

                {isHolding && <Image
                    source={require('../../../assets/images/open-mouth.png')}
                    className="w-14 "
                    resizeMode="contain"
                />}
                {!isHolding && <Animated.View style={animatedStyle}>
                    <Image
                        source={require('../../../assets/images/tap.png')}
                        className="w-14 "
                        resizeMode="contain"
                    />
                </Animated.View>}

            </View>
            {isHolding ? <Text className="text-white text-3xl text-center font-semibold -mt-[200px]">{textStepsContent[8].line2}</Text>
                : <Animated.Text style={animatedStyle} className="text-white text-3xl text-center font-semibold -mt-[200px]">{textStepsContent[8].line1}</Animated.Text>
            }

            <Pressable
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                className='bg-white rounded-full w-60 h-60 items-center mt-24'                >
                <Image
                    source={require('../../../assets/images/fingerprint-scan.png')}
                    className="w-[120px] h-full"
                    resizeMode="contain"
                />
                <Text className="text-black/40 text-md font-bold -mt-12">Hold here</Text>
            </Pressable>
        </View>


    )
}

export default OnBoardingStepNine

