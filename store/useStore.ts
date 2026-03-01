import { create } from 'zustand';

interface UserProfile {
    name: string;
    avatarUrl: string;
    streak: number;
    // Add more fields later as needed
}

interface AppState {
    userProfile: UserProfile;
    setUserProfile: (profile: Partial<UserProfile>) => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

export const useStore = create<AppState>((set) => ({
    userProfile: {
        name: 'Sarah',
        avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClq2-LSd3UlmztGhun3El74l3w4kfpH-qB2Rd4UXLvKaoY0r_h8eXoN8DcRKMl1VHCFSUH5B-qeLDZjeNj0VMjz2kCdr4gBRo_E1nUnD0ur67pL8Q5shlzLkwKkLx8WFDGQT30xmHlpdca5O2rny1RiyCphObJiZ9Ncug9Y6hTNWnIno2wUWXFHAFDoAr2ri5MqZSAhtbNcL0AKhEHUKxpbywUTbn3Ogw8Qjy5qBgKYAqVeh2JF2kKO3jf2lDiUTgB2hBJWlAXkXU',
        streak: 7,
    },
    setUserProfile: (profile) => set((state) => ({
        userProfile: { ...state.userProfile, ...profile }
    })),
    searchQuery: '',
    setSearchQuery: (query) => set({ searchQuery: query }),
}));
