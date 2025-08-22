import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import * as Haptics from "expo-haptics";
import React, { useState } from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AudioSettingsModal from '../components/explore/breathingExercise/AudioSettingsModal';
import DurationSelectorModal from '../components/explore/breathingExercise/DurationSelectorModal';
import '../globals.css';

type DayCircleProps = {
  day: string;
  isActive: boolean;
};

const DayCircle: React.FC<DayCircleProps> = ({ day, isActive }) => (
  <View
    className={`w-[35px] h-[35px] rounded-full justify-center items-center mx-2 ${isActive ? 'border-[3px] border-white/60' : 'border-[3px] border-white/5'
      }`}>
    <Text className={`font-bold ${isActive ? 'text-white' : 'text-gray-400'}`}>
      {day}
    </Text>
  </View>
);

export default function HomeScreen() {
  const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const [isFavorited, setIsFavorited] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAudioModalVisible, setAudioModalVisible] = useState(false);
  const [isDurationModalVisible, setDurationModalVisible] = useState(false);
  const [currentDuration, setCurrentDuration] = useState(5);

  const handlePhoneToggle = () => {
    Haptics.selectionAsync();
    setIsPhone(previousState => !previousState);
  };

  return (
    <ImageBackground
      source={require('../../assets/images/home-bg.png')}
      resizeMode='cover'
      className='flex-1'
    >
      <View className='bg-black/40 flex-1'>

        <SafeAreaView className="flex-1 px-5 justify-between py-2 pt-">
          {/* Header */}
          <View className="flex-row justify-between items-center">
            <View className="flex-row items-center">
              <FontAwesome5 name="fire" size={24} color="white" />
              <Text className="text-white ml-2 font-semibold">0</Text>
            </View>
            <Text className="text-white text-2xl font-bold tracking-wider">breathwork</Text>
            <View className="flex-row items-center">
              <FontAwesome5 name="user-alt" size={20} color="white" />
              <Text className="text-white ml-2 font-semibold">377</Text>
            </View>
          </View>

          {/* Main Content */}
          <View className="items-center">
            <View className="flex-row bg-white/5 rounded-[20px] p-[9px]  mb-[130px] ">
              {weekDays.map((day, index) => (
                <DayCircle key={index} day={day} isActive={index === 2} />
              ))}
            </View>

            <Text className="text-white text-4xl text-center font-semibold leading-[34px] px-5 mb-16">
              Welcome back. This evening's exercise will help you stay calm and collected
            </Text>

            {/* <View className="flex-row items-center justify-between w-4/5">
              <View className="p-2.5 rounded-full bg-white/10">
                <MaterialCommunityIcons name="vibrate" size={24} color="white" />
              </View>
              <View className="shadow-xl shadow-white/60">
                <View className="w-[140px] h-[140px] rounded-full bg-white justify-center items-center">
                  <Text className="text-black text-[28px] font-bold">Start</Text>
                </View>
              </View>
              <View className="p-2.5 rounded-full bg-white/10">
                <FontAwesome name="exchange" size={22} color="white" />
              </View>
            </View> */}

            {/* <View className="mt-[25px] bg-white/5 rounded-[20px] py-[13px] px-[40px] border ">
              <Text className="text-white text-lg">5 min</Text>
            </View> */}

            {/* BOTTOM CONTROLS */}
            <View className="items-center ">
              <View className="flex-row items-center justify-between w-full px-6">
                <TouchableOpacity className="bg-white/5 w-16 h-16 rounded-full justify-center items-center border border-white/5" onPress={handlePhoneToggle}>
                  <MaterialCommunityIcons name={isPhone ? "vibrate" : "vibrate-off"} size={24} color="white" />
                </TouchableOpacity>

                <View className="shadow-xl shadow-white/60">
                  <View className="w-[140px] h-[140px] rounded-full bg-white justify-center items-center">
                    <Text className="text-black text-[28px] font-bold">Start</Text>
                  </View>
                </View>
                <TouchableOpacity className="bg-white/5 w-16 h-16 rounded-full justify-center items-center border border-white/5" onPress={() => {
                  Haptics.selectionAsync();
                  setAudioModalVisible(true)
                }}
                >
                  <FontAwesome name="exchange" size={22} color="white" />
                </TouchableOpacity>
              </View>



              <TouchableOpacity
                onPress={() => {
                  setDurationModalVisible(true)
                  Haptics.selectionAsync();
                }}
                className="mt-[25px] bg-white/5 rounded-[25px] py-[12px] px-[40px] border border-white/5"
              >
                <Text className="text-white text-lg">{currentDuration} min</Text>
              </TouchableOpacity>
            </View>
            <AudioSettingsModal
              visible={isAudioModalVisible}
              onClose={() => setAudioModalVisible(false)}
            />
            <DurationSelectorModal
              visible={isDurationModalVisible}
              onClose={() => setDurationModalVisible(false)}
              initialDuration={currentDuration}
              onSave={(newDuration) => {
                setCurrentDuration(newDuration);
              }}
            />
          </View>

          <View />
        </SafeAreaView>
      </View>

    </ImageBackground >
  );
}