// Utility to get backend URL with fallback to Vercel
export const getBackendUrl = () => {
  if (import.meta.env.VITE_BACKEND_URL && !import.meta.env.VITE_BACKEND_URL.includes('localhost')) {
    return import.meta.env.VITE_BACKEND_URL;
  }
  // Fallback to Vercel backend URL
  return 'https://url-shortener-backend-git-main-aviral-mishras-projects-ff8b4a3b.vercel.app/';
};

