import * as Haptics from "expo-haptics";
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';



import { LinearGradient } from "expo-linear-gradient";
import LottieView from 'lottie-react-native';
import GetStartedGoals from './GetStartedGoals';


const Stat = ({ value, label }: { value: string, label: string }) => (
    <View className="items-center">
        <Text className="text-white/60 text-3xl font-semibold">{value}</Text>
        <Text className="text-white/70 text-sm uppercase tracking-wider">{label}</Text>
    </View>
);

const gradientColors = ['#004d00', '#006400', '#00a000'] as const;


const OnboardingScreen = () => {
    const [isShowingSplash, setIsShowingSplash] = useState(true);
    const [getStarted, setGetStarted] = useState(false)

    const display = useSharedValue(0)
    // const display = useSharedValue(0.9)

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
        Haptics.selectionAsync();
        router.push('/login');
    };

    const handleGetStarted = () => {
        Haptics.selectionAsync();
        setGetStarted(true)

    };

    if (isShowingSplash) {
        return (

            <LinearGradient
                colors={gradientColors}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{ flex: 1 }}
            >

                <View className='flex-1 bg-black/70 justify-center items-center'>
                    <Text className='text-white text-5xl font-bold'>Breathwrk</Text>
                </View>
            </LinearGradient>

        );
    }


    return (
        // <ImageBackground
        //     source={require('../../assets/images/explore-bg-min.png')}
        //     className="flex-1"
        // >
        <View className="flex-1">

            {!getStarted ? (
                <LinearGradient
                    colors={gradientColors}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={{ flex: 1 }}
                >

                    <SafeAreaView className="flex-1 bg-black/70 justify-between  p-6 pt-0 ">
                        <Animated.View style={animatedStyle} >
                            <View className="items-center">
                                <Text className="text-white text-2xl font-bold tracking-wider ">breathwrk</Text>

                                <View className='absolute   '>
                                    <LottieView style={{ height: 330, width: 800 }} source={require('../../assets/images/Line-waves.json')} autoPlay loop />
                                </View>
                            </View>

                            <View className="items-center mt-[310px]">
                                <Text className="text-white text-5xl font-bold mb-2">Stress {" "}<Text className=' font-normal italic'>Less</Text> </Text>
                                <Text className="text-white text-5xl font-light italic mb-2">Sleep Better</Text>
                                <Text className="text-white text-5xl font-bold italic mb-2">Increase Energy</Text>
                                <Text className="text-white text-5xl font-bold italic">Feel Amazing</Text>
                            </View>

                            <View className="items-center">
                                <View className="flex-row items-center justify-between w-full mb-8">
                                    <Stat value="1 Billion" label="breaths taken" />
                                    <Image
                                        source={require('../../assets/images/app-of-day.png')}
                                        className="w-[120px] h-[120px] "
                                        resizeMode="contain"
                                    />
                                    <Stat value="4 Million" label="users worldwide" />
                                </View>

                                <TouchableOpacity
                                    onPress={handleGetStarted}
                                    className="bg-white rounded-full py-5 w-full"
                                >
                                    <Text className="text-black text-lg font-bold text-center">Get Started</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={handleLogin} className="mt-4">
                                    <Text className="text-white text-xl">
                                        Have an account? <Text className="font-bold">Login</Text>
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </Animated.View>
                    </SafeAreaView>
                </LinearGradient>

            ) : (
                <GetStartedGoals />
            )}
        </View>


    );
};

export default OnboardingScreen;













// import * as Haptics from "expo-haptics";
// import { useRouter } from 'expo-router';
// import LottieView from 'lottie-react-native';
// import React, { useEffect, useState } from 'react';
// import { Image, Text, TouchableOpacity, View } from 'react-native';
// // import LinearGradient from 'react-native-linear-gradient'; // <- import gradient
// import { LinearGradient } from 'expo-linear-gradient';
// import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import GetStartedGoals from './GetStartedGoals';

// const Stat = ({ value, label }: { value: string, label: string }) => (
//     <View className="items-center">
//         <Text className="text-white/60 text-3xl font-semibold">{value}</Text>
//         <Text className="text-white/70 text-sm uppercase tracking-wider">{label}</Text>
//     </View>
// );

// const OnboardingScreen = () => {
//     const [isShowingSplash, setIsShowingSplash] = useState(true);
//     const [getStarted, setGetStarted] = useState(false);

//     const display = useSharedValue(0.9);
//     const animatedStyle = useAnimatedStyle(() => ({
//         opacity: display.value
//     }));

//     const router = useRouter();

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setIsShowingSplash(false);
//             display.value = withTiming(1, { duration: 1000 });
//         }, 10000);

//         return () => clearTimeout(timer);
//     }, []);

//     const handleLogin = () => {
//         Haptics.selectionAsync();
//         router.push('/login');
//     };

//     const handleGetStarted = () => {
//         Haptics.selectionAsync();
//         setGetStarted(true);
//     };

//     // Dark green gradient colors
//     const gradientColors = ['#004d00', '#006400', '#00a000'] as const;

//     return (
//         <View className="flex-1">
//             {!getStarted ? (
//                 <LinearGradient
//                     colors={gradientColors}
//                     start={{ x: 0, y: 0 }}
//                     end={{ x: 1, y: 1 }}
//                     style={{ flex: 1 }}
//                 >
//                     <SafeAreaView className="flex-1 justify-between p-6 pt-0 bg-black/70">
//                         <Animated.View style={animatedStyle} >
//                             <View className="items-center">
//                                 <Text className="text-white text-2xl font-bold tracking-wider">breathwrk</Text>
//                                 <View className='absolute'>
//                                     <LottieView style={{ height: 330, width: 800 }} source={require('../../assets/images/Line-waves.json')} autoPlay loop />
//                                 </View>
//                             </View>

//                             <View className="items-center mt-[310px]">
//                                 <Text className="text-white text-5xl font-bold mb-2">Stress <Text className='font-normal italic'>Less</Text></Text>
//                                 <Text className="text-white text-5xl font-light italic mb-2">Sleep Better</Text>
//                                 <Text className="text-white text-5xl font-bold italic mb-2">Increase Energy</Text>
//                                 <Text className="text-white text-5xl font-bold italic">Feel Amazing</Text>
//                             </View>

//                             <View className="items-center">
//                                 <View className="flex-row items-center justify-between w-full mb-8">
//                                     <Stat value="1 Billion" label="breaths taken" />
//                                     <Image
//                                         source={require('../../assets/images/app-of-day.png')}
//                                         className="w-[120px] h-[120px]"
//                                         resizeMode="contain"
//                                     />
//                                     <Stat value="4 Million" label="users worldwide" />
//                                 </View>

//                                 <TouchableOpacity
//                                     onPress={handleGetStarted}
//                                     className="bg-white rounded-full py-5 w-full"
//                                 >
//                                     <Text className="text-black text-lg font-bold text-center">Get Started</Text>
//                                 </TouchableOpacity>

//                                 <TouchableOpacity onPress={handleLogin} className="mt-4">
//                                     <Text className="text-white text-xl">
//                                         Have an account? <Text className="font-bold">Login</Text>
//                                     </Text>
//                                 </TouchableOpacity>
//                             </View>
//                         </Animated.View>
//                     </SafeAreaView>
//                 </LinearGradient>
//             ) : (
//                 <GetStartedGoals />
//             )}
//         </View >
//     );
// };

// export default OnboardingScreen;

