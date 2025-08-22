import * as Notifications from 'expo-notifications';
import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


type Props = {
    handleContinue: () => void
}


const OnBoardingStepTwelve: React.FC<Props> = ({ handleContinue }) => {
    const askPermission = async () => {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;

        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }

        if (finalStatus === 'granted') {
            console.log('Notification permission granted!');
        } else {
            console.log('Permission for notifications not granted');
        }

        handleContinue();
    };

    useEffect(() => {
        askPermission();
    }, []);


 


    return (
        <View className="flex-1 justify-between w-full">
            <TouchableOpacity className='absolute -top-7 right-0' onPress={handleContinue}>
                <Text className='text-white/50 text-xl'>Skip</Text>
            </TouchableOpacity>
            <View>
                <Text className="text-white text-4xl font-bold text-center mt-12 px-4 leading-tight">
                    Great! We will help you stay consistent.
                </Text>

                <View className='absolute mt-[73%]'>
                    <View className=" h-56 w-[288px]  mx-9 border-2 border-blue-600 rounded-3xl p-0.5">
                    </View>
                    <View className='ml-[55%] '>
                        <Image
                            source={require('../../../assets/images/curved-arrow.png')}
                            className="w-[60%] h-[60%]"
                            resizeMode="contain"
                        />
                    </View>
                </View>

            </View>

            <View className="pb-32">
                <Text className="text-white text-center text-xl">
                    Users who allow push report 9x better results
                </Text>
            </View>
        </View>
    )
}

export default OnBoardingStepTwelve

const styles = StyleSheet.create({})






