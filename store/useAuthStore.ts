import { create } from "zustand";

type AuthState = {
    token: string | null;
    isLoggedIn: boolean;
    login: (token: string) => void;
    logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
    token: null,
    isLoggedIn: false,

    login: (token: string) =>
        set(() => ({
            token,
            isLoggedIn: true,
        })),

    logout: () =>
        set(() => ({
        token: null,
        isLoggedIn: false,
    })),
}));
