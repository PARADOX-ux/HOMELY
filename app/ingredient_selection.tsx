import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, ScrollView, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';

const IngredientChip = ({ name, isSelected, onToggle }: { name: string, isSelected: boolean, onToggle: () => void }) => {
    return (
        <Pressable
            className={`flex-row items-center gap-2 pl-2 pr-4 py-2.5 rounded-full shadow-sm active:scale-95 transition-all ${isSelected ? 'bg-[#d57f30]' : 'bg-white dark:bg-[#2d241b] ring-1 ring-[#825e34]/10 dark:ring-white/10'}`}
            onPress={onToggle}
        >
            <View className={`rounded-full p-1 w-8 h-8 flex-row items-center justify-center ${isSelected ? 'bg-white/20' : 'bg-[#825e34]/10 dark:bg-white/10'}`}>
                <Text className={`material-symbols-outlined text-lg ${isSelected ? 'text-white' : 'text-[#825e34] dark:text-[#d57f30]'}`}>
                    {isSelected ? 'check' : 'add'}
                </Text>
            </View>
            <Text className={`font-medium text-base ${isSelected ? 'text-white' : 'text-slate-700 dark:text-slate-200'}`}>
                {name}
            </Text>
        </Pressable>
    );
};

export default function IngredientSelection() {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedItems, setSelectedItems] = useState<string[]>(['Potato', 'Turmeric', 'Chili Powder']);

    const toggleItem = (name: string) => {
        setSelectedItems(prev =>
            prev.includes(name) ? prev.filter(item => item !== name) : [...prev, name]
        );
    };

    const vegetables = ['Potato', 'Onion', 'Spinach', 'Cauliflower', 'Okra'];
    const spices = ['Turmeric', 'Chili Powder', 'Garam Masala', 'Mustard Seeds'];
    const grains = ['Basmati Rice', 'Toor Dal', 'Wheat Flour'];

    const filterItems = (items: string[]) => items.filter(item => item.toLowerCase().includes(searchQuery.toLowerCase()));

    const filteredVegetables = filterItems(vegetables);
    const filteredSpices = filterItems(spices);
    const filteredGrains = filterItems(grains);

    return (
        <KeyboardAvoidingView
            className="flex-1 bg-[#f8f7f6] dark:bg-[#201912]"
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            {/* Top App Bar */}
            <View className="pt-14 px-4 pb-4 flex-row items-center justify-between bg-[#f8f7f6]/95 dark:bg-[#201912]/95 border-b border-[#825e34]/10 dark:border-white/5 z-20">
                <Pressable
                    className="w-10 h-10 items-center justify-center rounded-full active:bg-[#825e34]/10 dark:active:bg-white/10"
                    onPress={() => router.back()}
                >
                    <Text className="material-symbols-outlined text-[24px] text-[#825e34] dark:text-[#d57f30]">arrow_back_ios_new</Text>
                </Pressable>
                <Text className="text-xl font-bold text-slate-900 dark:text-slate-100 flex-1 text-center pr-10">Select Ingredients</Text>
            </View>

            {/* Search Area */}
            <View className="px-5 py-4 z-10 bg-[#f8f7f6] dark:bg-[#201912]">
                <View className="relative justify-center">
                    <View className="absolute inset-y-0 left-0 pl-4 justify-center z-10">
                        <Text className="material-symbols-outlined text-[#825e34]/60 dark:text-[#d57f30]/60 text-[20px]">search</Text>
                    </View>
                    <TextInput
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-white dark:bg-[#2d241b] shadow-sm border border-[#825e34]/10 dark:border-white/10 text-slate-800 dark:text-slate-100 placeholder:text-[#825e34]/40 dark:placeholder:text-white/30 text-base font-medium"
                        placeholder="Search for ingredients..."
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                </View>
            </View>

            <ScrollView
                className="flex-1"
                contentContainerStyle={{ paddingBottom: 140 }}
                showsVerticalScrollIndicator={false}
            >
                {/* Recently Used Section */}
                {searchQuery === '' && (
                    <View className="mb-8">
                        <View className="flex-row items-center justify-between px-5 mb-4">
                            <Text className="text-[#825e34] dark:text-[#d57f30] font-bold text-lg tracking-tight">Recently Used</Text>
                            <Text className="text-sm font-semibold text-[#d57f30]/80">Clear</Text>
                        </View>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            className="px-5 pb-2"
                            contentContainerStyle={{ paddingRight: 40, gap: 16 }}
                        >
                            {[
                                { name: 'Tomato', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVHbZgWEJFAxs6MsT8SDuvPcq-MUhXZm8ilrCrNM6LM4Fl7nIxOTD-gn84wgUSsYqHV8dFt2oJyxvqtB_2FrCQ0p92hJXsqBX8yvSGD3kAIios1KHZaf41HsaED38sn04_MnpoIvEei7giSe2K22zz-O1FSh_uSoCR2FTlzQqhYgi-zwQ8rgZme_NG1DzytKhAciie75-CTQxqDMbhfHsxxsZALTGn2b19pF2CKd6wLJRr7MM5GP8jDIEduZ04YS0m6fQA1ln13rE' },
                                { name: 'Cumin', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDN6XGDcmypKbB9_NRcFzWefJzL5FgHgBncSetohV5EXnTkmnFdDXxPEkeoOQ8_YuMzwO4OqsUAsDhffUqq78ofeR_XDF6gT-LDUwl7g0jkC4Zkb7IRModEPJegpxspQMExPZ6uldAOSBi-WxNhDLzlr4DeqUAAq7OYU__yon5muA9-pY94QedfUYdPS_h7wu_3tryNB8iy-kDMeMYS82nOiipiN1y_cywEdEJj_pA1SGncIuNs8vvoKXJgqPm7P1gzj_hU7tIqHjk' },
                                { name: 'Rice', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDt5I7YL-SgT5E91kPhS2LMhLHv6vmSY3DqtMMmXO64NjUUhgaIuY1NLPbEBch_nQGWbJUXNciOvat959NK-p7HK5zX_R1EdwipoCVyMB6hdPNdDlLk5L-K5s_tY1hoaZ7jTsXSoWnbvTWUaBxtcEt-Xo86amr07ymTn4XzPkYLyo3KkUNy-mZaoHqWwD9s0F-XqJrgX3neFZKu548Nw6VsY4nAlc5TB76ijo2cWL57ROIf8wPwqbFoRUDN0wJRv6CKJ9Wv3wa3zEU' },
                                { name: 'Garlic', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDi1f_oB-L_Md8QchAo-zvX6ALBHea84W2OCi_zI5tDwbJVdwcrgxlNWny0wmWxyNRI1mokD9HRAUXndqA5a6nrq-brxptbJrgc8eDQ3Mea2TulAZIUCaTUJNNPyfIiPCFIg2BDuDWTbxpPJ_Pf8iNNzrX55ba2rG9IoR_0bFZawHeE-Kqe6LU0FjCioXIoE4pOVYrNw9Z0ZPahq2MSv9JTpgyj6ogwepJMbPL5hqa7vElHzBLXCnfg_4CAnbEJShxxegstXH3dpE0' },
                                { name: 'Ginger', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDc0xmumsVFWa_c3tchMPLoHKWo97qVNpZ-_KtWi1rd1onga-xZ4eys32DuvZksvWy-oqcoU4tbZNBV0EFu9DIkb2ROAePgy9BlTmWa7uw_iTHBim31xqRhuW8mueniJOZQNQTHUhHVHIaNWv6YpvaFYS44K2D1IoNkTvnHronkheIGIZlVGjXidZ9VM_NTFxAGitHe15zXL_rXffDjhgffT-cNSuEQ2GHS4cJfSijcjfr4JjhgHAhkC0CIamYodEEdTZnHG-QwmMI' },
                            ].map(item => (
                                <Pressable key={item.name} className="flex-col items-center gap-2 active:opacity-70">
                                    <View className="w-16 h-16 rounded-full bg-white dark:bg-[#2d241b] items-center justify-center shadow-sm border border-[#825e34]/10 dark:border-white/10">
                                        <Image source={{ uri: item.img }} className="w-12 h-12 rounded-full" resizeMode="contain" />
                                    </View>
                                    <Text className="text-xs font-medium text-slate-700 dark:text-slate-300">{item.name}</Text>
                                </Pressable>
                            ))}
                        </ScrollView>
                    </View>
                )}

                {/* Categories */}
                {filteredVegetables.length > 0 && (
                    <View className="mb-8 px-5">
                        <View className="flex-row items-center gap-3 mb-4">
                            <Text className="material-symbols-outlined text-[#825e34] dark:text-[#d57f30] text-[24px]">nutrition</Text>
                            <Text className="text-[#825e34] dark:text-[#d57f30] font-extrabold text-2xl tracking-tight">Vegetables</Text>
                            <View className="h-px bg-[#825e34]/20 dark:bg-white/10 flex-1 ml-2 rounded-full" />
                        </View>
                        <View className="flex-row flex-wrap gap-3">
                            {filteredVegetables.map(item => (
                                <IngredientChip
                                    key={item}
                                    name={item}
                                    isSelected={selectedItems.includes(item)}
                                    onToggle={() => toggleItem(item)}
                                />
                            ))}
                        </View>
                    </View>
                )}

                {filteredSpices.length > 0 && (
                    <View className="mb-8 px-5">
                        <View className="flex-row items-center gap-3 mb-4">
                            <Text className="material-symbols-outlined text-[#825e34] dark:text-[#d57f30] text-[24px]">local_fire_department</Text>
                            <Text className="text-[#825e34] dark:text-[#d57f30] font-extrabold text-2xl tracking-tight">Spices</Text>
                            <View className="h-px bg-[#825e34]/20 dark:bg-white/10 flex-1 ml-2 rounded-full" />
                        </View>
                        <View className="flex-row flex-wrap gap-3">
                            {filteredSpices.map(item => (
                                <IngredientChip
                                    key={item}
                                    name={item}
                                    isSelected={selectedItems.includes(item)}
                                    onToggle={() => toggleItem(item)}
                                />
                            ))}
                        </View>
                    </View>
                )}

                {filteredGrains.length > 0 && (
                    <View className="mb-4 px-5">
                        <View className="flex-row items-center gap-3 mb-4">
                            <Text className="material-symbols-outlined text-[#825e34] dark:text-[#d57f30] text-[24px]">grass</Text>
                            <Text className="text-[#825e34] dark:text-[#d57f30] font-extrabold text-2xl tracking-tight">Grains & Lentils</Text>
                            <View className="h-px bg-[#825e34]/20 dark:bg-white/10 flex-1 ml-2 rounded-full" />
                        </View>
                        <View className="flex-row flex-wrap gap-3">
                            {filteredGrains.map(item => (
                                <IngredientChip
                                    key={item}
                                    name={item}
                                    isSelected={selectedItems.includes(item)}
                                    onToggle={() => toggleItem(item)}
                                />
                            ))}
                        </View>
                    </View>
                )}
            </ScrollView>

            {/* Sticky Footer */}
            <View className="absolute bottom-0 w-full px-5 pb-8 pt-4 bg-[#f8f7f6] dark:bg-[#201912] shadow-xl border-t border-[#825e34]/5 z-20">
                <Pressable
                    className="w-full bg-[#8D5A2B] rounded-full py-4 shadow-lg shadow-[#8D5A2B]/30 flex-row items-center justify-between px-6 active:scale-[0.98] active:bg-[#7a4e25]"
                    onPress={() => router.push('/pantry')}
                >
                    <Text className="text-white/80 font-medium text-sm">{selectedItems.length} items selected</Text>
                    <View className="flex-row items-center gap-2">
                        <Text className="text-white font-bold text-lg">Add to Pantry</Text>
                        <Text className="material-symbols-outlined text-white text-[20px]">arrow_forward</Text>
                    </View>
                </Pressable>
            </View>
        </KeyboardAvoidingView>
    );
}
