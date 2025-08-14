import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, ImageBackground, Text, TouchableOpacity, View } from 'react-native';


const exercises = [
  { id: '1', title: '3-Part Breath', locked: true },
  { id: '2', title: '4-7-8', locked: true },
  { id: '3', title: 'Air Hunger', locked: true },
  { id: '4', title: 'Allergies', locked: true },
  { id: '5', title: 'Box Breathing', locked: false },
  { id: '6', title: 'Calm', locked: false, emoji: '😌' },
  { id: '7', title: 'Energy', locked: false, emoji: '⚡️' },
  { id: '8', title: 'Focus', locked: false, emoji: '🎯' },
  { id: '9', title: 'Focus', locked: false, emoji: '🎯' },
  { id: '10', title: 'Focus', locked: false, emoji: '🎯' },
  { id: '11', title: 'Focus', locked: false, emoji: '🎯' },
  { id: '12', title: 'Focus', locked: false, emoji: '🎯' },
  { id: '13', title: 'Focus', locked: false, emoji: '🎯' },
  { id: '14', title: 'Focus', locked: false, emoji: '🎯' },
  { id: '15', title: 'Focus', locked: false, emoji: '🎯' },
  { id: '16', title: 'Focus', locked: false, emoji: '🎯' },
];

const ExerciseCard = ({ item }: { item: typeof exercises[0] }) => (
  <View className='bg-white/10 rounded-2xl p-2 m-2 flex-1 items-center justify-center aspect-square'>
    <TouchableOpacity className='absolute top-3 right-3'>
      <FontAwesome name="heart-o" size={20} color="rgba(255,255,255,0.5)" />
    </TouchableOpacity>

    {item.locked && (
      <FontAwesome name="lock" size={24} color="white" className="mb-2" />
    )}

    {item.emoji && (<Text className='text-4xl mb-2'>
      {item.emoji}
    </Text>
    )}
    <Text className='text-white text-2xl font-semibold text-center'>{item.title}</Text>

  </View>
);


const BreathingExercises = () => {



  const router = useRouter()


  return (
    <ImageBackground
      source={require('../../../assets/images/explore-bg.png')}
      resizeMode="cover"
      className='flex-1'
    >
      <View className='bg-black/70 pt-[70px]' >

        {/* HEADER */}
        <View className='p-4'>
          <TouchableOpacity onPress={() => {
            router.back()
          }}
            className='self-start mb-4'
          >
            <Feather name="chevron-left" size={28} color="white" />
          </TouchableOpacity>

          <Text className='text-white text-3xl font-bold mb-2'>Breathing Exercises</Text>
          <Text className='text-gray-300 text-lg mb-6'>Find powerful science-backed breathing exercises to practice anywhere for any reason</Text>

          <View>
            <TouchableOpacity className='bg-white/20 rounded-full px-6 py-3.5 self-start'>
              <Text className='text-white font-semibold text-lg'>All</Text>
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          data={exercises}
          renderItem={({ item }) => <ExerciseCard item={item} />}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={{ paddingHorizontal: 8 }}
          className='mt-4'

        />

      </View>
    </ImageBackground>
  )
}

export default BreathingExercises

