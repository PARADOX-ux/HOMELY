import React from 'react';
import { View, Text, Image, Pressable, ScrollView, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';

export default function RecipeDetails() {
    const router = useRouter();

    return (
        <View className="flex-1 bg-homely-bg relative">
            <ScrollView
                className="flex-1"
                contentContainerStyle={{ flexGrow: 1, paddingBottom: 130 }}
                showsVerticalScrollIndicator={false}
            >
                {/* Header Section */}
                <View className="relative w-full h-[45vh] min-h-[320px] shrink-0">
                    <ImageBackground
                        source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFykQj6jbStwxnM2LshMfygW9r7n4POdZ5ruQ0PgFJpj7KHw8t9rRhEFbCQBKotympB-FLwC12JOGab-WH5GYsHGu38t5ixwjEOgXiJMfYYA7k3FWLAeFlsJQGXsVyO7kAzDOyctu1HlNaTE1QYmG4uArLKG1d7UDAjJEjAmihHI55QNHX_pm3cONjUruCF8OP3p7iJp2YfaUhUhVo6-WmHW-iOnOI5KkfGxmNSjeHxCuNHQvKjkq6d8H8xHaUsNDrbZB7caZ16uQ" }}
                        className="w-full h-full"
                        resizeMode="cover"
                    >
                        {/* Dark Overlay */}
                        <View className="absolute inset-0 bg-black/40" />

                        {/* Top Navigation Bar */}
                        <View className="w-full z-20 flex-row justify-between items-center p-4 pt-12">
                            <Pressable
                                className="bg-white/30 rounded-full p-3 flex items-center justify-center shadow-sm"
                                onPress={() => router.back()}
                            >
                                <Text className="material-symbols-outlined text-white text-[24px]">arrow_back</Text>
                            </Pressable>

                            <Pressable
                                className="bg-white/30 rounded-full p-3 flex items-center justify-center shadow-sm"
                                onPress={() => {/* Add favorite logic */ }}
                            >
                                <Text className="material-symbols-outlined text-white text-[24px]">bookmark</Text>
                            </Pressable>
                        </View>

                        {/* Header Content placed at the bottom */}
                        <View className="absolute bottom-0 w-full p-6 pb-12">
                            <View className="self-start flex-row items-center gap-2 px-4 py-1.5 rounded-full bg-homely-primary/95 shadow-md mb-3">
                                <Text className="material-symbols-outlined text-white text-[16px]">soup_kitchen</Text>
                                <Text className="text-white text-xs font-bold">Soup</Text>
                            </View>
                            <Text className="text-[#FDFBD4] text-3xl font-extrabold shadow-sm tracking-tight mb-3">
                                Rustic Roasted Tomato Basil Soup
                            </Text>
                            <View className="flex-row items-center gap-1">
                                <Text className="text-[#FDFBD4]/90 text-sm font-semibold">by</Text>
                                <Text className="text-[#FDFBD4]/90 text-sm font-semibold underline underline-offset-4 decoration-homely-accent">
                                    Chef Maria Rossi
                                </Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>

                {/* Main Content Area */}
                <View className="-mt-8 rounded-t-[2.5rem] bg-homely-bg flex-1 flex flex-col gap-8 overflow-hidden shadow-lg z-10 pt-4">

                    {/* Dragger Handle */}
                    <View className="w-full flex items-center mb-2">
                        <View className="w-16 h-1.5 bg-homely-secondary/20 rounded-full" />
                    </View>

                    {/* Intro Text */}
                    <View className="px-7">
                        <Text className="text-text-main/80 text-lg font-medium leading-relaxed">
                            A comforting, velvety soup perfect for chilly evenings. Roasted garlic adds a deep flavor profile. Best served with warm, crusty bread.
                        </Text>
                    </View>

                    {/* Quick Stats (Scrollable) */}
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        className="pl-7 pr-7"
                        contentContainerStyle={{ paddingRight: 40 }}
                    >
                        <View className="flex-row gap-4 pb-2">
                            {/* Time */}
                            <View className="flex-row items-center gap-3 px-5 py-3 rounded-2xl bg-white border-2 border-homely-secondary/10 shadow-card">
                                <View className="w-10 h-10 rounded-full bg-[#FFF4E6] flex items-center justify-center">
                                    <Text className="material-symbols-outlined text-homely-accent text-[22px]">schedule</Text>
                                </View>
                                <View>
                                    <Text className="text-[10px] text-homely-secondary uppercase tracking-widest font-extrabold">Time</Text>
                                    <Text className="text-text-main font-bold text-base">45 min</Text>
                                </View>
                            </View>

                            {/* Nutrition */}
                            <Pressable
                                className="flex-row items-center gap-3 px-5 py-3 rounded-2xl bg-white border-2 border-homely-secondary/10 shadow-card active:opacity-80"
                                onPress={() => router.push('/nutrition_details')}
                            >
                                <View className="w-10 h-10 rounded-full bg-[#E6F4EA] flex items-center justify-center">
                                    <Text className="material-symbols-outlined text-[#1E8E3E] text-[22px]">local_fire_department</Text>
                                </View>
                                <View>
                                    <View className="flex-row items-center gap-1">
                                        <Text className="text-[10px] text-homely-secondary uppercase tracking-widest font-extrabold">Nutrition</Text>
                                        <Text className="material-symbols-outlined text-homely-secondary text-[10px]">open_in_new</Text>
                                    </View>
                                    <Text className="text-text-main font-bold text-base">320 kcal</Text>
                                </View>
                            </Pressable>

                            {/* Difficulty */}
                            <View className="flex-row items-center gap-3 px-5 py-3 rounded-2xl bg-white border-2 border-homely-secondary/10 shadow-card">
                                <View className="w-10 h-10 rounded-full bg-[#E8F0FE] flex items-center justify-center">
                                    <Text className="material-symbols-outlined text-[#1967D2] text-[22px]">network_intelligence</Text>
                                </View>
                                <View>
                                    <Text className="text-[10px] text-homely-secondary uppercase tracking-widest font-extrabold">Difficulty</Text>
                                    <Text className="text-text-main font-bold text-base">Medium</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>

                    {/* Missing List & Pantry Status */}
                    <View className="px-7 mt-2">
                        <View className="flex-row items-center justify-between mb-5">
                            <Text className="text-2xl font-bold text-text-main tracking-tight">The Missing List</Text>
                            <Pressable
                                className="bg-homely-secondary/10 px-3 py-1.5 rounded-lg"
                                onPress={() => router.push('/pantry')}
                            >
                                <Text className="text-xs font-bold text-homely-secondary">Pantry Status</Text>
                            </Pressable>
                        </View>

                        <View className="flex flex-col gap-6">
                            {/* Need to Buy */}
                            <View className="bg-white rounded-3xl p-5 shadow-soft border-2 border-homely-accent/20">
                                <View className="flex-row items-center gap-2 mb-4">
                                    <Text className="material-symbols-outlined text-homely-accent text-[20px]">shopping_cart</Text>
                                    <Text className="text-sm font-extrabold text-homely-accent uppercase tracking-wide">
                                        Need to Buy (3)
                                    </Text>
                                </View>

                                <View className="flex-col space-y-4 gap-4">
                                    {/* Item 1 */}
                                    <View className="flex-row items-center justify-between">
                                        <View className="flex-row items-center gap-4">
                                            <Image
                                                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeJpxjJFZGnz803nR4o4-gw-4f3K-uKqoAnsKGmnj6C00zg1_7qAXsZuOFTSoDU3udmPyOd23-yUgVLw7cltv36F_TACDm_T5NszQPDhKEhQbL_qUvdIoXxyKcoizKZRgloENQT_JOAzEkHYWf6tgfl0ayQaY_oBQu0QaLXJyq05NEsEghKF-lr-71NBBTwCroNBXKgRjrRMre2nhcu4_axNvwll3uzgTPpKkMbFlJiRv45nXQIlL0fi4KjnNZHOkXTdlg7bc0Fs0' }}
                                                className="w-12 h-12 rounded-2xl bg-slate-100"
                                            />
                                            <View>
                                                <Text className="font-bold text-text-main text-lg">Fresh Basil</Text>
                                                <Text className="text-xs font-medium text-homely-secondary/70">1 Bunch</Text>
                                            </View>
                                        </View>
                                        <Pressable className="w-10 h-10 rounded-full bg-homely-bg flex items-center justify-center shadow-sm">
                                            <Text className="material-symbols-outlined text-homely-secondary text-[22px]">add</Text>
                                        </Pressable>
                                    </View>

                                    {/* Item 2 */}
                                    <View className="flex-row items-center justify-between">
                                        <View className="flex-row items-center gap-4">
                                            <Image
                                                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmgCOGFgHeo99umraWTr7_LEVe-fRTYWjJgAEBKKENe81iklByHJwIbiRiDpSVubvnimSag0eALFNV3v1_f8mTEQVWkQMQ-5YTNk-a4l0MQZBhsifB_AnZPmtiXutjyDPlAoR1BszesEera6hm1JBiUXjl27iQqJIKUurax4OraQQUAq8QTBEc_rz1g8QzhTtnuFQuFGKuPlzupfVqcvgX6qad2vc5H1BYTkUdmIY6NjSC-RXcFE0nKdCocyq2I6_A6dS57uO4heE' }}
                                                className="w-12 h-12 rounded-2xl bg-slate-100"
                                            />
                                            <View>
                                                <Text className="font-bold text-text-main text-lg">Tomatoes</Text>
                                                <Text className="text-xs font-medium text-homely-secondary/70">2 kg (Roma)</Text>
                                            </View>
                                        </View>
                                        <Pressable className="w-10 h-10 rounded-full bg-homely-bg flex items-center justify-center shadow-sm">
                                            <Text className="material-symbols-outlined text-homely-secondary text-[22px]">add</Text>
                                        </Pressable>
                                    </View>

                                    {/* Item 3 */}
                                    <View className="flex-row items-center justify-between">
                                        <View className="flex-row items-center gap-4">
                                            <Image
                                                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZ-0tWh5LyRAWeeaXcdL_ogq40vKPwFXSLHNYy0x7pPtv8h4ph4gGzXUVVuUWuH2G1TJGQdBvtSlkhXFhyCAlE8tXHOKX8BDDwO5FyDBUqGGgq_MoSk2DUsw-dqutkUAiuoUHE3h0Uc3UPcRflhcbGuugEGCfpVgHeMy5GIprAbnetBlGYDI45iN6jKsj7321iWv0aEq3aenfSXDK8bhLWtrLKa6GPy5IJMWUNu_OKz2YQo8kPbU-koobf7imBL6gow9yGVsXOrpQ' }}
                                                className="w-12 h-12 rounded-2xl bg-slate-100"
                                            />
                                            <View>
                                                <Text className="font-bold text-text-main text-lg">Heavy Cream</Text>
                                                <Text className="text-xs font-medium text-homely-secondary/70">200 ml</Text>
                                            </View>
                                        </View>
                                        <Pressable className="w-10 h-10 rounded-full bg-homely-bg flex items-center justify-center shadow-sm">
                                            <Text className="material-symbols-outlined text-homely-secondary text-[22px]">add</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </View>

                            {/* You Have */}
                            <View className="px-3">
                                <View className="flex-row items-center gap-2 mb-4">
                                    <Text className="material-symbols-outlined text-[#5B8D2B] text-[20px]">check_circle</Text>
                                    <Text className="text-sm font-extrabold text-[#5B8D2B] uppercase tracking-wide">
                                        You Have (3)
                                    </Text>
                                </View>

                                <View className="flex-col space-y-4 gap-4">
                                    {[
                                        { icon: "grain", name: "Sea Salt" },
                                        { icon: "water_drop", name: "Olive Oil" },
                                        { icon: "eco", name: "Garlic Cloves" },
                                    ].map((item, index) => (
                                        <View key={index} className="flex-row items-center justify-between">
                                            <View className="flex-row items-center gap-4">
                                                <View className="w-10 h-10 rounded-full bg-homely-secondary/10 flex items-center justify-center">
                                                    <Text className="material-symbols-outlined text-homely-secondary text-[18px]">{item.icon}</Text>
                                                </View>
                                                <Text className="font-semibold text-text-main/60 line-through decoration-homely-secondary/40">
                                                    {item.name}
                                                </Text>
                                            </View>
                                            <Text className="material-symbols-outlined text-[#5B8D2B] text-[24px]">check</Text>
                                        </View>
                                    ))}
                                </View>
                            </View>
                        </View>
                    </View>

                </View>
            </ScrollView>

            {/* Floating Action Buttons */}
            <View className="absolute bottom-0 left-0 w-full bg-white/95 border-t border-homely-secondary/10 shadow-lg p-5 pb-8">
                <View className="flex-col gap-3">
                    <Pressable
                        className="w-full bg-homely-primary py-4 rounded-2xl shadow-lg flex-row items-center justify-center gap-3 active:opacity-80"
                        onPress={() => router.push('/guided_cook_mode')}
                    >
                        <Text className="material-symbols-outlined text-white text-[26px]">skillet</Text>
                        <Text className="text-white font-bold text-xl">Start Cooking</Text>
                    </Pressable>

                    <Pressable
                        className="w-full bg-transparent py-2.5 rounded-xl flex-row items-center justify-center gap-1.5 border border-transparent active:bg-homely-bg"
                        onPress={() => router.push('/order_ingredients')}
                    >
                        <Text className="material-symbols-outlined text-homely-secondary text-[20px]">add_shopping_cart</Text>
                        <Text className="text-homely-secondary font-bold text-sm">Add 3 Items to Grocery List</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}
