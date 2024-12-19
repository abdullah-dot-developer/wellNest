import axios from "axios";
import { create } from "zustand";

axios.defaults.withCredentials = true;
export const useAuthStore = create((set) => ({
    user: null,
    isAuthenticated: false,
    error: null,
    message: null,
    isLoading: false,
    isCheckingAuth: true,

    // Check authentication status
    checkAuth: async () => {
        set({ isCheckingAuth: true });
        try {
            const res = await axios.get(`http://localhost:3000/api/auth/me`);
            set({ user: res?.data?.user, isAuthenticated: true, isCheckingAuth: false });
        } catch (error) {
            set({ error: error?.response?.data?.message, user: null, isAuthenticated: false, isCheckingAuth: false });
        }
    },

    signup: async (name, email, password) => {
        set({ isLoading: true, error: null, message: null });
        try {
            const res = await axios.post(`http://localhost:3000/api/auth/sign-up`, {
                name,
                email,
                password,
            });
            set({
                user: res?.data?.user,
                isAuthenticated: true,
                isLoading: false,
                message: res?.data?.message,
            });
        } catch (error) {
            set({
                error: error?.response?.data?.message || "Something went wrong",
                isAuthenticated: false,
                isLoading: false,
            });
            throw error; // rethrow the error if needed
        }
    },

    login: async (email, password) => {
        set({ isLoading: true, error: null, message: null });
        try {
            const res = await axios.post(`http://localhost:3000/api/auth/login`, {
                email,
                password,
            });
            // console.log(res);
            set({
                user: res?.data?.user,
                isAuthenticated: true,
                isLoading: false,
                message: res?.data?.message,
            });
        } catch (error) {
            set({
                error: error?.response?.data?.message || "Invalid email or password",
                isAuthenticated: false,
                isLoading: false,
            });
            throw error; // rethrow the error if needed
        }
    },
    logout: async () => {
        set({ isLoading: true })
        try {
            const res = await axios.get(`http://localhost:3000/api/auth/logout`);
            // console.log(res);
            set({ message: res?.data?.message, isLoading: false, isAuthenticated: false, user: null });
        } catch (error) {
            set({
                error: error?.response?.data?.message,
                isAuthenticated: true,
                isLoading: false,
            });
        }
    },
    updateProfileImage: async (profileImg) => {
        set({ isLoading: true, error: null, message: null });
        try {
            const res = await axios.put(`http://localhost:3000/api/auth/update-img`, {
                profileImg,
            }, { withCredentials: true });
            // console.log(res);
            // Update the user state with the new profile image
            set((state) => ({
                ...state,
                user: { ...state.user, profileImg: res?.data?.user?.profileImg },
                message: res?.data?.message,
                isLoading: false,
            }));
        } catch (error) {
            set({
                error: error?.response?.data?.message || "Failed to update profile image",
                isLoading: false,
            });
            throw error;
        }
    },
    postInfo: async (
        fullName,
        subject,
        email,
        phoneNumber,
        company,
        city,
        message,
    ) => {
        set({ isLoading: true, error: null })
        try {
            const res = await axios.post(`http://localhost:3000/api/auth/share-info`, {
                fullName,
                subject,
                email,
                phoneNumber,
                company,
                city,
                message,
            })

            set({ message: res?.data?.message, isLoading: false, })
        } catch (error) {
            console.log(error)
            set({
                error: error?.response?.data?.message || error.message,
                isLoading: false,
            });
            throw error;
        }
    }
}));
