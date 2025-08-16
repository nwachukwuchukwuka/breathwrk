import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
// import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
// import { SafeAreaView } from 'react-native-safe-area-context';

import Svg, { Path } from 'react-native-svg';


const Stat = ({ value, label }: { value: string, label: string }) => (
    <View className="items-center">
        <Text className="text-white/60 text-3xl font-semibold">{value}</Text>
        <Text className="text-white/70 text-sm uppercase tracking-wider">{label}</Text>
    </View>
);

const OnboardingScreen = () => {
    const [isShowingSplash, setIsShowingSplash] = useState(true);

    const display = useSharedValue(0.5)

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: display.value
    }))



    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsShowingSplash(false);
            display.value = withTiming(1, { duration: 1000 })
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    const handleLogin = () => {
        router.push('/login');
    };

    if (isShowingSplash) {
        return (
            <ImageBackground
                source={require('../../assets/images/explore-bg.png')}
                className="flex-1"
            >
                <View className='flex-1 bg-black/70 justify-center items-center'>
                    <Text className='text-white text-5xl font-bold'>Breathwrk</Text>
                </View>
            </ImageBackground>
        );
    }


    return (
        // <Animated.View style={animatedStyle} className='flex-1'>
            <ImageBackground
                source={require('../../assets/images/explore-bg.png')}
                className="flex-1"
            >
                <Animated.View style={animatedStyle} className="flex-1 bg-black/70 p-6">
                    <SafeAreaView className="flex-1 justify-between p-6">
                        {/* Top Section: Title and Sine Wave */}
                        <View className="items-center">
                            <Text className="text-white text-2xl font-bold tracking-wider mt-4">breathwrk</Text>
                            <View className="w-full h-24 mt-8">
                                {/* Static SVG representation of the sine wave */}
                                <Svg height="100%" width="100%" viewBox="0 0 100 50">
                                    <Path
                                        d="M 0,25 C 25,0 25,50 50,25 S 75,0 100,25"
                                        stroke="white"
                                        strokeWidth="2.5"
                                        fill="none"
                                    />
                                </Svg>
                            </View>
                        </View>

                        {/* Middle Section: Marketing Text */}
                        <View className="items-center -mb-20">
                            <View></View>
                            <Text className="text-white text-5xl font-bold mb-2">Stress {" "}<Text className=' font-normal italic'>Less</Text> </Text>
                            <Text className="text-white text-5xl font-light italic mb-2">Sleep Better</Text>
                            <Text className="text-white text-5xl font-bold italic mb-2">Increase Energy</Text>
                            <Text className="text-white text-5xl font-bold italic">Feel Amazing</Text>
                        </View>

                        {/* Bottom Section: Stats and Buttons */}
                        <View className="items-center">
                            {/* Social Proof Stats */}
                            <View className="flex-row items-center justify-between w-full mb-8">
                                <Stat value="1 Billion" label="breaths taken" />
                                <Image
                                    source={require('../../assets/images/app-of-day.png')}
                                    className="w-[120px] h-[120px] "
                                    resizeMode="contain"
                                />
                                <Stat value="4 Million" label="users worldwide" />
                            </View>

                            {/* Action Buttons */}
                            <TouchableOpacity
                                onPress={() => router.push('/get-started-goals')}
                                className="bg-white rounded-full py-4 w-full"
                            >
                                <Text className="text-black text-lg font-bold text-center">Get Started</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={handleLogin} className="mt-4">
                                <Text className="text-white text-xl">
                                    Have an account? <Text className="font-bold">Login</Text>
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </SafeAreaView>
                </Animated.View>
            </ImageBackground>
        // </Animated.View>

    );
};

export default OnboardingScreen;












// import { useRouter } from 'expo-router';
// import React, { useEffect, useState } from 'react';
// import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
// // import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
// import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
// import { SafeAreaView } from 'react-native-safe-area-context';

// import Svg, { Path } from 'react-native-svg';


// const Stat = ({ value, label }: { value: string, label: string }) => (
//     <View className="items-center">
//         <Text className="text-white/60 text-3xl font-semibold">{value}</Text>
//         <Text className="text-white/70 text-sm uppercase tracking-wider">{label}</Text>
//     </View>
// );

// const OnboardingScreen = () => {
//     const [isShowingSplash, setIsShowingSplash] = useState(true);

