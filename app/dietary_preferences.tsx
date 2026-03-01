import React, { useState } from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

// Helper component for preference rows
const PreferenceRow = ({ icon, title, isChecked, onToggle }: any) => (
    <Pressable
        className={`flex-row items-center justify-between p-4 bg-white dark:bg-white/5 rounded-2xl shadow-sm border ${isChecked ? 'border-[#d57f30]/50' : 'border-[#825e34]/10'} active:opacity-80`}
        onPress={onToggle}
    >
        <View className="flex-row items-center gap-3">
            <Text className="text-2xl">{icon}</Text>
            <Text className="font-bold text-[#825e34] dark:text-gray-100">{title}</Text>
        </View>
        <View className={`w-6 h-6 rounded border items-center justify-center ${isChecked ? 'bg-[#d57f30] border-[#d57f30]' : 'border-[#825e34]/30'}`}>
            {isChecked && <Text className="material-symbols-outlined text-white text-[16px]">check</Text>}
        </View>
    </Pressable>
);

export default function DietaryPreferences() {
    const router = useRouter();

    const [preferences, setPreferences] = useState({
        vegan: false,
        glutenFree: true,
        spicy: false,
        nutFree: false,
        dairyFree: true,
        keto: false,
    });

    const togglePref = (key: keyof typeof preferences) => {
        setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const handleSave = () => {
        // Save mock logic
        router.back();
    };

    return (
        <View className="flex-1 bg-[#fdfbd4] dark:bg-[#201912]">
            {/* Header */}
            <View className="pt-12 px-5 pb-4 flex-row justify-between items-center bg-[#fdfbd4]/90 dark:bg-[#201912]/90 border-b border-[#825e34]/10 z-10">
                <View className="flex-row items-center gap-3">
                    <Pressable
                        className="w-10 h-10 items-center justify-center rounded-full bg-white dark:bg-white/10 shadow-sm active:bg-gray-50 dark:active:bg-white/20"
                        onPress={() => router.back()}
                    >
                        <Text className="material-symbols-outlined text-[#825e34] dark:text-gray-100">arrow_back</Text>
                    </Pressable>
                    <Text className="text-xl font-bold text-[#825e34] dark:text-gray-100">Dietary Preferences</Text>
                </View>
                <Pressable
                    className="bg-white dark:bg-white/10 px-4 py-2 rounded-full shadow-sm active:bg-gray-50 dark:active:bg-white/20"
                    onPress={handleSave}
                >
                    <Text className="text-[#d57f30] font-bold">Save</Text>
                </Pressable>
            </View>

            <ScrollView
                className="flex-1 px-5 pt-5"
                contentContainerStyle={{ paddingBottom: 40, gap: 16 }}
                showsVerticalScrollIndicator={false}
            >
                <Text className="text-[#825e34]/70 dark:text-gray-400 text-sm mb-2">
                    Select the preferences that apply to your household to filter recommendations.
                </Text>

                <View className="flex-col gap-4">
                    <PreferenceRow
                        icon="🌱"
                        title="Vegan"
                        isChecked={preferences.vegan}
                        onToggle={() => togglePref('vegan')}
                    />
                    <PreferenceRow
                        icon="🌾"
                        title="Gluten-Free"
                        isChecked={preferences.glutenFree}
                        onToggle={() => togglePref('glutenFree')}
                    />
                    <PreferenceRow
                        icon="🌶️"
                        title="Spicy"
                        isChecked={preferences.spicy}
                        onToggle={() => togglePref('spicy')}
                    />
                    <PreferenceRow
                        icon="🥜"
                        title="Nut-Free"
                        isChecked={preferences.nutFree}
                        onToggle={() => togglePref('nutFree')}
                    />
                    <PreferenceRow
                        icon="🥛"
                        title="Dairy-Free"
                        isChecked={preferences.dairyFree}
                        onToggle={() => togglePref('dairyFree')}
                    />
                    <PreferenceRow
                        icon="🥩"
                        title="Keto"
                        isChecked={preferences.keto}
                        onToggle={() => togglePref('keto')}
                    />
                </View>

            </ScrollView>
        </View>
    );
}
