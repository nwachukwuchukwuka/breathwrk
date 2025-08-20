// import React from 'react'
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

// type Props = {
//     handleContinue: () => void
// }


// const OnBoardingStepTwelve: React.FC<Props> = ({ handleContinue }) => {
//     // useEffect(() => {
//     //     (async () => {
//     //         const { status: existingStatus } = await Notifications.getPermissionsAsync();
//     //         let finalStatus = existingStatus;

//     //         if (existingStatus !== 'granted') {
//     //             const { status } = await Notifications.requestPermissionsAsync();
//     //             finalStatus = status;
//     //         }

//     //         if (finalStatus !== 'granted') {
//     //             console.log('Permission for notifications not granted');
//     //             return;
//     //         }

//     //         console.log('Notification permission granted!');
//     //     })();
//     // }, []);


//     return (
//         <View className="flex-1 justify-between w-full">
//             <View>


//                 <Text className="text-white text-4xl font-bold text-center mt-12 px-4 leading-tight">
//                     Great! We will help you stay consistent.
//                 </Text>

//                 {/* Mock Notification Prompt */}
//                 <View className="mt-12 mx-4 border-2 border-blue-500 rounded-2xl p-0.5">
//                     <View className="bg-[#2C2C2E]/90 rounded-xl items-center py-4">
//                         <View className="px-4">
//                             <Text className="text-white text-lg font-bold text-center">
//                                 "Breathwrk" Would Like to Send You Notifications
//                             </Text>
//                             <Text className="text-white/90 text-[13px] text-center mt-1">
//                                 Notifications may include, alerts, sounds, and icon badges. These can be configured in Settings.
//                             </Text>
//                         </View>

//                         <View className="border-t border-white/30 w-full mt-4 flex-row">
//                             <TouchableOpacity className="flex-1 items-center py-3" onPress={handleContinue}>
//                                 <Text className="text-blue-500 text-lg">Don't Allow</Text>
//                             </TouchableOpacity>
//                             <View className="w-px h-full bg-white/30" />
//                             <TouchableOpacity className="flex-1 items-center py-3" onPress={handleContinue}>
//                                 <Text className="text-blue-500 text-lg font-bold">Allow</Text>
//                             </TouchableOpacity>
//                         </View>
//                     </View>
//                 </View>

//             </View>

//             {/* Bottom Section */}
//             <View className="pb-8">
//                 <Text className="text-white/80 text-center text-base">
//                     Users who allow push report 9x better results
//                 </Text>
//             </View>
//         </View>
//     )
// }

// export default OnBoardingStepTwelve

// const styles = StyleSheet.create({})






import * as Notifications from 'expo-notifications'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type Props = {
    handleContinue: () => void
}

const OnBoardingStepEleven: React.FC<Props> = ({ handleContinue }) => {
    const [permissionRequested, setPermissionRequested] = useState(false);
    const [permissionStatus, setPermissionStatus] = useState<string | null>(null);

    useEffect(() => {
        requestNotificationPermission();
    }, []);

    const requestNotificationPermission = async () => {
        try {
            // First check current permission status
            const currentPermission = await Notifications.getPermissionsAsync();
            console.log('Current permission status:', currentPermission.status);

            if (currentPermission.status === 'granted') {
                setPermissionStatus('granted');
                setPermissionRequested(true);
                return;
            }

            // If not granted, request permission
            const { status } = await Notifications.requestPermissionsAsync({
                ios: {
                    allowAlert: true,
                    allowBadge: true,
                    allowSound: true,
                    allowAnnouncements: false,
                },
            });

            console.log('New permission status:', status);
            setPermissionStatus(status);
            setPermissionRequested(true);

            // Optional: Show feedback based on permission result
            if (status === 'granted') {
                // Permission granted - you might want to show a success message
                console.log('Notification permission granted!');
            } else if (status === 'denied') {
                // Permission denied - you might want to show information about manual enabling
                console.log('Notification permission denied');
            }
        } catch (error) {
            console.error('Error requesting notification permission:', error);
            setPermissionRequested(true);
        }
    };

    const getPermissionStatusText = () => {
        if (!permissionRequested) return "Requesting permission...";

        switch (permissionStatus) {
            case 'granted':
                return "✅ Notifications enabled";
            case 'denied':
                return "❌ Notifications disabled";
            default:
                return "⏸️ Permission pending";
        }
    };

    return (
        <View className="flex-1 justify-between w-full">
            <View>
                <Text className="text-white text-4xl font-bold text-center mt-12 px-4 leading-tight">
                    Great! We will help you stay consistent.
                </Text>

                {/* Permission Status Indicator */}
                <View className="mt-8 px-4">
                    <Text className="text-white/70 text-center text-sm">
                        {getPermissionStatusText()}
                    </Text>
                </View>
            </View>

            {/* Bottom Section */}
            <View className="pb-8">
                <Text className="text-white/80 text-center text-base">
                    Users who allow push report 9x better results
                </Text>

                {/* Optional: Manual permission request button if denied */}
                {permissionStatus === 'denied' && (
                    <TouchableOpacity
                        onPress={requestNotificationPermission}
                        className="mt-4 mx-4 bg-white/20 py-3 px-6 rounded-lg"
                    >
                        <Text className="text-white text-center font-semibold">
                            Enable Notifications
                        </Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

export default OnBoardingStepEleven

const styles = StyleSheet.create({})


