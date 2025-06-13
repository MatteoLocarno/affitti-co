export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost/affitti-and-co',
  ENDPOINTS: {
    PROPERTIES: '/api/agim-proxy.php',
    PROVINCES: '/api/agim-proxy.php',
    CATEGORIES: '/api/agim-proxy.php'
  }
}; 