import { textStepsContent } from '@/constants/onBoardingData'
import React from 'react'
import { Text, View } from 'react-native'

const OnBoardingStepTwo = () => {


    return (
        <View className='absolute mt-20'>
            <Text className="text-white text-3xl text-center">{textStepsContent[1].line1}</Text>
            <Text className="text-white text-6xl font-bold my-2 text-center">{textStepsContent[1].line2}</Text>
            <Text className="text-white text-3xl text-center">
                {textStepsContent[1].line3}
            </Text>
        </View>
    )
}

export default OnBoardingStepTwo