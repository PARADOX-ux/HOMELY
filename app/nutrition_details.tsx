import React from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import Svg, { Circle } from 'react-native-svg';

const ProgressRing = ({ percentage, color, title, amount }: any) => {
    const radius = 35;
    const stroke = 6;
    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <View className="flex-col items-center flex-1">
            <View className="relative w-20 h-20 items-center justify-center mb-3">
                {/* Background Ring */}
                <Svg height="80" width="80" className="absolute">
                    <Circle
                        stroke="#eaddd3"
                        fill="transparent"
                        strokeWidth={stroke}
                        r={normalizedRadius}
                        cx="40"
                        cy="40"
                    />
                    <Circle
                        stroke={color}
                        fill="transparent"
                        strokeWidth={stroke}
                        strokeDasharray={circumference + ' ' + circumference}
                        style={{ strokeDashoffset }}
                        strokeLinecap="round"
                        r={normalizedRadius}
                        cx="40"
                        cy="40"
                        rotation="-90"
                        origin="40, 40"
                    />
                </Svg>
                {/* Inner Content */}
                <View className="w-[86%] h-[86%] bg-white dark:bg-[#2d241b] rounded-full items-center justify-center shadow-sm">
                    <Text className="text-lg font-bold text-[#4A3B32] dark:text-gray-100 leading-none">{amount}</Text>
                    <Text className="text-[10px] text-[#8D7B6F] dark:text-gray-400 font-medium">{percentage}%</Text>
                </View>
            </View>
            <Text className="text-sm font-bold text-[#4A3B32] dark:text-gray-100">{title}</Text>
        </View>
    );
};

