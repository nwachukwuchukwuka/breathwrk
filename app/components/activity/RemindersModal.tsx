
import Feather from '@expo/vector-icons/Feather';
import React from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';

type RemindersModalProps = {
    visible: boolean;
    onClose: () => void;
};

// Data for the reminder cards
const reminders = [
    {
        id: '1',
        emoji: '🤗',
        title: 'Morning',
        time: 'Everyday - 9:00 AM',
        type: 'automatic',
    },
    // You could add more reminders here
];

const RemindersModal = ({ visible, onClose }: RemindersModalProps) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            {/* Wrapper to handle tapping the background to close */}
            <TouchableOpacity
                className="flex-1 justify-end bg-black/60"
                activeOpacity={1}
                onPressOut={onClose}
            >
                {/* Wrapper to prevent the sheet from closing when tapped on */}
                <TouchableOpacity activeOpacity={1}>
                    {/* This is the actual visible bottom sheet */}
                    <View className="bg-[#283b32] rounded-t-3xl p-6 h-[85vh]">
                    {/* <View className="bg-[#1C1C1E] rounded-t-3xl p-6 h-[85vh]"> */}


                        {/* Grabber handle and Title */}
                        <View className="items-center my-4">
                            <View className='w-24 h-1 bg-gray-500 rounded-full self-center mb-8' />
                            <View className="flex-row justify-between items-center w-full">
                                <Text className="text-white/50 text-lg">Edit</Text>
                                <Text className="text-white text-2xl font-bold">Reminders</Text>
                                <TouchableOpacity className="bg-white/20 w-8 h-8 rounded-full justify-center items-center">
                                    <Feather name="plus" size={20} color="white" />
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Reminders List */}
                        <View className="mt-6">
                            {reminders.map((reminder) => (
                                <View key={reminder.id} className="bg-black/10 rounded-2xl p-4">
                                    <Text className="text-2xl mb-1 text-white font-semibold">{reminder.emoji} {reminder.title}</Text>
                                    <Text className="text-white/70 text-base mb-3">{reminder.time}</Text>
                                    <View className="bg-black/10 rounded-full py-2 px-3 self-start">
                                        <Text className="text-white/70 text-md">{reminder.type}</Text>
                                    </View>
                                </View>
                            ))}
                        </View>

                        {/* Spacer to push save button to bottom */}
                        <View className="flex-1" />

                        {/* Save Button */}
                        <TouchableOpacity
                            onPress={onClose}
                            className="bg-white rounded-full py-4 w-full self-center mb-4"
                        >
                            <Text className="text-black text-lg font-bold text-center">Save</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>
    );
};

export default RemindersModal;