
import FontAwesome from '@expo/vector-icons/FontAwesome';
import * as Haptics from "expo-haptics";
import React, { useState } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';


type DurationSelectorModalProps = {
    visible: boolean;
    onClose: () => void;
    onSave: (duration: number) => void;
    initialDuration: number;
};

const DurationSelectorModal = ({ visible, onClose, onSave, initialDuration }: DurationSelectorModalProps) => {
    const [duration, setDuration] = useState(initialDuration);

    const handleIncrement = () => {
        setDuration(prev => prev + 1);
    };

    const handleDecrement = () => {
        setDuration(prev => Math.max(1, prev - 1));
    };

    const handleSave = () => {
        Haptics.selectionAsync();
        onSave(duration);
        onClose();
    };

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View className='bg-gray-300 flex-1'>
                <TouchableOpacity style={{ flex: 1 }} activeOpacity={1} onPressOut={onClose}>
                    <View className="flex-1 justify-around items-center p-6">

                    
                        <View />

                    
                        <View className="flex-row items-center justify-center w-full">
                            <TouchableOpacity onPress={handleDecrement} className="w-20 h-20 rounded-full border-2 border-white/50 justify-center items-center">
                                <FontAwesome name="minus" size={24} color="white" />
                            </TouchableOpacity>

                            {/* Duration Display */}
                            <View className="mx-8">
                                <View
                                    className="w-36 h-36 rounded-full bg-white justify-center items-center"
                                    style={{
                                        shadowColor: "#fff",
                                        shadowOffset: { width: 0, height: 0 },
                                        shadowOpacity: 0.6,
                                        shadowRadius: 20,
                                        elevation: 25,
                                    }}         
                                >
                                    <Text className="text-black text-6xl font-bold">{duration}</Text>
                                    <Text className="text-black/60 text-lg -mt-1">minutes</Text>
                                </View>
                            </View>

                            {/* Increment Button */}
                            <TouchableOpacity onPress={handleIncrement} className="w-20 h-20 rounded-full border-2 border-white/50 justify-center items-center">
                                <FontAwesome name="plus" size={24} color="white" />
                            </TouchableOpacity>
                        </View>

                        {/* Save Button */}
                        <TouchableOpacity onPress={handleSave} className="bg-white rounded-full py-4 w-full max-w-sm">
                            <Text className="text-black text-lg font-bold text-center">Save</Text>
                        </TouchableOpacity>

                    </View>
                </TouchableOpacity>
            </View>

        </Modal >

    );
};

export default DurationSelectorModal;