import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

const OnBoardingStepFive = ({ currentStep }) => {

    const verticalPosition = useSharedValue(40)
    const fadeValue = useSharedValue(0)

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: verticalPosition.value }],
        opacity: fadeValue.value
    }))

    useEffect(() => {

        if (currentStep === 5) {
            verticalPosition.value = withTiming(0, { duration: 1000 })
            fadeValue.value = withTiming(1, { duration: 1000 })
        }

    }, [currentStep])


    return (
        <View className="flex-1 mt-12">
            <Animated.View className='' style={animatedStyle}>

                <View className="items-center">
                    <Text className="text-white text-4xl font-bold text-center leading-tight">
                        Breathwrk rewires your{'\n'}nervous system fast
                    </Text>
                </View>

                {/* Chart Section */}
                <View className="items-center mt-[80px]">
                    <Image
                        source={require('../../../assets/images/chart.png')}
                        className="w-full h-72"
                        resizeMode="contain"
                    />
                </View>
            </Animated.View>

            <View>
                <View className="bg-white/10 rounded-2xl  w-full">
                    <Text className="text-white/80 text-xl leading-6 p-4">
                        Heart Rate Variability (HRV) is an indicator of autonomic nervous system health, overall resilience to stress, and mood.
                    </Text>
                    <TouchableOpacity className="bg-white/10 rounded-b-2xl p-3 mt-4 flex-row items-center justify-center">
                        <FontAwesome5 name="dna" size={16} color="white" />
                        <Text className="text-white font-semibold ml-2 text-xl">Change your biology</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Text className='text-white/35 text-center mt-40 text-sm'>*Based on a peer reviewed 4 weeks study of Breathwork</Text>

        </View>
    )
}

export default OnBoardingStepFive

const styles = StyleSheet.create({})