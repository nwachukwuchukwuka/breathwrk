import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, ImageBackground, Modal, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

const features = [
    { emoji: '😴', title: 'Improve Your Sleep', description: 'Guided breathing exercises to relax your mind and fall asleep with ease' },
    { emoji: '🧘', title: 'Manage Stress & Anxiety', description: "Take control of your thoughts with 100's of guided breathing exercises and classes" },
    { emoji: '🧠', title: 'Feel More Energized', description: 'Boost your energy levels so you can focus on what matters and increase productivity' },
];

const testimonials = [
    { quote: 'Replaced my afternoon coffee', detail: '"I was drinking 3 coffees a day... Since introducing the app, I’ve gone back to just one. I truly feel the lasting energy each time I do a session."' },
    { quote: 'This is a life-changer', detail: '"Never thought breathing could have such an impact. My anxiety has significantly decreased and I feel more in control. Truly a 5-star app."' },
];

const logos = ['GQ', 'Forbes', 'USA TODAY', 'WSJ', 'healthline', 'Bloomberg', 'REFINERY29'];

const PaymentModal = ({ visible, onClose }) => {
    const [selectedPlan, setSelectedPlan] = useState('annual');

    return (

        <Modal
            animationType="slide"
            transparent={true}
        // visible={visible}
        // onRequestClose={onClose}
        >
            <ImageBackground
                source={require('../../assets/images/explore-bg-min.png')}
                className="flex-1"
            >
                <View className="flex-1 bg-black/80 ">



                    <SafeAreaView className="flex-1">

                        <ScrollView contentContainerStyle={{ paddingBottom: 300 }} showsVerticalScrollIndicator={false}>
                            <View className="items-center mt-2 px-4">
                                <View className="flex-row items-center space-x-2">
                                    <MaterialCommunityIcons name="shield-star-outline" size={24} color="gray" />
                                    <Text className="text-gray-400">App Of The Day</Text>
                                    <MaterialCommunityIcons name="shield-star-outline" size={24} color="gray" style={{ transform: [{ scaleX: -1 }] }} />
                                </View>
                                <View className="flex-row my-1">
                                    {[...Array(5)].map((_, i) => <Ionicons key={i} name="star" size={16} color="#FBBF24" />)}
                                </View>
                                <Text className="text-white text-4xl font-bold text-center mt-6">
                                    Start the New Year with Breathwrk for FREE
                                </Text>
                                <View className="bg-white/10 border border-white/10  flex-row items-center rounded-full p-1 mt-6">
                                    <View className="flex-row">
                                        <Image source={{ uri: 'https://i.pravatar.cc/150?img=1' }} className="w-8 h-8 rounded-full border-2 border-gray-900" />
                                        <Image source={{ uri: 'https://i.pravatar.cc/150?img=2' }} className="w-8 h-8 rounded-full border-2 border-gray-900 -ml-3" />
                                        <Image source={{ uri: 'https://i.pravatar.cc/150?img=3' }} className="w-8 h-8 rounded-full border-2 border-gray-900 -ml-3" />
                                    </View>
                                    <Text className="text-white text-sm ml-3 pr-3">20,128 started Premium this month!</Text>
                                </View>
                            </View>

                            <View className="mt-12 gap-4 px-6 ">
                                {features.map((feature, index) => (
                                    <View key={index} className="items-center">
                                        <Text className="text-4xl">{feature.emoji}</Text>
                                        <Text className="text-white font-bold text-xl text-center mt-2">{feature.title}</Text>
                                        <Text className="text-gray-100 text-center mt-1">{feature.description}</Text>
                                    </View>
                                ))}
                            </View>

                            <View className="mt-16 ">
                                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16 }}>
                                    {testimonials.map((item, index) => (
                                        <View key={index} className="bg-white/10 border border-white/10 rounded-xl p-6 w-80 mr-4">
                                            <View className="flex-row justify-center mb-4">
                                                {[...Array(5)].map((_, i) => <Ionicons key={i} name="star" size={20} color="#FBBF24" />)}
                                            </View>
                                            <Text className="text-white text-lg font-semibold text-center">{item.quote}</Text>
                                            <Text className="text-gray-400 text-sm text-center mt-2">{item.detail}</Text>
                                        </View>
                                    ))}
                                </ScrollView>
                            </View>

                            <View className="mt-16 items-center px-4">
                                <View className="border border-gray-600 rounded-full px-4 py-1">
                                    <Text className="text-gray-100 text-sm">Featured in</Text>
                                </View>
                                <View className="flex-row flex-wrap justify-center items-center mt-6 gap-x-8 gap-y-5">
                                    {logos.map((logo, index) => <Text key={index} className="text-gray-300 font-bold text-xl italic">{logo}</Text>)}
                                </View>
                            </View>
                        </ScrollView>
                    </SafeAreaView>

                    <View className="bg-gray-500 absolute bottom-0 left-0 right-0 rounded-[20px]">
                        <View className="my-8 px-4">
                            <View className="flex-row justify-center items-center gap-x-3">

                                <TouchableOpacity
                                    onPress={() => setSelectedPlan('annual')}
                                    className={`flex-1 p-4 rounded-xl border-2 relative ${selectedPlan === 'annual'
                                        ? 'bg-indigo-600 border-indigo-600'
                                        : 'bg-gray-800/50 border-gray-500'
                                        }`}
                                >
                                    {selectedPlan === 'annual' && (
                                        <View className="absolute -top-3 self-center bg-indigo-600 px-3 py-1 rounded-full">
                                            <Text className="text-white text-xs font-bold">7 Day Free Trial</Text>
                                        </View>
                                    )}
                                    <View className="absolute top-3 right-3">
                                        <Ionicons name="checkmark-circle" size={24} color="white" />
                                    </View>
                                    <Text className="text-white text-xl font-bold">Annual</Text>
                                    <Text className="text-white text-2xl font-bold mt-1">₦1,908.33/mo</Text>
                                    <Text className="text-gray-300 text-sm mt-1">₦22,900.00/yr billed annually</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => setSelectedPlan('monthly')}
                                    className={`flex-1 p-4 rounded-xl border-2 ${selectedPlan === 'monthly'
                                        ? 'bg-indigo-600 border-indigo-600'
                                        : 'bg-gray-800/50 border-gray-500'
                                        }`}
                                >
                                    <View className="absolute top-3 right-3">
                                        {selectedPlan === 'monthly' ? (
                                            <Ionicons name="checkmark-circle" size={24} color="white" />
                                        ) : (
                                            <View className="w-6 h-6 rounded-full border-2 border-gray-400" />
                                        )}
                                    </View>
                                    <Text className="text-white text-xl font-bold">Monthly</Text>
                                    <Text className="text-white text-2xl font-bold mt-1">₦4,500.00/mo</Text>
                                    <Text className="text-gray-300 text-sm mt-1">billed monthly</Text>
                                </TouchableOpacity>
                            </View>

                            <Text className="text-gray-100 text-center my-4">
                                7 Days Free Trial then ₦22,900.00 / year
                            </Text>

                            <TouchableOpacity className="bg-indigo-600 w-full py-4 rounded-full items-center">
                                <Text className="text-white text-lg font-bold">Start My 7-Day Free Trial</Text>
                            </TouchableOpacity>

                            <View className="flex-row justify-between items-center mt-4 px-4">
                                <TouchableOpacity><Text className="text-gray-100 text-md">Restore Purchases</Text></TouchableOpacity>
                                <TouchableOpacity><Text className="text-gray-100 text-md">Terms & Conditions</Text></TouchableOpacity>
                                <TouchableOpacity><Text className="text-gray-100 text-md">Privacy Policy</Text></TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </View>

            </ImageBackground>
        </Modal >
    );
};

export default PaymentModal;