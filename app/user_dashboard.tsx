import React from 'react';
import { View, Text, Image, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function UserDashboard() {
    const router = useRouter();

    return (
        <ScrollView
            className="bg-background-cream dark:bg-background-dark flex flex-col min-h-screen pb-20"
            contentContainerStyle={{ flexGrow: 1 }}
        >
            {/* Header Section */}
            <View className="pt-12 px-5 pb-4 flex flex-row justify-between items-center bg-background-cream/90 dark:bg-background-dark/90 sticky top-0 z-10">
                <View className="flex flex-row items-center gap-3">
                    <View className="relative">
                        <View className="h-12 w-12 rounded-full overflow-hidden border-2 border-white dark:border-neutral/30 bg-surface shadow-card">
                            <Image
                                alt="Smiling woman profile picture"
                                className="h-full w-full object-cover"
                                source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuClq2-LSd3UlmztGhun3El74l3w4kfpH-qB2Rd4UXLvKaoY0r_h8eXoN8DcRKMl1VHCFSUH5B-qeLDZjeNj0VMjz2kCdr4gBRo_E1nUnD0ur67pL8Q5shlzLkwKkLx8WFDGQT30xmHlpdca5O2rny1RiyCphObJiZ9Ncug9Y6hTNWnIno2wUWXFHAFDoAr2ri5MqZSAhtbNcL0AKhEHUKxpbywUTbn3Ogw8Qjy5qBgKYAqVeh2JF2kKO3jf2lDiUTgB2hBJWlAXkXU" }}
                            />
                        </View>
                        <View className="absolute -bottom-1 -right-1 bg-surface dark:bg-background-dark p-0.5 rounded-full shadow-sm">
                            <View className="bg-green-500 h-3 w-3 rounded-full border-2 border-white dark:border-background-dark" />
                        </View>
                    </View>
                    <View>
                        <Text className="text-sm font-medium text-neutral-light dark:text-gray-400">
                            Good Evening,
                        </Text>
                        <Text className="text-xl font-bold text-neutral dark:text-white leading-tight">
                            Sarah
                        </Text>
                    </View>
                </View>
                <View className="flex flex-row items-center gap-2 bg-surface dark:bg-white/10 px-3 py-1.5 rounded-full shadow-card border border-orange-100 dark:border-white/5">
                    {/* Note: In a real Expo app we'd use @expo/vector-icons, but retaining material-symbols as text as requested */}
                    <Text className="material-symbols-outlined filled text-accent text-[20px]">local_fire_department</Text>
                    <Text className="text-sm font-bold text-accent">7 Days</Text>
                </View>
            </View>

            {/* Main Content */}
            <View className="flex-1 px-5 flex flex-col gap-6">

                {/* Search Bar */}
                <View className="relative group">
                    <View className="absolute inset-y-0 left-0 pl-3 flex justify-center items-center z-10 pointer-events-none">
                        <Text className="material-symbols-outlined text-neutral-light/70">search</Text>
                    </View>
                    <Pressable
                        className="w-full pl-10 pr-3 py-3 rounded-xl bg-surface dark:bg-white/10 shadow-card flex flex-row items-center"
                        onPress={() => router.push('/recipe_discovery')}
                    >
                        <Text className="text-neutral-light/70">Search or discover recipes...</Text>
                    </Pressable>
                    <View className="absolute inset-y-0 right-0 pr-2 flex justify-center items-center z-10">
                        <Pressable
                            className="p-1.5 rounded-lg active:bg-neutral-light/10 transition-colors"
                            onPress={() => router.push('/search_filters')}
                        >
                            <Text className="material-symbols-outlined text-neutral-light">tune</Text>
                        </Pressable>
                    </View>
                </View>

                {/* Next Meal Widget (Hero) */}
                <View>
                    <View className="flex flex-row justify-between items-end mb-3">
                        <Pressable
                            className="flex flex-row items-center gap-1"
                            onPress={() => router.push('/weekly_meal_planner')}
                        >
                            <Text className="text-lg font-bold text-neutral dark:text-white">
                                Next Meal
                            </Text>
                            <Text className="material-symbols-outlined text-neutral-light/50 text-[18px]">
                                open_in_new
                            </Text>
                        </Pressable>
                        <View className="bg-surface dark:bg-white/10 px-2 py-0.5 rounded-md">
                            <Text className="text-sm font-medium text-neutral-light">
                                Today, 7:00 PM
                            </Text>
                        </View>
                    </View>

                    <Pressable
                        className="bg-surface dark:bg-white/5 rounded-2xl p-4 shadow-soft overflow-hidden relative"
                        onPress={() => router.push('/recipe_details')}
                    >
                        <View className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-primary/20 rounded-full dark:opacity-10" />

                        <View className="flex flex-col sm:flex-row gap-4">
                            <View className="w-full sm:w-1/3 aspect-video sm:aspect-square rounded-xl overflow-hidden relative shadow-inner">
                                <Image
                                    alt="Delicious Paneer Curry in a bowl"
                                    className="w-full h-full object-cover"
                                    source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGq4sM9f32omVPW8Rn1kRDdJZziNP-Q5A8c-qXX0ojN8jtr7BkqdwjpJ1hXcxJItGdBmczvRpE_OzURaW2GaSlzWuJSkW2Xu2g-J9O4ZITJVSB8IzgE92IOreVSXgu2UqVCl6YS1fHHZzv7xLsptnqskrf0wgkj8m785s0nGJfASHII_i1lDXK79w8DIDk8iJZ67ydcphWz-JkqXUHXluZHD46oBhQFVcCi_osdEExQaFK2av6I2maiNGzcf5uBL5XEZG7gDPu740" }}
                                />
                                <View className="absolute top-2 left-2 bg-black/60 px-2 py-1 rounded-md">
                                    <Text className="text-white text-xs font-bold tracking-wide">DINNER</Text>
                                </View>
                            </View>

                            <View className="flex flex-col justify-between flex-1 py-1">
                                <View>
                                    <Text className="text-xl font-bold text-neutral dark:text-white mb-1">Paneer Butter Masala</Text>
                                    <Text className="text-sm text-neutral-light dark:text-gray-400" numberOfLines={2}>
                                        Rich and creamy curry made with paneer, spices, onions, tomatoes, cashews and butter.
                                    </Text>
                                </View>

                                <View className="flex flex-row items-center gap-4 mt-4">
                                    <View className="flex flex-row items-center gap-1">
                                        <Text className="material-symbols-outlined text-neutral-light dark:text-gray-400 text-[16px]">schedule</Text>
                                        <Text className="text-xs font-medium text-neutral-light dark:text-gray-400">45 min</Text>
                                    </View>
                                    <View className="flex flex-row items-center gap-1">
                                        <Text className="material-symbols-outlined text-neutral-light dark:text-gray-400 text-[16px]">local_fire_department</Text>
                                        <Text className="text-xs font-medium text-neutral-light dark:text-gray-400">420 Kcal</Text>
                                    </View>
                                </View>

                                <Pressable
                                    className="mt-4 w-full bg-primary py-2.5 rounded-xl shadow-md flex flex-row items-center justify-center gap-2 active:opacity-90 transition-opacity"
                                    onPress={() => router.push('/guided_cook_mode')}
                                >
                                    <Text className="material-symbols-outlined text-primary-content text-[20px]">skillet</Text>
                                    <Text className="font-bold text-sm text-primary-content">Start Cooking</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Pressable>
                </View>

                {/* Stats Grid */}
                <View className="flex flex-row gap-4">
                    {/* Weekly Goals */}
                    <Pressable
                        className="flex-1 bg-surface dark:bg-white/5 p-4 rounded-2xl shadow-card flex flex-col justify-between h-40"
                        onPress={() => router.push('/weekly_meal_planner')}
                    >
                        <View className="flex flex-row justify-between items-start">
                            <View className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full">
                                <Text className="material-symbols-outlined filled text-green-600 dark:text-green-400">check_circle</Text>
                            </View>
                            <View className="bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">
                                <Text className="text-xs font-bold text-green-600">+12%</Text>
                            </View>
                        </View>
                        <View>
                            <Text className="text-sm font-medium text-neutral-light dark:text-gray-400 mb-1">Weekly Goal</Text>
                            <View className="flex flex-row items-end gap-1 mb-2">
                                <Text className="text-2xl font-bold text-neutral dark:text-white">4</Text>
                                <Text className="text-sm font-bold text-neutral-light dark:text-gray-500 mb-1">/ 5 Meals</Text>
                            </View>
                            <View className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2">
                                <View className="bg-primary h-2 rounded-full" style={{ width: '80%' }} />
                            </View>
                        </View>
                    </Pressable>

                    {/* Saved Recipes */}
                    <Pressable
                        className="flex-1 bg-surface dark:bg-white/5 p-4 rounded-2xl shadow-card flex flex-col justify-between h-40"
                        onPress={() => router.push('/favorites')}
                    >
                        <View className="flex flex-row justify-between items-start">
                            <View className="bg-red-100 dark:bg-red-900/30 p-2 rounded-full">
                                <Text className="material-symbols-outlined filled text-red-500 dark:text-red-400">favorite</Text>
                            </View>
                            <Text className="material-symbols-outlined text-neutral-light/50 text-[20px]">
                                arrow_forward
                            </Text>
                        </View>
                        <View>
                            <Text className="text-sm font-medium text-neutral-light dark:text-gray-400 mb-1">Saved Recipes</Text>
                            <View className="flex flex-row items-center gap-2">
                                <Text className="text-3xl font-bold text-neutral dark:text-white">142</Text>
                                <Text className="text-xs font-medium text-neutral-light dark:text-gray-500 mt-2">items</Text>
                            </View>
                        </View>
                    </Pressable>
                </View>

                {/* Dietary Preferences */}
                <View>
                    <View className="flex flex-row justify-between items-center mb-3">
                        <Text className="text-lg font-bold text-neutral dark:text-white">My Preferences</Text>
                        <Pressable onPress={() => router.push('/dietary_preferences')}>
                            <Text className="text-sm font-bold text-primary">Edit</Text>
                        </Pressable>
                    </View>
                    <View className="bg-surface dark:bg-white/5 rounded-2xl p-5 shadow-card">
                        <View className="flex flex-row flex-wrap gap-2">
                            {[
                                { label: "🌱 Vegan" },
                                { label: "🌾 Gluten-Free" },
                                { label: "🌶️ Spicy" },
                                { label: "🥜 Nut-Free" },
                            ].map((pref, index) => (
                                <View key={index} className="px-3 py-1.5 bg-primary/10 dark:bg-white/10 rounded-lg">
                                    <Text className="text-neutral dark:text-gray-200 text-sm font-medium">{pref.label}</Text>
                                </View>
                            ))}

                            <Pressable
                                className="px-3 py-1.5 border border-dashed border-neutral-light/50 rounded-lg flex flex-row items-center gap-1 active:bg-neutral-light/10"
                                onPress={() => router.push('/dietary_preferences')}
                            >
                                <Text className="material-symbols-outlined text-neutral-light text-[16px]">add</Text>
                                <Text className="text-neutral-light text-sm font-medium">Add</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>

                {/* Recent Activity */}
                <View className="mb-6">
                    <Text className="text-lg font-bold text-neutral dark:text-white mb-3">Recently Cooked</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="-mx-5 px-5">
                        <View className="flex flex-row gap-4 pr-10">

                            {/* Card 1 */}
                            <Pressable
                                className="w-[160px] bg-surface dark:bg-white/5 rounded-xl overflow-hidden shadow-card"
                                onPress={() => router.push('/recipe_details')}
                            >
                                <View className="h-24 w-full relative">
                                    <Image
                                        alt="Green salad bowl"
                                        className="w-full h-full object-cover"
                                        source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpVl5CSDjzmSVSiUMXgaEpWCq4qPMtvUgFyoLYEr8nlxrPA15X6YgYO3k4wSJ9IiHuE32QJdLgajRezrUKMLUCY16SBX7Ejk-YJCl6LrzuAWGs7hpZdpC3PIN7OVnjAuueCYQbc0neovKnuL6vdJT06oMZAQerfKfIT2N_clzUzv-5eFY-bzP4w5T3NFv7jFNZx-wT-eLHxKPb4Wzn5pJC-wfWTUSRa8YPfTJGH5HtDyw9MDwA6Rg0GEUZRb0xMp2WPD0tux7lBYU" }}
                                    />
                                </View>
                                <View className="p-3">
                                    <Text className="text-sm font-bold text-neutral dark:text-white" numberOfLines={1}>Quinoa Salad</Text>
                                    <View className="flex flex-row items-center gap-1 mt-1">
                                        <Text className="material-symbols-outlined text-yellow-500 text-[14px] filled">star</Text>
                                        <Text className="text-xs text-neutral-light dark:text-gray-400">4.8</Text>
                                    </View>
                                </View>
                            </Pressable>

                            {/* Card 2 */}
                            <Pressable
                                className="w-[160px] bg-surface dark:bg-white/5 rounded-xl overflow-hidden shadow-card"
                                onPress={() => router.push('/recipe_details')}
                            >
                                <View className="h-24 w-full relative">
                                    <Image
                                        alt="Grilled chicken dish"
                                        className="w-full h-full object-cover"
                                        source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNHy5yFnBThB7MB_ee0Mc8R92Uhmiwowein8MwcEespaJ32eDk2Zh4S062nr-30E2KJJhv1l1GdkGjcuubfbcLmVsvkVgb2GaVZPFk-1eFMurNBmFSgrgoQOVjxZAdPFUo6UYEYTMM9-E8euNE2ZwtLl2x8akwa98Sljt-Pad0I9dvkVrZp8Aocxz2Lj0rebhFngRKzSEz24q_JD-vv_DwO56sLoagnFNipwRR-TfwtEBpnysOJwMh01lSfQSOwbQMn6CPQXVjQ50" }}
                                    />
                                </View>
                                <View className="p-3">
                                    <Text className="text-sm font-bold text-neutral dark:text-white" numberOfLines={1}>Lemon Chicken</Text>
                                    <View className="flex flex-row items-center gap-1 mt-1">
                                        <Text className="material-symbols-outlined text-yellow-500 text-[14px] filled">star</Text>
                                        <Text className="text-xs text-neutral-light dark:text-gray-400">5.0</Text>
                                    </View>
                                </View>
                            </Pressable>

                            {/* Card 3 */}
                            <Pressable
                                className="w-[160px] bg-surface dark:bg-white/5 rounded-xl overflow-hidden shadow-card"
                                onPress={() => router.push('/recipe_details')}
                            >
                                <View className="h-24 w-full relative">
                                    <Image
                                        alt="Avocado toast"
                                        className="w-full h-full object-cover"
                                        source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuAksGLkEWePnks57eyG4Hbv4A3XHU_fBuhHdFTyjFybgCHKl1fP7D2oTBQinL3dah5h4C34iD6tVwZi3Xk2gTYoeZELgkoBbaNWFd9S9R-DFHRT8u7fmmzUYjKrxmrWxX8mAeR2zALHqQqlLqGWi2nN30d8FpDMTt2Bpnf38QPzkFdchbQ1BlOFIRQqqvVw-oHW0m_E5Dk5gDkFSxq2CCWYec3QeFLRF03HaCH1T9eNRxp0xj04Q-x34X_mJHPDAaUc1hACksAGva4" }}
                                    />
                                </View>
                                <View className="p-3">
                                    <Text className="text-sm font-bold text-neutral dark:text-white" numberOfLines={1}>Avo Toast</Text>
                                    <View className="flex flex-row items-center gap-1 mt-1">
                                        <Text className="material-symbols-outlined text-yellow-500 text-[14px] filled">star</Text>
                                        <Text className="text-xs text-neutral-light dark:text-gray-400">4.5</Text>
                                    </View>
                                </View>
                            </Pressable>

                        </View>
                    </ScrollView>
                </View>

            </View>
        </ScrollView>
    );
}
