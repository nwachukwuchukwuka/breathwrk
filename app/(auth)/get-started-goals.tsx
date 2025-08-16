import { goals, selectableGoalsData, textStepsContent, whenToDoBreathWrk } from '@/constants/onBoardingData';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Link, useRouter } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { Image, ImageBackground, Pressable, Text, TouchableOpacity, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';


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
  // const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [showThanks, setShowThanks] = useState(false);



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



  /* ----------------------   Animations for slide three --------------------------------*/
  // step three text slide in values
  const verticalPositionFour = useSharedValue(50);
  const fadeValueFour = useSharedValue(0);

  // step three icon fade in values
  const fadeValueFourIcons = useSharedValue(0);



  //step three animate style for slide in text
  const slideInFour = useAnimatedStyle(() => ({
    transform: [{ translateY: verticalPositionFour.value }],
    opacity: fadeValueFour.value
  }))

  //step three animate style for fade in icons
  const dispayStepFourIcons = useAnimatedStyle(() => ({
    opacity: fadeValueFourIcons.value
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
    if (currentStep === 3) {
      verticalPositionFour.value = withTiming(0, { duration: 1000 });
      fadeValueFour.value = withTiming(1, { duration: 1000 });
      setTimeout(() => {
        fadeValueFourIcons.value = withTiming(1, { duration: 1000 })
      }, 1000)
    }
  }, [currentStep]);


  // ✨ --- NEW TIMER HANDLERS AND CLEANUP EFFECT --- ✨
  // const handlePressIn = () => {
  //   setIsHolding(true);
  //   setHoldDuration(0); // Reset duration
  //   // Start a timer that updates every 10 milliseconds for a smooth count
  //   intervalRef.current = setInterval(() => {
  //     setHoldDuration(prevDuration => prevDuration + 10);
  //   }, 10);
  // };
  // const handlePressOut = () => {
  //   setIsHolding(false);
  //   if (intervalRef.current) {
  //     clearInterval(intervalRef.current);
  //   }

  //   if (holdDuration > 500) {
  //     // Wait for a brief moment so the user can see their final score, then transition.
  //     setTimeout(() => {
  //       setCurrentStep(9); // Directly go to step 9
  //     }, 100); // 800ms delay
  //   }
  // };

  // // Cleanup effect to clear interval if the component unmounts
  // useEffect(() => {
  //   return () => {
  //     if (intervalRef.current) {
  //       clearInterval(intervalRef.current);
  //     }
  //   };
  // }, []);

  const handlePressIn = () => {
    setIsHolding(true);
    setHoldDuration(0); // Reset duration
    // Start a timer that updates every 10 milliseconds for a smooth count
    intervalRef.current = setInterval(() => {
      setHoldDuration(prevDuration => prevDuration + 10);
    }, 10);
  };
  const handlePressOut = () => {
    setIsHolding(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    if (holdDuration > 500) {
      // Wait for a brief moment so the user can see their final score, then transition.
      setTimeout(() => {
        setCurrentStep(9); // Directly go to step 9
      }, 100); // 800ms delay
    }
  };

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
    if (currentStep < totalTextSteps) {
      setCurrentStep(prevStep => prevStep + 1);
    } else {
      router.replace('/(tabs)/explore');

    }
  };

  const toggleGoalSelection = (id: string) => {
    setSelectedGoals(prev =>
      prev.includes(id) ? prev.filter(gId => gId !== id) : [...prev, id]
    );
  };
  const handleHighFive = () => {
    // Show the "thanks" message
    setShowThanks(true);

    // Wait 1.5 seconds, then advance to the next step
    setTimeout(() => {
      setCurrentStep(11);
    }, 1500);
  };


  useEffect(() => {
    // When the current step becomes 7...
    if (currentStep === 7) {
      // ...set a timer for 2 seconds.
      const timer = setTimeout(() => {
        // After 2 seconds, automatically advance to step 8.
        setCurrentStep(8);
      }, 2000); // 2000 milliseconds = 2 seconds

      // Cleanup function: If the component unmounts or currentStep changes
      // before the 2 seconds are up, clear the timer to prevent errors.
      return () => clearTimeout(timer);
    }
  }, [currentStep]); // This effect runs whenever currentStep changes



  return (
    <ImageBackground
      source={require('../../assets/images/explore-bg.png')}
      className="flex-1"
    >
      <View className="flex-1 bg-black/80 px-6">
        <SafeAreaView className="flex-1">
          {/* Header */}
          <Text className="text-white text-2xl font-bold tracking-wider text-center ">breathwrk</Text>

          {/* Main Content Area */}
          <View className="flex-1 justify-center" style={{
            alignItems: currentStep !== 4 && currentStep !== 10 ? "center" : undefined
          }}>
            {currentStep === 0 && (
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
            )}


            {currentStep === 2 && (
              <Animated.View style={dispayStepThreeIcons} className="w-full h-full">
                <View
                  className='flex-row items-center justify-center mt-[240px]'
                >
                  <Image
                    source={require('../../assets/images/logo.png')}
                    className="w-24 h-24"
                    resizeMode="contain"
                  />
                </View>
              </Animated.View>
            )}


            {/* Centered Text */}
            {currentStep === 0 && (
              <Animated.View style={slideIn} className="absolute items-center mt-20">
                <Text className="text-white text-3xl text-center">{textStepsContent[0].line1}</Text>
                <Text className="text-white text-6xl font-bold my-2 text-center">{textStepsContent[0].line2}</Text>
                <Text className="text-white text-3xl text-center">
                  {textStepsContent[0].line3}
                </Text>
              </Animated.View>
            )}
            {currentStep === 1 && (
              <Animated.View style={slideIn} className="absolute items-center mt-20">
                <Text className="text-white text-3xl text-center">{textStepsContent[1].line1}</Text>
                <Text className="text-white text-6xl font-bold my-2 text-center">{textStepsContent[1].line2}</Text>
                <Text className="text-white text-3xl text-center">
                  {textStepsContent[1].line3}
                </Text>
              </Animated.View>
            )}
            {currentStep === 2 && (
              <Animated.View style={slideInThree} className="absolute items-center">
                <Text className="text-white text-3xl text-center">{textStepsContent[2].line1}</Text>
                <Text className="text-white text-6xl font-bold my-2 text-center">{textStepsContent[2].line2}</Text>
                <Text className="text-white text-3xl text-center">
                  {textStepsContent[2].line3}
                </Text>
              </Animated.View>
            )}
            {currentStep === 2 && (
              <Animated.View style={dispayStepThreeIcons} className='mb-[240px]'>
                <Image
                  source={require('../../assets/images/shield.png')}
                  className="w-[140px] h-[140px]"
                  resizeMode="contain"
                />
              </Animated.View>
            )}

            {currentStep === 3 && (
              <View className="absolute top-[70px] items-center ">
                <View className='flex-row gap-8'>
                  <Image
                    source={require('../../assets/images/brain1.png')}
                    className="w-[100px] h-[100px]"
                    resizeMode="contain"
                  />

                  <Image
                    source={require('../../assets/images/brain1.png')}
                    className="w-[100px] h-[100px]"
                    resizeMode="contain"
                  />
                </View>
                <View className='flex-row gap-6 mt-4'>
                  <View
                    className={` rounded-full py-1 px-3 flex-row items-center border bg-white/10 border-white/10`}
                  >
                    <Text className="text-white text-md">Before Breathwrk</Text>
                  </View>
                  <View
                    className={` rounded-full py-1 px-3 flex-row items-center border bg-white/10 border-white/10`}
                  >
                    <Text className="text-white text-md">After Breathwrk</Text>
                  </View>
                </View>

              </View>
            )}
            {currentStep === 3 && (
              <Animated.View style={slideInFour} className="absolute items-center">
                <Text className="text-white text-3xl text-center">{textStepsContent[3].line1}</Text>
                <Text className="text-white text-6xl font-bold my-2 text-center">{textStepsContent[3].line2}</Text>
                <Text className="text-white text-3xl text-center">
                  {textStepsContent[3].line3}
                </Text>
              </Animated.View>
            )}

            {currentStep === 3 && (
              <Animated.View style={dispayStepFourIcons} className='mt-[370px] '>
                <Image
                  source={require('../../assets/images/shield.png')}
                  className="w-[140px] h-[140px]"
                  resizeMode="contain"
                />
              </Animated.View>
            )}

            {currentStep === 3 && (
              <Text className='text-white italic absolute bottom-[15px]'>Source:Balban et al, 2023, Ceil Reports Medicine 4, 100895</Text>
            )}


            {currentStep === 4 && (
              <View className="flex-1">
                <View>
                  <Text className="text-white text-4xl font-bold text-center mt-[60px]">
                    {textStepsContent[4].line1}
                  </Text>
                  <Text className="text-white/70 font-bold text-base text-center mt-2">
                    {textStepsContent[4].line2}
                  </Text>
                </View>
                <View className="mt-12">
                  {selectableGoalsData.map(goal => (
                    <GoalItem
                      key={goal.id}
                      item={goal}
                      isSelected={selectedGoals.includes(goal.id)}
                      onPress={() => toggleGoalSelection(goal.id)}
                    />
                  ))}
                </View>
              </View>
            )}
            {currentStep === 5 && (
              <View className="flex-1 mt-12">
                <View className="items-center">
                  <Text className="text-white text-4xl font-bold text-center leading-tight">
                    Breathwrk rewires your{'\n'}nervous system fast
                  </Text>
                </View>

                {/* Chart Section */}
                <View className="items-center mt-[80px]">
                  <Image
                    // source={require('../../assets/images/bar-graph.png')}
                    source={require('../../assets/images/chart.png')}
                    // source={require('../../assets/images/data-driven.png')}
                    className="w-full h-72"
                    resizeMode="contain"
                  />

                </View>

                {/* Info and Action Section */}
                <View>
                  <View className="bg-white/10 rounded-2xl  w-full">
                    <Text className="text-white/80 text-xl leading-6 p-4">
                      Heart Rate Variability (HRV) is an indicator of autonomic nervous system health, overall resilience to stress, and mood.
                    </Text>
                    <TouchableOpacity className="bg-white/10 rounded-b-2xl p-3 mt-4 flex-row items-center justify-center">
                      <FontAwesome5 name="dna" size={16} color="white" />
                      <Text className="text-white font-semibold ml-2 text-xl">Change your biology</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
            {currentStep === 6 && (
              <Animated.View style={slideIn} className="absolute items-center top-[120px]">
                <View>
                  <Image
                    source={require('../../assets/images/lungs.png')}
                    className="w-52"
                    resizeMode="contain"
                  />
                </View>
                <Text className="text-white text-3xl text-center font-bold">{textStepsContent[6].line1}</Text>
                <Text className="text-white/90 text-xl font-semibold mt-10 text-center ">{textStepsContent[6].line2}</Text>

              </Animated.View>
            )}
            {currentStep === 7 && (
              <Animated.View style={slideIn} className="absolute items-center top-0">
                <View>
                  <Image
                    source={require('../../assets/images/sense.png')}
                    className="w-14"
                    resizeMode="contain"
                  />
                </View>
                <Text className="text-white text-3xl text-center font-semibold -mt-[200px]">{textStepsContent[7].line1}</Text>
              </Animated.View>
            )}
            {currentStep === 8 && (
              <Animated.View style={slideIn} className="absolute items-center bottom-32">
                {isHolding && (
                  <View className='absolute top-[100px] items-center'>
                    <Text className="text-white text-7xl font-bold  ">
                      {(holdDuration / 1000).toFixed(1)}
                    </Text>
                    <Text className="text-white text-4xl font-semibold">seconds</Text>
                  </View>
                )}
                <View>
                  {/* {isHolding ? <Image
                    source={require('../../assets/images/open-mouth.png')}
                    className="w-14 "
                    resizeMode="contain"
                  /> : <Image
                    source={require('../../assets/images/tap.png')}
                    className="w-14 "
                    resizeMode="contain"
                  />} */}
                  {isHolding && <Image
                    source={require('../../assets/images/open-mouth.png')}
                    className="w-14 "
                    resizeMode="contain"
                  />}
                  {!isHolding && <Image
                    source={require('../../assets/images/tap.png')}
                    className="w-14 "
                    resizeMode="contain"
                  />}

                </View>
                {isHolding ? <Text className="text-white text-3xl text-center font-semibold -mt-[200px]">{textStepsContent[8].line2}</Text>
                  : <Text className="text-white text-3xl text-center font-semibold -mt-[200px]">{textStepsContent[8].line1}</Text>
                }
                <Pressable
                  onPressIn={handlePressIn}
                  onPressOut={handlePressOut}
                  className='bg-white rounded-full w-60 h-60 items-center mt-24'                >
                  <Image
                    source={require('../../assets/images/fingerprint-scan.png')}
                    className="w-[120px] h-full"
                    resizeMode="contain"
                  />
                  <Text className="text-black/40 text-md font-bold -mt-12">Hold here</Text>
                </Pressable>
              </Animated.View>
            )}

            {currentStep === 9 && (
              <Animated.View style={slideIn} className="absolute items-center top-[70px]">
                <View className='absolute top-0 items-center'>
                  <Text className="text-white text-7xl font-bold">
                    {(holdDuration / 1000).toFixed(1)}

                  </Text>
                  <Text className="text-white text-4xl font-semibold">seconds</Text>
                </View>

                <Text className="text-white text-3xl text-center font-semibold top-48">{textStepsContent[9].line1}</Text>
                <View className='bg-white/25 rounded-full w-[150px] h-[150px] justify-center items-center top-56'>
                  <View className='bg-white/10 rounded-full w-[80px] h-[80px]  items-center '>
                  </View>

                </View>
                <Text className="text-white text-md text-center font-bold mt-[220px]">{textStepsContent[9].line2}</Text>

                <Text className="text-white/50 text-lg text-center font-semibold mt-[60px]">Want to retest? click here</Text>

              </Animated.View>
            )}


            {currentStep === 10 && (
              <View className="flex-1">
                <View>
                  <Text className="text-white text-4xl font-bold text-center mt-[100px]">
                    {textStepsContent[10].line1}
                  </Text>
                  <Text className="text-white/70 font-bold text-base text-center mt-2">
                    {textStepsContent[10].line2}
                  </Text>
                </View>
                <View className="mt-8">
                  {whenToDoBreathWrk.map(goal => (
                    <GoalItem
                      key={goal.id}
                      item={goal}
                      isSelected={selectedGoals.includes(goal.id)}
                      onPress={() => toggleGoalSelection(goal.id)}
                    />
                  ))}
                </View>
                <View className='items-center'>
                  <Pressable
                    onPress={handleHighFive}
                    className='bg-white rounded-full w-40 h-40 items-center mt-24'>
                    <Image
                      source={require('../../assets/images/high-five.png')}
                      className="w-[80px] h-full"
                      resizeMode="contain"
                    />
                  </Pressable>
                  <Text className="text-white text-md font-bold mt-2">High five to commit</Text>
                  {showThanks ? (
                    // <View className='absolute top-0'>
                    <Image
                      source={{ uri: 'https://cdn.pixabay.com/animation/2024/05/02/07/43/07-43-00-535_512.gif' }}
                      className="w-28 h-28 rounded-full"
                    />
                    // </View>
                  ) : (
                    <Text className="text-white/20 text-md font-bold mt-4">Press here</Text>
                  )}
                </View>
              </View>
            )}

            {currentStep === 11 && (
              <View className="flex-1 justify-between w-full">
                <View>
                  <View className="flex-row justify-end items-center px-1 pt-2">
                    <Link href="/(tabs)/explore" asChild>
                      <TouchableOpacity>
                        <Text className="text-white/70 text-lg font-semibold">Skip</Text>
                      </TouchableOpacity>
                    </Link>
                  </View>

                  <Text className="text-white text-4xl font-bold text-center mt-12 px-4 leading-tight">
                    Great! We will help you stay consistent.
                  </Text>

                  {/* Mock Notification Prompt */}
                  <View className="mt-12 mx-4 border-2 border-blue-500 rounded-2xl p-0.5">
                    <View className="bg-[#2C2C2E]/90 rounded-xl items-center py-4">
                      <View className="px-4">
                        <Text className="text-white text-lg font-bold text-center">
                          "Breathwrk" Would Like to Send You Notifications
                        </Text>
                        <Text className="text-white/90 text-[13px] text-center mt-1">
                          Notifications may include, alerts, sounds, and icon badges. These can be configured in Settings.
                        </Text>
                      </View>

                      {/* Buttons */}
                      <View className="border-t border-white/30 w-full mt-4 flex-row">
                        <TouchableOpacity className="flex-1 items-center py-3" onPress={handleContinue}>
                          <Text className="text-blue-500 text-lg">Don't Allow</Text>
                        </TouchableOpacity>
                        <View className="w-px h-full bg-white/30" />
                        <TouchableOpacity className="flex-1 items-center py-3" onPress={handleContinue}>
                          {/* NOTE: In a real app, this would trigger the permission request */}
                          <Text className="text-blue-500 text-lg font-bold">Allow</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>

                </View>

                {/* Bottom Section */}
                <View className="pb-8">
                  <Text className="text-white/80 text-center text-base">
                    Users who allow push report 9x better results
                  </Text>
                </View>
              </View>
            )}

            {currentStep === 12 && (
              <View className="flex-1 justify-between w-full">
                <Text>hello</Text>
              </View>
            )}

          </View>



          {/* Continue Button */}
          {(currentStep !== 7 && currentStep !== 8 && currentStep !== 10 && currentStep !== 11) && (
            <TouchableOpacity
              onPress={handleContinue}
              disabled={currentStep === totalTextSteps && selectableGoalsData.length === 0}
              className={`bg-white rounded-full py-5 mb-10 w-full ${(currentStep === totalTextSteps && selectedGoals.length === 0) ? 'opacity-50' : ''
                }`}
            >
              <Text className="text-black text-2xl font-bold text-center">
                {currentStep === 5 && "Let's Go"}
                {currentStep === 6 && "Next"}
                {currentStep === 9 && "Save and Continue"}
                {(currentStep !== 5 && currentStep !== 6 && currentStep !== 9) && "Continue"}
              </Text>
            </TouchableOpacity>
          )}

          {currentStep === 6 && (
            <Link href="/" className='text-white/35 text-center  text-lg underline'>Setup later</Link>
          )}
          {currentStep === 5 && (
            <Link href="/" className='text-white/35 text-center  text-sm'>*Based on a peer reviewed 4 weeks study of Breathwork</Link>
          )}
        </SafeAreaView>
      </View >
    </ImageBackground >
  );
};

export default GetStartedGoals;