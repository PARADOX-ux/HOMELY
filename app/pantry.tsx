import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { useStore } from '../store/useStore';

const FilterChip = ({ title, isActive }: { title: string, isActive?: boolean }) => (
    <Pressable
        className={`px-5 py-2.5 rounded-full whitespace-nowrap shadow-sm border
      ${isActive
                ? 'bg-[#8c5a2b] border-transparent shadow-[#8c5a2b]/20'
                : 'bg-white dark:bg-[#2c241b] border-[#E8E1D9] dark:border-transparent'
            }`}
    >
        <Text
            className={`font-medium text-sm ${isActive ? 'text-white' : 'text-[#4A3B2C] dark:text-[#e0d8cf]'}`}
        >
            {title}
        </Text>
    </Pressable>
);

const PantryItemRow = ({
    title, subtitle, subtitleColor = 'text-[#8b725b]', icon, imageUrl, initialQty = 1, showWarning, ringColor
}: any) => {
    const [qty, setQty] = useState(initialQty);

    return (
        <View className={`flex-row items-center p-3 bg-white dark:bg-[#2c241b] rounded-2xl shadow-sm mb-3 ${ringColor ? `border ${ringColor}` : ''}`}>
            <View className="h-16 w-16 rounded-xl bg-[#F4F1EE] dark:bg-[#3a3228] items-center justify-center overflow-hidden shrink-0">
                {imageUrl ? (
                    <Image source={{ uri: imageUrl }} className="w-full h-full object-cover" />
                ) : (
                    <Text className="material-symbols-outlined text-[#8c5a2b] text-2xl">{icon}</Text>
                )}
            </View>

            <View className="ml-4 flex-1">
                <Text className="font-bold text-[#4A3B2C] dark:text-[#e0d8cf] text-lg leading-tight" numberOfLines={1}>
                    {title}
                </Text>
                <View className="flex-row items-center gap-1 mt-1">
                    {showWarning && <Text className="material-symbols-outlined text-[14px] text-[#D47E30]">warning</Text>}
                    <Text className={`text-xs font-medium ${subtitleColor}`}>
                        {subtitle}
                    </Text>
                </View>
            </View>

            <View className="flex-row items-center gap-3 bg-[#F9F7F5] dark:bg-[#1e1914] rounded-full p-1 ml-2">
                <Pressable
                    className="w-7 h-7 items-center justify-center rounded-full bg-white dark:bg-[#2c241b] shadow-sm active:opacity-70"
                    onPress={() => setQty(Math.max(0, qty - 1))}
                >
                    <Text className="material-symbols-outlined text-[#4A3B2C] text-[16px]">remove</Text>
                </Pressable>
                <Text className="font-bold text-[#4A3B2C] dark:text-[#e0d8cf] w-4 text-center">{qty}</Text>
                <Pressable
                    className={`w-7 h-7 items-center justify-center rounded-full shadow-sm active:opacity-70 ${qty === 0 ? 'bg-[#8c5a2b]' : 'bg-white dark:bg-[#2c241b]'}`}
                    onPress={() => setQty(qty + 1)}
                >
                    <Text className={`material-symbols-outlined text-[16px] ${qty === 0 ? 'text-white' : 'text-[#4A3B2C]'}`}>add</Text>
                </Pressable>
            </View>
        </View>
    );
};

