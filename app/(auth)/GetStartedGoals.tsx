import { goals, selectableGoalsData, textStepsContent } from '@/constants/onBoardingData';
import * as Haptics from "expo-haptics";
import { useRouter } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import OnBoardingStepEight from '../components/onboarding/OnBoardingStepEight';
import OnBoardingStepEleven from '../components/onboarding/OnBoardingStepEleven';
import OnBoardingStepFive from '../components/onboarding/OnBoardingStepFive';
import OnBoardingStepFour from '../components/onboarding/OnBoardingStepFour';
import OnBoardingStepNine from '../components/onboarding/OnBoardingStepNine';
import OnBoardingStepSeven from '../components/onboarding/OnBoardingStepSeven';
import OnBoardingStepSix from '../components/onboarding/OnBoardingStepSix';
import OnBoardingStepTen from '../components/onboarding/OnBoardingStepTen';
import OnBoardingStepThree from '../components/onboarding/OnBoardingStepThree';
import OnBoardingStepTwelve from '../components/onboarding/OnBoardingStepTwelve';
import OnBoardingThirteen from '../components/onboarding/OnBoardingThirteen';
import { useAuth } from '../context/AuthContext';




const GoalItem = ({ item, isSelected, onPress }: { item: any, isSelected: boolean, onPress: () => void }) => (
  <TouchableOpacity
    onPress={onPress}
    className={` p-5 rounded-2xl flex-row items-center mb-4  ${isSelected ? 'bg-white' : 'bg-white/10'
      }`}
  >
    <Text className="text-2xl mr-4">{item.emoji}</Text>
    <Text className={`${isSelected ? 'text-black' : 'text-white'} text-lg font-semibold`}>{item.text}</Text>
  </TouchableOpacity>
);

