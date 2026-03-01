import React from 'react';
import { View, Text, Pressable, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';

export default function RecipeDiscovery() {
    const router = useRouter();

    return (
        <View className="flex-1 bg-[#FDFBD4]">
            {/* Header */}
            <View className="flex-row items-center justify-between px-6 pt-14 pb-4 z-20">
                <View className="flex-col">
                    <Text className="text-[#8D5A2B] text-3xl font-extrabold tracking-tight">What's cooking?</Text>
                    <Text className="text-[#825E34]/80 text-sm font-semibold mt-1">Based on your pantry...</Text>
                </View>
                <Pressable
                    className="bg-white/80 p-3 rounded-full shadow-sm active:bg-white"
                    onPress={() => router.push('/search_filters')}
                >
                    <Text className="material-symbols-outlined text-[#8D5A2B]">tune</Text>
                </Pressable>
            </View>

            {/* Main Card Area */}
            <View className="flex-1 w-full max-w-md mx-auto px-4 py-2 flex-col justify-center items-center relative">
                {/* Background Stack Cards (Decorative) */}
                <View className="absolute w-[90%] h-[68%] bg-white/40 border border-white/20 rounded-[2.5rem] mt-16 scale-y-95 z-0" />
                <View className="absolute w-[95%] h-[68%] bg-white/60 border border-white/30 rounded-[2.5rem] mt-8 scale-y-[0.98] z-10" />

                {/* Active Card */}
                <Pressable
                    className="w-full h-[68%] bg-white rounded-[2.5rem] shadow-lg overflow-hidden z-20 border-[3px] border-white active:scale-[0.99]"
                    onPress={() => router.push('/recipe_details')}
                >
                    <ImageBackground
                        source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBk_jC5Rqi8VMpxAqG6iIwSpuXn6rHhyeJxfsdaCTDKLK8OhJZoO57Ni6y4T_9g6s6Zlj5AWlYV9gqDyA-RBXXLwB8kuTm8vQ4KHG3pd9LLgld0LaWGa4Z6Bx7zXgFRSiQaT3pjMqquF2YoDO78RGA6JXzrTH88P3_PokmgZ_iGAW-vEB3wx1nfDG2JAPTgidff1kM3tgTTm3HKAyygHopMKMRMwSqMX2J2KV03gYUHSJd-gUjbjpJGLfkLZoNQYBce7YaZw4kbhXU" }}
                        className="w-full h-full"
                        resizeMode="cover"
                    >
                        {/* Gradient Overlay */}
                        <View className="absolute inset-0 bg-black/40" />

                        {/* Match Badge */}
                        <View className="absolute top-6 right-6 bg-[#D47E30] px-5 py-2.5 rounded-full shadow-lg flex-row items-center gap-2 border-2 border-white/20">
                            <Text className="material-symbols-outlined text-white text-[20px]">auto_awesome</Text>
                            <Text className="text-white text-base font-bold tracking-wide">80% Match</Text>
                        </View>

                        {/* Card Content Footer */}
                        <View className="absolute bottom-0 w-full p-8 flex-col gap-4">
                            {/* Tags */}
                            <View className="flex-row flex-wrap gap-2 mb-2">
                                <View className="flex-row items-center gap-1.5 bg-white/20 px-4 py-2 rounded-full border border-white/20">
                                    <Text className="material-symbols-outlined text-white text-[18px]">schedule</Text>
                                    <Text className="text-white text-sm font-bold">45 mins</Text>
                                </View>
                                <View className="flex-row items-center gap-1.5 bg-white/20 px-4 py-2 rounded-full border border-white/20">
                                    <Text className="material-symbols-outlined text-white text-[18px]">eco</Text>
                                    <Text className="text-white text-sm font-bold">Veg</Text>
                                </View>
                                <View className="flex-row items-center gap-1.5 bg-white/20 px-4 py-2 rounded-full border border-white/20">
                                    <Text className="material-symbols-outlined text-white text-[18px]">local_fire_department</Text>
                                    <Text className="text-white text-sm font-bold">Spicy</Text>
                                </View>
                            </View>

                            {/* Title & Desc */}
                            <View>
                                <Text className="text-[32px] font-extrabold text-white leading-tight mb-2 tracking-tight">Paneer Butter Masala</Text>
                                <Text className="text-gray-100 text-base font-medium opacity-95 leading-relaxed" numberOfLines={2}>
                                    Rich and creamy curry made with paneer, spices, onions, tomatoes, cashews and butter.
                                </Text>
                            </View>

                            {/* Missing Warning */}
                            <View className="mt-1 flex-row items-start gap-2 bg-black/40 self-start px-4 py-2.5 rounded-xl border border-white/10">
                                <Text className="material-symbols-outlined text-[#FFE8CC] text-[16px]">warning</Text>
                                <Text className="text-[#FFE8CC] text-xs font-semibold">Missing: Cashews, Heavy Cream</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </Pressable>
            </View>

            {/* Bottom Actions */}
            <View className="w-full max-w-md mx-auto px-8 pb-12 pt-6 flex-row items-center justify-between gap-6 z-20">
                <Pressable
                    className="flex-1 h-16 rounded-full bg-white border-2 border-[#EADEC9] shadow-sm flex-row items-center justify-center active:bg-gray-50 bg-opacity-90"
                    onPress={() => router.back()}
                >
                    <Text className="material-symbols-outlined text-4xl text-[#825E34]/60">close</Text>
                </Pressable>

                <Pressable
                    className="h-12 w-12 rounded-full bg-white/80 border border-[#EADEC9] shadow-sm items-center justify-center active:scale-95"
                    onPress={() => router.push('/recipe_details')}
                >
                    <Text className="material-symbols-outlined text-2xl text-[#8D5A2B]">info</Text>
                </Pressable>

                <Pressable
                    className="flex-[1.5] h-16 rounded-full bg-[#8D5A2B] shadow-lg flex-row items-center justify-center gap-2 active:scale-95"
                    onPress={() => router.push('/recipe_details')}
                >
                    <Text className="material-symbols-outlined text-3xl text-white">favorite</Text>
                    <Text className="text-white font-bold text-lg">Cook This</Text>
                </Pressable>
            </View>

        </View>
    );
}
