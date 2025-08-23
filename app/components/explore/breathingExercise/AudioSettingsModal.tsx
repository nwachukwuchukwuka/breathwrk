import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import * as Haptics from "expo-haptics";
import React, { useState } from 'react';
import { Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';



type AudioSettingsModalProps = {
    visible: boolean;
    onClose: () => void;
    selectedTone: string;
    setSelectedTone: (tone: string) => void;
};    

const tones = [
    { id: 'Sine', icon: <MaterialCommunityIcons name="sine-wave" size={28} color="white" /> },
    { id: 'Synth', icon: <MaterialCommunityIcons name="keyboard" size={28} color="white" /> },
    { id: 'Bowl', icon: <MaterialCommunityIcons name="bowl" size={28} color="white" /> },
    { id: 'Off', icon: <MaterialCommunityIcons name="minus" size={28} color="white" /> },
];

const soundscapes = [
    { id: 'Forest', color: '#3a5a40' },
    { id: 'River', color: '#588da8' },
    { id: 'Drone', color: '#d3d3d3' },
    { id: 'Off', color: 'transparent', isOff: true },
];

const voices = [
    { id: 'Davi', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { id: 'Bryan', image: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { id: 'Off', image: null, isOff: true },
];

const AudioSettingsModal = ({
    visible, onClose, selectedTone, setSelectedTone
}: AudioSettingsModalProps) => {

    const [selectedSoundscape, setSelectedSoundscape] = useState('Forest');
    const [selectedVoice, setSelectedVoice] = useState('Off');

    const handleSave = () => {
        onClose();
    }    

    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <TouchableOpacity style={{ flex: 1 }} activeOpacity={1} onPressOut={onClose} className='justify-end'>

                <View className='bg-[#283b32] rounded-t-3xl p-5 pb-10'>

                    {/* Grabber handle */}
                    <View className='w-24 h-1 bg-gray-500 rounded-full self-center mb-8' />

                    {/* header */}
                    <View className='flex-row items-center justify-center mb-6'>
                        <FontAwesome name="music" size={20} color="white" />
                        <Text className='text-white text-2xl font-bold ml-2'>Audio</Text>
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false}>
                        
                        <View className=' mt-[30px] mb-6'>
                            <Text className='text-white text-xl mb-3'>Inhale / Exhale Tone</Text>
                            <View className='bg-black/20 p-4 rounded-2xl flex-row justify-around'>
                                {tones.map(tone => (
                                    <TouchableOpacity key={tone.id} onPress={() => {
                                        setSelectedTone(tone.id)
                                        Haptics.selectionAsync();

                                    }
                                    }
                                        className='items-center'  >
                                        <View className={`w-16 h-16 rounded-full justify-center items-center bg-black/20 ${selectedTone === tone.id ? 'border-2 border-green-500' : ''}`}>
                                            {tone.icon}
                                        </View>
                                        <Text className="text-white mt-2">{tone.id}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>

                        {/* Soundscape Section */}
                        <View className="mb-6">          
                            <Text className="text-white text-xl mb-3">Soundscape</Text>
                            <View className="bg-black/20 p-4 rounded-2xl flex-row justify-around">
                                {soundscapes.map(item => (
                                    <TouchableOpacity key={item.id} onPress={() => setSelectedSoundscape(item.id)} className="items-center">
                                        <View className={`w-16 h-16 rounded-full justify-center items-center bg-black/20 ${selectedSoundscape === item.id ? 'border-2 border-green-500' : ''}`}>
                                            {item.isOff ? <MaterialCommunityIcons name="minus" size={28} color="white" /> : <View className="w-12 h-12 rounded-full" style={{ backgroundColor: item.color }} />}
                                        </View>
                                        <Text className="text-white mt-2">{item.id}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>

                        
                        <View className="mb-6">
                            <Text className="text-white text-xl mb-3">Voice Guide</Text>
                            <View className="bg-black/20 p-4 rounded-2xl flex-row justify-around">
                                {voices.map(item => (
                                    <TouchableOpacity key={item.id} onPress={() => setSelectedVoice(item.id)} className="items-center">
                                        <View className={`w-16 h-16 rounded-full justify-center items-center bg-black/20 ${selectedVoice === item.id ? 'border-2 border-green-500' : ''}`}>
                                            {item.isOff ? <MaterialCommunityIcons name="minus" size={28} color="white" /> : <Image source={{ uri: item.image! }} className="w-14 h-14 rounded-full" />}
                                        </View>
                                        <Text className="text-white mt-2">{item.id}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>

                    </ScrollView>
                   
                    <TouchableOpacity onPress={handleSave} className="bg-white rounded-full py-5 mt-4 mb-12">
                        <Text className="text-black text-lg font-bold text-center">Save</Text>
                    </TouchableOpacity>

                </View>


            </TouchableOpacity>
        </Modal>
    )
}

export default AudioSettingsModal

const styles = StyleSheet.create({})