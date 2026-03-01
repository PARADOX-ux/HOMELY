import React, { useState } from 'react';
import { View, Text, Switch, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function Settings() {
    const router = useRouter();

    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [darkModeEnabled, setDarkModeEnabled] = useState(false);

    return (
        <View className="flex-1 bg-[#fdfbd4] dark:bg-[#201912]">
            {/* Header */}
            <View className="pt-12 px-5 pb-4 flex-row items-center gap-3 bg-[#fdfbd4]/90 dark:bg-[#201912]/90 border-b border-[#825e34]/10 z-10">
                <Pressable
                    className="w-10 h-10 items-center justify-center rounded-full bg-white dark:bg-white/10 shadow-sm active:opacity-80"
                    onPress={() => router.back()}
                >
                    <Text className="material-symbols-outlined text-[#825e34] dark:text-gray-100">arrow_back</Text>
                </Pressable>
                <Text className="text-xl font-bold text-[#825e34] dark:text-gray-100">App Settings</Text>
            </View>

            <ScrollView
                className="flex-1 px-5 pt-6"
                contentContainerStyle={{ gap: 24, paddingBottom: 40 }}
            >
                {/* General Settings */}
                <View className="bg-white dark:bg-white/5 rounded-2xl shadow-sm border border-[#825e34]/10 overflow-hidden">

                    <Pressable className="p-4 border-b border-[#825e34]/10 flex-row justify-between items-center opacity-70 active:bg-gray-50 dark:active:bg-white/5">
                        <Text className="font-bold text-[#825e34] dark:text-gray-100">Notifications</Text>
                        <Switch
                            value={notificationsEnabled}
                            onValueChange={setNotificationsEnabled}
                            trackColor={{ false: "#d1d5db", true: "#d57f30" }}
                            thumbColor={notificationsEnabled ? "#ffffff" : "#f4f3f4"}
                        />
                    </Pressable>

                    <Pressable className="p-4 border-b border-[#825e34]/10 flex-row justify-between items-center opacity-70 active:bg-gray-50 dark:active:bg-white/5">
                        <Text className="font-bold text-[#825e34] dark:text-gray-100">Dark Mode</Text>
                        <Switch
                            value={darkModeEnabled}
                            onValueChange={setDarkModeEnabled}
                            trackColor={{ false: "#d1d5db", true: "#d57f30" }}
                            thumbColor={darkModeEnabled ? "#ffffff" : "#f4f3f4"}
                        />
                    </Pressable>

                    <Pressable className="p-4 flex-row justify-between items-center opacity-70 active:bg-gray-50 dark:active:bg-white/5">
                        <Text className="font-bold text-[#825e34] dark:text-gray-100">Unit System (Metric/Imperial)</Text>
                        <Text className="material-symbols-outlined text-[#825e34] dark:text-gray-100">chevron_right</Text>
                    </Pressable>

                </View>

                {/* Danger Zone */}
                <View className="bg-white dark:bg-white/5 rounded-2xl shadow-sm border border-[#825e34]/10 overflow-hidden mb-6">

                    <Pressable className="p-4 border-b border-[#825e34]/10 flex-row justify-between items-center opacity-70 active:bg-red-50 dark:active:bg-red-900/20">
                        <Text className="font-bold text-red-600">Clear Cache</Text>
                        <Text className="material-symbols-outlined text-red-600">delete</Text>
                    </Pressable>

                    <Pressable className="p-4 flex-row justify-between items-center opacity-70 active:bg-red-50 dark:active:bg-red-900/20">
                        <Text className="font-bold text-red-600">Delete Account</Text>
                        <Text className="material-symbols-outlined text-red-600">warning</Text>
                    </Pressable>

                </View>

            </ScrollView>
        </View>
    );
}
