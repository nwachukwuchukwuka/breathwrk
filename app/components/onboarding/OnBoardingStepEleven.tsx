import { Link } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const OnBoardingStepEleven = ({ handleContinue }) => {


    return (
        <View className="flex-1 justify-between w-full">
            <View>
                <View className="flex-row justify-end items-center px-1 pt-2">
                    <Link href="/(tabs)/explore" asChild>
                        <TouchableOpacity>
                            <Text className="text-white/70 text-lg font-semibold">Skip</Text>
                        </TouchableOpacity>
                    </Link>
                </View>

                <Text className="text-white text-4xl font-bold text-center mt-12 px-4 leading-tight">
                    Great! We will help you stay consistent.
                </Text>

                {/* Mock Notification Prompt */}
                <View className="mt-12 mx-4 border-2 border-blue-500 rounded-2xl p-0.5">
                    <View className="bg-[#2C2C2E]/90 rounded-xl items-center py-4">
                        <View className="px-4">
                            <Text className="text-white text-lg font-bold text-center">
                                "Breathwrk" Would Like to Send You Notifications
                            </Text>
                            <Text className="text-white/90 text-[13px] text-center mt-1">
                                Notifications may include, alerts, sounds, and icon badges. These can be configured in Settings.
                            </Text>
                        </View>

                        {/* Buttons */}
                        <View className="border-t border-white/30 w-full mt-4 flex-row">
                            <TouchableOpacity className="flex-1 items-center py-3" onPress={handleContinue}>
                                <Text className="text-blue-500 text-lg">Don't Allow</Text>
                            </TouchableOpacity>
                            <View className="w-px h-full bg-white/30" />
                            <TouchableOpacity className="flex-1 items-center py-3" onPress={handleContinue}>
                                {/* NOTE: In a real app, this would trigger the permission request */}
                                <Text className="text-blue-500 text-lg font-bold">Allow</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </View>

            {/* Bottom Section */}
            <View className="pb-8">
                <Text className="text-white/80 text-center text-base">
                    Users who allow push report 9x better results
                </Text>
            </View>
        </View>
    )
}

export default OnBoardingStepEleven

const styles = StyleSheet.create({})

