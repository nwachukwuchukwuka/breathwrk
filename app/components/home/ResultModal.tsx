import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Modal, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

const ResultModal = ({ visible, onClose, setResultModal, handleRoute }) => {

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={visible}

        >
            <SafeAreaView className="flex-1 bg-zinc-900">
                <View className='flex-1 p-5 pt-0'>

                    {/* Top Header */}
                    <View className="flex-row items-center justify-between">
                        <TouchableOpacity className="bg-zinc-800 w-10 h-10 rounded-full justify-center items-center">
                            <AntDesign name="hearto" size={20} color="white" />
                        </TouchableOpacity>
                        <Text className="text-white font-semibold text-lg">breathwrk</Text>

                        <View className="w-10 h-10" />
                    </View>

                    {/* Main Content */}
                    <View className="flex-1 items-center">


                        <View className="justify-center items-center mb-32 mt-24">

                            {/* <Image
                            source={require('../../../assets/images/breathing-complete-graphic.png')}
                            style={{ width: 250, height: 250, position: 'absolute' }}
                        /> */}
                            <Text className="text-white font-bold text-7xl">27</Text>
                            <Text className="text-gray-100 text-2xl">Breaths</Text>
                        </View>

                        {/* Completion Message */}
                        <Text className="text-white text-2xl font-semibold mb-20">
                            Great job! Have a good night.
                        </Text>

                        {/* Stats Card */}
                        <View className="bg-zinc-800 w-full flex-row rounded-2xl ">
                            <View className="items-center p-5 w-[50%]">
                                <Text className="text-gray-400 text-xl font-semibold">Streak</Text>
                                <Text className="text-white font-bold text-3xl mt-1">1</Text>
                            </View>
                            <View className='h-full w-[1px] bg-white' />
                            <View className="items-center p-5 w-[50%]">
                                <Text className="text-gray-400 text-xl font-semibold">Total Sessions</Text>
                                <Text className="text-white font-bold text-3xl mt-1">1</Text>
                            </View>
                        </View>
                    </View>

                    {/* Bottom Buttons */}
                    <View className="items-center">
                        <TouchableOpacity
                            onPress={() => {
                                handleRoute()
                            }} className="bg-white w-full py-5 rounded-full justify-center items-center mb-4"
                        >
                            <Text className="text-black font-bold text-2xl">Continue</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text className="text-gray-400 text-2xl">Share</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </SafeAreaView>
        </Modal>
    );
};

export default ResultModal;