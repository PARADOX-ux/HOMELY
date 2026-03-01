import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, ImageBackground, ScrollView, Platform, KeyboardAvoidingView } from 'react-native';
import { useRouter } from 'expo-router';

export default function EditProfile() {
    const router = useRouter();

    const [name, setName] = useState('Alex Chef');
    const [email, setEmail] = useState('alex@example.com');
    const [location, setLocation] = useState('New York, NY');

    const handleSave = () => {
        // Save logic mock
        router.back();
    };

    return (
        <KeyboardAvoidingView
            className="flex-1 bg-[#fdfbd4] dark:bg-[#201912]"
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            {/* Header */}
            <View className="pt-12 px-5 pb-4 flex-row justify-between items-center bg-[#fdfbd4]/90 dark:bg-[#201912]/90 border-b border-[#825e34]/10 z-10">
                <View className="flex-row items-center gap-3">
                    <Pressable
                        className="w-10 h-10 items-center justify-center rounded-full bg-white dark:bg-white/10 shadow-sm active:bg-gray-50"
                        onPress={() => router.back()}
                    >
                        <Text className="material-symbols-outlined text-[#825e34] dark:text-gray-100">arrow_back</Text>
                    </Pressable>
                    <Text className="text-xl font-bold text-[#825e34] dark:text-gray-100">Edit Profile</Text>
                </View>
                <Pressable
                    className="bg-white dark:bg-white/10 px-4 py-2 rounded-full shadow-sm active:bg-gray-50"
                    onPress={handleSave}
                >
                    <Text className="text-[#d57f30] font-bold">Save</Text>
                </Pressable>
            </View>

            <ScrollView
                className="flex-1 px-5 pt-8"
                contentContainerStyle={{ alignItems: 'center', paddingBottom: 40 }}
                showsVerticalScrollIndicator={false}
            >
                {/* Avatar */}
                <Pressable className="relative w-32 h-32 rounded-full border-4 border-white shadow-md overflow-hidden bg-white/20 active:opacity-80">
                    <ImageBackground
                        source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuClq2-LSd3UlmztGhun3El74l3w4kfpH-qB2Rd4UXLvKaoY0r_h8eXoN8DcRKMl1VHCFSUH5B-qeLDZjeNj0VMjz2kCdr4gBRo_E1nUnD0ur67pL8Q5shlzLkwKkLx8WFDGQT30xmHlpdca5O2rny1RiyCphObJiZ9Ncug9Y6hTNWnIno2wUWXFHAFDoAr2ri5MqZSAhtbNcL0AKhEHUKxpbywUTbn3Ogw8Qjy5qBgKYAqVeh2JF2kKO3jf2lDiUTgB2hBJWlAXkXU" }}
                        className="w-full h-full opacity-80 justify-center items-center"
                    >
                        <View className="absolute inset-0 bg-black/40 justify-center items-center">
                            <Text className="material-symbols-outlined text-white text-[32px]">photo_camera</Text>
                        </View>
                    </ImageBackground>
                </Pressable>

                {/* Form Fields */}
                <View className="w-full max-w-sm space-y-4 mt-8">

                    <View className="flex-col gap-1 mb-4">
                        <Text className="text-sm font-bold opacity-80 text-[#825e34] dark:text-gray-100 mb-1">Full Name</Text>
                        <TextInput
                            className="w-full bg-white dark:bg-white/5 rounded-xl p-4 shadow-sm text-slate-800 dark:text-slate-100 font-medium border border-transparent focus:border-[#d57f30]"
                            placeholder="Your Name"
                            placeholderTextColor="#825e3460"
                            value={name}
                            onChangeText={setName}
                        />
                    </View>

                    <View className="flex-col gap-1 mb-4">
                        <Text className="text-sm font-bold opacity-80 text-[#825e34] dark:text-gray-100 mb-1">Email Address (Read Only)</Text>
                        <TextInput
                            className="w-full bg-white/50 dark:bg-white/5 rounded-xl p-4 shadow-sm opacity-60 text-slate-800 dark:text-slate-100 font-medium"
                            placeholder="Email"
                            placeholderTextColor="#825e3460"
                            value={email}
                            editable={false}
                        />
                    </View>

                    <View className="flex-col gap-1 mb-4">
                        <Text className="text-sm font-bold opacity-80 text-[#825e34] dark:text-gray-100 mb-1">Location</Text>
                        <TextInput
                            className="w-full bg-white dark:bg-white/5 rounded-xl p-4 shadow-sm text-slate-800 dark:text-slate-100 font-medium border border-transparent focus:border-[#d57f30]"
                            placeholder="e.g. New York, NY"
                            placeholderTextColor="#825e3460"
                            value={location}
                            onChangeText={setLocation}
                        />
                    </View>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
