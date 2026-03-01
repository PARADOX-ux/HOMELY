import React from 'react';
import { View, Text, ScrollView, Pressable, Image, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';
import { useStore } from '../store/useStore';

export default function MealPlan() {
    const router = useRouter();
    const { userProfile } = useStore();

    return (
        <View className="flex-1 bg-[#FDFBD4] dark:bg-[#201912]">
            <ScrollView
                className="flex-1"
                contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 60, paddingBottom: 120 }}
                showsVerticalScrollIndicator={false}
            >
                {/* Header */}
                <View className="flex-row items-center justify-between mb-8">
                    <View className="flex-col">
                        <Text className="text-[#927254] dark:text-gray-400 text-sm font-medium tracking-wide uppercase">Today, Oct 24</Text>
                        <Text className="text-[#4a3b32] dark:text-white text-3xl font-extrabold leading-tight mt-1">Good Morning, Chef 👩‍🍳</Text>
                    </View>
                    <Pressable
                        className="bg-[#FFFDF5] dark:bg-[#2d241b] rounded-full p-2 shadow-sm border border-[#d57f30]/10 active:opacity-80"
                        onPress={() => router.push('/profile')}
                    >
                        <Text className="material-symbols-outlined text-[#d57f30] text-[28px]">account_circle</Text>
                    </Pressable>
                </View>

                <View className="flex-col space-y-6 gap-6">
                    {/* Breakfast Card (Planned & Completed) */}
                    <View>
                        <View className="flex-row items-center justify-between mb-3 px-1">
                            <Text className="text-[#4a3b32] dark:text-gray-200 font-bold text-lg">Breakfast</Text>
                            <View className="bg-green-100 px-3 py-1 rounded-full">
                                <Text className="text-xs font-bold text-green-700">Completed</Text>
                            </View>
                        </View>

                        <Pressable
                            className="bg-[#FFFDF5] dark:bg-[#2d241b] rounded-2xl p-3 shadow-sm border border-transparent dark:border-white/5 active:scale-[0.98]"
                            onPress={() => router.push('/recipe_details')}
                        >
                            <View className="flex-row gap-4 items-center">
                                <View className="w-24 h-24 shrink-0 rounded-xl overflow-hidden relative">
                                    <Image
                                        source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcWDl3KYoLaWsGY0b7DCUfNadB4G6onnBkeYfFqVFFlU7k-0zlujWXQ8tyDgnQO2sc8SKE-B3at4TnVXc3C3EpA6o_IFw9YfIdTd98Wb44fUo59l3pPl7M8Z6lDlcvW375KBOgsJZacyTeOpCN5dQHxyKmO4fNfk5GCLyGY6i4xYgVMDoerK-XgbEBu0GMHHH4WsNoh0QlAq-3LuiYA2ZnegJh2h9YbhLt7v2A_UJTOFvcVzIk2zM5AoCkelX8G_iMKsRQWJSHSh8" }}
                                        className="w-full h-full object-cover"
                                    />
                                    <View className="absolute inset-0 bg-black/10" />
                                </View>
                                <View className="flex-1 py-1">
                                    <Text className="text-lg font-bold text-[#4a3b32] dark:text-white leading-tight mb-1">Masala Chai & Toast</Text>
                                    <View className="flex-row items-center text-[#927254] dark:text-gray-400 text-xs mb-3 font-medium">
                                        <Text className="material-symbols-outlined text-[16px] mr-1">schedule</Text>
                                        <Text>15 mins</Text>
                                        <Text className="mx-2">•</Text>
                                        <Text className="material-symbols-outlined text-[#d57f30] text-[16px] mr-1">local_fire_department</Text>
                                        <Text>240 Kcal</Text>
                                    </View>
                                    <View className="flex-row items-center gap-1">
                                        <Text className="text-xs font-bold text-[#d57f30]">View Recipe</Text>
                                        <Text className="material-symbols-outlined text-[#d57f30] text-[16px]">arrow_forward</Text>
                                    </View>
                                </View>
                            </View>
                        </Pressable>
                    </View>

                    {/* Lunch Card (Unplanned) - NOTE: In the HTML this card contains an AI Suggestion missing layout issue */}
                    <View>
                        <View className="flex-row items-center justify-between mb-3 px-1">
                            <Text className="text-[#4a3b32] dark:text-gray-200 font-bold text-lg">Lunch</Text>
                        </View>
                        <View className="bg-[#FFFDF5] dark:bg-[#2d241b] rounded-2xl border-2 border-dashed border-[#d57f30]/20 p-6 items-center justify-center text-center relative overflow-hidden">
                            <View className="bg-white dark:bg-gray-800 rounded-full p-3 shadow-sm z-10 mb-4">
                                <Text className="material-symbols-outlined text-[#d57f30]/60 text-[32px]">soup_kitchen</Text>
                            </View>
                            <Text className="text-[#4a3b32] dark:text-white font-bold text-lg text-center z-10 mb-1">Lunch is not planned yet</Text>
                            <Text className="text-[#927254] dark:text-gray-400 text-sm text-center z-10 mb-6">What are you craving today?</Text>

                            <Pressable
                                className="bg-[#d57f30] py-3 px-6 rounded-full shadow-lg flex-row items-center gap-2 active:opacity-80 z-10"
                                onPress={() => router.push('/ai_assistant')}
                            >
                                <Text className="material-symbols-outlined text-white text-[20px]">auto_awesome</Text>
                                <Text className="text-white text-sm font-bold">Suggest Meal</Text>
                            </Pressable>
                        </View>
                    </View>

                    {/* Dinner Card (Upcoming) */}
                    <View>
                        <View className="flex-row items-center justify-between mb-3 px-1">
                            <Text className="text-[#4a3b32] dark:text-gray-200 font-bold text-lg">Dinner</Text>
                            <View className="bg-orange-100 px-3 py-1 rounded-full">
                                <Text className="text-xs font-bold text-orange-700">Upcoming</Text>
                            </View>
                        </View>

                        <Pressable
                            className="bg-[#FFFDF5] dark:bg-[#2d241b] rounded-2xl overflow-hidden active:opacity-90 shadow-sm"
                            onPress={() => router.push('/recipe_details')}
                        >
                            <View className="h-56 w-full relative">
                                <ImageBackground
                                    source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBD7JK-77wqedZe5luyYoOER0yoSa5vkScoAV2n5UfGRVZ7Xg-JiBjJ46iaNNY9yaOsF_Kv9xNVPjiv2C9_dGjLLOg0uXjB5D_kAR6FiGbuqPCXZ6tt3vCxz8xLTOS2NRbuoIl79v81Y9WDgAuBHU6aeC9f1v6UjJJoMHcYdzSFy3Ox7z_wgR_aaDeBoN_BwP417weBGMLTAVn7y0tk40Cdaxj3esPexEGVWVTUGlxMBn7mBCihZkclcKMe4i_tZ6fhjJRDz_GtVXA" }}
                                    className="w-full h-full"
                                    resizeMode="cover"
                                >
                                    <View className="absolute inset-0 bg-black/40" />

                                    {/* Floating Like Button */}
                                    <Pressable className="absolute top-4 right-4 bg-white/30 rounded-full p-2 active:bg-white/50 z-10">
                                        <Text className="material-symbols-outlined text-white text-[20px]">favorite</Text>
                                    </Pressable>

                                    {/* Content Overlay */}
                                    <View className="absolute bottom-0 w-full p-5 flex-col z-10">
                                        <View className="flex-row gap-2 mb-3">
                                            <View className="bg-white/30 px-3 py-1 rounded-full border border-white/20">
                                                <Text className="text-[10px] font-bold text-white uppercase tracking-wider">Vegetarian</Text>
                                            </View>
                                            <View className="bg-white/30 px-3 py-1 rounded-full border border-white/20">
                                                <Text className="text-[10px] font-bold text-white uppercase tracking-wider">Spicy</Text>
                                            </View>
                                        </View>
                                        <Text className="text-2xl font-bold text-white leading-tight mb-2">Paneer Butter Masala</Text>

                                        <View className="flex-row items-center justify-between mt-1">
                                            <View className="flex-row items-center">
                                                <Text className="material-symbols-outlined text-gray-200 text-[18px] mr-1.5">schedule</Text>
                                                <Text className="text-gray-200 text-xs font-bold">45 mins</Text>
                                            </View>
                                            <View className="bg-white py-2 px-4 rounded-full flex-row items-center gap-1.5">
                                                <Text className="text-[#d57f30] text-xs font-bold">View</Text>
                                                <Text className="material-symbols-outlined text-[#d57f30] text-[16px]">arrow_forward</Text>
                                            </View>
                                        </View>
                                    </View>
                                </ImageBackground>
                            </View>
                        </Pressable>
                    </View>

                </View>
            </ScrollView>

            {/* Floating Action Button (Active Cooking) */}
            <Pressable
                className="absolute bottom-[30px] right-4 bg-[#8D5A2B] rounded-full pl-5 pr-6 py-4 shadow-xl flex-row items-center gap-3 active:scale-95 z-40"
                onPress={() => router.push('/guided_cook_mode')}
            >
                <View className="bg-white/20 rounded-full w-10 h-10 items-center justify-center">
                    <Text className="material-symbols-outlined text-white text-[24px]">soup_kitchen</Text>
                </View>
                <View className="flex-col">
                    <Text className="text-[10px] text-white/80 uppercase tracking-widest font-bold leading-none mb-1">Cooking Now</Text>
                    <Text className="text-sm text-white font-extrabold leading-none">Continue Cooking</Text>
                </View>
            </Pressable>

        </View>
    );
}