//     const display = useSharedValue(1)

//     const animatedStyle = useAnimatedStyle(() => ({
//         opacity: display.value
//     }))



//     const router = useRouter();

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setIsShowingSplash(false);
//             display.value = withTiming(1, { duration: 1000 })
//         }, 4000);

//         return () => clearTimeout(timer);
//     }, []);

//     const handleLogin = () => {
//         router.push('/login');
//     };

//     // if (isShowingSplash) {
//     //     return (
//     //         <ImageBackground
//     //             source={require('../../assets/images/explore-bg.png')}
//     //             className="flex-1"
//     //         >
//     //             <View className='flex-1 bg-black/70 justify-center items-center'>
//     //                 <Text className='text-white text-5xl font-bold'>Breathwrk</Text>
//     //             </View>
//     //         </ImageBackground>
//     //     );
//     // }


//     return (
//         <ImageBackground
//             source={require('../../assets/images/explore-bg.png')}
//             className="flex-1"
//         >
//             <View className="flex-1 bg-black/70 p-6">
//                 {isShowingSplash ? (
//                     <View className='flex-1 justify-center items-center'>
//                         <Text className='text-white text-5xl font-bold'>Breathwrk</Text>
//                     </View>
//                 ) : (
//                     <Animated.View style={animatedStyle} className='flex-1'>
//                         {/* <ImageBackground
//                         style={animatedStyle}
//                         source={require('../../assets/images/explore-bg.png')}
//                         className="flex-1"
//                     >
//                         <View className="flex-1 bg-black/70 p-6"> */}
//                         <SafeAreaView className="flex-1 justify-between p-6">
//                             {/* Top Section: Title and Sine Wave */}
//                             <View className="items-center">
//                                 <Text className="text-white text-2xl font-bold tracking-wider mt-4">breathwrk</Text>
//                                 <View className="w-full h-24 mt-8">
//                                     {/* Static SVG representation of the sine wave */}
//                                     <Svg height="100%" width="100%" viewBox="0 0 100 50">
//                                         <Path
//                                             d="M 0,25 C 25,0 25,50 50,25 S 75,0 100,25"
//                                             stroke="white"
//                                             strokeWidth="2.5"
//                                             fill="none"
//                                         />
//                                     </Svg>
//                                 </View>
//                             </View>

//                             {/* Middle Section: Marketing Text */}
//                             <View className="items-center -mb-20">
//                                 <View></View>
//                                 <Text className="text-white text-5xl font-bold mb-2">Stress {" "}<Text className=' font-normal italic'>Less</Text> </Text>
//                                 <Text className="text-white text-5xl font-light italic mb-2">Sleep Better</Text>
//                                 <Text className="text-white text-5xl font-bold italic mb-2">Increase Energy</Text>
//                                 <Text className="text-white text-5xl font-bold italic">Feel Amazing</Text>
//                             </View>

//                             {/* Bottom Section: Stats and Buttons */}
//                             <View className="items-center">
//                                 {/* Social Proof Stats */}
//                                 <View className="flex-row items-center justify-between w-full mb-8">
//                                     <Stat value="1 Billion" label="breaths taken" />
//                                     <Image
//                                         source={require('../../assets/images/app-of-day.png')}
//                                         className="w-[120px] h-[120px] "
//                                         resizeMode="contain"
//                                     />
//                                     <Stat value="4 Million" label="users worldwide" />
//                                 </View>

//                                 {/* Action Buttons */}
//                                 <TouchableOpacity
//                                     onPress={() => router.push('/get-started-goals')}
//                                     className="bg-white rounded-full py-4 w-full"
//                                 >
//                                     <Text className="text-black text-lg font-bold text-center">Get Started</Text>
//                                 </TouchableOpacity>

//                                 <TouchableOpacity onPress={handleLogin} className="mt-4">
//                                     <Text className="text-white text-xl">
//                                         Have an account? <Text className="font-bold">Login</Text>
//                                     </Text>
//                                 </TouchableOpacity>
//                             </View>
//                         </SafeAreaView>
//                         {/* </View>
//                     </ImageBackground> */}
//                     </Animated.View>
//                 )}
//             </View>
//         </ImageBackground>


//     );
// };

// export default OnboardingScreen;