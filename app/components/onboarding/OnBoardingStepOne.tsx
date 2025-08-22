import { textStepsContent } from '@/constants/onBoardingData'
import React, { useEffect } from 'react'
import { Text } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

const OnBoardingStepOne = () => {
    const verticalPosition = useSharedValue(50)
    const fadeValue = useSharedValue(0)
    const fadeStepOneBadges = useSharedValue(0)

    const slideIn = useAnimatedStyle(() => ({
        transform: [{ translateY: verticalPosition.value }],
        opacity: fadeValue.value
    }))





    useEffect(() => {
        verticalPosition.value = withTiming(1, { duration: 1000 })
        fadeValue.value = withTiming(1, { duration: 1000 })
        setTimeout(() => {
            fadeStepOneBadges.value = withTiming(1, { duration: 1000 })
        }, 1000)
    }, [])

    return (
        <Animated.View style={slideIn} className="absolute mt-20">
            <Text className="text-white text-3xl text-center">{textStepsContent[0].line1}</Text>
            <Text className="text-white text-6xl font-bold my-2 text-center">{textStepsContent[0].line2}</Text>
            <Text className="text-white text-3xl text-center">
                {textStepsContent[0].line3}
            </Text>
        </Animated.View>
    )
}

export default OnBoardingStepOne