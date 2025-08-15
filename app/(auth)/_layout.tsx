import { Slot } from 'expo-router'
import React from 'react'
import { KeyboardAvoidingView, Platform, View } from 'react-native'

const _layout = () => {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} className='flex-1'>
            <View className='flex-1'>
                <Slot />
            </View>
        </KeyboardAvoidingView>
    )
}

export default _layout

