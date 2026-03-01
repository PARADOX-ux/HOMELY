import React from 'react';
import { View, Text, ScrollView, Pressable, Image } from 'react-native';
import { useRouter } from 'expo-router';

// Reusable component for a planned meal row
const PlannedMealRow = ({ mealType, recipeName, imageUrl, iconType }: any) => {
    const router = useRouter();

    if (imageUrl) {
        return (
            <Pressable
                className="flex-row items-center gap-4 p-2 rounded-xl active:bg-gray-100 dark:active:bg-[#2c241b]"
                onPress={() => router.push('/recipe_details')}
            >
                <View className="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-white dark:border-slate-700 shadow-sm">
                    <Image source={{ uri: imageUrl }} className="w-full h-full object-cover" />
                </View>
                <View className="flex-1">
                    <Text className="text-xs font-semibold text-[#d57f30] uppercase tracking-wide mb-0.5">{mealType}</Text>
                    <Text className="text-sm font-bold text-slate-800 dark:text-slate-200" numberOfLines={1}>{recipeName}</Text>
                </View>
                <Pressable className="w-8 h-8 items-center justify-center rounded-full active:bg-[#fdf3e8] dark:active:bg-[#d57f30]/20">
                    <Text className="material-symbols-outlined text-slate-400 text-[20px]">edit</Text>
                </Pressable>
            </Pressable>
        );
    }

    return (
        <Pressable
            className="w-full flex-row items-center gap-4 p-2 rounded-xl active:bg-gray-100 dark:active:bg-[#2c241b]"
        >
            <View className="w-12 h-12 rounded-full bg-[#fbfaf9] dark:bg-slate-800 items-center justify-center">
                <Text className="material-symbols-outlined text-slate-400 text-[20px]">{iconType || 'restaurant'}</Text>
            </View>
            <View className="flex-1">
                <Text className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-0.5">{mealType}</Text>
                <Text className="text-sm font-medium text-[#d57f30]">Plan {mealType.toLowerCase()}</Text>
            </View>
        </Pressable>
    );
};

