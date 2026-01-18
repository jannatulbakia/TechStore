// API utility functions with environment-aware base URL
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export const api = {
  baseUrl: API_BASE_URL,
  
  // Helper function to build full API URL
  url: (endpoint: string) => `${API_BASE_URL}${endpoint}`,
  
  // Helper function for fetch requests with credentials
  fetch: async (endpoint: string, options: RequestInit = {}) => {
    return fetch(api.url(endpoint), {
      ...options,
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });
  },
  
  // API endpoints
  endpoints: {
    items: '/api/items',
    item: (id: number) => `/api/items/${id}`,
    login: '/api/login',
    logout: '/api/logout',
    authStatus: '/api/auth/status',
  },
};
