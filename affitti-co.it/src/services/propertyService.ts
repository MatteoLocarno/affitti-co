// Tipi minimi per funzionare (puoi sostituirli con i tuoi definitivi)
export interface ApiResponse {
  response: any;
  properties: any[];
}

// Service per le proprietà
export const propertyService = {
  async getProperties(page: number = 1, limit: number = 10): Promise<ApiResponse> {
    try {
      // Chiamata API reale (adatta l'endpoint se necessario)
      const response = await fetch(`/api/agim-proxy.php?context=properties&action=list`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ page, limit })
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching properties:', error);
      return {
        response: {
          result: 'success',
          error: '',
          items: 0,
          returneditems: 0,
          pages: 1,
          currentpage: 1
        },
        properties: []
      };
    }
  }
}; 