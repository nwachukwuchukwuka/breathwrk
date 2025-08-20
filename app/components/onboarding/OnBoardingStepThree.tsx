import { textStepsContent } from '@/constants/onBoardingData'
import React, { useEffect } from 'react'
import { Image, Platform, StyleSheet, Text, View } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

const OnBoardingStepThree = () => {

    const verticalPositionFour = useSharedValue(50);
    const fadeValueFour = useSharedValue(0);
    const fadeValueFourIcons = useSharedValue(0);


    const slideInFour = useAnimatedStyle(() => ({
        transform: [{ translateY: verticalPositionFour.value }],
        opacity: fadeValueFour.value
    }))

    const dispayStepFourIcons = useAnimatedStyle(() => ({
        opacity: fadeValueFourIcons.value
    }))

    useEffect(() => {

        verticalPositionFour.value = withTiming(0, { duration: 1000 });
        fadeValueFour.value = withTiming(1, { duration: 1000 });
        setTimeout(() => {
            fadeValueFourIcons.value = withTiming(1, { duration: 1000 })
        }, 1000)

    }, []);


    return (
        <View className='items-center mt-20'>
            <View className="items-center mb-10">
                <View className='flex-row gap-8 mb-3'>
                    <Image
                        source={require('../../../assets/images/brain1.png')}
                        className="w-[100px] h-[100px]"
                        resizeMode="contain"
                    />

                    <Image
                        source={require('../../../assets/images/brain1.png')}
                        className="w-[100px] h-[100px]"
                        resizeMode="contain"
                    />
                    {/* <View className='absolute -left-[50%] -mt-[120px]'>
                        <LottieView style={{ height: 300, width: 400 }} source={require('../../../assets/images/brain-two.json')} autoPlay loop />
                    </View> */}
                </View>
                <View className='flex-row gap-6'>
                    {/* <View className='flex-row gap-6 mt-[100px]'> */}
                    <View
                        className={` rounded-full py-1 px-3 flex-row items-center border bg-white/10 border-white/10`}
                    >
                        <Text className="text-white text-md">Before Breathwrk</Text>
                    </View>
                    <View
                        className={` rounded-full py-1 px-3 flex-row items-center border bg-white/10 border-white/10`}
                    >
                        <Text className="text-white text-md">After Breathwrk</Text>
                    </View>
                </View>
            </View>
            <Animated.View style={slideInFour} className="mb-14">
                <Text className="text-white text-3xl text-center">{textStepsContent[3].line1}</Text>
                <Text className="text-white text-6xl font-bold my-2 text-center">{textStepsContent[3].line2}</Text>
                <Text className="text-white text-3xl text-center">
                    {textStepsContent[3].line3}
                </Text>
            </Animated.View>
            <Animated.View style={[
                dispayStepFourIcons,
                { marginBottom: Platform.select({ ios: 44, android: 10 }) } // mb-1 ≈ 4px, mb-12 ≈ 48px
            ]} >
                {/* <Animated.View style={dispayStepFourIcons} className='mb-12'> */}
                <Image
                    source={require('../../../assets/images/shield.png')}
                    className="w-[140px] h-[140px]"
                    resizeMode="contain"
                />
            </Animated.View>
            <Text className='text-white italic'>Source:Balban et al, 2023, Ceil Reports Medicine 4, 100895</Text>

        </View>
    )
}

export default OnBoardingStepThree

const styles = StyleSheet.create({})