const SpiceItemCard = ({ title, subtitle, icon, iconColor = 'text-[#8c5a2b]', initialQty = 1, showWarning, ringColor, subtitleColor = 'text-[#8b725b]' }: any) => {
    const [qty, setQty] = useState(initialQty);

    return (
        <View className={`p-3 bg-white dark:bg-[#2c241b] rounded-2xl shadow-sm items-center flex-1 ${ringColor ? `border ${ringColor}` : ''}`}>
            <View className="h-14 w-14 mb-2 rounded-full bg-[#FFF8F0] dark:bg-[#3a3228] items-center justify-center">
                <Text className={`material-symbols-outlined text-3xl ${iconColor}`}>{icon}</Text>
            </View>
            <Text className="font-bold text-[#4A3B2C] dark:text-[#e0d8cf] text-base">{title}</Text>
            <Text className={`text-xs font-medium mb-3 ${subtitleColor}`}>{subtitle}</Text>

            <View className="flex-row items-center justify-between bg-[#F9F7F5] dark:bg-[#1e1914] rounded-full p-1 w-full">
                <Pressable
                    className="w-6 h-6 items-center justify-center rounded-full bg-white dark:bg-[#2c241b] shadow-sm active:opacity-70"
                    onPress={() => setQty(Math.max(0, qty - 1))}
                >
                    <Text className="material-symbols-outlined text-[#4A3B2C] text-[14px]">remove</Text>
                </Pressable>
                <Text className={`font-bold text-sm ${showWarning ? 'text-[#D47E30]' : 'text-[#4A3B2C] dark:text-[#e0d8cf]'}`}>{qty}</Text>
                <Pressable
                    className={`w-6 h-6 items-center justify-center rounded-full shadow-sm active:opacity-70 ${qty === 0 ? 'bg-[#8c5a2b]' : 'bg-white dark:bg-[#2c241b]'}`}
                    onPress={() => setQty(qty + 1)}
                >
                    <Text className={`material-symbols-outlined text-[14px] ${qty === 0 ? 'text-white' : 'text-[#4A3B2C]'}`}>add</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default function Pantry() {
    const router = useRouter();
    const { searchQuery, setSearchQuery } = useStore();

    return (
        <View className="flex-1 bg-[#FDFBD4] dark:bg-background-dark">
            {/* Header area */}
            <View className="px-6 pt-12 pb-4 flex-col gap-4 bg-[#FDFBD4] dark:bg-background-dark z-20 shadow-sm">
                <View className="flex-row items-center justify-between">
                    <View>
                        <Text className="text-3xl font-bold text-[#4A3B2C] dark:text-[#e0d8cf] tracking-tight">Your Pantry</Text>
                        <Text className="text-sm font-medium text-[#8b725b] mt-1">42 items in stock</Text>
                    </View>
                    <Pressable
                        className="items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-[#2c241b] shadow-sm active:opacity-80"
                        onPress={() => router.push('/settings')}
                    >
                        <Text className="material-symbols-outlined text-[#4A3B2C] dark:text-[#e0d8cf]">settings</Text>
                    </Pressable>
                </View>

                {/* Search Bar - FIXED NATIVE TEXT INPUT */}
                <View className="relative justify-center w-full">
                    <View className="absolute left-4 z-10">
                        <Text className="material-symbols-outlined text-[#8b725b]">search</Text>
                    </View>
                    <TextInput
                        className="w-full py-3.5 pl-12 pr-4 rounded-xl bg-white dark:bg-[#2c241b] text-[#4A3B2C] dark:text-[#e0d8cf] text-base shadow-sm h-14"
                        placeholder="Search ingredients..."
                        placeholderTextColor="#8b725b"
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                </View>
            </View>

            <ScrollView
                className="flex-1 px-6"
                contentContainerStyle={{ paddingBottom: 120 }}
                showsVerticalScrollIndicator={false}
            >
                {/* Filter Chips */}
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    className="pb-6 pt-2"
                    contentContainerStyle={{ gap: 12 }}
                >
                    <FilterChip title="All Items" isActive />
                    <FilterChip title="Expiring Soon" />
                    <FilterChip title="Low Stock" />
                    <FilterChip title="Favorites" />
                </ScrollView>

                {/* Category: Vegetables */}
                <View className="mb-8">
                    <View className="flex-row items-center justify-between mb-4">
                        <Text className="text-xl font-bold text-[#825E34] dark:text-[#ba9b7a]">Vegetables</Text>
                        <Pressable>
                            <Text className="text-sm font-semibold text-[#8c5a2b]">View All</Text>
                        </Pressable>
                    </View>

                    <PantryItemRow
                        title="Carrots"
                        subtitle="Expiring soon"
                        subtitleColor="text-[#D47E30]"
                        showWarning={true}
                        initialQty={3}
                        imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDRB0kIFBpfHPh0ZfUzb3_RlujpfGcv_KeP23_rzJ4XXVdCVLynv83YQWdUhogWU1DzjmpRI8vgkqRLyGhEwvZDB6CMJFxkyquTnNIsrkUIdO5znJRC5fVx01kkEntNohbQ8pHyyRtZeZefXmYcPWVNKvjSs0gWNH2YO-rqt4lLiTP6uLroPoZ1i6ghthtNH4664j6E64_8-otyGT0sgdR1PWGmwnwEPZlDhLETjD6DqAvQo8mzrTV4eUQmOErzE1K1OmhCAVspjHo"
                    />
                    <PantryItemRow
                        title="Red Onions"
                        subtitle="Bought 5 days ago"
                        initialQty={5}
                        imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAWoO7EUnmA5Fi5TtdOuBRdZ_Ztrlx5BdJkruZHsYT2C7N7yhL3xUA-XcMp7juNsUpQO32-y0Sc6nda8zk7PkOPffc69FrZxMBjrESCCNegc6hdpRINoQ18H7kzhYT5MW-URxywSttW8u8r-1A_7GLXJaeMVGHGxMM4ZotVnkjvLmIDsGfir8AIy9D4zYjVVYJYuZvN_k7I9LzemfX2eboEJNkh-rbO45p9M1dscSJBxoTobT8fp78Tu7FeMTDCurztASMgyrfPCsM"
                    />
                </View>

                {/* Category: Dairy & Eggs */}
                <View className="mb-8">
                    <Text className="text-xl font-bold text-[#825E34] dark:text-[#ba9b7a] mb-4">Dairy & Eggs</Text>

                    <PantryItemRow
                        title="Whole Milk"
                        subtitle="Low Stock"
                        subtitleColor="text-[#D47E30]"
                        ringColor="border-[#D47E30]/30"
                        initialQty={1}
                        imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBR6cdBFwwrRrOKtHQb5Sjbs_VFaOwE1zRmCqXNKGmqFiZrhkOd6q_p8MFdeQokZpzT9wr8nymyS5unyiwQeOrWhtYgq8GDtRKcYyFrocjIs7BGWep2rY34g3zxW1hAAkVzBVGmnUohSGHlV4ZqMMdLS1vsNkWapkrzeoldVKSz-J8m_TEmtPu7nNiHru4OZ4dVOWARDh-4U6cco9QTukfgMUuSvygHVsUqiPN_cWw-wsyoXFd5Fmt_t3lhSzeDZw_KWO9e4RjFA5o"
                    />
                    <PantryItemRow
                        title="Cheddar Cheese"
                        subtitle="Good for 2 weeks"
                        initialQty={1}
                        imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDDfkM4CIysaJypHKRIs2YB_pnwlbkB4ap2rsqTHTrA49G8sdOkfQ_7QAYEFBhIoZFJIu_YBS_6nu5y-dbR5ni1Rb6Fqj4fqal_3ZQ34QXsLphwHV_h8tV97ux2P5IkLfo0fQ0nUo3nWZH3hPMavS2bYr6XO8JGTngcj6gAIVNzjrmL6wNsmIXT4vaUn-qOM6_57GPfHkdnlQLyau_nkWzDHjYH3yNAMMVeNNpYTjyox0o-y_1JL4YUc0N_8pEz6dVfUDR7Ne3Hp9g"
                    />
                </View>

                {/* Category: Spices */}
                <View className="mb-24">
                    <Text className="text-xl font-bold text-[#825E34] dark:text-[#ba9b7a] mb-4">Spices</Text>
                    <View className="flex-row gap-3">
                        <SpiceItemCard
                            title="Cumin"
                            subtitle="High Stock"
                            icon="grain"
                            initialQty={1}
                        />
                        <SpiceItemCard
                            title="Paprika"
                            subtitle="Low Stock"
                            icon="local_fire_department"
                            iconColor="text-[#D47E30]"
                            subtitleColor="text-[#D47E30]"
                            ringColor="border-[#D47E30]/30"
                            initialQty={0}
                            showWarning
                        />
                    </View>
                </View>
            </ScrollView>

            {/* Floating Actions Container */}
            <View className="absolute bottom-[30px] self-center w-[90%] flex-row justify-center z-10">
                <View className="flex-row gap-4 p-1.5 bg-white/90 dark:bg-[#2c241b]/90 rounded-full shadow-xl shadow-[#8c5a2b]/20 border border-[#F4F1EE] dark:border-transparent">
                    <Pressable
                        className="flex-row items-center gap-2 px-6 py-3 bg-[#F4F1EE] dark:bg-[#3a3228] rounded-full active:opacity-80"
                        onPress={() => router.push('/ingredient_selection')}
                    >
                        <Text className="material-symbols-outlined text-[#8c5a2b]">add</Text>
                        <Text className="text-[#8c5a2b] font-bold text-sm">Add Item</Text>
                    </Pressable>
                    <Pressable
                        className="flex-row items-center gap-2 px-6 py-3 bg-[#8c5a2b] rounded-full active:bg-[#7a4e25]"
                    >
                        <Text className="material-symbols-outlined text-white">qr_code_scanner</Text>
                        <Text className="text-white font-bold text-sm">Scan Receipt</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}