export default function WeeklyMealPlanner() {
    const router = useRouter();

    return (
        <View className="flex-1 bg-[#fbfaf9] dark:bg-[#201912]">
            {/* Sticky Header */}
            <View className="bg-[#fbfaf9]/95 dark:bg-[#201912]/95 border-b border-[#d57f30]/10 px-4 pt-12 pb-4 z-30 shadow-sm">
                <View className="flex-row items-center gap-3 mb-4">
                    <Pressable
                        className="w-10 h-10 items-center justify-center rounded-full bg-white dark:bg-[#2d241b] shadow-sm border border-[#d57f30]/10"
                        onPress={() => router.back()}
                    >
                        <Text className="material-symbols-outlined text-slate-600 dark:text-slate-300 text-[24px]">arrow_back</Text>
                    </Pressable>
                    <Text className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50 flex-1">Meal Planner</Text>
                    <Pressable
                        className="w-10 h-10 items-center justify-center rounded-full bg-white dark:bg-[#2d241b] shadow-sm border border-[#d57f30]/10"
                        onPress={() => router.push('/settings')}
                    >
                        <Text className="material-symbols-outlined text-slate-600 dark:text-slate-300">settings</Text>
                    </Pressable>
                </View>

                {/* Date Navigation */}
                <View className="flex-row items-center justify-between bg-white dark:bg-[#2d241b] rounded-full p-1.5 shadow-sm border border-[#d57f30]/5 mx-auto w-full max-w-sm">
                    <Pressable className="w-10 h-10 items-center justify-center rounded-full active:bg-[#fdf3e8] dark:active:bg-[#d57f30]/20">
                        <Text className="material-symbols-outlined text-slate-600 dark:text-slate-300">chevron_left</Text>
                    </Pressable>
                    <View className="items-center">
                        <Text className="text-sm font-bold text-slate-900 dark:text-slate-100">Oct 23 - 29</Text>
                        <Text className="text-[10px] font-medium text-[#d57f30] uppercase tracking-wider">Week 43</Text>
                    </View>
                    <Pressable className="w-10 h-10 items-center justify-center rounded-full active:bg-[#fdf3e8] dark:active:bg-[#d57f30]/20">
                        <Text className="material-symbols-outlined text-slate-600 dark:text-slate-300">chevron_right</Text>
                    </Pressable>
                </View>
            </View>

            <ScrollView
                className="flex-1 px-4"
                contentContainerStyle={{ paddingTop: 24, paddingBottom: 120, gap: 24 }}
                showsVerticalScrollIndicator={false}
            >
                {/* Today's Card */}
                <View className="relative">
                    <View className="bg-white dark:bg-[#2d241b] rounded-2xl p-5 shadow-sm border-2 border-[#d57f30]/20">
                        <View className="flex-row items-start justify-between mb-6">
                            <View className="flex-row items-center gap-3">
                                <View className="items-center justify-center w-12 h-14 bg-[#d57f30] rounded-xl shadow-lg">
                                    <Text className="text-[10px] text-white font-medium uppercase opacity-90">Mon</Text>
                                    <Text className="text-xl text-white font-bold leading-none">23</Text>
                                </View>
                                <View>
                                    <Text className="text-lg font-bold text-slate-900 dark:text-slate-100">Today</Text>
                                    <Text className="text-sm text-slate-500 dark:text-slate-400 font-medium">3 meals planned</Text>
                                </View>
                            </View>
                            <Pressable className="rounded-full p-2 active:bg-[#fdf3e8]">
                                <Text className="material-symbols-outlined text-[#d57f30]">more_horiz</Text>
                            </Pressable>
                        </View>

                        {/* Meal Stack */}
                        <View className="flex-col space-y-3 gap-3">
                            <PlannedMealRow
                                mealType="Breakfast"
                                recipeName="Masala Dosa"
                                imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuA04GDoK37k_Nx7ShmmYWfKliUx33tMvxfJ0_0xMj7bOAPRJuz7mlGSLx4GuxAUYwbCS_4dFZW0weRH3bsFVDzcDgs65RMqtPIJZsjyxLd8e-xwZSg7gunoxKNo_28bPCvwxLQ_rXT2phKfDMQ-A5l0xoKRR4lZeOA6hRfL4O2PjB637m2vWkniFnKINZULZ29PfVnDWfCuU34etplLHvb77uZQ1Nd2C0sPodlBitRCoTd2CZkUcQ-A9IRge3D81KMS4sMzQNuJsD0"
                            />
                            <PlannedMealRow
                                mealType="Lunch"
                                recipeName="Chicken Curry & Rice"
                                imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDhJvdhraNWTAB-Pu7GHvi9jF8QUUBj_QvvUCBUg1PM9Ub4rSM4t9KnBWVOIpKDbK0BFIM-Qgnoholplv6rLUfqkqV6lQLI_ur3K_QZxDABcvR0pTVfcQ12rEnxxVNqcW6n5mfaBo-5iBchxMMXNBeUi6xZyB-6YNquzaJm3zs_PL_H1i6VZYtVGMYFTuChlryb20K7hEPgbTYeZyAQ4GR6MrBdAG2zYe8XW5l0GIA44yp2Bv1pJQwTas5O5yz67VbjMDXfjN2NPMk"
                            />
                            <Pressable
                                className="w-full flex-row items-center gap-4 p-2 rounded-xl border border-dashed border-slate-300 dark:border-slate-600 active:bg-gray-100"
                                onPress={() => router.push('/meal_plan')}
                            >
                                <View className="w-12 h-12 rounded-full bg-[#fdf3e8] dark:bg-slate-800 items-center justify-center">
                                    <Text className="material-symbols-outlined text-[#d57f30] text-[20px]">add</Text>
                                </View>
                                <View className="flex-1">
                                    <Text className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-0.5">Dinner</Text>
                                    <Text className="text-sm font-medium text-slate-400 dark:text-slate-500">Add a meal</Text>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                </View>

                {/* Tomorrow's Card */}
                <View className="bg-white dark:bg-[#2d241b] rounded-2xl p-5 shadow-sm">
                    <View className="flex-row items-start justify-between mb-4">
                        <View className="flex-row items-center gap-3">
                            <View className="items-center justify-center w-12 h-14 bg-slate-100 dark:bg-slate-800 rounded-xl">
                                <Text className="text-[10px] text-slate-600 dark:text-slate-300 font-medium uppercase opacity-70">Tue</Text>
                                <Text className="text-xl text-slate-600 dark:text-slate-300 font-bold leading-none">24</Text>
                            </View>
                            <View>
                                <Text className="text-lg font-bold text-slate-900 dark:text-slate-100">Tomorrow</Text>
                                <Text className="text-sm text-slate-500 dark:text-slate-400 font-medium">1 meal planned</Text>
                            </View>
                        </View>
                    </View>

                    <View className="flex-col space-y-3 gap-3">
                        <PlannedMealRow mealType="Breakfast" iconType="local_cafe" />
                        <PlannedMealRow mealType="Lunch" iconType="restaurant" />
                        <View className="flex-row items-center gap-4 p-2 rounded-xl bg-[#fdf3e8]/50 dark:bg-[#d57f30]/5 border border-[#d57f30]/10">
                            <View className="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-white dark:border-slate-700 shadow-sm">
                                <Image source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGzH3HpG6CkdXsp8ObjMUnTcijO0IXgUEpU5Qn9bWjRdFRXvtZPIQ88I80fP46ZCneRcuT5LchNjlHbdXAHEadfNZlBe55RgEwGEDUb4Vd122hTN5yOFGQw_o9Jix-30TIJ5y3BnNNL_HainJPdhs4K0wUwvWkT5hIbr8A90AlCSc3obJeydydalZCDJdeKYYxgvHL6x7q6YCVNPwOAV8jHzb3qd0NwTo1uLi6kGY_COIGJwbmo-arJguaT2S5XFmsUrQ47RUiT0E" }} className="w-full h-full object-cover" />
                            </View>
                            <View className="flex-1">
                                <Text className="text-xs font-semibold text-[#d57f30] uppercase tracking-wide mb-0.5">Dinner</Text>
                                <Text className="text-sm font-bold text-slate-800 dark:text-slate-200" numberOfLines={1}>Paneer Tikka</Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Wednesday Empty State */}
                <View className="bg-white dark:bg-[#2d241b] rounded-2xl p-5 shadow-sm opacity-90">
                    <View className="flex-row items-center gap-3 mb-4">
                        <View className="flex-col items-center justify-center w-12 h-14 bg-slate-100 dark:bg-slate-800 rounded-xl">
                            <Text className="text-[10px] text-slate-400 font-medium uppercase opacity-70">Wed</Text>
                            <Text className="text-xl text-slate-400 font-bold leading-none">25</Text>
                        </View>
                        <Text className="text-lg font-bold text-slate-900 dark:text-slate-100">Wednesday</Text>
                    </View>

                    <View className="items-center py-6">
                        <View className="w-16 h-16 bg-[#fdf3e8] dark:bg-[#d57f30]/10 rounded-full items-center justify-center mb-3">
                            <Text className="material-symbols-outlined text-[#d57f30] text-[32px]">soup_kitchen</Text>
                        </View>
                        <Text className="text-base font-bold text-slate-800 dark:text-slate-200 mb-1 z-20 text-center">What's cooking on Wednesday?</Text>
                        <Text className="text-sm text-slate-500 dark:text-slate-400 mb-4 px-4 text-center">Your kitchen is waiting for some delicious ideas.</Text>

                        <Pressable
                            className="w-full bg-[#d57f30] py-3.5 px-6 rounded-full shadow-md flex-row items-center justify-center gap-2 active:opacity-80"
                            onPress={() => router.push('/meal_plan')}
                        >
                            <Text className="material-symbols-outlined text-white text-[20px]">add</Text>
                            <Text className="text-white font-bold text-sm">Plan Wednesday's Meals</Text>
                        </Pressable>
                    </View>
                </View>

                {/* Thursday Placeholder */}
                <View className="bg-white dark:bg-[#2d241b] rounded-2xl p-4 shadow-sm opacity-60 flex-row items-center justify-between">
                    <View className="flex-row items-center gap-3">
                        <View className="items-center justify-center w-10 h-12 bg-slate-100 dark:bg-slate-800 rounded-lg">
                            <Text className="text-[10px] text-slate-400 font-medium uppercase opacity-70">Thu</Text>
                            <Text className="text-lg text-slate-400 font-bold leading-none">26</Text>
                        </View>
                        <Text className="font-bold text-slate-500 dark:text-slate-400">Thursday</Text>
                    </View>
                    <Pressable className="w-8 h-8 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
                        <Text className="material-symbols-outlined text-slate-400">add</Text>
                    </Pressable>
                </View>
            </ScrollView>

            {/* Floating Action Button */}
            <Pressable className="absolute bottom-[30px] right-6 z-40 w-14 h-14 bg-[#d57f30] rounded-full shadow-lg items-center justify-center active:scale-95">
                <Text className="material-symbols-outlined text-white text-[32px]">add</Text>
            </Pressable>

        </View>
    );
}
