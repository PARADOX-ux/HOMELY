import React, { useState } from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

// Helper component for the Custom Checkbox Row
const GroceryItem = ({ title, subtitle, initiallyChecked = false }: { title: string, subtitle: string, initiallyChecked?: boolean }) => {
    const [checked, setChecked] = useState(initiallyChecked);

    return (
        <Pressable
            className="flex-row items-center gap-4 p-4 bg-white dark:bg-[#2C241B] rounded-2xl shadow-sm border border-[#825E34]/10 active:scale-[0.99] mb-3"
            onPress={() => setChecked(!checked)}
        >
            {/* Checkbox Ring/Fill */}
            <View
                className={`w-6 h-6 rounded-full border-2 items-center justify-center transition-colors
          ${checked ? 'bg-[#D47E30] border-[#D47E30]' : 'bg-transparent border-[#825E34]'}`}
            >
                {checked && (
                    <Text className="text-white text-[12px] font-bold">✓</Text>
                )}
            </View>

            {/* Text Content */}
            <View className="flex-1 flex-col">
                <Text
                    className={`text-base font-semibold ${checked ? 'text-[#825E34] line-through opacity-60' : 'text-slate-900 dark:text-slate-100'}`}
                >
                    {title}
                </Text>
                <Text
                    className={`text-sm font-medium ${checked ? 'text-[#825E34] line-through opacity-60' : 'text-[#825E34]/70'}`}
                >
                    {subtitle}
                </Text>
            </View>
        </Pressable>
    );
};

export default function SmartGroceryList() {
    const router = useRouter();

    return (
        <View className="flex-1 bg-[#FDFBD4] dark:bg-background-dark">
            {/* Header */}
            <View className="flex-row items-center justify-between px-6 pt-12 pb-4 border-b border-[#825E34]/10 bg-[#FDFBD4]/95 dark:bg-background-dark/95 z-20">
                <Text className="text-2xl font-bold tracking-tight text-[#1a140f] dark:text-white">Grocery List</Text>
                <Pressable
                    className="w-10 h-10 rounded-full items-center justify-center active:bg-[#825E34]/10"
                    onPress={() => router.back()}
                >
                    <Text className="material-symbols-outlined text-[#825E34] text-[24px]">arrow_back</Text>
                </Pressable>
            </View>

            <ScrollView
                className="flex-1 px-6"
                contentContainerStyle={{ paddingBottom: 120, paddingTop: 24 }}
                showsVerticalScrollIndicator={false}
            >
                {/* Category: Produce */}
                <View className="mb-8">
                    <View className="flex-row items-center gap-3 mb-4">
                        <View className="bg-[#825E34]/10 p-2 rounded-full">
                            <Text className="material-symbols-outlined text-[#825E34] text-[20px]">nutrition</Text>
                        </View>
                        <Text className="text-xl font-bold text-[#825E34]">Produce</Text>
                        <View className="h-[1px] bg-[#825E34]/20 flex-1 ml-2" />
                    </View>

                    <GroceryItem title="Avocados" subtitle="2 units • Ripe" />
                    <GroceryItem title="Spinach" subtitle="1 bag • Organic" />
                    <GroceryItem title="Bananas" subtitle="1 bunch" initiallyChecked={true} />
                </View>

                {/* Category: Dairy & Eggs */}
                <View className="mb-8">
                    <View className="flex-row items-center gap-3 mb-4">
                        <View className="bg-[#825E34]/10 p-2 rounded-full">
                            <Text className="material-symbols-outlined text-[#825E34] text-[20px]">egg_alt</Text>
                        </View>
                        <Text className="text-xl font-bold text-[#825E34]">Dairy & Eggs</Text>
                        <View className="h-[1px] bg-[#825E34]/20 flex-1 ml-2" />
                    </View>

                    <GroceryItem title="Whole Milk" subtitle="1 gallon" />
                    <GroceryItem title="Large Brown Eggs" subtitle="1 dozen" />
                </View>

                {/* Category: Spices */}
                <View className="mb-4">
                    <View className="flex-row items-center gap-3 mb-4">
                        <View className="bg-[#825E34]/10 p-2 rounded-full">
                            <Text className="material-symbols-outlined text-[#825E34] text-[20px]">grocery</Text>
                        </View>
                        <Text className="text-xl font-bold text-[#825E34]">Spices</Text>
                        <View className="h-[1px] bg-[#825E34]/20 flex-1 ml-2" />
                    </View>

                    <GroceryItem title="Cumin" subtitle="1 jar" />
                    <GroceryItem title="Smoked Paprika" subtitle="1 tin" />
                </View>

                {/* Footer Quote */}
                <View className="mb-6 items-center opacity-60">
                    <Text className="text-sm text-[#825E34] font-medium italic">
                        "A well-stocked pantry is a happy home."
                    </Text>
                </View>
            </ScrollView>

            {/* Floating Bottom Buttons */}
            <View className="absolute bottom-[30px] self-center w-full px-6 flex-row gap-3 items-center justify-center">
                <Pressable
                    className="flex-1 bg-white py-3.5 rounded-full shadow-lg border border-[#825E34]/20 flex-row items-center justify-center gap-2 active:bg-[#825E34]/5"
                    onPress={() => router.push('/order_ingredients')}
                >
                    <Text className="material-symbols-outlined text-[#825E34] text-[20px]">shopping_bag</Text>
                    <Text className="text-[#825E34] font-bold text-sm">Order Ingredients</Text>
                </Pressable>

                <Pressable
                    className="items-center justify-center w-14 h-14 bg-[#8D5A2B] rounded-full shadow-lg active:scale-95"
                    onPress={() => router.push('/ingredient_selection')}
                >
                    <Text className="material-symbols-outlined text-white text-[32px]">add</Text>
                </Pressable>
            </View>

        </View>
    );
}
