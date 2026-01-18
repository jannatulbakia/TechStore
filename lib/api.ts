// API utility functions - uses same origin (works with Next.js API routes)
// No need for external URL since API routes are in the same Next.js app

export const api = {
  // Helper function to build full API URL (relative to same origin)
  url: (endpoint: string) => endpoint,
  
  // Helper function for fetch requests with credentials
  fetch: async (endpoint: string, options: RequestInit = {}) => {
    return fetch(endpoint, {
      ...options,
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });
  },
  
  // API endpoints (relative paths work with Next.js API routes)
  endpoints: {
    items: '/api/items',
    item: (id: number) => `/api/items/${id}`,
    login: '/api/login',
    logout: '/api/logout',
    authStatus: '/api/auth/status',
  },
};
