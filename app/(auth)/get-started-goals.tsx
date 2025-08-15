// import { goals, selectableGoalsData } from '@/constants/onBoardingData';
// import { useRouter } from 'expo-router';
// import React, { useEffect, useState } from 'react';
// import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
// import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
// import { SafeAreaView } from 'react-native-safe-area-context';


// const GoalItem = ({ item, isSelected, onPress }: { item: any, isSelected: boolean, onPress: () => void }) => (
//   <TouchableOpacity
//     onPress={onPress}
//     className={` p-5 rounded-2xl flex-row items-center mb-4  ${isSelected ? 'bg-white' : 'bg-white/10'
//       }`}
//   >
//     <Text className="text-2xl mr-4">{item.emoji}</Text>
//     <Text className={`${isSelected ? 'text-black' : 'text-white'} text-lg font-semibold`}>{item.text}</Text>
//   </TouchableOpacity>
// );

// const GetStartedGoals = () => {
//   const router = useRouter();
//   const [currentStep, setCurrentStep] = useState(0);
//   const [selectedGoals, setSelectedGoals] = useState<string[]>([]);


//   /* ----------------------   Animations for slide one --------------------------------*/
//   // slide in from bottom value
//   const verticalPosition = useSharedValue(50)
//   const fadeValue = useSharedValue(0)
//   const fadeStepOneBadges = useSharedValue(0)

//   //step one slide in bottom animatestyle
//   const slideIn = useAnimatedStyle(() => ({
//     transform: [{ translateY: verticalPosition.value }],
//     opacity: fadeValue.value
//   }))


//   //step one fade in badges animatestyle
//   const fadeIn = useAnimatedStyle(() => ({
//     opacity: fadeStepOneBadges.value
//   }))



//   /* ----------------------   Animations for slide three --------------------------------*/
//   // step three text slide in values
//   const verticalPositionThree = useSharedValue(50);
//   const fadeValueThree = useSharedValue(0);

//   // step three icon fade in values
//   const fadeValueThreeIcons = useSharedValue(0);



//   //step three animate style for slide in text
//   const slideInThree = useAnimatedStyle(() => ({
//     transform: [{ translateY: verticalPositionThree.value }],
//     opacity: fadeValueThree.value
//   }))

//   //step three animate style for fade in icons
//   const dispayStepThreeIcons = useAnimatedStyle(() => ({
//     opacity: fadeValueThreeIcons.value
//   }))



//   /* ----------------------   Animations for slide three --------------------------------*/
//   // step three text slide in values
//   const verticalPositionFour = useSharedValue(50);
//   const fadeValueFour = useSharedValue(0);

//   // step three icon fade in values
//   const fadeValueFourIcons = useSharedValue(0);



//   //step three animate style for slide in text
//   const slideInFour = useAnimatedStyle(() => ({
//     transform: [{ translateY: verticalPositionFour.value }],
//     opacity: fadeValueFour.value
//   }))

//   //step three animate style for fade in icons
//   const dispayStepFourIcons = useAnimatedStyle(() => ({
//     opacity: fadeValueFourIcons.value
//   }))





//   useEffect(() => {
//     verticalPosition.value = withTiming(1, { duration: 1000 })
//     fadeValue.value = withTiming(1, { duration: 1000 })
//     setTimeout(() => {
//       fadeStepOneBadges.value = withTiming(1, { duration: 1000 })
//     }, 1000)
//   }, [])


//   useEffect(() => {
//     if (currentStep === 2) {
//       verticalPositionThree.value = withTiming(0, { duration: 1000 });
//       fadeValueThree.value = withTiming(1, { duration: 1000 });
//       setTimeout(() => {
//         fadeValueThreeIcons.value = withTiming(1, { duration: 1000 })
//       }, 1000)
//     }
//     if (currentStep === 3) {
//       verticalPositionFour.value = withTiming(0, { duration: 1000 });
//       fadeValueFour.value = withTiming(1, { duration: 1000 });
//       setTimeout(() => {
//         fadeValueFourIcons.value = withTiming(1, { duration: 1000 })
//       }, 1000)
//     }
//   }, [currentStep]);






