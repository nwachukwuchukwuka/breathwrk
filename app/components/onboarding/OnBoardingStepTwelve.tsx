import LottieView from 'lottie-react-native';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';


type OnBoardingStepTwelveProps = {
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};



const OnBoardingStepTwelve: React.FC<OnBoardingStepTwelveProps> = ({ setCurrentStep }) => {
    const [changeText, setChangeText] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setChangeText(true)
        }, 3000)

        setTimeout(() => {
            setCurrentStep(13)
        }, 5000)
    })
    return (
        <View className="items-center mt-44">
            <View>
                <Text className="text-white text-3xl text-center font-semibold ">{changeText ? "Did you know" : "Just a second"}</Text>
            </View>
            <View className='mt-8'>
                <LottieView style={{ height: 250, width: 250 }} source={require('../../../assets/images/Loading.json')} autoPlay loop />
            </View>
            <Text className="text-white text-3xl text-center font-semibold  mt-24">{changeText ? "Breathing exercises actively change your nervous system, bain and body" : "we are creating your custom experiece"}</Text>
        </View>
    )
}

export default OnBoardingStepTwelve

