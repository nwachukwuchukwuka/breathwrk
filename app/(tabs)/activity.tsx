import Feather from '@expo/vector-icons/Feather';
import React, { useState } from 'react';
import { Image, ImageBackground, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg';
import RemindersModal from '../components/activity/RemindersModal';
import SettingsModal from '../components/activity/SettingsModal';


const Header = ({ onMenuPress, onBellPress }: { onMenuPress: () => void, onBellPress: () => void }) => (<View className="flex-row justify-between items-center  py-4">
  <TouchableOpacity onPress={onMenuPress}>
    <Feather name="menu" size={24} color="white" />
  </TouchableOpacity>
  <Text className="text-white text-xl font-bold tracking-wider">breathwrk</Text>
  <TouchableOpacity onPress={onBellPress}>
    <Feather name="bell" size={24} color="white" />
  </TouchableOpacity>
</View>
);

const ProfileStats = () => (
  <View className=" mt-6">
    <View className="flex-row items-center">                
      <TouchableOpacity>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=500' }}                             
          className="w-20 h-28 rounded-full"
        />
      </TouchableOpacity>
      {/* Stats and Level Progress */}
      <View className="flex-1 ml-4">
        <View className="flex-row justify-around">
          <View className="items-center">
            <Text className="text-white text-3xl font-bold">1</Text>
            <Text className="text-gray-100 text-lg">Streak</Text>
          </View>
          <View className="items-center">
            <Text className="text-white text-3xl font-bold">11</Text>
            <Text className="text-gray-100 text-lg">Breaths</Text>
          </View>
          <View className="items-center">
            <Text className="text-white text-3xl font-bold">0</Text>
            <Text className="text-gray-100 text-lg">Minutes</Text>
          </View>
        </View>
        <View className="mt-4 relative">
          <View className="flex-row justify-between items-center mb-1 absolute z-10 top-2.5 left-2">
            <Text className="text-white font-semibold">Level 1</Text>
          </View>
          <View className="flex-row justify-between items-center mb-1 absolute z-10 top-2 right-2">
            <Text className="text-gray-100 text-xl">19</Text>
          </View>
          <View className="w-full bg-gray-700 rounded-full h-10">
            <View className="bg-gray-400 h-10 rounded-full" style={{ width: '55%' }} />
          </View>                           
        </View>
      </View>
    </View>
  </View>
);

const BreathScore = () => (
  <View className="items-center justify-center my-16">
    <View className="w-48 h-48 items-center justify-center">
    
      <View className="absolute">                             
        <Svg height="200" width="200" viewBox="0 0 100 100">
        
          <Defs>
            <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
              <Stop offset="0%" stopColor="#38bdf8" />
              <Stop offset="100%" stopColor="#34d399" />
            </LinearGradient>
          </Defs>
        
          <Path
            d="M 50,5 A 45,45 0 1 1 49.9,5.001 M 50,5 C 60,15 60,35 50,45 C 40,35 40,15 50,5"
            stroke="url(#grad)"
            strokeWidth="2"
            fill="none"
            transform="translate(0,0) scale(1) rotate(20 50 50)"
          />

        </Svg>
      </View>
    
      <Text className="text-white text-7xl font-bold mt-12">52</Text>
      <Text className="text-gray-100 text-xl">out of 100</Text>
    </View>
    <Text className="text-white text-xl font-semibold mt-6">Breath Score</Text>
  </View>
);


export default function ActivityScreen() {
  const [isSettingsVisible, setSettingsVisible] = useState(false);
  const [isRemindersVisible, setRemindersVisible] = useState(false);

  return (
    <ImageBackground
      source={require('../../assets/images/explore-bg.png')}
      resizeMode="cover"
      className='flex-1'
    >
      <View className='flex-1 bg-black/80 p-8 pt-[70px]'>
        <SafeAreaView className="flex-1 ">
          <ScrollView className="">
            <Header onMenuPress={() => setSettingsVisible(true)} onBellPress={() => setRemindersVisible(true)} />
            <ProfileStats />
            <BreathScore />
          </ScrollView>
        </SafeAreaView>
      </View>

      <SettingsModal
        visible={isSettingsVisible}
        onClose={() => setSettingsVisible(false)}
      />

      <RemindersModal
        visible={isRemindersVisible}
        onClose={() => setRemindersVisible(false)}
      />
    </ImageBackground>

  );
}                                                                