import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Pressable, ScrollView, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';

// Helper for User Message Bubble
const UserMessage = ({ text }: { text: string }) => (
    <View className="flex-row items-end gap-3 justify-end group mb-4">
        <View className="flex-col gap-1 items-end max-w-[80%]">
            <View className="p-4 bg-white dark:bg-[#2d241a] rounded-2xl rounded-br-sm shadow-sm">
                <Text className="text-[#4A3B2C] dark:text-slate-100 text-[15px] leading-relaxed">
                    {text}
                </Text>
            </View>
        </View>
    </View>
);

// Helper for AI Message Bubble
const AIMessage = ({ text, isTyping = false }: { text: string, isTyping?: boolean }) => (
    <View className="flex-row items-end gap-3 group mb-4">
        <View className="w-8 h-8 rounded-full bg-[#d57f30] items-center justify-center shadow-sm shrink-0">
            <Text className="material-symbols-outlined text-white text-[18px]">auto_awesome</Text>
        </View>
        <View className="flex-col gap-1 max-w-[85%]">
            <Text className="text-xs text-slate-500 dark:text-slate-400 ml-1 font-medium">Homely AI</Text>
            <View className="p-4 bg-[#d57f30] rounded-2xl rounded-bl-sm shadow-sm">
                {isTyping ? (
                    <View className="flex-row items-center h-5 gap-1">
                        <ActivityIndicator size="small" color="#FFF" />
                    </View>
                ) : (
                    <Text className="text-white text-[15px] leading-relaxed">
                        {text}
                    </Text>
                )}
            </View>
        </View>
    </View>
);

// Helper for Quick Suggestion Chips
const QuickSuggestion = ({ icon, text, onPress }: any) => (
    <Pressable
        className="h-9 px-4 rounded-full bg-white dark:bg-[#2d241a] border border-[#d57f30]/20 shadow-sm flex-row items-center gap-2 active:bg-gray-50 mr-2"
        onPress={onPress}
    >
        <Text className="material-symbols-outlined text-[#d57f30] text-[18px]">{icon}</Text>
        <Text className="text-[#d57f30] text-sm font-semibold">{text}</Text>
    </Pressable>
);

interface Message {
    id: string;
    role: 'user' | 'ai';
    text: string;
    isTyping?: boolean;
}

