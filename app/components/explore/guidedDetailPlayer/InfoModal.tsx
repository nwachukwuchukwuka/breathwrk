// app/components/InfoModal.tsx

import React from 'react';
import { Modal, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

type InfoModalProps = {
    visible: boolean;
    onClose: () => void;
    title?: string; // Optional props for dynamic content
    guide?: string;
};

const InfoModal = ({ visible, onClose, title, guide }: InfoModalProps) => {
    return (
        <Modal
            animationType="slide"
            transparent={false} // Use a solid background color
            visible={visible}
            onRequestClose={onClose}
        >
            <View className="flex-1 justify-between bg-[#2a3d34] p-6">
                <SafeAreaView className="flex-1 justify-between">
                    {/* Top Content */}
                    <View className="items-center mt-12">
                        <Text className="text-white/80 text-lg mb-8">{title}</Text>
                        
                        <Text className="text-white text-xl font-semibold text-center leading-8">
                            Find inner calm with Coach {guide}'s guided breathing exercises. Perfect for moments of overwhelm or needing serenity.
                        </Text>
                        
                        <View className="mt-12 items-center">
                            <Text className="text-white font-bold tracking-widest">FOR YOUR SAFETY</Text>
                            <Text className="text-white/80 text-lg text-center mt-2 leading-7">
                                Practice sitting or lying down. Stop if lightheaded. Don't practice while driving or in water.
                            </Text>
                        </View>
                    </View>

                    {/* Close Button */}
                    <TouchableOpacity
                        onPress={onClose}
                        className="bg-white rounded-full py-4 w-full"
                    >
                        <Text className="text-black text-lg font-bold text-center">Close</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </View>
        </Modal>
    );
};

export default InfoModal;