//   const textStepsContent = [
//     {
//       line1: 'How you breathe is',
//       line2: 'essential',
//       line3: 'for unlocking a healthy\nbrain, body, and mind.',
//     },
//     {
//       line1: 'Unfortunately most of us',
//       line2: 'breathe poorly',
//       line3: 'leading to more stress,\nburnout, and restless sleep.',
//     },
//     {
//       line1: 'The good news is just',
//       line2: '5 minutes',
//       line3: 'of Breathwrk a day eliminates,\nstress, improves sleeo, \n and boosts energy.',
//     },
//     {
//       line1: 'Its not magic its',
//       line2: 'Neuroscience',
//       line3: 'Breathwrk rewires your nervous \ system in seconds.'
//     },
//   ];

//   const totalTextSteps = textStepsContent.length;


//   const handleContinue = () => {
//     if (currentStep < totalTextSteps) {
//       setCurrentStep(prevStep => prevStep + 1);
//     } else {
//       router.replace('/(tabs)/explore');

//     }
//   };

//   const toggleGoalSelection = (id: string) => {
//     setSelectedGoals(prev =>
//       // If the goal is already selected, remove it. Otherwise, add it.
//       prev.includes(id) ? prev.filter(gId => gId !== id) : [...prev, id]
//     );
//   };



//   return (
//     <ImageBackground
//       source={require('../../assets/images/explore-bg.png')}
//       className="flex-1"
//     >
//       <View className="flex-1 bg-black/80 px-6">
//         <SafeAreaView className="flex-1">
//           {/* Header */}
//           <Text className="text-white text-2xl font-bold tracking-wider text-center ">breathwrk</Text>

//           {/* Main Content Area */}
//           {currentStep < totalTextSteps ? (
//             <View className="flex-1 justify-center items-center">
//               {currentStep === 0 && (
//                 <Animated.View style={fadeIn} className="w-full h-full">
//                   {goals.map(goal => (
//                     <View
//                       key={goal.id}
//                       className={`absolute rounded-full py-3 px-5 flex-row items-center border bg-white/10 border-white/10`}
//                       style={{ top: goal.top, left: goal.left, right: goal.right } as any}
//                     >
//                       <Text className="text-lg mr-2">{goal.emoji}</Text>
//                       <Text className='font-semibold text-xl text-white'>{goal.text}</Text>
//                     </View>
//                   ))}
//                 </Animated.View>
//               )}


//               {currentStep === 2 && (
//                 <Animated.View style={dispayStepThreeIcons} className="w-full h-full">
//                   <View
//                     className='flex-row items-center justify-center mt-[240px]'
//                   >
//                     <Image
//                       source={require('../../assets/images/logo.png')}
//                       className="w-24 h-24"
//                       resizeMode="contain"
//                     />
//                   </View>
//                 </Animated.View>
//               )}


//               {/* Centered Text */}
//               {currentStep === 0 && (
//                 <Animated.View style={slideIn} className="absolute items-center mt-20">
//                   <Text className="text-white text-3xl text-center">{textStepsContent[0].line1}</Text>
//                   <Text className="text-white text-6xl font-bold my-2 text-center">{textStepsContent[0].line2}</Text>
//                   <Text className="text-white text-3xl text-center">
//                     {textStepsContent[0].line3}
//                   </Text>
//                 </Animated.View>
//               )}
//               {currentStep === 1 && (
//                 <Animated.View style={slideIn} className="absolute items-center mt-20">
//                   <Text className="text-white text-3xl text-center">{textStepsContent[1].line1}</Text>
//                   <Text className="text-white text-6xl font-bold my-2 text-center">{textStepsContent[1].line2}</Text>
//                   <Text className="text-white text-3xl text-center">
//                     {textStepsContent[1].line3}
//                   </Text>
//                 </Animated.View>
//               )}
//               {currentStep === 2 && (
//                 <Animated.View style={slideInThree} className="absolute items-center">
//                   <Text className="text-white text-3xl text-center">{textStepsContent[2].line1}</Text>
//                   <Text className="text-white text-6xl font-bold my-2 text-center">{textStepsContent[2].line2}</Text>
//                   <Text className="text-white text-3xl text-center">
//                     {textStepsContent[2].line3}
//                   </Text>
//                 </Animated.View>
//               )}
//               {currentStep === 2 && (
//                 <Animated.View style={dispayStepThreeIcons} className='mb-[240px]'>
//                   <Image
//                     source={require('../../assets/images/app-of-day.png')}
//                     className="w-[140px] h-[140px]"
//                     resizeMode="contain"
//                   />
//                 </Animated.View>
//               )}

