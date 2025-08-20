import { selectableGoalsData, textStepsContent } from '@/constants/onBoardingData';
import * as Haptics from "expo-haptics";
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import LottieView from 'lottie-react-native';
import React, { useEffect, useRef, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../../context/AuthContext';
import OnBoardingStepEight from '../components/onboarding/OnBoardingStepEight';
import OnBoardingStepEleven from '../components/onboarding/OnBoardingStepEleven';
import OnBoardingStepFive from '../components/onboarding/OnBoardingStepFive';
import OnBoardingStepFour from '../components/onboarding/OnBoardingStepFour';
import OnBoardingStepNine from '../components/onboarding/OnBoardingStepNine';
import OnBoardingStepOne from '../components/onboarding/OnBoardingStepOne';
import OnBoardingStepSeven from '../components/onboarding/OnBoardingStepSeven';
import OnBoardingStepSix from '../components/onboarding/OnBoardingStepSix';
import OnBoardingStepTen from '../components/onboarding/OnBoardingStepTen';
import OnBoardingStepThree from '../components/onboarding/OnBoardingStepThree';
import OnBoardingStepTwelve from '../components/onboarding/OnBoardingStepTwelve';
import OnBoardingStepTwo from '../components/onboarding/OnBoardingStepTwo';
import OnBoardingThirteen from '../components/onboarding/OnBoardingThirteen';



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



  const gradientColors = ['#004d00', '#006400', '#00a000'] as const;


  return (
    <LinearGradient
      colors={gradientColors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >

      <View className="flex-1 bg-black/70 px-6">
        {/* <View className="flex-1 bg-black/80 px-6"> */}
        <SafeAreaView className="flex-1">
          {/* Header */}
          <Text className="text-white text-2xl font-bold tracking-wider text-center ">breathwrk</Text>

          {/* Main Content Area */}
          <View className="flex-1 justify-" style={{
            alignItems: currentStep !== 4 && currentStep !== 10 ? "center" : undefined
          }}>
            {currentStep === 0 && (
              <OnBoardingStepOne currentStep={currentStep} />
            )}



            {currentStep === 1 && (
              <OnBoardingStepTwo />
            )}

            {currentStep === 2 && (
              <View className='items-center mt-20'>
                <View>
                  <View className='absolute -right-[110px] -top-[100px]'>
                    <LottieView style={{ height: 300, width: 300 }} source={require('../../assets/images/ray.json')} autoPlay loop />
                  </View>
                  <Animated.View style={dispayStepThreeIcons} className="mb-24">
                    <Image
                      source={require('../../assets/images/logo.png')}
                      className="w-24 h-24"
                      resizeMode="contain"
                    />
                  </Animated.View>
                </View>
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

              <OnBoardingStepEleven handleContinue={handleContinue} />
            )}

            {currentStep === 12 && (
              <OnBoardingStepTwelve setCurrentStep={setCurrentStep} />
            )}
            {currentStep === 13 && (
              <OnBoardingThirteen currentStep={currentStep} />
            )}

          </View>



          {(currentStep !== 7 && currentStep !== 8 && currentStep !== 10 && currentStep !== 11 && currentStep !== 12) && (
            <TouchableOpacity
              onPress={handleContinue}
              disabled={currentStep === 4 && selectableGoalsData.length === 0}
              className={`bg-white rounded-full py-5 mb-10 w-full ${(currentStep === 4 && selectedGoals.length === 0) ? 'opacity-50' : ''
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
    </LinearGradient>

  );
};

export default GetStartedGoals;