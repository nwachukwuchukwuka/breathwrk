// import { textStepsContent } from '@/constants/onBoardingData'
// import LottieView from 'lottie-react-native'
// import React from 'react'
// import { Text, View } from 'react-native'
// import Animated from 'react-native-reanimated'

// function OnBoardingStepNine({ holdDuration, isHolding }) {

//     return (
//         <Animated.View className="absolute items-center top-[70px]">
//             <View className='absolute top-0 items-center'>
//                 <Text className="text-white text-7xl font-bold">
//                     {(holdDuration / 1000).toFixed(1)}

//                 </Text>
//                 <Text className="text-white text-4xl font-semibold">seconds</Text>
//             </View>

//             {!isHolding && (
//                 <View className='flex-1 absolute '>
//                     <LottieView style={{ height: 800, width: 800 }} source={require('../../../assets/images/Confetti.json')} autoPlay loop={false} />
//                 </View>
//             )}


//             <Text className="text-white text-3xl text-center font-semibold top-48">{textStepsContent[9].line1}</Text>
//             <View className='bg-white/25 rounded-full w-[150px] h-[150px] justify-center items-center top-56'>
//                 <View className='w-8 h-8 bg-blue-400 border-1 border-red-800 '>
//                 {/* <View className='bg-white/10 rounded-full w-[80px] h-[80px]  items-center border-1 border-red-800 '> */}
//                     <Text>He</Text>
//                 </View>
//             </View>

//             <Text className="text-white text-md text-center font-bold mt-[220px]">{textStepsContent[9].line2}</Text>
//             <Text className="text-white/50 text-lg text-center font-semibold mt-[60px]">Want to retest? click here</Text>

//         </Animated.View>
//     )
// }

// export default OnBoardingStepNine












import { textStepsContent } from '@/constants/onBoardingData';
import LottieView from 'lottie-react-native';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Animated, {
    useAnimatedProps,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';
import Svg, { Circle } from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);


const CircularProgress = ({
    size = 150,
    strokeWidth = 12,
    backgroundColor = 'rgba(255, 255, 255, 0.25)',
    progressColor = '#FFFFFF',
    animatedProgress,
    children,
}) => {
    const center = size / 2;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    const animatedProps = useAnimatedProps(() => {
        const progressOffset = circumference - (circumference * animatedProgress.value) / 100;
        return {
            strokeDashoffset: progressOffset,
        };
    });

    return (
        <View style={{ width: size, height: size, justifyContent: 'center', alignItems: 'center' }}>
            <Svg width={size} height={size}>
                {/* Background circle remains the same */}
                <Circle cx={center} cy={center} r={radius} stroke={backgroundColor} strokeWidth={strokeWidth} fill="none" />

                <AnimatedCircle
                    cx={center}
                    cy={center}
                    r={radius}
                    stroke={progressColor}
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeDasharray={circumference}
                    strokeLinecap="round"
                    originX={center}
                    originY={center}
                    rotation="-90"
                    animatedProps={animatedProps}
                />
            </Svg>
            {children && <View style={{ position: 'absolute' }}>{children}</View>}
        </View>
    );
};


function OnBoardingStepNine({ holdDuration, isHolding }) {
    const [isAnimationComplete, setIsAnimationComplete] = useState(false);

    const MAX_HOLD_DURATION = 3000;

    const progress = useSharedValue(0);

    useEffect(() => {
        progress.value = withTiming(80, { duration: MAX_HOLD_DURATION });
    }, []);




    return (
        <Animated.View className="absolute items-center top-[70px]">
            <View className='absolute top-0 items-center'>
                <Text className="text-white text-7xl font-bold">
                    {(holdDuration / 1000).toFixed(1)}
                </Text>
                <Text className="text-white text-4xl font-semibold">seconds</Text>
            </View>

            {!isHolding && (
                <View className='flex-1 absolute '>
                    <LottieView style={{ height: 800, width: 800 }} source={require('../../../assets/images/Confetti.json')} autoPlay loop={false} />
                </View>
            )}

            <Text className="text-white text-3xl text-center font-semibold top-48">{textStepsContent[9].line1}</Text>

            <View className='top-56'>
                <CircularProgress
                    size={150}
                    strokeWidth={12}
                    animatedProgress={progress}
                    backgroundColor="rgba(255, 255, 255, 0.25)"
                    progressColor="white"
                >
                    <View className='bg-white/10 rounded-full w-[128px] h-[128px] items-center justify-center'>
                        <Text className='text-white font-bold text-6xl'>51</Text>
                        {/* {isAnimationComplete && ( // <-- WRAP the text in this condition
                            <Text className='text-white font-bold text-6xl'>51</Text>
                        )} */}
                    </View>
                </CircularProgress>
            </View>

            <Text className="text-white/40 text-md text-center font-bold mt-[220px]">{textStepsContent[9].line2}</Text>
            <Text className="text-white/50 text-lg text-center font-semibold mt-[60px]">Want to retest? click here</Text>

        </Animated.View>
    );
}

export default OnBoardingStepNine;