import { textStepsContent } from '@/constants/onBoardingData'
import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

type OnBoardingThirteenProps = {
    currentStep: number,
}

const OnBoardingStepFourteen: React.FC<OnBoardingThirteenProps> = ({ currentStep }) => {
    const fadeValue = useSharedValue(0)

    const badges = [
        "Get Amazing Sleep",
        "Reduce Stress & Anxiety",
        "Increase Focus & Energy",
        "Improve Your Mood",
    ]

    const badgeFadeValues = badges.map(() => useSharedValue(0))

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: fadeValue.value,
    }))

    const badgeAnimatedStyles = badgeFadeValues.map(fade =>
        useAnimatedStyle(() => ({ opacity: fade.value }))
    )

    useEffect(() => {
        if (currentStep === 13) {
            fadeValue.value = withTiming(1, { duration: 1000 })

            badges.forEach((_, index) => {
                setTimeout(() => {
                    badgeFadeValues[index].value = withTiming(1, { duration: 600 })
                }, 1000 + index * 200) // stagger: 1s + 0.6s per badge
            })
        }
    }, [currentStep])

    return (
        <View>
            {/* Title */}
            <Text className="text-white text-6xl font-bold text-center mt-8">
                {textStepsContent[12].line1}
            </Text>
            <Text className="text-white text-6xl font-bold text-center">
                {textStepsContent[12].line2}
            </Text>

            {/* Circle */}
            <Animated.View
                style={animatedStyle}
                className='w-[900px] rounded-[50%] h-[900px] bg-white/5 border-2 border-white mt-[80px] items-center justify-center'
            >
                <View className='w-[900px] h-[400px] bg-white/5 rounded-[50%]' />
            </Animated.View>

            {/* Badges */}
            <View className='gap-6 items-center w-full absolute top-[180px] left-[80%]'>
                {badges.map((text, index) => (
                    <Animated.Text
                        key={index}
                        style={badgeAnimatedStyles[index]}
                        className='text-2xl bg-[#EBEBEB] p-4 px-10 rounded-full text-center'
                    >
                        {text}
                    </Animated.Text>
                ))}

                {/* Footer */}
                <View className='mt-8 items-center'>
                    <Text className='text-white/80 font-bold text-3xl'>
                        In just 5 minutes a day
                    </Text>
                    <Image
                        source={require('../../../assets/images/shield.png')}
                        className="w-[100px] h-[100px]"
                        resizeMode="contain"
                    />
                </View>
            </View>
        </View>
    )
}

export default OnBoardingStepFourteen

const styles = StyleSheet.create({})