const GetStartedGoals = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [isHolding, setIsHolding] = useState(false);
  const [holdDuration, setHoldDuration] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [showThanks, setShowThanks] = useState(false);
  const [modalVisible, setModalVisible] = useState(true);
  const { isAuthenticated } = useAuth();



  /* ----------------------   Animations for slide one --------------------------------*/
  // slide in from bottom value
  const verticalPosition = useSharedValue(50)
  const fadeValue = useSharedValue(0)
  const fadeStepOneBadges = useSharedValue(0)

  //step one slide in bottom animatestyle
  const slideIn = useAnimatedStyle(() => ({
    transform: [{ translateY: verticalPosition.value }],
    opacity: fadeValue.value
  }))


  //step one fade in badges animatestyle
  const fadeIn = useAnimatedStyle(() => ({
    opacity: fadeStepOneBadges.value
  }))



  /* ----------------------   Animations for slide three --------------------------------*/
  // step three text slide in values
  const verticalPositionThree = useSharedValue(50);
  const fadeValueThree = useSharedValue(0);

  // step three icon fade in values
  const fadeValueThreeIcons = useSharedValue(0);



  //step three animate style for slide in text
  const slideInThree = useAnimatedStyle(() => ({
    transform: [{ translateY: verticalPositionThree.value }],
    opacity: fadeValueThree.value
  }))

  //step three animate style for fade in icons
  const dispayStepThreeIcons = useAnimatedStyle(() => ({
    opacity: fadeValueThreeIcons.value
  }))








  useEffect(() => {
    verticalPosition.value = withTiming(1, { duration: 1000 })
    fadeValue.value = withTiming(1, { duration: 1000 })
    setTimeout(() => {
      fadeStepOneBadges.value = withTiming(1, { duration: 1000 })
    }, 1000)
  }, [])


  useEffect(() => {
    if (currentStep === 2) {
      verticalPositionThree.value = withTiming(0, { duration: 1000 });
      fadeValueThree.value = withTiming(1, { duration: 1000 });
      setTimeout(() => {
        fadeValueThreeIcons.value = withTiming(1, { duration: 1000 })
      }, 1000)
    }
  }, [currentStep]);


  // Cleanup effect to clear interval if the component unmounts
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const totalTextSteps = textStepsContent.length;


  const handleContinue = () => {
    Haptics.selectionAsync();

    if (currentStep < totalTextSteps) {
      setCurrentStep(prevStep => prevStep + 1);
    } else {
      router.replace('/');

    }
  };

  const toggleGoalSelection = (id: string) => {
    setSelectedGoals(prev =>
      prev.includes(id) ? prev.filter(gId => gId !== id) : [...prev, id]
    );
  };




  useEffect(() => {
    if (currentStep === 7) {
      const timer = setTimeout(() => {
        setCurrentStep(8);
      }, 2000);
      return () => clearTimeout(timer);
    }

  }, [currentStep]);


  useEffect(() => {
    if (currentStep === 14 && !isAuthenticated) {
      router.push('/PaymentModal')
    }
  }, [currentStep]);





  return (
    <View className="flex-1 bg-black/80 px-6">
      <SafeAreaView className="flex-1">
        {/* Header */}
        <Text className="text-white text-2xl font-bold tracking-wider text-center ">breathwrk</Text>

        {/* Main Content Area */}
        <View className="flex-1 justify-" style={{
          alignItems: currentStep !== 4 && currentStep !== 10 ? "center" : undefined
        }}>
          {currentStep === 0 && (
            <View className='w-full h-full items-center justify-center'>
              <Animated.View style={fadeIn} className="w-full h-full">
                {goals.map(goal => (
                  <View
                    key={goal.id}
                    className={`absolute rounded-full py-3.5 px-6 flex-row items-center border bg-white/10 border-white/10`}
                    style={{ top: goal.top, left: goal.left, right: goal.right } as any}
                  >
                    <Text className="text-lg mr-2">{goal.emoji}</Text>
                    <Text className='font-semibold text-xl text-white'>{goal.text}</Text>
                  </View>
                ))}
              </Animated.View>

              <Animated.View style={slideIn} className="absolute mt-20">
                <Text className="text-white text-3xl text-center">{textStepsContent[0].line1}</Text>
                <Text className="text-white text-6xl font-bold my-2 text-center">{textStepsContent[0].line2}</Text>
                <Text className="text-white text-3xl text-center">
                  {textStepsContent[0].line3}
                </Text>
              </Animated.View>
            </View>
          )}



          {currentStep === 1 && (
            <Animated.View style={slideIn} className="flex-1 items-center justify-center ">
              <Text className="text-white text-3xl text-center">{textStepsContent[1].line1}</Text>
              <Text className="text-white text-6xl font-bold my-2 text-center">{textStepsContent[1].line2}</Text>
              <Text className="text-white text-3xl text-center">
                {textStepsContent[1].line3}
              </Text>
            </Animated.View>
          )}

          {currentStep === 2 && (
            <View className='items-center mt-20'>
              <Animated.View style={dispayStepThreeIcons} className="mb-24">
                <Image
                  source={require('../../assets/images/logo.png')}
                  className="w-24 h-24"
                  resizeMode="contain"
                />
              </Animated.View>
              <Animated.View style={slideInThree} className="mb-14">
                <Text className="text-white text-3xl text-center">{textStepsContent[2].line1}</Text>
                <Text className="text-white text-6xl font-bold my-2 text-center">{textStepsContent[2].line2}</Text>
                <Text className="text-white text-3xl text-center">
                  {textStepsContent[2].line3}
                </Text>
              </Animated.View>

              <Animated.View style={dispayStepThreeIcons} className=''>
                <Image
                  source={require('../../assets/images/shield.png')}
                  className="w-[140px] h-[140px]"
                  resizeMode="contain"
                />
              </Animated.View>
            </View>
          )}


          {currentStep === 3 && (
            <OnBoardingStepThree />
          )}


          {currentStep === 4 && (
            <OnBoardingStepFour selectedGoals={selectedGoals} setSelectedGoals={setSelectedGoals} currentStep={currentStep} />
          )}
          {currentStep === 5 && (
            <OnBoardingStepFive currentStep={currentStep} />
          )}

          {currentStep === 6 && (
            <OnBoardingStepSix currentStep={currentStep} />
          )}
          {currentStep === 7 && (
            <OnBoardingStepSeven currentStep={currentStep} />
          )}
          {currentStep === 8 && (
            <OnBoardingStepEight isHolding={isHolding} setIsHolding={setIsHolding} setHoldDuration={setHoldDuration} holdDuration={holdDuration} setCurrentStep={setCurrentStep} currentStep={currentStep} />
          )}

          {currentStep === 9 && (

            <OnBoardingStepNine isHolding={isHolding} holdDuration={holdDuration} />
          )}


          {currentStep === 10 && (

            <OnBoardingStepTen showThanks={showThanks} setShowThanks={setShowThanks} setCurrentStep={setCurrentStep} currentStep={currentStep} />
          )}

          {currentStep === 11 && (
            // <View className="flex-1 justify-between w-full">
            //   <View>
            //     <View className="flex-row justify-end items-center px-1 pt-2">
            //       <Link href="/(tabs)/explore" asChild>
            //         <TouchableOpacity>
            //           <Text className="text-white/70 text-lg font-semibold">Skip</Text>
            //         </TouchableOpacity>
            //       </Link>
            //     </View>

            //     <Text className="text-white text-4xl font-bold text-center mt-12 px-4 leading-tight">
            //       Great! We will help you stay consistent.
            //     </Text>

            //     {/* Mock Notification Prompt */}
            //     <View className="mt-12 mx-4 border-2 border-blue-500 rounded-2xl p-0.5">
            //       <View className="bg-[#2C2C2E]/90 rounded-xl items-center py-4">
            //         <View className="px-4">
            //           <Text className="text-white text-lg font-bold text-center">
            //             "Breathwrk" Would Like to Send You Notifications
            //           </Text>
            //           <Text className="text-white/90 text-[13px] text-center mt-1">
            //             Notifications may include, alerts, sounds, and icon badges. These can be configured in Settings.
            //           </Text>
            //         </View>

            //         {/* Buttons */}
            //         <View className="border-t border-white/30 w-full mt-4 flex-row">
            //           <TouchableOpacity className="flex-1 items-center py-3" onPress={handleContinue}>
            //             <Text className="text-blue-500 text-lg">Don't Allow</Text>
            //           </TouchableOpacity>
            //           <View className="w-px h-full bg-white/30" />
            //           <TouchableOpacity className="flex-1 items-center py-3" onPress={handleContinue}>
            //             {/* NOTE: In a real app, this would trigger the permission request */}
            //             <Text className="text-blue-500 text-lg font-bold">Allow</Text>
            //           </TouchableOpacity>
            //         </View>
            //       </View>
            //     </View>

            //   </View>

            //   {/* Bottom Section */}
            //   <View className="pb-8">
            //     <Text className="text-white/80 text-center text-base">
            //       Users who allow push report 9x better results
            //     </Text>
            //   </View>
            // </View>
            <OnBoardingStepEleven handleContinue={handleContinue} />
          )}

          {currentStep === 12 && (
            <OnBoardingStepTwelve setCurrentStep={setCurrentStep} />
          )}
          {currentStep === 13 && (
            <OnBoardingThirteen currentStep={currentStep} />
          )}
          {/* 
          {currentStep === 14 && (
            <PaymentModal
              visible={modalVisible} 
              onClose={() => setModalVisible(false)} 
            />
            // <Text className='text-white'>Hello</Text>
          )} */}

        </View>




        {/* Continue Button */}
        {(currentStep !== 7 && currentStep !== 8 && currentStep !== 10 && currentStep !== 11 && currentStep !== 12) && (
          <TouchableOpacity
            onPress={handleContinue}
            disabled={currentStep === 4 && selectableGoalsData.length === 0}
            // className={`bg-white rounded-full py-5 mb-10 w-full `}
            className={`bg-white rounded-full py-5 mb-10 w-full ${(currentStep === 4 && selectedGoals.length === 0) ? 'opacity-50' : ''
              // className={`bg-white rounded-full py-5 mb-10 w-full ${(currentStep === totalTextSteps && selectedGoals.length === 0) ? 'opacity-50' : ''
              }`}
          >
            <Text className="text-black text-2xl font-bold text-center">
              {currentStep === 5 && "Let's Go"}
              {currentStep === 6 && "Next"}
              {currentStep === 9 && "Save and Continue"}
              {currentStep === 13 && "Let's Go"}
              {(currentStep !== 5 && currentStep !== 6 && currentStep !== 9 && currentStep !== 13) && "Continue"}
            </Text>
          </TouchableOpacity>
        )}



      </SafeAreaView>
    </View >
  );
};

export default GetStartedGoals;