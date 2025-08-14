import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link } from 'expo-router';
import React from 'react';
import { FlatList, Image, ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';



const breathingExercises = [
    { id: '1', emoji: '😌', title: 'Calm', color: '#4A5568' },
    { id: '2', emoji: '🌙', title: 'Sleep', color: '#2D3748' },
    { id: '3', emoji: '😟', title: 'Anxiety Ease', color: '#4A5568' },
    { id: '4', emoji: '🌞', title: 'Awake', color: '#2D3748' },
    { id: '5', emoji: '🌞', title: 'Balance', color: '#4A5568' },
    { id: '6', emoji: '🌞', title: 'Energize', color: '#2D3748' },
    { id: '7', emoji: '🌞', title: 'Energize', color: '#2D3748' },
    { id: '8', emoji: '🌞', title: 'Energize', color: '#2D3748' },
    { id: '9', emoji: '🌞', title: 'Energize', color: '#2D3748' },
    { id: '10', emoji: '🌞', title: 'Energize', color: '#2D3748' },
];


const dailyClasses = [
    { id: '1', title: 'Wake Up', duration: '2 mins', image: 'https://plus.unsplash.com/premium_photo-1701519605767-4e007ae06aaa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhZGllbnQlMjBncmVlbnxlbnwwfHwwfHx8MA%3D%3D' },
    { id: '2', title: 'Calm Down', duration: '6 mins', image: 'https://images.unsplash.com/photo-1508615039623-a25605d2b022' },
    { id: '3', title: 'Calm Down', duration: '6 mins', image: 'https://images.unsplash.com/photo-1696345592145-d7286506a6ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JhZGllbnQlMjBncmVlbnxlbnwwfHwwfHx8MA%3D%3D' },
    { id: '4', title: 'Calm Down', duration: '6 mins', image: 'https://images.unsplash.com/photo-1579546928937-641f7ac9bced?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdyYWRpZW50JTIwZ3JlZW58ZW58MHx8MHx8fDA%3D' },
];

const guidedClasses = [
    { id: '1', title: 'Calming Body and Mind', count: '23 Classes', image: 'https://images.unsplash.com/photo-1671226366556-c3efaa10edf0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdyYWRpZW50JTIwZGFya3xlbnwwfHwwfHx8MA%3D%3D' },
    { id: '2', title: 'Energy Boost', count: '18 Classes', image: 'https://images.unsplash.com/photo-1649861742672-20152f77c1f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGdyYWRpZW50fGVufDB8fDB8fHww' },
    { id: '3', title: 'Energy Boost', count: '18 Classes', image: 'https://images.unsplash.com/photo-1645724298070-c30a506ec96f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ1fHxncmFkaWVudHxlbnwwfHwwfHx8MA%3D%3D' },
    { id: '4', title: 'Energy Boost', count: '18 Classes', image: 'https://images.unsplash.com/photo-1671226366556-c3efaa10edf0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdyYWRpZW50JTIwZGFya3xlbnwwfHwwfHx8MA%3D%3D' },
];



const SectionHeader = ({ title, viewAllHref }: { title: string; viewAllHref?: string }) => (
    <View className="flex-row justify-between items-center px-4 mb-4">
        <Text className="text-white text-xl font-bold">{title}</Text>
        {viewAllHref && (
            <Link href={viewAllHref as any} asChild>
                <TouchableOpacity>
                    <Text className="text-gray-300 text-lg">view all</Text>
                </TouchableOpacity>
            </Link>
        )}
    </View>
);

type BreathingExercise = {
    id: string;
    title: string;
    color: string;
    emoji?: string;
    icon?: string;
};

const BreathingExerciseChip = ({ item }: { item: BreathingExercise }) => (
    <Link href={{
        // pathname: '/breathing-exercise/[id]',
        pathname: '../components/explore/breathingExercise/[id]',
        params: { id: item.id, title: item.title }
    }} asChild>
        <TouchableOpacity className='mr-3'>
            <View
                className='bg-white/20 flex-row items-center p-3 rounded-full'>
                {item.emoji ? (
                    <Text className='text-lg mr-2'>{item.emoji}</Text>
                ) : (
                    <FontAwesome name={item.icon as any} size={16} color="white" className="mr-2" />

                )}
                <Text className='text-white font-semibold'>{item.title}</Text>
            </View>
        </TouchableOpacity>
    </Link>

)

const DailyClassCard = ({ item }: { item: typeof dailyClasses[0] }) => (
    <ImageBackground
        source={{ uri: item.image }}
        className='w-[220px] h-[370px] rounded-[25px] overflow-hidden mr-4  flex items-center justify-between p-[30px]'
        resizeMode='cover'
    >

        <View className='flex items-center '>

            <View className='bg-white/30 px-5 py-2 rounded-full mb-16'>
                <Text className='text-white text-xs'>NEW</Text>
            </View>
            <FontAwesome name="lock" size={20} color="white" />
        </View>
        <View className='flex items-center'>
            <Text className='text-5xl text-white font-semibold max-w-[70%] text-center'>{item.title}</Text>

            <Text className='text-white font-light'>{item.duration}</Text>
        </View>

        <TouchableOpacity className='bg-white p-4 px-10  rounded-full mt-3'>
            <Text className='text-black font-semibold text-lg '>
                Play
            </Text>
        </TouchableOpacity>
    </ImageBackground>

)



const GuidedClassCard = ({ item }: { item: typeof guidedClasses[0] }) => (
    <Link
        href="../components/explore/GuidedDetails"
        className='mr-4'>
        <View className='rounded-[25px] w-[300px] h-[300px] overflow-hidden ' >
            <Image source={{ uri: item.image }}
                className='h-[200px] w-[100%]' />
            <View className='p-4 bg-black/30 rounded-b-2xl'>
                <Text className='text-white text-2xl mb-4'>Calming Body and Mind</Text>

                <View className='flex-row justify-between items-center'>
                    <Text className='text-gray-400 text-xl'>
                        23 Classes</Text>
                    <TouchableOpacity className='bg-white/20 rounded-2xl p-2 px-7'>
                        <Text className='text-white'>
                            Open
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Link>

)




const ExploreScreen = () => {
    return (
        <ImageBackground
            source={require('../../assets/images/explore-bg.png')}
            resizeMode="cover"
        >
            <View className='bg-black/70'>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View className="pt-[70px] pb-10">
                        <Text className='text-white text-center font-bold text-2xl mb-[60px]'>breathWrk</Text>
                        <View className='px-4 mb-8'>
                            <View className='flex-row items-center border border-[#445f52] p-5 rounded-full'>
                                <TextInput
                                    placeholder='Search'
                                    placeholderTextColor="gray"
                                    className='text-white flex-1 ml-3'
                                />
                            </View>
                        </View>

                        <View className='mb-12'>
                            <SectionHeader title="Breathing Exercises" viewAllHref="../components/explore/AllExercises" />
                            <FlatList
                                data={breathingExercises}
                                renderItem={({ item }) => <BreathingExerciseChip item={item}
                                />}
                                keyExtractor={(item) => item.id}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{ paddingLeft: 16 }}
                            />

                        </View>

                        {/* Daily Classes Section */}
                        <View className='mb-12'>
                            <SectionHeader title="Daily Classes" />
                            <FlatList
                                data={dailyClasses}
                                renderItem={({ item }) => <DailyClassCard item={item} />}
                                keyExtractor={(item) => item.id}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{ paddingLeft: 16 }} />
                        </View>

                        {/* Guided Classes Section */}
                        <View>
                            <SectionHeader title="Guided Classes" />
                            <FlatList
                                data={guidedClasses}
                                renderItem={({ item }) => <GuidedClassCard item={item} />}
                                keyExtractor={(item) => item.id}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{ paddingLeft: 16 }}
                            />
                        </View>

                    </View>

                </ScrollView>
            </View>

        </ImageBackground>
    )
}

export default ExploreScreen

