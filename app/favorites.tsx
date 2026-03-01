import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, ScrollView, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';

// Mock data
const mockFavorites = [
    { id: '1', title: 'Classic Butter Chicken', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAclTpGdHz6mNJkWAg2c11e6-gbpGoM5PU5kmJpfrKG78rTBiY2btqHja3AGnK1BKhppctYzT8ubsZMZuw-5ipey1AvFe9HxT0T9xf7iQJjmVST_x5TnO802qrENL7L3EpGwaOdlyHNR-f8bfIvjrXaoXpNuDZ3iNygtl-69P-tV2a_MU6GYbIFs9cq9zkzlFUSa3I7aDBf7s_dkFAzDd7TVAcvDyjVX9GATydrgdLf1cCuEZVh-azz1EXF3vE-01NdNRU-Fs6Yy-Q', time: '40 Min' },
    { id: '2', title: 'Creamy Avocado Toast', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEQpT_xT13z1-Y38bU9k_B522vOEXl3sJ4iS3bW_25h2N8pMv9f5L-X3N4L-7aG473G17S_-K6lqY_F04c2oP9w0x8q4J6Mv3pS9w9N74K01tL9R3Y6m6g3tB-vG81eL7c5Y0W1V_Z5x5X6j2M4w_Z4X9N', time: '10 Min' },
    { id: '3', title: 'Spicy Ramen Bowl', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAW500P_E3HqDbszhwhfP9aQXuNvrvAOwxZwVaFUL3YvR9NkZkF5D75U1OW400AX4o0E6ur2VtYtNV2R90IOnMS-n34jOtrcghCdKn_-sClSJrlNmMdgT2Jh4aJMBkXLNhxw_pTDIAEQu3PL3comWZWVnFofEcgg7AM89cmUuq6-mP5ymH-CTA-VfVWmvGBbT4Tddfs1R9QT-kVZe4KWbOgN93z7_UlFgtEM2cV1VrzI8pnHTMXrMRE4w45Xo_khfthXVhKjf8II0Q', time: '20 Min' },
    { id: '4', title: 'Berry Smoothie Bowl', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVHbZgWEJFAxs6MsT8SDuvPcq-MUhXZm8ilrCrNM6LM4Fl7nIxOTD-gn84wgUSsYqHV8dFt2oJyxvqtB_2FrCQ0p92hJXsqBX8yvSGD3kAIios1KHZaf41HsaED38sn04_MnpoIvEei7giSe2K22zz-O1FSh_uSoCR2FTlzQqhYgi-zwQ8rgZme_NG1DzytKhAciie75-CTQxqDMbhfHsxxsZALTGn2b19pF2CKd6wLJRr7MM5GP8jDIEduZ04YS0m6fQA1ln13rE', time: '15 Min' },
];

export default function Favorites() {
    const router = useRouter();
    const [favorites, setFavorites] = useState(mockFavorites);

    const removeFavorite = (id: string) => {
        setFavorites(prev => prev.filter(f => f.id !== id));
    };

    // Split into left and right columns for masonry layout
    const leftCol = favorites.filter((_, i) => i % 2 === 0);
    const rightCol = favorites.filter((_, i) => i % 2 !== 0);

    return (
        <View className="flex-1 bg-[#FDFBD4] dark:bg-[#1E1914]">
            {/* Header */}
            <View className="pt-14 px-5 pb-4 bg-[#FDFBD4]/95 dark:bg-[#1E1914]/95 border-b border-[#825e34]/10 dark:border-white/5 z-20">
                <View className="flex-row items-center justify-between mb-6">
                    <View className="flex-row items-center gap-3">
                        <Pressable
                            className="w-10 h-10 rounded-full flex items-center justify-center bg-[#825e34]/10 dark:bg-white/10 active:bg-[#825e34]/20"
                            onPress={() => router.back()}
                        >
                            <Text className="material-symbols-outlined text-[24px] text-[#825e34] dark:text-[#D47E30]">arrow_back</Text>
                        </Pressable>
                        <View>
                            <Text className="text-sm font-semibold text-[#825e34]/80 dark:text-[#D47E30]/80 mb-1">Welcome back, Chef</Text>
                            <Text className="text-3xl font-extrabold tracking-tight text-[#825e34] dark:text-gray-100">My Cookbook</Text>
                        </View>
                    </View>
                    <Pressable className="w-12 h-12 rounded-full bg-white dark:bg-[#2D241B] flex items-center justify-center shadow-sm active:opacity-80">
                        <Text className="material-symbols-outlined text-[28px] text-[#825e34] dark:text-[#D47E30]">add</Text>
                    </Pressable>
                </View>

                {/* Search */}
                <View className="relative w-full mb-6 relative justify-center">
                    <View className="absolute inset-y-0 left-0 pl-4 justify-center z-10">
                        <Text className="material-symbols-outlined text-[#825e34]/50 dark:text-[#D47E30]/50 text-[24px]">search</Text>
                    </View>
                    <TextInput
                        className="w-full pl-12 pr-12 py-4 bg-white dark:bg-[#2D241B] rounded-2xl text-[#4A3B32] dark:text-gray-100 placeholder:text-[#825e34]/40 shadow-sm text-base font-medium"
                        placeholder="Search your saved recipes..."
                        placeholderTextColor="#825e3460"
                    />
                    <View className="absolute inset-y-0 right-0 pr-4 justify-center z-10">
                        <Pressable className="p-1 active:opacity-70">
                            <Text className="material-symbols-outlined text-[#825e34]/60 dark:text-[#D47E30]/60 text-[24px]">tune</Text>
                        </Pressable>
                    </View>
                </View>

                {/* Categories */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false} className="pb-2">
                    <View className="flex-row gap-3">
                        {['All Saved', 'Dinners', 'Breakfast', 'Desserts', 'Healthy'].map((cat, i) => (
                            <Pressable
                                key={cat}
                                className={`flex-none px-6 py-2.5 rounded-full shadow-sm active:scale-95 ${i === 0 ? 'bg-[#825e34] dark:bg-[#D47E30]' : 'bg-white dark:bg-[#2D241B] border border-transparent dark:border-white/10'}`}
                            >
                                <Text className={`font-semibold text-sm ${i === 0 ? 'text-white' : 'text-[#825e34] dark:text-gray-200'}`}>{cat}</Text>
                            </Pressable>
                        ))}
                    </View>
                </ScrollView>
            </View>

            <ScrollView
                className="flex-1 px-4 mt-4"
                contentContainerStyle={{ paddingBottom: 100 }}
            >
                <View className="flex-row gap-4">
                    {/* Left Column */}
                    <View className="flex-1 flex-col gap-4">
                        {leftCol.map(recipe => (
                            <Pressable
                                key={recipe.id}
                                className="rounded-3xl overflow-hidden bg-white dark:bg-[#2D241B] shadow-sm transform active:scale-[0.98]"
                                onPress={() => router.push('/recipe_details')}
                            >
                                <ImageBackground
                                    source={{ uri: recipe.imageUrl }}
                                    className="w-full aspect-[4/5] justify-end"
                                >
                                    <View className="absolute inset-0 bg-black/40" />

                                    <Pressable
                                        className="absolute top-3 right-3 w-9 h-9 bg-[#D47E30]/90 rounded-full items-center justify-center shadow-sm z-10 active:scale-110"
                                        onPress={() => removeFavorite(recipe.id)}
                                    >
                                        <Text className="material-symbols-outlined text-[20px] text-white">bookmark</Text>
                                    </Pressable>

                                    <View className="p-4 z-10">
                                        <Text className="text-white text-lg font-bold leading-tight mb-1.5 tracking-tight">{recipe.title}</Text>
                                        <View className="flex-row items-center bg-white/20 px-2 py-1 rounded-full self-start">
                                            <Text className="material-symbols-outlined text-[14px] text-white/90 mr-1">schedule</Text>
                                            <Text className="text-white/90 text-xs font-semibold">{recipe.time}</Text>
                                        </View>
                                    </View>
                                </ImageBackground>
                            </Pressable>
                        ))}
                    </View>

                    {/* Right Column */}
                    <View className="flex-1 flex-col gap-4 mt-6">
                        {rightCol.map(recipe => (
                            <Pressable
                                key={recipe.id}
                                className="rounded-3xl overflow-hidden bg-white dark:bg-[#2D241B] shadow-sm transform active:scale-[0.98]"
                                onPress={() => router.push('/recipe_details')}
                            >
                                <ImageBackground
                                    source={{ uri: recipe.imageUrl }}
                                    className="w-full aspect-[4/5] justify-end"
                                >
                                    <View className="absolute inset-0 bg-black/40" />

                                    <Pressable
                                        className="absolute top-3 right-3 w-9 h-9 bg-[#D47E30]/90 rounded-full items-center justify-center shadow-sm z-10 active:scale-110"
                                        onPress={() => removeFavorite(recipe.id)}
                                    >
                                        <Text className="material-symbols-outlined text-[20px] text-white">bookmark</Text>
                                    </Pressable>

                                    <View className="p-4 z-10">
                                        <Text className="text-white text-lg font-bold leading-tight mb-1.5 tracking-tight">{recipe.title}</Text>
                                        <View className="flex-row items-center bg-white/20 px-2 py-1 rounded-full self-start">
                                            <Text className="material-symbols-outlined text-[14px] text-white/90 mr-1">schedule</Text>
                                            <Text className="text-white/90 text-xs font-semibold">{recipe.time}</Text>
                                        </View>
                                    </View>
                                </ImageBackground>
                            </Pressable>
                        ))}
                    </View>
                </View>

                {favorites.length === 0 && (
                    <View className="py-12 items-center justify-center">
                        <Text className="text-[#825e34] dark:text-[#D47E30] text-center font-bold">Your cookbook is empty now.</Text>
                    </View>
                )}

                <View className="flex-col items-center justify-center pt-8 pb-4 opacity-50">
                    <Text className="material-symbols-outlined text-4xl mb-2 text-[#825e34] dark:text-[#D47E30]">soup_kitchen</Text>
                    <Text className="text-sm font-semibold text-[#825e34] dark:text-[#D47E30]">You've reached the end of your kitchen!</Text>
                </View>
            </ScrollView>

        </View>
    );
}
