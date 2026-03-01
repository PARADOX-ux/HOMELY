import React from 'react';
import { View, Text, Pressable, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function OrderIngredients() {
    const router = useRouter();

    return (
        <View className="flex-1 bg-[#fdfbd4] dark:bg-[#201912]">
            {/* Header */}
            <View className="pt-12 px-5 pb-4 flex-row items-center gap-3 bg-[#fdfbd4]/90 dark:bg-[#201912]/90 backdrop-blur-sm z-10 border-b border-[#825e34]/10">
                <Pressable
                    className="w-10 h-10 items-center justify-center rounded-full bg-white dark:bg-white/10 shadow-sm active:bg-gray-50"
                    onPress={() => router.back()}
                >
                    <Text className="material-symbols-outlined text-[#825e34] dark:text-gray-100">arrow_back</Text>
                </Pressable>
                <Text className="text-xl font-bold text-[#825e34] dark:text-gray-100">Checkout</Text>
            </View>

            <ScrollView
                className="flex-1 px-5 pt-6"
                contentContainerStyle={{ paddingBottom: 100 }}
                showsVerticalScrollIndicator={false}
            >
                {/* Partner Logo */}
                <Pressable className="bg-white dark:bg-white/5 rounded-2xl p-5 shadow-sm border border-[#825e34]/10 mb-6 flex-row gap-4 items-center active:bg-gray-50 active:border-[#d57f30]">
                    <Image
                        source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Instacart_logo_and_wordmark.svg/2560px-Instacart_logo_and_wordmark.svg.png" }}
                        className="h-8 w-32 object-contain"
                        resizeMode="contain"
                    />
                    <Text className="flex-1 text-right text-sm font-bold opacity-70 text-[#825e34] dark:text-white">Delivery via Instacart</Text>
                </Pressable>

                {/* Order Summary */}
                <Text className="text-lg font-bold mb-3 text-[#825e34] dark:text-gray-100">Order Summary</Text>

                <View className="bg-white dark:bg-white/5 rounded-2xl p-5 shadow-sm border border-[#825e34]/10 space-y-4">
                    <View className="flex-row justify-between items-center opacity-80 mb-4">
                        <Text className="font-medium text-[#825e34] dark:text-gray-100">Selected Ingredients (4)</Text>
                        <Text className="font-bold text-[#825e34] dark:text-gray-100">$22.40</Text>
                    </View>

                    <View className="flex-row justify-between items-center opacity-80 border-b border-[#825e34]/10 pb-4 mb-4">
                        <Text className="font-medium text-[#825e34] dark:text-gray-100">Estimated Taxes & Fees</Text>
                        <Text className="font-bold text-[#825e34] dark:text-gray-100">$4.50</Text>
                    </View>

                    <View className="flex-row justify-between items-center text-lg">
                        <Text className="font-bold text-[#825e34] dark:text-white">Total</Text>
                        <Text className="font-bold text-[#d57f30]">$26.90</Text>
                    </View>
                </View>

                {/* Action Button */}
                <Pressable
                    className="mt-8 w-full bg-[#d57f30] rounded-full py-4 shadow-lg shadow-[#d57f30]/40 flex-row justify-center items-center gap-2 active:opacity-80 active:scale-[0.98]"
                    onPress={() => router.push('/user_dashboard')}
                >
                    <Text className="material-symbols-outlined text-white text-[24px]">shopping_bag</Text>
                    <Text className="text-white text-lg font-bold">Place Order</Text>
                </Pressable>
            </ScrollView>
        </View>
    );
}
