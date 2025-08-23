import { Entypo, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import * as Haptics from "expo-haptics";
import { useNavigation, useRouter } from 'expo-router';
import * as Speech from 'expo-speech';


import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { cancelAnimation, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import AudioSettingsModal from '../explore/breathingExercise/AudioSettingsModal';




const StartComponent = ({ visible, onClose, currentDuration, handleRoute, selectedTone, setSelectedTone }) => {
    const [isAudioModalVisible, setAudioModalVisible] = useState(false);
    const [isDurationModalVisible, setDurationModalVisible] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const textIntervalId = useRef(null)
    const [isPhone, setIsPhone] = useState(false);
    const [resultModal, setResultModal] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [phase, setPhase] = useState('Get Ready');
    const [breathText, setBreathText] = useState('Inhale');

    const intervalRef = useRef(null);
    const router = useRouter()

    const [remainingTime, setRemainingTime] = useState(0);


    const startAnimation = () => {
        scale.value = 1;
        scale.value = withRepeat(withTiming(3, { duration: 3000 }), -1, true);
        textIntervalId.current = setInterval(() => {
            setBreathText((currentText) => currentText === 'Inhale' ? 'Exhale' : 'Inhale');
        }, 3000)
        startExercise()
    }


    const pauseAnimation = () => {
        cancelAnimation(scale)
        stopExercise()
        if (textIntervalId.current) {
            clearInterval(textIntervalId.current);
        }
        setIsPaused(true)
    }


    const scale = useSharedValue(1)
    const opacity = useSharedValue(1)
    const fadeOutValue = useSharedValue(1)
    const hideControlsTimer = useRef(null);



    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }],
    }))

    const fadeOut = useAnimatedStyle(() => ({
        opacity: fadeOutValue.value
    }))



    const showAndScheduleHide = () => {
        if (hideControlsTimer.current) {
            clearTimeout(hideControlsTimer.current);
        }

        fadeOutValue.value = withTiming(1, { duration: 400 });

        hideControlsTimer.current = setTimeout(() => {
            fadeOutValue.value = withTiming(0, { duration: 1000 });
        }, 8000);
    };





    useEffect(() => {
        if (visible) {
            setRemainingTime(currentDuration * 60);
            setIsPaused(false);
            startAnimation()
            showAndScheduleHide()
        }

        return () => {
            cancelAnimation(scale);
            if (textIntervalId.current) {
                clearInterval(textIntervalId.current)
            }

            scale.value = 1
            fadeOutValue.value = 1;
            if (hideControlsTimer.current) {
                clearTimeout(hideControlsTimer.current)
            }
        }
    }, [visible, currentDuration]);


    useEffect(() => {
        if (!visible) return;

        if (remainingTime <= 0) {
            pauseAnimation();
            stopExercise()
            setResultModal(true);
            return;
        }

        if (isPaused) return
        const timerId = setInterval(() => {
            setRemainingTime(prevTime => prevTime - 1)
        }, 1000)


        return () => {
            clearInterval(timerId)
        }
    }, [visible, isPaused, remainingTime])

    const handlePhoneToggle = () => {
        Haptics.selectionAsync();
        setIsPhone(previousState => !previousState);
    };



    const formatTime = (totalSeconds) => {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };



    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            tabBarStyle: { display: "none" },
        });
    }, [navigation]);

    const INHALE_DURATION = 3000
    const EXHALE_DURATION = 3000


    const startExercise = () => {
        triggerPhaseAction('Inhale');

        const runCycle = () => {
            intervalRef.current = setTimeout(() => {
                triggerPhaseAction('Exhale');

                intervalRef.current = setTimeout(() => {
                    triggerPhaseAction('Inhale');
                    runCycle();
                }, EXHALE_DURATION);

            }, INHALE_DURATION);
        };

        runCycle();
    };

    const stopExercise = () => {
        if (intervalRef.current) {
            clearTimeout(intervalRef.current);
        }
        Speech.stop();
    };

    useEffect(() => {
        return () => {
            if (intervalRef.current) {
                clearTimeout(intervalRef.current);
            }
            Speech.stop();
        };
    }, []);


    const soundObjects = useRef({
        inhale: null,
        exhale: null,
    });

    const TONE_ASSETS = {
        // Sine: {
        //     inhale: require('../../../assets/sounds/Sine/inhale.mp3'),
        //     exhale: require('../../../assets/sounds/Sine/exhale.mp3'),
        // },
        Synth: {
            inhale: require('../../../assets/sounds/synth/inhale.mp3'),
            exhale: require('../../../assets/sounds/synth/exhale.mp3'),
        },
        Bowl: {
            inhale: require('../../../assets/sounds/bowl/inhale.mp3'),
            exhale: require('../../../assets/sounds/bowl/exhale.mp3'),
        },
    };


    // useEffect(() => {
    //     const loadSounds = async () => {
    //         try {
    //             const { sound: inhaleSound } = await Audio.Sound.createAsync(
    //                 require('../../../assets/sounds/bell.mp3')
    //             );
    //             const { sound: exhaleSound } = await Audio.Sound.createAsync(
    //                 require('../../../assets/sounds/bell.mp3')
    //             );
    //             soundObjects.current = { inhale: inhaleSound, exhale: exhaleSound };
    //         } catch (error) {
    //             console.error("Error loading sounds", error);
    //         }
    //     };

    //     loadSounds();

    //     return () => {
    //         soundObjects.current.inhale?.unloadAsync();
    //         soundObjects.current.exhale?.unloadAsync();
    //     };
    // }, []);



    useEffect(() => {
        const loadSounds = async () => {
            
            await soundObjects.current.inhale?.unloadAsync();
            await soundObjects.current.exhale?.unloadAsync();
            soundObjects.current = { inhale: null, exhale: null };

            
            if (selectedTone === 'Off' || !TONE_ASSETS[selectedTone]) {
                console.log('Tones are off or invalid.');
                return;
            }

            try {
                const assets = TONE_ASSETS[selectedTone];

                const { sound: inhaleSound } = await Audio.Sound.createAsync(assets.inhale);
                const { sound: exhaleSound } = await Audio.Sound.createAsync(assets.exhale);

                soundObjects.current = { inhale: inhaleSound, exhale: exhaleSound };
                console.log(`${selectedTone} sounds loaded.`);

            } catch (error) {
                console.error("Error loading new sounds", error);
            }
        };

        loadSounds();

        
        return () => {
            soundObjects.current.inhale?.unloadAsync();
            soundObjects.current.exhale?.unloadAsync();
        };
    }, [selectedTone]); 

    const playSound = async (phase) => {
        if (selectedTone === 'Off') return;
        const sound = soundObjects.current[phase.toLowerCase()];
        if (sound) {
            try {
                await sound.replayAsync();
            } catch (error) {
                console.error(`Could not play ${phase} sound`, error);
            }
        }
    };

    const triggerPhaseAction = (phase) => {
        Speech.speak(phase, { rate: 0.9 });
        playSound(phase);
    };





    return (
        <View className='flex-1'>

            <Pressable onPress={showAndScheduleHide} className='bg-black/40 flex-1 pt-12'>
                <SafeAreaView className="flex-1 px-5 ">
                    <View className='justify-center items-center mt-7' pointerEvents="box-none">
                        <Animated.View style={fadeOut} className='flex-row bg-white/10 p-6 px-8 gap-4 rounded-3xl mb-20'>
                            <ImageBackground
                                source={require('../../../assets/images/bottle.png')}
                                resizeMode='contain'
                                className='h-14 w-14'
                            />
                            <ImageBackground
                                source={require('../../../assets/images/bottle.png')}
                                resizeMode='contain'
                                className='h-14 w-14'
                            />
                            <ImageBackground
                                source={require('../../../assets/images/bottle.png')}
                                resizeMode='contain'
                                className='h-14 w-14'
                            />
                            <ImageBackground
                                source={require('../../../assets/images/bottle.png')}
                                resizeMode='contain'
                                className='h-14 w-14'
                            />
                        </Animated.View>
                        <View
                            className=' bg-white/5 rounded-full justify-center items-center relative'
                            style={{
                                width: 303,
                                height: 303,

                            }}
                        >

                            <Animated.View
                                className=" bg-white/10 rounded-full absolute "
                                style={[
                                    {
                                        width: 100,
                                        height: 100,
                                    }
                                    , animatedStyle]}>


                            </Animated.View>
                            <View
                                className=' rounded-full bg-white/20 absolute justify-center items-center'
                                style={{
                                    width: 100,
                                    height: 100,
                                }}

                            >
                                <Text className='text-white font-bold text-3xl'>{breathText}</Text>
                            </View>
                        </View>

                        <Animated.View style={fadeOut} className="items-center mt-14">
                            <View className="flex-row items-center justify-between w-full gap-6">
                                <TouchableOpacity className="bg-white/5 w-16 h-16 rounded-full justify-center items-center border border-white/5" onPress={() => {
                                    handlePhoneToggle()
                                    showAndScheduleHide();
                                }}>
                                    <MaterialCommunityIcons name={isPhone ? "vibrate" : "vibrate-off"} size={24} color="white" />
                                </TouchableOpacity>

                                {!isPaused && (
                                    <TouchableOpacity className="" onPress={() => {
                                        showAndScheduleHide();
                                        pauseAnimation()


                                    }}>
                                        <View className="w-[90px] h-[90px] rounded-full bg-white/5 justify-center items-center">
                                            <FontAwesome name="pause" size={34} color="white" />
                                        </View>
                                    </TouchableOpacity>
                                )}


                                {isPaused && (
                                    <View className='flex-row gap-8'>
                                        <TouchableOpacity className="" onPress={() => {
                                            showAndScheduleHide();
                                            setResultModal(true)

                                        }}>
                                            <View className="w-[90px] h-[90px] rounded-full bg-white/5 justify-center items-center">
                                                <FontAwesome name="stop" size={30} color="white" />
                                            </View>
                                        </TouchableOpacity>




                                        <TouchableOpacity className="shadow-md shadow-white/60" onPress={() => {
                                            showAndScheduleHide();
                                            setIsPaused(false)
                                            startAnimation()
                                        }}>
                                            <View className="w-[90px] h-[90px] rounded-full bg-white justify-center items-center">
                                                <Entypo name="controller-play" size={42} color="black" />
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                )}



                                <TouchableOpacity className="bg-white/5 w-16 h-16 rounded-full justify-center items-center border border-white/5" onPress={() => {
                                    Haptics.selectionAsync();
                                    setAudioModalVisible(true)
                                    showAndScheduleHide();

                                }}
                                >
                                    <FontAwesome name="exchange" size={22} color="white" />
                                </TouchableOpacity>
                            </View>



                            <TouchableOpacity
                                onPress={() => {
                                    setDurationModalVisible(true)
                                    Haptics.selectionAsync();
                                    showAndScheduleHide();

                                }}
                                className="mt-[25px] bg-white/5 rounded-[25px] py-[12px] px-[40px] border border-white/5"
                            >
                                <Text className="text-white text-lg">{formatTime(remainingTime)}</Text>
                            </TouchableOpacity>
                        </Animated.View>
                        <AudioSettingsModal
                            visible={isAudioModalVisible}
                            onClose={() => setAudioModalVisible(false)}
                            selectedTone={selectedTone}
                            setSelectedTone={setSelectedTone}
                        />

                    </View>
                </SafeAreaView>
            </Pressable >

            {/* <ResultModal
                visible={resultModal}
                onClose={onClose}
                handleRoute={handleRouteFromResult}
                setResultModal={setResultModal}
            /> */}
        </View>




    )
}

export default StartComponent

const styles = StyleSheet.create({})



