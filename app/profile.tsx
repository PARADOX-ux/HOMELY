import React from 'react';
import { View, Text, Pressable, Image, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { useStore } from '../store/useStore';

export default function Profile() {
    const router = useRouter();
    const { userProfile } = useStore();

    return (
        <View className="flex-1 bg-[#fdfbd4] dark:bg-[#201912]">
            {/* Header */}
            <View className="pt-12 px-5 pb-4 flex-row justify-between items-center bg-[#fdfbd4]/90 dark:bg-[#201912]/90 border-b border-[#E8E1D9] dark:border-[#2c241b] shadow-sm z-10">
                <Text className="text-2xl font-bold text-[#825e34] dark:text-white leading-tight">Your Profile</Text>
                <Pressable
                    className="w-10 h-10 items-center justify-center rounded-full bg-white dark:bg-white/10 shadow-sm active:opacity-80"
                    onPress={() => router.push('/settings')}
                >
                    <Text className="material-symbols-outlined text-[#825e34] dark:text-white text-[24px]">settings</Text>
                </Pressable>
            </View>

            <ScrollView
                className="flex-1 px-5 pt-6"
                contentContainerStyle={{ gap: 24, paddingBottom: 100 }}
                showsVerticalScrollIndicator={false}
            >
                {/* User Info */}
                <View className="items-center bg-white dark:bg-white/5 p-6 rounded-2xl shadow-sm border border-[#E8E1D9] dark:border-white/5">
                    <View className="h-28 w-28 rounded-full border-4 border-[#d57f30]/20 overflow-hidden mb-4 shadow-sm z-10 bg-gray-200">
                        <Image
                            source={{ uri: userProfile.avatarUrl }}
                            className="h-full w-full object-cover"
                        />
                    </View>
                    <Text className="text-2xl font-bold text-[#825e34] dark:text-white text-center">{userProfile.name}</Text>
                    <Text className="text-[#a68b6c] dark:text-gray-400 font-medium text-sm mt-1">user@example.com</Text>

                    <Pressable
                        className="mt-5 bg-[#d57f30]/10 dark:bg-[#d57f30]/20 py-2 px-6 rounded-full border border-[#d57f30]/20 active:bg-[#d57f30]/20"
                        onPress={() => router.push('/edit_profile')}
                    >
                        <Text className="text-[#d57f30] font-bold text-sm">Edit Profile</Text>
                    </Pressable>
                </View>

                {/* Sections */}
                <View className="flex-col gap-4">
                    <View className="bg-white dark:bg-white/5 rounded-2xl shadow-sm overflow-hidden border border-[#E8E1D9] dark:border-white/5">
                        <Pressable
                            className="w-full flex-row items-center justify-between p-4 border-b border-[#a68b6c]/10 active:bg-gray-50 dark:active:bg-white/5"
                            onPress={() => router.push('/dietary_preferences')}
                        >
                            <View className="flex-row items-center gap-3">
                                <Text className="material-symbols-outlined text-[#d57f30] text-[24px]">restaurant_menu</Text>
                                <Text className="font-bold text-[#825e34] dark:text-gray-200 text-sm">Dietary Preferences</Text>
                            </View>
                            <Text className="material-symbols-outlined text-[#a68b6c]">chevron_right</Text>
                        </Pressable>

                        <Pressable
                            className="w-full flex-row items-center justify-between p-4 active:bg-gray-50 dark:active:bg-white/5"
                            onPress={() => router.push('/favorites')}
                        >
                            <View className="flex-row items-center gap-3">
                                <Text className="material-symbols-outlined text-red-500 text-[24px]">menu_book</Text>
                                <Text className="font-bold text-[#825e34] dark:text-gray-200 text-sm">My Cookbook (Saved)</Text>
                            </View>
                            <Text className="material-symbols-outlined text-[#a68b6c]">chevron_right</Text>
                        </Pressable>
                    </View>

                    <View className="bg-white dark:bg-white/5 rounded-2xl shadow-sm overflow-hidden mt-2 border border-[#E8E1D9] dark:border-white/5">
                        <Pressable
                            className="w-full flex-row items-center justify-between p-4 active:bg-red-50 dark:active:bg-red-900/10"
                            onPress={() => router.replace('/welcome')}
                        >
                            <View className="flex-row items-center gap-3">
                                <Text className="material-symbols-outlined text-red-600 text-[24px]">logout</Text>
                                <Text className="font-bold text-red-600 text-sm">Sign Out</Text>
                            </View>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
