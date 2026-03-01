import React, { useState } from 'react';
import { View, Text, Pressable, ScrollView, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';

// Helper component for the custom checkbox row
const IngredientRow = ({ name, qty, isChecked, onToggle }: any) => (
    <Pressable
        className="flex-row items-center gap-4 p-3 active:bg-white/40 dark:active:bg-white/5 rounded-lg mb-1"
        onPress={onToggle}
    >
        <View className={`w-6 h-6 rounded-full border-2 items-center justify-center ${isChecked ? 'bg-[#D47E30] border-[#D47E30]' : 'border-[#825e34]/30 dark:border-slate-600'}`}>
            {isChecked && <Text className="material-symbols-outlined text-white text-[16px]">check</Text>}
        </View>
        <View className="flex-1 flex-row justify-between items-center border-b border-[#825e34]/10 dark:border-white/5 pb-2">
            <Text className="text-[#825e34] dark:text-slate-200 font-semibold text-lg">{name}</Text>
            <Text className="text-[#825e34]/70 dark:text-slate-400 font-medium text-sm bg-[#FDFBD4] dark:bg-white/5 px-2 py-1 rounded-md">{qty}</Text>
        </View>
    </Pressable>
);

export default function GetMissingIngredients() {
    const router = useRouter();

    const [items, setItems] = useState([
        { id: '1', name: 'Tomatoes', qty: '2 pcs', isChecked: true },
        { id: '2', name: 'Fresh Basil', qty: '1 bunch', isChecked: true },
        { id: '3', name: 'Mozzarella', qty: '200g', isChecked: true },
    ]);

    const toggleItem = (id: string) => {
        setItems(items.map(item => item.id === id ? { ...item, isChecked: !item.isChecked } : item));
    };

    return (
        <View className="flex-1 bg-[#FDFBD4] dark:bg-[#221910]">
            {/* Header */}
            <View className="flex-row items-center justify-between p-5 pt-12 z-20 bg-[#FDFBD4]/90 dark:bg-[#221910]/80 border-b border-[#825e34]/5 dark:border-white/5">
                <Pressable
                    className="w-10 h-10 items-center justify-center rounded-full active:bg-[#825e34]/10 dark:active:bg-white/10"
                    onPress={() => router.back()}
                >
                    <Text className="material-symbols-outlined text-[24px] text-[#825e34] dark:text-slate-100">arrow_back</Text>
                </Pressable>
                <Text className="text-[#8D5A2B] dark:text-slate-100 text-lg font-bold tracking-tight">Missing Ingredients</Text>
                <View className="w-10" />
            </View>

            <ScrollView
                className="flex-1 px-5 pt-4"
                contentContainerStyle={{ paddingBottom: 120 }}
                showsVerticalScrollIndicator={false}
            >
                <View className="mb-6">
                    <Text className="text-3xl font-extrabold text-[#825e34] dark:text-white leading-tight">Just a few things left!</Text>
                    <Text className="text-[#D47E30]/80 dark:text-slate-400 mt-2 text-base font-medium">We'll help you sort these out quickly.</Text>
                </View>

                {/* Missing Items List */}
                <View className="bg-white/60 dark:bg-[#2d241b] rounded-xl p-2 shadow-sm border border-[#825e34]/10 dark:border-white/5 mb-8">
                    {items.map((item) => (
                        <IngredientRow
                            key={item.id}
                            name={item.name}
                            qty={item.qty}
                            isChecked={item.isChecked}
                            onToggle={() => toggleItem(item.id)}
                        />
                    ))}
                </View>

                {/* Deliver Section */}
                <View className="mb-8">
                    <View className="flex-row items-center gap-2 mb-4">
                        <Text className="material-symbols-outlined text-[#D47E30] text-xl">moped</Text>
                        <Text className="text-[#825e34] dark:text-white text-lg font-bold">Get it Delivered</Text>
                        <View className="ml-auto bg-[#D47E30]/10 px-2 py-0.5 rounded-full">
                            <Text className="text-xs font-semibold text-[#D47E30]">15-20 mins</Text>
                        </View>
                    </View>

                    <View className="flex-row justify-between gap-3">
                        {/* Swiggy Mock */}
                        <Pressable className="flex-1 flex-col items-center justify-center gap-2 bg-[#825e34] dark:bg-[#2d241b] p-4 rounded-xl shadow-sm active:opacity-80 active:scale-95">
                            <View className="h-10 w-10 border-2 border-white/20 rounded-full bg-orange-500 items-center justify-center">
                                <Text className="text-white font-bold text-lg">S</Text>
                            </View>
                            <Text className="text-white/90 dark:text-slate-200 text-xs font-bold">Swiggy</Text>
                        </Pressable>

                        {/* Zepto Mock */}
                        <Pressable className="flex-1 flex-col items-center justify-center gap-2 bg-[#825e34] dark:bg-[#2d241b] p-4 rounded-xl shadow-sm active:opacity-80 active:scale-95">
                            <View className="h-10 w-10 border-2 border-white/20 rounded-full bg-indigo-600 items-center justify-center">
                                <Text className="text-white font-bold text-lg">Z</Text>
                            </View>
                            <Text className="text-white/90 dark:text-slate-200 text-xs font-bold">Zepto</Text>
                        </Pressable>

                        {/* Blinkit Mock */}
                        <Pressable className="flex-1 flex-col items-center justify-center gap-2 bg-[#825e34] dark:bg-[#2d241b] p-4 rounded-xl shadow-sm active:opacity-80 active:scale-95">
                            <View className="h-10 w-10 border-2 border-white/20 rounded-full bg-yellow-400 items-center justify-center">
                                <Text className="text-black font-bold text-lg">B</Text>
                            </View>
                            <Text className="text-white/90 dark:text-slate-200 text-xs font-bold">Blinkit</Text>
                        </Pressable>
                    </View>
                </View>

                {/* Health Route Widget */}
                <View className="mb-4">
                    <View className="flex-row items-center gap-2 mb-4">
                        <Text className="material-symbols-outlined text-green-700 dark:text-green-400 text-xl">eco</Text>
                        <Text className="text-[#825e34] dark:text-white text-lg font-bold">The Health & Wealth Route</Text>
                    </View>

                    <Pressable
                        className="rounded-xl overflow-hidden shadow-sm active:scale-[0.98] bg-[#E8F5E9] dark:bg-[#1b3e20]"
                    >
                        {/* Using a solid background and image instead of complex CSS masks */}
                        <ImageBackground
                            source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuAW500P_E3HqDbszhwhfP9aQXuNvrvAOwxZwVaFUL3YvR9NkZkF5D75U1OW400AX4o0E6ur2VtYtNV2R90IOnMS-n34jOtrcghCdKn_-sClSJrlNmMdgT2Jh4aJMBkXLNhxw_pTDIAEQu3PL3comWZWVnFofEcgg7AM89cmUuq6-mP5ymH-CTA-VfVWmvGBbT4Tddfs1R9QT-kVZe4KWbOgN93z7_UlFgtEM2cV1VrzI8pnHTMXrMRE4w45Xo_khfthXVhKjf8II0Q" }}
                            className="w-full h-full absolute right-0 opacity-40"
                            resizeMode="cover"
                            imageStyle={{ right: -100 }} // Shift to right
                        />

                        <View className="p-5 flex-col gap-3 w-3/4 z-10">
                            <View>
                                <Text className="text-emerald-900 dark:text-emerald-50 text-xl font-bold">Gupta General Store</Text>
                                <Text className="text-emerald-700 dark:text-emerald-200 text-sm font-medium mt-1">Support local & burn some calories!</Text>
                            </View>

                            <View className="flex-row items-center gap-3 mt-1">
                                <View className="flex-row items-center gap-1.5 bg-white/70 dark:bg-black/20 px-3 py-1.5 rounded-full">
                                    <Text className="material-symbols-outlined text-emerald-800 dark:text-emerald-100 text-[18px]">directions_walk</Text>
                                    <Text className="text-emerald-900 dark:text-emerald-50 text-xs font-bold">10 min</Text>
                                </View>
                                <View className="flex-row items-center gap-1.5 bg-white/70 dark:bg-black/20 px-3 py-1.5 rounded-full">
                                    <Text className="material-symbols-outlined text-orange-600 dark:text-orange-300 text-[18px]">local_fire_department</Text>
                                    <Text className="text-emerald-900 dark:text-emerald-50 text-xs font-bold">50 cal</Text>
                                </View>
                            </View>
                        </View>
                    </Pressable>
                </View>

            </ScrollView>

            {/* Footer Action */}
            <View className="absolute bottom-6 w-full px-5 z-30">
                <Pressable
                    className="w-full bg-[#8D5A2B] rounded-full py-4 shadow-lg shadow-[#8D5A2B]/30 flex-row items-center justify-center gap-2 active:scale-95 active:bg-[#744820]"
                    onPress={() => router.push('/smart_grocery_list')}
                >
                    <Text className="text-white font-bold text-lg">Find Ingredients</Text>
                    <Text className="material-symbols-outlined text-white text-[24px]">arrow_forward</Text>
                </Pressable>
            </View>
        </View>
    );
}
