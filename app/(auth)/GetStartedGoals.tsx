import { goals, textStepsContent } from '@/constants/onBoardingData';
import * as Haptics from "expo-haptics";
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withSpring, withTiming } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../../context/AuthContext';
import OnBoardingStepEight from '../components/onboarding/OnBoardingStepEight';
import OnBoardingStepEleven from '../components/onboarding/OnBoardingStepEleven';
import OnBoardingStepFive from '../components/onboarding/OnBoardingStepFive';
import OnBoardingStepFour from '../components/onboarding/OnBoardingStepFour';
import OnBoardingStepFourteen from '../components/onboarding/OnBoardingStepFourteen';
import OnBoardingStepNine from '../components/onboarding/OnBoardingStepNine';
import OnBoardingStepOne from '../components/onboarding/OnBoardingStepOne';
import OnBoardingStepSeven from '../components/onboarding/OnBoardingStepSeven';
import OnBoardingStepSix from '../components/onboarding/OnBoardingStepSix';
import OnBoardingStepTen from '../components/onboarding/OnBoardingStepTen';
import OnBoardingStepThirteen from '../components/onboarding/OnBoardingStepThirteen';
import OnBoardingStepThree from '../components/onboarding/OnBoardingStepThree';
import OnBoardingStepTwelve from '../components/onboarding/OnBoardingStepTwelve';
import OnBoardingStepTwo from '../components/onboarding/OnBoardingStepTwo';





const GoalPill = ({ goal, index, currentStep }: { currentStep: number }) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const rotate = useSharedValue((Math.random() - 0.5) * 50);

  const springConfig = {
    // damping: 14,
    // stiffness: 90,
    // mass: 0.9,
    damping: 30,     // higher damping → slower, less bouncy
    stiffness: 20,   // lower stiffness → slower movement
    mass: 3,  // higher mass → slower response
  };



  useEffect(() => {
    const delayMs = 100;

    translateY.value = withSpring(goal.secondTop, springConfig);


    translateX.value = withDelay(
      delayMs,
      withSpring(goal.secondLeft, springConfig)
    );

    rotate.value = withDelay(
      delayMs,
      withSpring(goal.rotation, springConfig)
    );
  }, []);


  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { rotateZ: `${rotate.value}deg` },
      ],
    };
  });



  return (
    <Animated.View
      style={[
        {
          position: 'absolute',
          top: goal.top,
          left: goal.left,
          right: goal.right,
        },
        animatedStyle

      ]}
      className="rounded-full py-3.5 px-6 flex-row items-center border bg-white/10 border-white/10"
    >
      <Text className="text-lg mr-2">{goal.emoji}</Text>
      <Text className="font-semibold text-xl text-white">{goal.text}</Text>
    </Animated.View>
  );
};

const GoalPillStepOne = ({ goal, index, currentStep }: { currentStep: number, index: number }) => {
  const verticalPosition = useSharedValue(50)
  const fadeValue = useSharedValue(0)
  const fadeStepOneBadges = useSharedValue(0)


  const fadeIn = useAnimatedStyle(() => ({
    opacity: fadeStepOneBadges.value
  }))
   

  useEffect(() => {
    verticalPosition.value = withTiming(1, { duration: 1000 })
    fadeValue.value = withTiming(1, { duration: 1000 })
    setTimeout(() => {
      fadeStepOneBadges.value = withTiming(1, { duration: 1000 })
    }, 1000)
  }, [currentStep])


  return (
    <Animated.View
      style={[
        {
          position: 'absolute',
          top: goal.top,
          left: goal.left,
          right: goal.right,
        },
        fadeIn

      ]}
      className="rounded-full py-3.5 px-6 flex-row items-center border bg-white/10 border-white/10"
    >
      <Text className="text-lg mr-2">{goal.emoji}</Text>
      <Text className="font-semibold text-xl text-white">{goal.text}</Text>
    </Animated.View>



  );
};



const GetStartedGoals = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [isHolding, setIsHolding] = useState(false);
  const [holdDuration, setHoldDuration] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [showThanks, setShowThanks] = useState(false);
  const { isAuthenticated } = useAuth();


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



  useEffect(() => {
    if (currentStep === 7) {
      const timer = setTimeout(() => {
        setCurrentStep(8);
      }, 4000);
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
        <SafeAreaView className="flex-1">
          {/* Header */}
          <Text className="text-white text-2xl font-bold tracking-wider text-center ">breathwrk</Text>

          {/* Main Content Area */}
          <View className="flex-1 justify-" style={{
            alignItems: currentStep !== 4 && currentStep !== 10 ? "center" : undefined
          }}>

            {(currentStep === 0 || currentStep === 1) && (
              <View className='flex-1 w-full h-full items-center justify-center'>


                {currentStep === 0 && (
                  goals.map((goal, index) => (
                    <GoalPillStepOne key={goal.id} goal={goal} index={index} />
                  ))
                )}
                {currentStep === 1 && (
                  goals.map((goal, index) => (
                    <GoalPill key={goal.id} goal={goal} index={index} />
                  ))
                )}


                {currentStep === 0 && (
                  <OnBoardingStepOne />
                )}

                {currentStep === 1 && (
                  <OnBoardingStepTwo />
                )}
              </View>
            )}


            {currentStep === 2 && (
              <OnBoardingStepThree currentStep={currentStep} />
            )}


            {currentStep === 3 && (
              <OnBoardingStepFour />
            )}


            {currentStep === 4 && (
              <OnBoardingStepFive selectedGoals={selectedGoals} setSelectedGoals={setSelectedGoals} currentStep={currentStep} />
            )}
            {currentStep === 5 && (
              <OnBoardingStepSix currentStep={currentStep} />
            )}

            {currentStep === 6 && (
              <OnBoardingStepSeven currentStep={currentStep} setCurrentStep={setCurrentStep} />
            )}
            {currentStep === 7 && (
              <OnBoardingStepEight currentStep={currentStep} />
            )}
            {currentStep === 8 && (
              <OnBoardingStepNine isHolding={isHolding} setIsHolding={setIsHolding} setHoldDuration={setHoldDuration} holdDuration={holdDuration} setCurrentStep={setCurrentStep} currentStep={currentStep} />
            )}

            {currentStep === 9 && (
              <OnBoardingStepTen isHolding={isHolding} holdDuration={holdDuration} setCurrentStep={setCurrentStep} />
            )}


            {currentStep === 10 && (
              <OnBoardingStepEleven showThanks={showThanks} setShowThanks={setShowThanks} setCurrentStep={setCurrentStep} currentStep={currentStep} />
            )}

            {currentStep === 11 && (

              <OnBoardingStepTwelve handleContinue={handleContinue} />
            )}

            {currentStep === 12 && (
              <OnBoardingStepThirteen setCurrentStep={setCurrentStep} />
            )}
            {currentStep === 13 && (
              <OnBoardingStepFourteen currentStep={currentStep} />
            )}

          </View>



          {(currentStep !== 7 && currentStep !== 8 && currentStep !== 10 && currentStep !== 11 && currentStep !== 12) && (
            <TouchableOpacity
              onPress={handleContinue}
              disabled={currentStep === 4 && selectedGoals.length === 0}
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