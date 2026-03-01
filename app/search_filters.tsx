import React, { useState } from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

const FilterChip = ({ title, isActive, onPress }: { title: string, isActive?: boolean, onPress?: () => void }) => (
    <Pressable
        className={`px-4 py-2 rounded-full font-medium ${isActive ? 'bg-[#d57f30] shadow-sm' : 'bg-white dark:bg-white/5 border border-[#825e34]/10'}`}
        onPress={onPress}
    >
        <Text className={isActive ? 'text-white' : 'text-[#825e34] dark:text-gray-100'}>
            {title}
        </Text>
    </Pressable>
);

export default function SearchFilters() {
    const router = useRouter();

    const [mealType, setMealType] = useState('All');
    const [difficulty, setDifficulty] = useState('Medium');

    return (
        <View className="flex-1 bg-[#fdfbd4] dark:bg-[#201912]">
            {/* Header */}
            <View className="pt-12 px-5 pb-4 flex-row justify-between items-center bg-[#fdfbd4]/90 dark:bg-[#201912]/90 backdrop-blur-sm z-10 border-b border-[#825e34]/10">
                <View className="flex-row items-center gap-3">
                    <Pressable
                        className="w-10 h-10 items-center justify-center rounded-full bg-white dark:bg-white/10 shadow-sm active:bg-gray-50"
                        onPress={() => router.back()}
                    >
                        <Text className="material-symbols-outlined text-[#825e34] dark:text-gray-100 text-[24px]">close</Text>
                    </Pressable>
                    <Text className="text-xl font-bold text-[#825e34] dark:text-gray-100">Filters</Text>
                </View>
                <Pressable
                    className="bg-white dark:bg-white/10 px-4 py-2 rounded-full shadow-sm active:opacity-80 border border-[#825e34]/5"
                    onPress={() => router.back()}
                >
                    <Text className="text-[#d57f30] font-bold">Apply</Text>
                </Pressable>
            </View>

            <ScrollView
                className="flex-1 px-5 pt-6"
                contentContainerStyle={{ gap: 24, paddingBottom: 40 }}
                showsVerticalScrollIndicator={false}
            >
                {/* Meal Type */}
                <View>
                    <Text className="font-bold text-lg mb-3 text-[#825e34] dark:text-gray-100">Meal Type</Text>
                    <View className="flex-row flex-wrap gap-2">
                        {['All', 'Breakfast', 'Lunch', 'Dinner', 'Snack'].map(type => (
                            <FilterChip
                                key={type}
                                title={type}
                                isActive={mealType === type}
                                onPress={() => setMealType(type)}
                            />
                        ))}
                    </View>
                </View>

                {/* Max Cooking Time */}
                <View>
                    <Text className="font-bold text-lg mb-3 text-[#825e34] dark:text-gray-100">Max Cooking Time</Text>

                    {/* Mock visual slider */}
                    <View className="w-full h-2 bg-[#825e34]/10 dark:bg-white/10 rounded-full my-4 relative justify-center">
                        {/* Filled Track */}
                        <View className="absolute left-0 h-full bg-[#d57f30] w-[40%] rounded-full" />
                        {/* Thumb */}
                        <View className="absolute left-[40%] -ml-3 w-6 h-6 bg-white border-2 border-[#d57f30] rounded-full shadow-md" />
                    </View>

                    <View className="flex-row justify-between mt-1">
                        <Text className="text-sm font-bold opacity-70 text-[#825e34] dark:text-gray-100">5m</Text>
                        <Text className="text-sm font-bold opacity-70 text-[#825e34] dark:text-gray-100">45m</Text>
                        <Text className="text-sm font-bold opacity-70 text-[#825e34] dark:text-gray-100">2h+</Text>
                    </View>
                </View>

                {/* Difficulty */}
                <View>
                    <Text className="font-bold text-lg mb-3 text-[#825e34] dark:text-gray-100">Difficulty</Text>
                    <View className="flex-row flex-wrap gap-2">
                        {['Easy', 'Medium', 'Hard'].map(diff => (
                            <FilterChip
                                key={diff}
                                title={diff}
                                isActive={difficulty === diff}
                                onPress={() => setDifficulty(diff)}
                            />
                        ))}
                    </View>
                </View>

            </ScrollView>
        </View>
    );
}
