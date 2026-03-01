import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Pressable,
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
    ScrollView
} from 'react-native';
import { useRouter } from 'expo-router';
import { useStore } from '../store/useStore';
import Svg, { Path } from 'react-native-svg';

export default function Welcome() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <KeyboardAvoidingView
            className="flex-1 bg-background-light dark:bg-background-dark"
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            {/* Header Image Section (Top 30%) */}
            <View className="h-[35%] w-full relative shrink-0">
                <ImageBackground
                    source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzYSz-CSDNDR-i4ZlxLyFSt7Pvc-UmtrPhZjVOECQif4Qxax11dWeCjpI4k32peqYJtY1hVLSYIAovS0gzFPnIfOKJGAEc7F9FNIItWf8SdGBo9NPYLWNUF4HyjpVqTiMo8oJDRRlkTwVYrizo0ndQygahHv6LmTl85QblaMqCQQ8LjNJnrNRaJUT7E2KOTy6e8ozHPz_PqChlogA0LlBtYNnEFDTLdojgGBac7UGEUwnbll_LyYEtuTqmkcmam16gbSNEM902HRE' }}
                    className="absolute inset-0 w-full h-full"
                    resizeMode="cover"
                >
                    {/* Gradient Overlay approximation using semi-transparent View */}
                    <View className="absolute inset-0 bg-black/30" />
                </ImageBackground>
            </View>

            {/* Main Content Card */}
            <View className="flex-1 -mt-10 z-10 w-full rounded-t-[2rem] bg-[#FDFBD4]/95 overflow-hidden shadow-lg border-t border-white/40">
                <ScrollView
                    className="flex-1"
                    contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 20, paddingBottom: 40, flexGrow: 1 }}
                    showsVerticalScrollIndicator={false}
                >
                    {/* Handle bar */}
                    <View className="w-12 h-1.5 bg-[#8D5A2B]/20 rounded-full mx-auto mb-6 shrink-0" />

                    {/* Headers */}
                    <View className="items-center mb-8">
                        <Text className="text-[#8D5A2B] text-[26px] font-bold tracking-tight mb-1">
                            Welcome to your kitchen
                        </Text>
                        <Text className="text-[#8D5A2B]/70 text-sm font-medium">
                            Sign in to start cooking.
                        </Text>
                    </View>

                    {/* Login Form */}
                    <View className="w-full max-w-sm mx-auto space-y-4 gap-4">

                        {/* Email Input */}
                        <View className="relative justify-center">
                            <View className="absolute left-4 z-10">
                                <Text className="material-symbols-outlined text-[#d57f30]/60 text-[20px]">mail</Text>
                            </View>
                            <TextInput
                                className="w-full bg-white/60 border border-[#8D5A2B]/20 rounded-full py-4 pl-12 pr-4 text-[#8D5A2B] font-medium h-14"
                                placeholder="Email Address"
                                placeholderTextColor="#A88B72"
                                keyboardType="email-address"
                                autoCapitalize="none"
                                value={email}
                                onChangeText={setEmail}
                            />
                        </View>

                        {/* Password Input */}
                        <View className="relative justify-center mt-4">
                            <View className="absolute left-4 z-10">
                                <Text className="material-symbols-outlined text-[#d57f30]/60 text-[20px]">lock</Text>
                            </View>
                            <TextInput
                                className="w-full bg-white/60 border border-[#8D5A2B]/20 rounded-full py-4 pl-12 pr-12 text-[#8D5A2B] font-medium h-14"
                                placeholder="Password"
                                placeholderTextColor="#A88B72"
                                secureTextEntry
                                value={password}
                                onChangeText={setPassword}
                            />
                            <Pressable className="absolute right-4 z-10 p-2">
                                <Text className="material-symbols-outlined text-[#8D5A2B]/40 text-[20px]">visibility</Text>
                            </Pressable>
                        </View>

                        {/* Forgot Password */}
                        <View className="flex-row justify-end mt-2">
                            <Pressable>
                                <Text className="text-sm font-semibold text-[#d57f30]">Forgot Password?</Text>
                            </Pressable>
                        </View>

                        {/* Login Button */}
                        <Pressable
                            className="w-full bg-[#d57f30] h-14 rounded-full shadow-lg flex-row items-center justify-center gap-2 mt-4 active:opacity-80"
                            onPress={() => router.push('/user_dashboard')}
                        >
                            <Text className="text-white font-bold text-lg">Login</Text>
                            <Text className="material-symbols-outlined text-white text-[20px]">arrow_forward</Text>
                        </Pressable>
                    </View>

                    {/* Divider */}
                    <View className="relative py-6 w-full max-w-sm mx-auto flex-row items-center justify-center mt-2">
                        <View className="absolute w-full border-t border-[#8D5A2B]/20" />
                        <Text className="bg-[#FDFBD4] px-4 text-[10px] font-bold text-[#8D5A2B]/80 uppercase tracking-widest z-10">
                            Or continue with
                        </Text>
                    </View>

                    {/* Social Logins */}
                    <View className="flex-row justify-center gap-6 mb-6">
                        <Pressable className="w-14 h-14 rounded-full bg-white border border-[#8D5A2B]/5 items-center justify-center shadow-sm active:bg-gray-50">
                            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <Path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <Path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <Path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <Path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </Svg>
                        </Pressable>

                        <Pressable className="w-14 h-14 rounded-full bg-white border border-[#8D5A2B]/5 items-center justify-center shadow-sm active:bg-gray-50">
                            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <Path d="M17.05 20.28c-.98.95-2.05.88-3.08.38-1.09-.54-2.08-.53-3.2 0-1.44.71-2.01.27-3.05-.82-2.31-2.42-2.58-6.15-1.07-8.15 1.1-1.45 2.87-1.68 4.04-1.61 1.07.07 2.05.51 2.67.51.6 0 1.78-.54 3.02-.45 1.05.08 2.37.5 3.3 1.4-2.91 1.34-2.46 5.43.6 6.8-.62 1.34-1.48 2.65-2.48 3.86-.75.9-1.54 1.54-2.27 1.54zM12.03 7.25c-.15-2.23 1.66-4.04 3.74-4.25.17 2.29-2.14 4.2-3.74 4.25z" fill="black" />
                            </Svg>
                        </Pressable>
                    </View>

                    {/* Footer Link */}
                    <View className="flex-row justify-center items-center mt-auto">
                        <Text className="text-[#8D5A2B]/70 text-xs">Don't have an account? </Text>
                        <Pressable>
                            <Text className="font-bold text-[#d57f30] text-xs">Sign up</Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    );
}
