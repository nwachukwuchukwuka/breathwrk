import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, useRouter } from 'expo-router';
import React from 'react';
import { FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';



// const ExerciseCard = ({ item }: { item: typeof exercises[0] }) => (
//     <View className='bg-white/10 rounded-2xl p-4 m-2 flex-1 justify-center h-[140px]'>
// <TouchableOpacity className='absolute top-3 right-3 '>
//     <FontAwesome name="heart-o" size={20} color="rgba(255,255,255,0.5)" />
// </TouchableOpacity>

// {item.locked && (
//     <FontAwesome name="lock" size={24} color="white" className="mb-2" />
// )}

//         <View className='pt-8'>

//             <Text className='text-white text-2xl font-semibold '>{item.title}</Text>
//             <Text className='text-white text-lg font-light '>6 mins . Bryan Delgado</Text>
//         </View>

//     </View>
// );


const exercises = [
    {
        id: '1',
        title: 'Breathe Easy',
        duration: '6 mins',
        guideName: 'Bryan Delgado',
        guideImage: 'https://randomuser.me/api/portraits/men/32.jpg',
        locked: false
    },
    {
        id: '2',
        title: 'Breathing 101',
        duration: '9 mins',
        guideName: 'Davi Brown',
        guideImage: 'https://randomuser.me/api/portraits/women/44.jpg',
        locked: false
    },
    {
        id: '3',
        title: 'Breathing Through Crisis',
        duration: '11 mins',
        guideName: 'Ace',
        guideImage: 'https://randomuser.me/api/portraits/men/46.jpg',
        locked: true
    },
    {
        id: '4',
        title: 'Focus Flow',
        duration: '5 mins',
        guideName: 'Davi Brown',
        guideImage: 'https://randomuser.me/api/portraits/women/44.jpg',
        locked: false
    },
    {
        id: '5',
        title: 'Morning Energy',
        duration: '7 mins',
        guideName: 'Bryan Delgado',
        guideImage: 'https://randomuser.me/api/portraits/men/32.jpg',
        locked: false
    },
];


const ExerciseCard = ({ item }: { item: typeof exercises[0] }) => (
    <Link
        href={{
            pathname: "./guidedDetailPlayer/[id]",
            params: { id: item.id, title: item.title, guide: "Bryan Delgado" }
        }}
        asChild
    // disabled={item.locked}
    >
        <TouchableOpacity
            className={`bg-white/10 rounded-2xl p-4 m-2 flex-1 h-[160px] `}
            activeOpacity={item.locked ? 1 : 0.7}
        >
            <View className="flex-1 justify-between">
                <View className="flex-row justify-between items-start">
                    <TouchableOpacity className='absolute top-2 right-3 '>
                        <FontAwesome name="heart-o" size={18} color="rgba(255,255,255,0.5)" />
                    </TouchableOpacity>
                </View>

                <View className='max-w-md mx-auto'>
                    {item.locked && (
                        <FontAwesome name="lock" size={18} color="white" />
                    )}
                </View>


                <View className='flex flex-row justify-between'>
                    <View>
                        <Text className='text-white text-2xl font-semibold'>{item.title}</Text>
                        <Text className='text-white/70 text-base font-light'>6 mins . Bryan Delgado</Text>
                    </View>

                    <Image
                        source={{ uri: item.guideImage }}
                        className="w-14 h-14 rounded-full"
                    />
                </View>
            </View>
        </TouchableOpacity>
    </Link>
);

const GuidedDetails = () => {
    const router = useRouter()
    return (
        <ImageBackground
            source={require('../../../assets/images/explore-bg.png')}
            // source={require('../assets/images/explore-bg.png')}
            resizeMode="cover"
            className='flex-1'
        >

            <View className='bg-black/70 flex-1'>

                {/* HEADER */}
                <View className='p-4 pt-[70px]'>
                    <TouchableOpacity onPress={() => {
                        router.back()
                    }}
                        className='self-start mb-4'
                    >
                        <Feather name="chevron-left" size={28} color="white" />
                    </TouchableOpacity>

                    <Text className='text-white text-3xl font-bold mb-2 text-center'>Calming Body and Mind</Text>
                    <Text className='text-gray-300 text-xl mb-6 text-center'>This guided class will help you calm your body and mind with the help of breathing. Fell rejuvenated on completing the class!</Text>
                </View>


                <FlatList
                    data={exercises}
                    renderItem={({ item }) => <ExerciseCard item={item} />}
                    keyExtractor={(item) => item.id}
                    numColumns={1}
                    contentContainerStyle={{ paddingHorizontal: 8 }}
                    className='mt-4'

                />
            </View>

        </ImageBackground>
    )
}

export default GuidedDetails

const styles = StyleSheet.create({})