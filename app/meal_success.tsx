import React from 'react';
import { View, Text, Pressable, ImageBackground, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function MealSuccess() {
    const router = useRouter();

    return (
        <View className="flex-1 bg-[#fdfbd4] dark:bg-[#1e1914] relative items-center justify-center overflow-hidden">

            {/* Decorative Background Elements */}
            <View className="absolute top-[-10%] right-[-10%] w-64 h-64 rounded-full bg-[#d47e30]/10" />
            <View className="absolute bottom-[-10%] left-[-10%] w-80 h-80 rounded-full bg-[#8c5a2b]/10" />

            {/* Main Container */}
            <ScrollView
                className="w-full h-full flex-1 z-10 px-6 pt-12"
                contentContainerStyle={{ paddingBottom: 40 }}
                showsVerticalScrollIndicator={false}
            >
                {/* Header */}
                <View className="items-center justify-center mb-6 mt-4">
                    <View className="p-2 bg-white/40 rounded-full mb-4 shadow-sm items-center justify-center w-12 h-12">
                        <Text className="material-symbols-outlined text-[#d47e30] text-[32px]">celebration</Text>
                    </View>
                    <Text className="text-[#8c5a2b] dark:text-[#fdfbd4] text-[32px] font-extrabold leading-tight tracking-tight text-center shadow-sm">
                        Chef-Kiss Level!
                    </Text>
                    <Text className="text-[#8c5a2b]/70 dark:text-[#fdfbd4]/70 text-base font-medium mt-1 text-center">
                        You absolutely nailed it.
                    </Text>
                </View>

                {/* Hero Image Container */}
                <View className="relative w-full aspect-[4/3] items-center justify-center mb-6">
                    {/* Decorative Elements */}
                    <View className="absolute -top-3 -right-3 z-20 bg-[#d47e30] p-2 rounded-full shadow-lg transform rotate-12 items-center justify-center w-10 h-10">
                        <Text className="material-symbols-outlined text-white text-[20px] font-bold">star</Text>
                    </View>
                    <View className="absolute top-10 -left-4 z-20 bg-[#d47e30] p-1.5 rounded-full shadow-lg transform -rotate-12 items-center justify-center w-8 h-8">
                        <Text className="material-symbols-outlined text-white text-[18px] font-bold">star</Text>
                    </View>
                    <View className="absolute -bottom-2 right-4 z-20 bg-white p-2 rounded-full shadow-sm transform rotate-6 items-center justify-center w-10 h-10">
                        <Text className="material-symbols-outlined text-[#d47e30] text-[20px] font-bold">thumb_up</Text>
                    </View>

                    {/* Actual Image */}
                    <View className="w-full h-full rounded-[2rem] shadow-xl border-4 border-white/50 overflow-hidden relative">
                        <ImageBackground
                            source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuAclTpGdHz6mNJkWAg2c11e6-gbpGoM5PU5kmJpfrKG78rTBiY2btqHja3AGnK1BKhppctYzT8ubsZMZuw-5ipey1AvFe9HxT0T9xf7iQJjmVST_x5TnO802qrENL7L3EpGwaOdlyHNR-f8bfIvjrXaoXpNuDZ3iNygtl-69P-tV2a_MU6GYbIFs9cq9zkzlFUSa3I7aDBf7s_dkFAzDd7TVAcvDyjVX9GATydrgdLf1cCuEZVh-azz1EXF3vE-01NdNRU-Fs6Yy-Q" }}
                            className="w-full h-full"
                        >
                            <View className="absolute inset-0 bg-black/20" />
                        </ImageBackground>
                    </View>
                </View>

                {/* Stats Grid */}
                <View className="flex-row justify-between w-full mt-2 gap-3">
                    {/* Stat 1 */}
                    <View className="flex-1 flex-col items-center justify-center gap-1 bg-[#825e34] rounded-2xl p-3 shadow-lg">
                        <View className="bg-white/10 p-2 rounded-full mb-1">
                            <Text className="material-symbols-outlined text-[#fdfbd4] text-[20px]">timer</Text>
                        </View>
                        <Text className="text-[#fdfbd4]/80 text-[10px] font-semibold uppercase tracking-wider">Time</Text>
                        <Text className="text-[#fdfbd4] text-lg font-bold">40m</Text>
                    </View>

                    {/* Stat 2 */}
                    <View className="flex-1 flex-col items-center justify-center gap-1 bg-[#825e34] rounded-2xl p-3 shadow-lg">
                        <View className="bg-white/10 p-2 rounded-full mb-1">
                            <Text className="material-symbols-outlined text-[#fdfbd4] text-[20px]">inventory_2</Text>
                        </View>
                        <Text className="text-[#fdfbd4]/80 text-[10px] font-semibold uppercase tracking-wider">Saved</Text>
                        <Text className="text-[#fdfbd4] text-lg font-bold">6 Items</Text>
                    </View>

                    {/* Stat 3 */}
                    <View className="flex-1 flex-col items-center justify-center gap-1 bg-[#825e34] rounded-2xl p-3 shadow-lg relative overflow-hidden">
                        <View className="absolute top-0 right-0 w-8 h-8 bg-[#d47e30]/30 rounded-full" />
                        <View className="bg-white/10 p-2 rounded-full mb-1 relative z-10">
                            <Text className="material-symbols-outlined text-[#fdfbd4] text-[20px]">bolt</Text>
                        </View>
                        <Text className="text-[#fdfbd4]/80 text-[10px] font-semibold uppercase tracking-wider relative z-10">Level Up</Text>
                        <Text className="text-[#fdfbd4] text-lg font-bold relative z-10">+10 XP</Text>
                    </View>
                </View>

                <View className="items-center mt-4 mb-4">
                    <Text className="text-[#825e34] dark:text-[#fdfbd4] text-lg font-bold">Butter Chicken & Naan</Text>
                </View>

                {/* Footer Actions */}
                <View className="w-full flex-col gap-3 mt-4">
                    <Pressable
                        className="w-full h-14 bg-[#8c5a2b] rounded-full shadow-lg shadow-[#8c5a2b]/20 flex-row items-center justify-center gap-2 active:scale-[0.98] active:bg-[#825e34]"
                        onPress={() => router.push('/user_dashboard')}
                    >
                        <Text className="material-symbols-outlined text-[#fdfbd4] text-[24px]">check_circle</Text>
                        <Text className="text-[#fdfbd4] text-lg font-bold">Finish & Save</Text>
                    </Pressable>

                    <Pressable
                        className="w-full h-14 bg-[#d47e30] rounded-full shadow-lg shadow-[#d47e30]/20 flex-row items-center justify-center gap-2 active:scale-[0.98] active:bg-[#c26d24]"
                    >
                        <Text className="material-symbols-outlined text-[#fdfbd4] text-[24px]">share</Text>
                        <Text className="text-[#fdfbd4] text-lg font-bold">Share with Family</Text>
                    </Pressable>
                </View>

            </ScrollView>

        </View>
    );
}