//               {currentStep === 3 && (
//                 <Animated.View style={slideInFour} className="absolute items-center">
//                   <Text className="text-white text-3xl text-center">{textStepsContent[3].line1}</Text>
//                   <Text className="text-white text-6xl font-bold my-2 text-center">{textStepsContent[3].line2}</Text>
//                   <Text className="text-white text-3xl text-center">
//                     {textStepsContent[3].line3}
//                   </Text>
//                 </Animated.View>
//               )}

//               {currentStep === 3 && (
//                 <Animated.View style={dispayStepFourIcons} className='mt-[300px] '>
//                   <Image
//                     source={require('../../assets/images/app-of-day.png')}
//                     className="w-[140px] h-[140px]"
//                     resizeMode="contain"
//                   />
//                 </Animated.View>
//               )}

//               {currentStep === 3 && (
//                 <Text className='text-white italic absolute bottom-[15px]'>Source:Balban et al, 2023, Ceil Reports Medicine 4, 100895</Text>
//               )}
//             </View>

//           ) : (
//             <View className="flex-1">
//               <View>
//                 <Text className="text-white text-4xl font-bold text-center mt-[60px]">
//                   What are your goals{'\n'}with Breathwrk?
//                 </Text>
//                 <Text className="text-white/70 font-bold text-base text-center mt-2">
//                   (Choose all that apply)
//                 </Text>
//               </View>
//               <View className="mt-12">
//                 {selectableGoalsData.map(goal => (
//                   <GoalItem
//                     key={goal.id}
//                     item={goal}
//                     isSelected={selectedGoals.includes(goal.id)}
//                     onPress={() => toggleGoalSelection(goal.id)}
//                   />
//                 ))}
//               </View>
//             </View>

//           )}

//           {/* Continue Button */}
//           <TouchableOpacity
//             onPress={handleContinue}
//             disabled={currentStep === totalTextSteps && selectableGoalsData.length === 0}
//             className={`bg-white rounded-full py-5 w-full ${(currentStep === totalTextSteps && selectedGoals.length === 0) ? 'opacity-50' : ''
//               }`}
//           >
//             <Text className="text-black text-lg font-bold text-center">Continue</Text>
//           </TouchableOpacity>
//         </SafeAreaView>
//       </View >
//     </ImageBackground >
//   );
// };

// export default GetStartedGoals;





import { goals, selectableGoalsData, textStepsContent } from '@/constants/onBoardingData';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Link, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
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




  const totalTextSteps = textStepsContent.length;


  const handleContinue = () => {
    if (currentStep < totalTextSteps) {
      setCurrentStep(prevStep => prevStep + 1);
    } else {
      // router.replace('/(tabs)/explore');

    }
  };

  const toggleGoalSelection = (id: string) => {
    setSelectedGoals(prev =>
      prev.includes(id) ? prev.filter(gId => gId !== id) : [...prev, id]
    );
  };



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
            alignItems: currentStep !== 4 ? "center" : undefined
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
                  source={require('../../assets/images/app-of-day.png')}
                  className="w-[140px] h-[140px]"
                  resizeMode="contain"
                />
              </Animated.View>
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
              <Animated.View style={dispayStepFourIcons} className='mt-[300px] '>
                <Image
                  source={require('../../assets/images/app-of-day.png')}
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
                    source={require('../../assets/images/chart.png')}
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

          </View>





          {/* Continue Button */}
          <TouchableOpacity
            onPress={handleContinue}
            disabled={currentStep === totalTextSteps && selectableGoalsData.length === 0}
            className={`bg-white rounded-full py-5 mb-10 w-full ${(currentStep === totalTextSteps && selectedGoals.length === 0) ? 'opacity-50' : ''
              }`}
          >
            <Text className="text-black text-2xl font-bold text-center">
              {currentStep === 5 && "Let's Go"}
              {currentStep === 6 && "Next"}
              {(currentStep !== 5 && currentStep !== 6) && "Continue"}
            </Text>
          </TouchableOpacity>
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









