// import { Stack, useRouter } from 'expo-router';
// import React, { useState } from 'react';
// import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

// const goalsData = [
//     { id: 'sleep', emoji: '🛌', text: 'Better Sleep' },
//     { id: 'stress', emoji: '😟', text: 'Stress or Anxiety' },
//     { id: 'mood', emoji: '📈', text: 'Improve My Mood' },
//     { id: 'energy', emoji: '⚡️', text: 'Energy & Focus' },
//     { id: 'health', emoji: '💖', text: 'Overall Health' },
// ];

// // Reusable component for each selectable goal
// const GoalItem = ({ item, isSelected, onPress }: { item: typeof goalsData[0], isSelected: boolean, onPress: () => void }) => (
//     <TouchableOpacity
//         onPress={onPress}
//         className={`bg-white/10 p-5 rounded-2xl flex-row items-center mb-4 border ${
//             isSelected ? 'border-white/80' : 'border-transparent'
//         }`}
//     >
//         <Text className="text-2xl mr-4">{item.emoji}</Text>
//         <Text className="text-white text-lg font-semibold">{item.text}</Text>
//     </TouchableOpacity>
// );

// const SelectGoalsScreen = () => {
//     const router = useRouter();
//     const [selectedGoals, setSelectedGoals] = useState<string[]>([]);

//     const toggleGoal = (id: string) => {
//         setSelectedGoals(prev => 
//             prev.includes(id) ? prev.filter(gId => gId !== id) : [...prev, id]
//         );
//     };

//     const handleContinue = () => {
//         // Navigate to the main app after this final onboarding step
//         router.replace('/(tabs)/explore');
//     };

//     return (
//         <View className="flex-1 bg-[#1A1A1A]">
//             <Stack.Screen options={{ headerShown: false }} />
//             <SafeAreaView className="flex-1 p-6 justify-between">
//                 {/* Header Text */}
//                 <View>
//                     <Text className="text-white text-4xl font-bold text-center mt-8">
//                         What are your goals{'\n'}with Breathwrk?
//                     </Text>
//                     <Text className="text-white/70 text-base text-center mt-2">
//                         (Choose all that apply)
//                     </Text>
//                 </View>

//                 {/* Goals List */}
//                 <View className="mt-12">
//                     {goalsData.map(goal => (
//                         <GoalItem
//                             key={goal.id}
//                             item={goal}
//                             isSelected={selectedGoals.includes(goal.id)}
//                             onPress={() => toggleGoal(goal.id)}
//                         />
//                     ))}
//                 </View>

//                 {/* Spacer to push button to the bottom */}
//                 <View className="flex-1" />

//                 {/* Continue Button */}
//                 <TouchableOpacity
//                     onPress={handleContinue}
//                     disabled={selectedGoals.length === 0}
//                     className={`bg-white rounded-full py-4 w-full ${
//                         selectedGoals.length === 0 ? 'opacity-50' : ''
//                     }`}
//                 >
//                     <Text className="text-black text-lg font-bold text-center">Continue</Text>
//                 </TouchableOpacity>
//             </SafeAreaView>
//         </View>
//     );
// };

// export default SelectGoalsScreen;