export default function NutritionDetails() {
    const router = useRouter();

    return (
        <View className="flex-1 bg-[#FDFBD4] dark:bg-[#201912]">
            {/* Header */}
            <View className="pt-12 pb-2 px-6 flex-row items-center justify-between bg-[#FDFBD4]/95 dark:bg-[#201912]/95 backdrop-blur-sm z-20">
                <Pressable
                    className="w-10 h-10 items-center justify-center rounded-full active:bg-black/5 dark:active:bg-white/10"
                    onPress={() => router.back()}
                >
                    <Text className="material-symbols-outlined text-[#4A3B32] dark:text-gray-100 text-[28px]">arrow_back</Text>
                </Pressable>
                <Text className="text-lg font-bold tracking-tight text-[#4A3B32] dark:text-gray-100">Nutritional Insights</Text>
                <Pressable className="w-10 h-10 items-center justify-center rounded-full active:bg-black/5 dark:active:bg-white/10">
                    <Text className="material-symbols-outlined text-[#4A3B32] dark:text-gray-100 text-[24px]">share</Text>
                </Pressable>
            </View>

            <ScrollView
                className="flex-1 px-6"
                contentContainerStyle={{ paddingBottom: 100 }}
                showsVerticalScrollIndicator={false}
            >
                {/* Context */}
                <View className="items-center py-4">
                    <Text className="text-2xl font-bold text-[#4A3B32] dark:text-gray-100 mb-1">Macro Breakdown</Text>
                    <Text className="text-sm font-medium text-[#8D7B6F] dark:text-gray-400">Per serving (350g)</Text>
                </View>

                {/* Macro Rings */}
                <View className="bg-white dark:bg-[#2d241b] rounded-3xl p-6 shadow-sm mb-6 border border-[#4A3B32]/5">
                    <View className="flex-row justify-between items-start gap-2">
                        <ProgressRing title="Protein" percentage={32} amount="24g" color="#d57f30" />
                        <ProgressRing title="Carbs" percentage={55} amount="45g" color="#4A3B32" />
                        <ProgressRing title="Fats" percentage={20} amount="12g" color="#8D7B6F" />
                    </View>

                    {/* Quick Insight */}
                    <View className="mt-6 bg-[#FDFBD4] dark:bg-[#201912] rounded-xl p-4 flex-row items-start gap-3 border border-[#d57f30]/10">
                        <Text className="material-symbols-outlined text-[#d57f30] mt-0.5">verified</Text>
                        <View className="flex-1">
                            <Text className="text-sm font-medium leading-relaxed text-[#4A3B32] dark:text-gray-200">
                                <Text className="font-bold text-[#d57f30]">Great balance! </Text>
                                High in protein and moderate carbs, perfect for post-workout recovery.
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Fat Quality Meter */}
                <View className="mb-8">
                    <View className="flex-row items-center gap-2 mb-4">
                        <Text className="text-lg font-bold text-[#4A3B32] dark:text-gray-100">Fat Quality</Text>
                        <Text className="material-symbols-outlined text-[#8D7B6F] text-lg">info</Text>
                    </View>

                    <View className="bg-white dark:bg-[#2d241b] rounded-3xl p-6 shadow-sm border border-[#4A3B32]/5">
                        <View className="flex-row justify-between items-end mb-2">
                            <Text className="text-sm font-medium text-[#8D7B6F]">Saturated</Text>
                            <Text className="text-sm font-bold text-[#d57f30]">Unsaturated (Healthy)</Text>
                        </View>

                        {/* Meter */}
                        <View className="h-4 w-full bg-[#EADDD3] rounded-full overflow-hidden flex-row relative">
                            <View className="h-full bg-[#8D7B6F] w-[25%]" />
                            <View className="h-full bg-[#d57f30] flex-1 relative">
                                <View className="absolute right-[20%] top-1 w-2 h-2 bg-white rounded-full shadow-sm opacity-60" />
                            </View>
                        </View>

                        <View className="mt-4 flex-row gap-4">
                            <View className="flex-1 bg-[#FDFBD4]/50 dark:bg-[#201912]/50 p-3 rounded-xl border border-[#d57f30]/10">
                                <View className="flex-row items-center gap-2 mb-1">
                                    <View className="w-2 h-2 rounded-full bg-[#d57f30]" />
                                    <Text className="text-[10px] font-bold text-[#4A3B32] dark:text-gray-100 uppercase tracking-wider">Omega-3</Text>
                                </View>
                                <Text className="text-xl font-bold text-[#4A3B32] dark:text-gray-100">4.2g</Text>
                            </View>

                            <View className="flex-1 bg-[#FDFBD4]/50 dark:bg-[#201912]/50 p-3 rounded-xl border border-transparent">
                                <View className="flex-row items-center gap-2 mb-1">
                                    <View className="w-2 h-2 rounded-full bg-[#8D7B6F]" />
                                    <Text className="text-[10px] font-bold text-[#4A3B32] dark:text-gray-100 uppercase tracking-wider">Sat. Fat</Text>
                                </View>
                                <Text className="text-xl font-bold text-[#4A3B32] dark:text-gray-100">1.8g</Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Micro-Nutrients */}
                <View className="mb-6">
                    <Text className="text-lg font-bold text-[#4A3B32] dark:text-gray-100 mb-4">Micro-nutrients</Text>
                    <View className="flex-col gap-3">

                        {/* Item 1 */}
                        <View className="bg-white dark:bg-[#2d241b] rounded-2xl p-4 flex-row items-center justify-between shadow-sm">
                            <View className="flex-row items-center gap-4">
                                <View className="w-10 h-10 rounded-lg bg-[#FFF4E6] items-center justify-center">
                                    <Text className="material-symbols-outlined text-[#d57f30]">visibility</Text>
                                </View>
                                <View>
                                    <Text className="text-base font-bold text-[#4A3B32] dark:text-gray-100">Vitamin A</Text>
                                    <Text className="text-xs font-medium text-[#8D7B6F] dark:text-gray-400">Eye Health</Text>
                                </View>
                            </View>
                            <View className="flex-row items-center gap-3">
                                <Text className="text-sm font-bold text-[#4A3B32] dark:text-gray-100">800µg</Text>
                                <View className="px-2 py-1 rounded-md bg-[#E8F5E9]">
                                    <Text className="text-xs font-bold text-[#2E7D32]">+80% DV</Text>
                                </View>
                            </View>
                        </View>

                        {/* Item 2 */}
                        <View className="bg-white dark:bg-[#2d241b] rounded-2xl p-4 flex-row items-center justify-between shadow-sm">
                            <View className="flex-row items-center gap-4">
                                <View className="w-10 h-10 rounded-lg bg-[#FFF4E6] items-center justify-center">
                                    <Text className="material-symbols-outlined text-[#d57f30]">bolt</Text>
                                </View>
                                <View>
                                    <Text className="text-base font-bold text-[#4A3B32] dark:text-gray-100">Vitamin C</Text>
                                    <Text className="text-xs font-medium text-[#8D7B6F] dark:text-gray-400">Immunity</Text>
                                </View>
                            </View>
                            <View className="flex-row items-center gap-3">
                                <Text className="text-sm font-bold text-[#4A3B32] dark:text-gray-100">45mg</Text>
                                <View className="px-2 py-1 rounded-md bg-[#FFF3E0]">
                                    <Text className="text-xs font-bold text-[#E65100]">+40% DV</Text>
                                </View>
                            </View>
                        </View>

                        {/* Item 3 */}
                        <View className="bg-white dark:bg-[#2d241b] rounded-2xl p-4 flex-row items-center justify-between shadow-sm">
                            <View className="flex-row items-center gap-4">
                                <View className="w-10 h-10 rounded-lg bg-[#FFF4E6] items-center justify-center">
                                    <Text className="material-symbols-outlined text-[#d57f30]">bloodtype</Text>
                                </View>
                                <View>
                                    <Text className="text-base font-bold text-[#4A3B32] dark:text-gray-100">Iron</Text>
                                    <Text className="text-xs font-medium text-[#8D7B6F] dark:text-gray-400">Energy</Text>
                                </View>
                            </View>
                            <View className="flex-row items-center gap-3">
                                <Text className="text-sm font-bold text-[#4A3B32] dark:text-gray-100">3.2mg</Text>
                                <View className="px-2 py-1 rounded-md bg-gray-100">
                                    <Text className="text-xs font-bold text-gray-600">+15% DV</Text>
                                </View>
                            </View>
                        </View>

                    </View>
                </View>

            </ScrollView>

            {/* Floating Action */}
            <View className="absolute bottom-6 w-full px-6 z-10">
                <Pressable
                    className="w-full h-14 bg-[#4A3B32] rounded-2xl flex-row items-center justify-center gap-2 shadow-lg active:scale-[0.98]"
                    onPress={() => router.back()}
                >
                    <Text className="material-symbols-outlined text-[#FDFBD4]">restaurant_menu</Text>
                    <Text className="font-bold text-lg text-[#FDFBD4]">Back to Recipe</Text>
                </Pressable>
            </View>
        </View>
    );
}
