import { textStepsContent } from '@/constants/onBoardingData'
import React from 'react'
import { Text, View } from 'react-native'

const OnBoardingStepTwo = () => {


    return (
        <View className='absolute mt-20'>
            <Text className="text-white text-3xl text-center">{textStepsContent[1].line1}</Text>
            <Text className="text-white text-6xl font-bold my-2 text-center">{textStepsContent[1].line2}</Text>
            <Text className="text-white text-3xl text-center">
                {textStepsContent[1].line3}
            </Text>
        </View>
    )
}

export default OnBoardingStepTwo







// import { textStepsContent } from '@/constants/onBoardingData';
// import React, { useEffect } from 'react';
// import { Text, View, useWindowDimensions } from 'react-native';
// import Animated, {
//     useAnimatedStyle,
//     useSharedValue,
//     withDelay,
//     withSpring,
//     withTiming,
// } from 'react-native-reanimated';

// // --- 1. MOCK DATA (You can replace this with your actual import) ---
// // I've added a 'rotation' property to each goal for the final tilted look.
// const goals = [
//     { id: 1, emoji: '⚡️', text: 'Energy', top: 380, left: 20, rotation: -15 },
//     { id: 2, emoji: '🛌', text: 'Sleep', top: 350, left: 150, rotation: 5 },
//     { id: 3, emoji: '😊', text: 'Mood', top: 360, right: 40, rotation: 10 },
//     { id: 4, emoji: '🧠', text: 'Cognition', top: 430, left: 90, rotation: 8 },
//     { id: 5, emoji: '💡', text: 'Nervous System', top: 410, right: 10, rotation: -8 },
//     { id: 6, emoji: '💪', text: 'Endurance', top: 460, right: 100, rotation: 12 },
//     { id: 7, emoji: '❤️', text: 'Heart Health', top: 480, left: 15, rotation: 10 },
//     { id: 8, emoji: '🛡️', text: 'Immunity', top: 530, left: 80, rotation: -5 },
//     { id: 9, emoji: '😮‍💨', text: 'Lung Capacity', top: 510, right: 20, rotation: -10 },
//     { id: 10, emoji: '🧘', text: 'Stress', top: 465, left: 190, rotation: -18 },
// ];



// // --- 2. THE ANIMATED PILL COMPONENT ---
// // This component handles the animation for a single goal pill.
// const GoalPill = ({ goal, index }) => {
//     const { height } = useWindowDimensions();

//     // Start position: off the top of the screen (-height)
//     const translateY = useSharedValue(-height);
//     // Start rotation: a random initial angle for a more dynamic fall
//     const rotate = useSharedValue((Math.random() - 0.5) * 50);

//     // Spring animation configuration for a natural, bouncy feel
//     const springConfig = {
//         damping: 14,
//         stiffness: 90,
//         mass: 0.9,
//     };

//     // Trigger the animation when the component mounts
//     useEffect(() => {
//         // Stagger the animation of each pill based on its index
//         const delay = index * 100;

//         // Animate translateY to 0 (its final resting position from the 'top' prop)
//         translateY.value = withDelay(delay, withSpring(0, springConfig));
//         // Animate rotate to the final rotation defined in our data
//         rotate.value = withDelay(delay, withSpring(goal.rotation, springConfig));
//     }, []);

//     // Create the animated style object
//     const animatedStyle = useAnimatedStyle(() => {
//         return {
//             transform: [
//                 { translateY: translateY.value },
//                 { rotateZ: `${rotate.value}deg` },
//             ],
//         };
//     });

//     return (
//         <Animated.View
//             style={[
//                 {
//                     position: 'absolute',
//                     top: goal.top,
//                     left: goal.left,
//                     right: goal.right,
//                 },
//                 animatedStyle, // Apply the animated transforms
//             ]}
//             className="rounded-full py-3.5 px-6 flex-row items-center border bg-white/10 border-white/10"
//         >
//             <Text className="text-lg mr-2">{goal.emoji}</Text>
//             <Text className="font-semibold text-xl text-white">{goal.text}</Text>
//         </Animated.View>
//     );
// };


// // --- 3. THE MAIN ONBOARDING SCREEN COMPONENT ---
// const OnBoardingStepTwo = () => {
//     const textOpacity = useSharedValue(0);

//     useEffect(() => {
//         // Delay for the text to appear after the pills have settled
//         const textAnimationDelay = goals.length * 100 + 500; // Wait for all pills to start falling + 0.5s
//         textOpacity.value = withDelay(textAnimationDelay, withTiming(1, { duration: 600 }));
//     }, []);

//     const textAnimatedStyle = useAnimatedStyle(() => {
//         return {
//             opacity: textOpacity.value,
//         };
//     });

//     return (
//         <View className="flex-1 w-full h-full items-center justify-center">

//             {/* Render all the animated goal pills */}
//             {goals.map((goal, index) => (
//                 <GoalPill key={goal.id} goal={goal} index={index} />
//             ))}

//             {/* The main text content that fades in after the pills land */}
//             <Animated.View style={textAnimatedStyle} className="items-center">
//                 <Text className="text-white text-3xl text-center">{textStepsContent[1].line1}</Text>
//                 <Text className="text-white text-6xl font-bold my-2 text-center">{textStepsContent[1].line2}</Text>
//                 <Text className="text-white text-3xl text-center">
//                     {textStepsContent[1].line3}
//                 </Text>
//             </Animated.View>
//         </View>
//     );
// };

// export default OnBoardingStepTwo;

