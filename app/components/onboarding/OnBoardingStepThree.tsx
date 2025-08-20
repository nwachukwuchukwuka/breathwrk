import { textStepsContent } from '@/constants/onBoardingData'
import LottieView from 'lottie-react-native'
import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

const OnBoardingStepThree = ({ currentStep }: { currentStep: number }) => {


    const verticalPositionThree = useSharedValue(50);
    const fadeValueThree = useSharedValue(0);
    const fadeValueRay = useSharedValue(0);

    const fadeValueThreeIcons = useSharedValue(0);

    const slideInThree = useAnimatedStyle(() => ({
        transform: [{ translateY: verticalPositionThree.value }],
        opacity: fadeValueThree.value
    }))

    const dispayStepThreeIcons = useAnimatedStyle(() => ({
        opacity: fadeValueThreeIcons.value
    }))

    const dispayRay = useAnimatedStyle(() => ({
        opacity: fadeValueRay.value
    }))


    useEffect(() => {
        verticalPositionThree.value = withTiming(0, { duration: 1000 });
        fadeValueThree.value = withTiming(1, { duration: 1000 });
        setTimeout(() => {
            fadeValueThreeIcons.value = withTiming(1, { duration: 1000 })
        }, 1000)
        setTimeout(() => {
            fadeValueRay.value = withTiming(1, { duration: 1000 })
        }, 1800)
    }, [currentStep]);

    return (
        <View className='items-center mt-20'>
            <View>
                <Animated.View style={dispayRay} className='absolute -right-[110px] -top-[100px]'>
                    <LottieView style={{ height: 300, width: 300 }} source={require('../../../assets/images/ray.json')} autoPlay loop />
                </Animated.View>
                <Animated.View style={dispayStepThreeIcons} className="mb-24">
                    <Image
                        source={require('../../../assets/images/logo.png')}
                        className="w-24 h-24"
                        resizeMode="contain"
                    />
                </Animated.View>
            </View>
            <Animated.View style={slideInThree} className="mb-14">
                <Text className="text-white text-3xl text-center">{textStepsContent[2].line1}</Text>
                <Text className="text-white text-6xl font-bold my-2 text-center">{textStepsContent[2].line2}</Text>
                <Text className="text-white text-3xl text-center">
                    {textStepsContent[2].line3}
                </Text>
            </Animated.View>

            <Animated.View style={dispayStepThreeIcons} className=''>
                <Image
                    source={require('../../../assets/images/shield.png')}
                    className="w-[140px] h-[140px]"
                    resizeMode="contain"
                />
            </Animated.View>
        </View>
    )
}

export default OnBoardingStepThree

const styles = StyleSheet.create({})