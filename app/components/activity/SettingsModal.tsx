// app/components/SettingsModal.tsx

import Feather from '@expo/vector-icons/Feather';
import React from 'react';
import { Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';

type SettingsModalProps = {
    visible: boolean;
    onClose: () => void;
};

// A reusable component for each settings item
const SettingsItem = ({ label }: { label: string }) => (
    <TouchableOpacity className="flex-row justify-between items-center py-4">
        <Text className="text-white text-lg">{label}</Text>
        <Feather name="chevron-right" size={20} color="gray" />
    </TouchableOpacity>
);

const SettingsModal = ({ visible, onClose }: SettingsModalProps) => {
    return (
        <Modal
            animationType="slide"
            transparent={true} // Keep this true for the overlay effect
            visible={visible}
            onRequestClose={onClose}
        >
            {/* Wrapper to handle tapping the background to close */}
            <TouchableOpacity
                className="flex-1 justify-end bg-black/60" // `justify-end` pushes the sheet to the bottom
                activeOpacity={1}
                onPressOut={onClose}
            >
                {/* Wrapper to prevent the sheet from closing when tapped on */}
                <TouchableOpacity activeOpacity={1}>
                    {/* This is the actual visible bottom sheet */}
                    <View className="bg-[#283b32] rounded-t-3xl p-6 pb-10 h-[85vh]">
                    {/* <View className="bg-[#1C1C1E] rounded-t-3xl p-6 pb-10 h-[85vh]"> */}


                        {/* Grabber handle and Title */}
                        <View className="items-center my-4">
                            <View className='w-24 h-1 bg-gray-500 rounded-full self-center mb-8' />

                            <Text className="text-white text-4xl font-bold">Settings</Text>
                        </View>

                        {/* --- Scrollable Content --- */}
                        <ScrollView showsVerticalScrollIndicator={false}>
                            {/* Settings Sections */}
                            <View>
                                <SettingsItem label="Change my Goals" />
                                <SettingsItem label="Change my Breathwrk Time" />
                                <SettingsItem label="Subscription Management" />
                            </View>

                            <View className="h-px bg-gray-500 my-4" />

                            <View>
                                <SettingsItem label="Contact Us" />
                                <SettingsItem label="Terms and Conditions" />
                                <SettingsItem label="Privacy Policy" />
                            </View>

                            {/* Buttons and Info */}
                            <View className="items-center mt-8">
                                <TouchableOpacity className="bg-white rounded-full py-4 w-full max-w-sm">
                                    <Text className="text-black text-lg font-bold text-center">Logout</Text>
                                </TouchableOpacity>

                                <TouchableOpacity className="mt-6">
                                    <Text className="text-red-500 text-lg">Delete Account</Text>
                                </TouchableOpacity>

                                <View className="items-center mt-10 text-center opacity-40">
                                    <Text className="text-gray-400 text-xs">MIHb30JuLIX1owH4MLQPstBy0Gt1</Text>
                                    <Text className="text-gray-400 text-xs mt-1">106557231071991789329</Text>
                                    <Text className="text-gray-400 text-xs mt-1">Build Version: 565</Text>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>
    );
};

export default SettingsModal;