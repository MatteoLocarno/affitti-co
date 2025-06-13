const API_BASE_URL = process.env.NODE_ENV === 'development'
  ? 'https://www.affitti-co.it/agim-proxy.php'
  : '/api/agim-proxy.php';

export interface Property {
  id: string;
  name: string;
  price: string;
  rooms: string;
  size: string;
  location: {
    city: string;
    province: string;
    public_address: string;
  };
  images: Array<{
    url: string;
    thumb_url: string;
    main: string;
  }>;
  features: {
    internals: Array<{
      id: string;
      name: string;
    }>;
    externals: Array<{
      id: string;
      name: string;
    }>;
  };
}

export interface ApiResponse {
  response: {
    result: string;
    error: string;
    items: number;
    returneditems: number;
    pages: number;
    currentpage: number;
  };
  properties: Property[];
}

export const api = {
  async getProperties(page: number = 1, perPage: number = 10): Promise<ApiResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}?action=list&context=properties`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          page,
          per_page: perPage
        })
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Errore nel recupero delle proprietà:', error);
      throw error;
    }
  },

  async getPropertyById(id: string): Promise<Property> {
    try {
      const response = await fetch(`${API_BASE_URL}?action=get&context=properties&id=${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error(`Errore nel recupero della proprietà ${id}:`, error);
      throw error;
    }
  },

  async searchProperties(params: any): Promise<ApiResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}?action=search&context=properties`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params)
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Errore nella ricerca delle proprietà:', error);
      throw error;
    }
  }
}; 