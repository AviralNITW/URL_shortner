import { create } from "zustand";
import { logout_user } from "../api/user.api";

const useAuthStore = create((set) => ({
  isAuthReady: false,
  isLoggedIn: false,
  user: null,
  urls: [],

  login: (user, urls) =>
    set(() => ({
      isAuthReady: true,
      isLoggedIn: true,
      user,
      urls,
    })),

  logout: async () => {
    // Only call logout API if user was logged in and backend is available
    if (useAuthStore.getState().isLoggedIn) {
      try {
        await logout_user();
      } catch (err) {
        // Silently fail if backend is not available
        console.warn("Backend not available for logout");
      }
    }

    set(() => ({
      isAuthReady: true,
      isLoggedIn: false,
      user: null,
      urls: [],
    }));
  },

  updateUser: (user) =>
    set(() => ({
      user,
    })),

  addUrl: (url) =>
    set((state) => ({
      urls: [...state.urls, url],
    })),

  removeUrl: (rUrl) => {
    set((state) => ({
      urls: state.urls.filter((url) => url._id !== rUrl._id),
    }));
  },
}));

export default useAuthStore;
