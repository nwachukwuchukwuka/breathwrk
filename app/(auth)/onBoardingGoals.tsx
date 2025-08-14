import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export const goals = [
  { id: 'sleep', emoji: '🛌', text: 'Sleep', top: '10%', left: '15%' },
  { id: 'mood', emoji: '😌', text: 'Mood', top: '10%', right: '15%' },
  { id: 'energy', emoji: '⚡️', text: 'Energy', top: '22%', left: '5%' },
  { id: 'nervous', emoji: '💡', text: 'Nervous System', top: '22%', right: '5%' },
  { id: 'cognition', emoji: '🧠', text: 'Cognition', top: '34%', left: '10%' },
  { id: 'stress', emoji: '🧘', text: 'Stress', top: '34%', right: '15%' },
  { id: 'heart', emoji: '❤️‍🩹', text: 'Heart Health', top: '70%', left: '5%' },
  { id: 'endurance', emoji: '🏃', text: 'Endurance', top: '70%', right: '5%' },
  { id: 'immunity', emoji: '🛡️', text: 'Immunity', top: '82%', left: '5%' },
  { id: 'lung', emoji: '🫁', text: 'Lung Capacity', top: '82%', right: '5%' },
];


// Content for each step
const stepsContent = [
  {
    line1: 'How you breathe is',
    line2: 'essential',
    line3: 'for unlocking a healthy\nbrain, body, and mind.',
  },
  {
    line1: 'Unfortunately most of us',
    line2: 'breathe poorly',
    line3: 'leading to more stress,\nburnout, and restless sleep.',
  },
  {
    line1: 'The good news is just',
    line2: '5 minutes',
    line3: 'of Breathwrk a day eliminates,\nstress, improves sleeo, \n and boosts energy.',
  },
];


const GoalsScreen = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);



  const handleContinue = () => {
    if (currentStep < stepsContent.length - 1) {
      setCurrentStep(prevStep => prevStep + 1);
    } else {
      router.push('/explore');
    }
  };

  const content = stepsContent[currentStep];


  return (
    <ImageBackground
      source={require('../../assets/images/explore-bg.png')}
      className="flex-1"
    >
      <View className="flex-1 bg-black/80 p-6">
        <SafeAreaView className="flex-1">
          {/* Header */}
          <Text className="text-white text-2xl font-bold tracking-wider text-center ">breathwrk</Text>

          {/* Main Content Area */}
          <View className="flex-1 justify-center items-center">
            {currentStep === 0 && (
              <View className="w-full h-full">
                {goals.map(goal => (
                  <View
                    key={goal.id}
                    className={`absolute rounded-full py-3 px-5 flex-row items-center border bg-white/10 border-white/10`}
                    style={{ top: goal.top, left: goal.left, right: goal.right } as any}
                  >
                    <Text className="text-lg mr-2">{goal.emoji}</Text>
                    <Text className='font-semibold text-xl text-white'>{goal.text}</Text>
                  </View>
                ))}
              </View>
            )}
            {currentStep === 2 && (
              <View className="w-full h-full">
                <View
                  className='flex-row items-center justify-center mt-2'
                >
                  <Text className='text-[30px] font-bold text-white'>BW</Text>
                </View>
              </View>
            )}


            {/* Centered Text */}
            <View className="absolute items-center mt-14">
              <Text className="text-white text-3xl text-center">{content.line1}</Text>
              <Text className="text-white text-6xl font-bold my-2 text-center">{content.line2}</Text>
              <Text className="text-white text-3xl text-center">
                {content.line3}
              </Text>
            </View>

            {currentStep === 2 && (
              <View className='mb-6'>
                <Image
                  source={require('../../assets/images/splash-icon.png')}
                  className="w-24 h-24"
                  resizeMode="contain"
                />
              </View>
            )}

          </View>

          {/* Continue Button */}
          <TouchableOpacity
            onPress={handleContinue}
            className="bg-white rounded-full py-5 w-full"
          >
            <Text className="text-black text-lg font-bold text-center">Continue</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};

export default GoalsScreen;
