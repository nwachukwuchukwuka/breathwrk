import { textStepsContent } from '@/constants/onBoardingData'
import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

const OnBoardingStepSeven = ({ currentStep }) => {

    const verticalPosition = useSharedValue(40)
    const fadeValue = useSharedValue(0)

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: verticalPosition.value }],
        opacity: fadeValue.value
    }))

    useEffect(() => {

        if (currentStep === 7) {
            verticalPosition.value = withTiming(0, { duration: 1000 })
            fadeValue.value = withTiming(1, { duration: 1000 })
        }

    }, [currentStep])
    return (
        <Animated.View style={animatedStyle} className=" mt-80 items-center">
            <View>
                <Image
                    source={require('../../../assets/images/sense.png')}
                    className="w-14 h-14"
                    resizeMode="contain"
                />
            </View>
            <Text className="text-white text-3xl text-center font-semibold mt-7">{textStepsContent[7].line1}</Text>
        </Animated.View>
    )
}

export default OnBoardingStepSeven

const styles = StyleSheet.create({})