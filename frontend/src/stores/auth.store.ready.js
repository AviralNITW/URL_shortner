import useAuthStore from "./auth.store";
import { refresh_user } from "../api/user.api";

const login = useAuthStore.getState().login;
const logout = useAuthStore.getState().logout;

const readyAuthStore = async () => {
  if (useAuthStore.getState().isAuthReady) return;

  try {
    const { user, urls } = await refresh_user();
    login(user, urls);
  } catch (err) {
    // Silently fail if backend is not available (not deployed yet)
    // Just mark auth as ready and user as not logged in
    useAuthStore.getState().logout();
  }
};

export default readyAuthStore;
