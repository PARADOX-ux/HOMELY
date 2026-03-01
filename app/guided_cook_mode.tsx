import React, { useState } from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

const recipeSteps = [
    {
        instruction: "Heat oil in a large pan over medium heat.",
        ingredients: [{ qty: "2 tbsp", name: "Olive oil" }],
        tip: "Make sure the pan is evenly coated."
    },
    {
        instruction: "Add the diced onions and sauté until golden brown.",
        ingredients: [
            { qty: "1 medium", name: "Onion, diced" },
            { qty: "2 tsp", name: "Cumin seeds, whole" }
        ],
        tip: "Keep stirring occasionally to prevent the cumin seeds from burning while the onions caramelize."
    },
    {
        instruction: "Stir in the tomato paste, spices, and simmer for 15 minutes.",
        ingredients: [{ qty: "2 tbsp", name: "Tomato paste" }],
        tip: "Lower the heat if it splatters."
    },
    {
        instruction: "Add paneer cubes and heavy cream. Cook for 5 more minutes.",
        ingredients: [
            { qty: "200g", name: "Paneer cubes" },
            { qty: "1/4 cup", name: "Heavy cream" }
        ],
        tip: "Do not let the cream boil rapidly, or it might split."
    }
];

export default function GuidedCookMode() {
    const router = useRouter();
    const [currentStepIdx, setCurrentStepIdx] = useState(0);

    const step = recipeSteps[currentStepIdx];
    const totalSteps = recipeSteps.length;
    const stepNum = currentStepIdx + 1;
    const progressPct = Math.round((stepNum / totalSteps) * 100);

    const handleNext = () => {
        if (currentStepIdx < totalSteps - 1) {
            setCurrentStepIdx(prev => prev + 1);
        } else {
            router.push('/meal_success');
        }
    };

    const handlePrev = () => {
        if (currentStepIdx > 0) {
            setCurrentStepIdx(prev => prev - 1);
        }
    };

    return (
        <View className="flex-1 bg-[#FDFBD4] dark:bg-[#201912]">
            {/* Top App Bar */}
            <View className="flex-row items-center justify-between p-6 z-10 pt-14">
                <Pressable
                    className="w-12 h-12 rounded-full bg-[#8D5A2B]/10 dark:bg-white/10 items-center justify-center active:bg-[#8D5A2B]/20"
                    onPress={() => router.back()}
                >
                    <Text className="material-symbols-outlined text-2xl text-[#8D5A2B] dark:text-[#d57f30]">arrow_back</Text>
                </Pressable>

                <Pressable className="flex-row items-center gap-2 h-12 px-5 rounded-full bg-[#8D5A2B]/10 dark:bg-white/10 active:bg-[#8D5A2B]/20">
                    <Text className="material-symbols-outlined text-2xl text-[#8D5A2B] dark:text-[#d57f30]">timer</Text>
                    <Text className="font-bold text-[#8D5A2B] dark:text-[#d57f30]">15:00</Text>
                </Pressable>
            </View>

            {/* Progress Section */}
            <View className="px-6 pb-2">
                <View className="flex-row justify-between items-end mb-3">
                    <Text className="text-[#8D5A2B]/70 dark:text-[#d57f30]/70 font-semibold text-sm uppercase tracking-wider">
                        Step {stepNum} of {totalSteps}
                    </Text>
                    <Text className="text-[#8D5A2B]/50 dark:text-[#d57f30]/50 font-medium text-xs">
                        {progressPct}% Complete
                    </Text>
                </View>

                <View className="h-3 w-full bg-[#8D5A2B]/10 dark:bg-white/10 rounded-full overflow-hidden">
                    <View
                        className="h-full bg-[#d57f30] rounded-full"
                        style={{ width: `${progressPct}%` }}
                    />
                </View>
            </View>

            {/* Main Content Area */}
            <ScrollView
                className="flex-1 px-6 pt-4"
                contentContainerStyle={{ paddingBottom: 40 }}
                showsVerticalScrollIndicator={false}
            >
                <View className="bg-white dark:bg-[#2A2218] rounded-[2rem] p-8 shadow-sm border border-[#8D5A2B]/5 dark:border-white/5 relative overflow-hidden">

                    <View className="absolute -right-10 -top-10 w-40 h-40 bg-[#d57f30]/10 rounded-full" />

                    <View className="self-start px-4 py-1.5 rounded-full bg-[#d57f30]/10 mb-6">
                        <Text className="text-[#d57f30] font-bold text-sm">Step {String(stepNum).padStart(2, '0')}</Text>
                    </View>

                    <Text className="text-[36px] font-extrabold text-slate-900 dark:text-slate-100 leading-tight tracking-tight mb-8">
                        {step.instruction}
                    </Text>

                    {step.ingredients.length > 0 && (
                        <View className="space-y-4">
                            <Text className="text-sm font-bold text-[#8D5A2B]/60 dark:text-[#d57f30]/60 uppercase tracking-widest mb-3">You will need</Text>

                            <View className="flex-col gap-3">
                                {step.ingredients.map((ig, idx) => (
                                    <View key={idx} className="flex-row items-center gap-4 p-3 rounded-lg bg-[#FDFBD4] dark:bg-white/5 border border-[#8D5A2B]/5 dark:border-white/5">
                                        <View className="w-10 h-10 rounded-full bg-orange-100 dark:bg-[#d57f30]/20 items-center justify-center">
                                            <Text className="material-symbols-outlined text-xl text-[#d57f30]">
                                                {idx % 2 === 0 ? 'grocery' : 'spa'}
                                            </Text>
                                        </View>
                                        <View className="flex-col">
                                            <Text className="text-slate-900 dark:text-slate-100 font-bold text-lg leading-tight">{ig.qty}</Text>
                                            <Text className="text-[#8D5A2B] dark:text-[#d57f30]/80 text-sm">{ig.name}</Text>
                                        </View>
                                    </View>
                                ))}
                            </View>
                        </View>
                    )}

                </View>

                {step.tip && (
                    <View className="mt-6 flex-row gap-3 px-2 opacity-80">
                        <Text className="material-symbols-outlined text-[#8D5A2B] dark:text-[#d57f30] text-xl mt-0.5">lightbulb</Text>
                        <Text className="flex-1 text-[#8D5A2B]/80 dark:text-slate-300 text-sm font-medium leading-relaxed">
                            {step.tip}
                        </Text>
                    </View>
                )}
            </ScrollView>

            {/* Bottom Actions */}
            <View className="p-6 pb-8 bg-[#FDFBD4] dark:bg-[#201912] z-10 flex-col gap-4">
                <Pressable
                    className="w-full h-16 bg-[#8D5A2B] rounded-full flex-row items-center justify-center gap-3 shadow-lg shadow-[#8D5A2B]/20 active:scale-[0.98] active:bg-[#724822]"
                    onPress={handleNext}
                >
                    <Text className="text-[#FDFBD4] text-xl font-bold tracking-wide">
                        {currentStepIdx >= totalSteps - 1 ? 'Finish Cooking' : 'Next Step'}
                    </Text>
                    <Text className="material-symbols-outlined text-[#FDFBD4] text-2xl">arrow_forward</Text>
                </Pressable>

                <Pressable
                    className={`w-full py-3 flex-row items-center justify-center active:opacity-60 ${currentStepIdx === 0 ? 'opacity-50' : ''}`}
                    onPress={handlePrev}
                    disabled={currentStepIdx === 0}
                >
                    <Text className="material-symbols-outlined text-lg mr-2 text-[#8D5A2B] dark:text-[#d57f30]/80">arrow_back</Text>
                    <Text className="text-[#8D5A2B] dark:text-[#d57f30]/80 font-bold text-base">Previous Step</Text>
                </Pressable>
            </View>
        </View>
    );
}