export default function AIAssistant() {
    const router = useRouter();
    const [inputText, setInputText] = useState('');
    const [messages, setMessages] = useState<Message[]>([
        { id: '1', role: 'ai', text: "Hello! I'm your Homely AI Kitchen Assistant. What are we cooking today?" }
    ]);
    const scrollViewRef = useRef<ScrollView>(null);

    const handleSend = (text: string) => {
        if (!text.trim()) return;

        // Add user message
        const newMessage: Message = { id: Date.now().toString(), role: 'user', text: text.trim() };
        setMessages(prev => [...prev, newMessage, { id: 'typing', role: 'ai', text: '', isTyping: true }]);
        setInputText('');

        // Mock AI response delay
        setTimeout(() => {
            setMessages(prev => {
                const filtered = prev.filter(m => m.id !== 'typing');
                return [...filtered, {
                    id: Date.now().toString(),
                    role: 'ai',
                    text: "That sounds delicious! I can certainly help you with that. Would you like me to find a recipe or check if you have the ingredients in your pantry?"
                }];
            });
        }, 1500);
    };

    return (
        <KeyboardAvoidingView
            className="flex-1 bg-[#FDFBD4] dark:bg-[#201912]"
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            {/* Header */}
            <View className="flex-row items-center justify-between px-4 py-3 bg-[#FDFBD4]/90 dark:bg-[#201912]/90 border-b border-[#d57f30]/5 pt-12 z-50 shadow-sm">
                <Pressable
                    className="w-10 h-10 items-center justify-center rounded-full active:bg-black/5 dark:active:bg-white/10"
                    onPress={() => router.back()}
                >
                    <Text className="material-symbols-outlined text-slate-800 dark:text-slate-200">arrow_back_ios_new</Text>
                </Pressable>

                <View className="items-center">
                    <Text className="text-slate-900 dark:text-white text-lg font-bold tracking-tight">AI Kitchen Helper</Text>
                    <View className="flex-row items-center gap-1.5 mt-0.5">
                        <View className="h-2 w-2 rounded-full bg-green-500" />
                        <Text className="text-[10px] font-bold text-[#d57f30] uppercase tracking-wider">Online</Text>
                    </View>
                </View>

                <Pressable className="w-10 h-10 items-center justify-center rounded-full active:bg-black/5 dark:active:bg-white/10">
                    <Text className="material-symbols-outlined text-slate-800 dark:text-slate-200">more_vert</Text>
                </Pressable>
            </View>

            {/* Chat Area */}
            <ScrollView
                ref={scrollViewRef}
                className="flex-1 px-4"
                contentContainerStyle={{ paddingTop: 24, paddingBottom: 160 }}
                showsVerticalScrollIndicator={false}
                onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
            >
                <View className="items-center mb-6">
                    <Text className="text-xs font-medium text-slate-400 dark:text-slate-500 bg-black/5 dark:bg-white/5 px-3 py-1 rounded-full">
                        Today
                    </Text>
                </View>

                {messages.map((msg) => {
                    if (msg.role === 'user') {
                        return <UserMessage key={msg.id} text={msg.text} />;
                    } else {
                        return <AIMessage key={msg.id} text={msg.text} isTyping={msg.isTyping} />;
                    }
                })}
            </ScrollView>

            {/* Floating Bottom Area */}
            <View className="absolute bottom-0 left-0 w-full bg-[#FDFBD4] dark:bg-[#201912] pt-4 pb-8 px-4 z-40 shadow-xl border-t border-[#d57f30]/10">

                {/* Quick Suggestions */}
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    className="mb-4"
                    contentContainerStyle={{ paddingRight: 20 }}
                >
                    <QuickSuggestion
                        icon="kitchen"
                        text="Cook from Pantry"
                        onPress={() => handleSend("Can you suggest 6-8 different dishes I can make strictly using ONLY the ingredients currently in my pantry?")}
                    />
                    <QuickSuggestion
                        icon="favorite"
                        text="Healthy Options"
                        onPress={() => handleSend("Give me 3 highly nutritious and healthy recipe options.")}
                    />
                    <QuickSuggestion
                        icon="timer"
                        text="Quick 15-min"
                        onPress={() => handleSend("What is a quick and delicious meal I can cook in under 15 minutes?")}
                    />
                    <QuickSuggestion
                        icon="list_alt"
                        text="Step-by-Step Guide"
                        onPress={() => handleSend("Please provide detailed step-by-step cooking instructions for a quick meal.")}
                    />
                </ScrollView>

                {/* Input Bar */}
                <View className="flex-row items-center gap-3 relative z-50">
                    <View className="flex-1 relative shadow-sm rounded-full bg-white dark:bg-[#2d241a] h-14 justify-center border border-[#d57f30]/20">
                        <TextInput
                            className="w-full h-full text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 text-base px-6 rounded-full"
                            placeholder="Ask me anything..."
                            value={inputText}
                            onChangeText={setInputText}
                            onSubmitEditing={() => handleSend(inputText)}
                            returnKeyType="send"
                        />
                    </View>
                    <Pressable
                        className="h-14 w-14 shrink-0 rounded-full bg-[#d57f30] shadow-lg shadow-[#d57f30]/40 items-center justify-center active:scale-95 active:bg-[#b06624]"
                        onPress={() => handleSend(inputText)}
                    >
                        <Text className="material-symbols-outlined text-[#FFF] text-[24px]">send</Text>
                    </Pressable>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}
