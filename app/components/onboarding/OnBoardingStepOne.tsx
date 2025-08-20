// import { goals, textStepsContent } from '@/constants/onBoardingData'
// import React, { useEffect } from 'react'
// import { Text, View } from 'react-native'
// import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

// const OnBoardingStepOne = ({ currentStep } : {currentStep: number}) => {
//     // slide in from bottom value
//     const verticalPosition = useSharedValue(50)
//     const fadeValue = useSharedValue(0)
//     const fadeStepOneBadges = useSharedValue(0)

//     //step one slide in bottom animatestyle
//     const slideIn = useAnimatedStyle(() => ({
//         transform: [{ translateY: verticalPosition.value }],
//         opacity: fadeValue.value
//     }))


//     //step one fade in badges animatestyle
//     const fadeIn = useAnimatedStyle(() => ({
//         opacity: fadeStepOneBadges.value
//     }))


//     useEffect(() => {
//         verticalPosition.value = withTiming(1, { duration: 1000 })
//         fadeValue.value = withTiming(1, { duration: 1000 })
//         setTimeout(() => {
//             fadeStepOneBadges.value = withTiming(1, { duration: 1000 })
//         }, 1000)
//     }, [])

//     return (
//         <View className='w-full h-full items-center justify-center'>
//             <Animated.View style={fadeIn} className="w-full h-full">
//                 {goals.map(goal => (
//                     <View
//                         key={goal.id}
//                         className={`absolute rounded-full py-3.5 px-6 flex-row items-center border bg-white/10 border-white/10`}
//                         style={{ top: goal.top, left: goal.left, right: goal.right } as any}
//                     >
//                         <Text className="text-lg mr-2">{goal.emoji}</Text>
//                         <Text className='font-semibold text-xl text-white'>{goal.text}</Text>
//                     </View>
//                 ))}
//             </Animated.View>

//             <Animated.View style={slideIn} className="absolute mt-20">
//                 <Text className="text-white text-3xl text-center">{textStepsContent[0].line1}</Text>
//                 <Text className="text-white text-6xl font-bold my-2 text-center">{textStepsContent[0].line2}</Text>
//                 <Text className="text-white text-3xl text-center">
//                     {textStepsContent[0].line3}
//                 </Text>
//             </Animated.View>
//         </View>
//     )
// }

// export default OnBoardingStepOne




import { textStepsContent } from '@/constants/onBoardingData'
import React, { useEffect } from 'react'
import { Text } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

const OnBoardingStepOne = () => {
    // slide in from bottom value
    const verticalPosition = useSharedValue(50)
    const fadeValue = useSharedValue(0)
    const fadeStepOneBadges = useSharedValue(0)

    //step one slide in bottom animatestyle
    const slideIn = useAnimatedStyle(() => ({
        transform: [{ translateY: verticalPosition.value }],
        opacity: fadeValue.value
    }))





    useEffect(() => {
        verticalPosition.value = withTiming(1, { duration: 1000 })
        fadeValue.value = withTiming(1, { duration: 1000 })
        setTimeout(() => {
            fadeStepOneBadges.value = withTiming(1, { duration: 1000 })
        }, 1000)
    }, [])

    return (
        <Animated.View style={slideIn} className="absolute mt-20">
            <Text className="text-white text-3xl text-center">{textStepsContent[0].line1}</Text>
            <Text className="text-white text-6xl font-bold my-2 text-center">{textStepsContent[0].line2}</Text>
            <Text className="text-white text-3xl text-center">
                {textStepsContent[0].line3}
            </Text>
        </Animated.View>
    )
}

export default OnBoardingStepOne