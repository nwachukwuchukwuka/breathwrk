import { textStepsContent } from '@/constants/onBoardingData'
import { Link } from 'expo-router'
import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

type OnBoardingStepSixProps = {
    currentStep: number;
};

const OnBoardingStepSix: React.FC<OnBoardingStepSixProps> = ({ currentStep }) => {

    const verticalPosition = useSharedValue(30)
    const fadeValue = useSharedValue(0)

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: verticalPosition.value }],
        opacity: fadeValue.value
    }))

    useEffect(() => {

        if (currentStep === 6) {
            verticalPosition.value = withTiming(0, { duration: 1000 })
            fadeValue.value = withTiming(1, { duration: 1000 })
        }

    }, [currentStep])
    return (
        <View className='items-center mt-32'>
            <Animated.View style={animatedStyle} className="items-center">
                <View>
                    <Image
                        source={require('../../../assets/images/lungs.png')}
                        className="w-52"
                        resizeMode="contain"
                    />
                </View>
                <Text className="text-white text-3xl text-center font-bold">{textStepsContent[6].line1}</Text>
                <Text className="text-white/90 text-xl font-semibold mt-10 text-center ">{textStepsContent[6].line2}</Text>

            </Animated.View>
            <Link href="/" className='text-white/35 text-center text-lg underline mt-[300px]'>Setup later</Link>

        </View>
    )
}

export default OnBoardingStepSix

const styles = StyleSheet.create({})