import { Property, PropertyFilters, Province, Category, ApiResponse } from '../types/property';
import { mockService } from './mockService';

// Dati di fallback per le province
const fallbackProvinces: Province[] = [
  { id: 'VA', nome: 'Varese' },
  { id: 'MI', nome: 'Milano' },
  { id: 'CO', nome: 'Como' }
];

// Dati di fallback per le categorie
const fallbackCategories: Category[] = [
  { id: '1', nome: 'Appartamento' },
  { id: '2', nome: 'Villa' },
  { id: '3', nome: 'Ufficio' }
];

// Dati di fallback per le proprietà
const fallbackProperties: Property[] = [
  {
    id: '1',
    idcompany_id: '1',
    user_id: '1',
    partner_id: '1',
    constructionsite_id: '1',
    date_insert: '2024-01-01',
    date_update: '2024-01-01',
    date_available_for_business: '2024-01-01',
    rental: '0',
    rent_to_buy: '0',
    auction: '0',
    code: 'TEST001',
    company_code: 'COMP001',
    name: 'Appartamento in centro',
    technical_ref: '',
    for_holiday: '0',
    rented: '0',
    exclusive: '0',
    treaty: '0',
    special_negotiation: '0',
    newbuilding: '0',
    building_floors_number: '5',
    students: '0',
    investment: '0',
    luxury: '0',
    rooms: '3',
    size: '80',
    size_lot: '0',
    size_functional: '80',
    last_floor: '0',
    floor: '2',
    level_number: '2',
    view_id: '1',
    plot: '0',
    animals: '0',
    condominium: '1',
    hidden_price: '0',
    price: '250000',
    negotiable_price: '1',
    rental_insurance: '0',
    business_location: '0',
    beds: '2',
    energy_class: 'G',
    energy_class_value: '175',
    being_registered: '0',
    vat: '0',
    building_year: '1980',
    renovation_year: '2020',
    no_additional_cost: '0',
    monthly_costs: '100',
    annual_costs: '1200',
    heating_costs: '800',
    systems_status: '1',
    rent_to_buy_sale_price: '0',
    rent_to_buy_option_premium: '0',
    rent_to_buy_balance: '0',
    availability_notes: '',
    status: 'active',
    inhabited_by: {
      id: 1,
      label: 'Proprietario'
    },
    condition_type: {
      id: '1',
      desc: 'Ottimo'
    },
    building_type: {
      id: '1',
      desc: 'Residenziale'
    },
    contract_type: {
      id: '1',
      desc: 'Vendita'
    },
    ownership_type: {
      id: '1',
      desc: 'Piena proprietà'
    },
    building_class_type: {
      id: '1',
      desc: 'Civile'
    },
    designed_for_type: {
      id: '1',
      desc: 'Residenziale'
    },
    typology: {
      category_id: '1',
      category: 'Residenziale',
      type_id: '1',
      type: 'Appartamento',
      subtype_id: '1',
      subtype: 'Trilocale'
    },
    location: {
      country_id: '1',
      country: 'Italia',
      region_id: '1',
      region: 'Lombardia',
      province_id: '1',
      province: 'Varese',
      province_shortname: 'VA',
      city_id: '1',
      city: 'Varese',
      district_id: '1',
      district: 'Centro',
      subdistrict_id: '1',
      subdistrict: 'Centro storico',
      area_id: '1',
      area: 'Centro',
      position_id: '1',
      position: 'Centro',
      vista_id: '1',
      vista: 'Città',
      zip: '21100',
      public_address: 'Via Roma',
      public_street_number: '1',
      latitude: '45.8206',
      longitude: '8.8251',
      places_of_interest: 'Centro storico, Piazza, Ristoranti'
    },
    exposure: {
      n: true,
      s: false,
      w: false,
      e: true
    },
    auction_details: {
      auction_expertise: '',
      auction_date_incanto: '',
      auction_date_no_incanto: '',
      auction_base_price: '',
      auction_minimum_price: '',
      minimum_bid_auction: ''
    },
    features: {
      internals: [
        {
          id: '1',
          name: 'Cucina',
          size: '15',
          size_label: 'm²',
          number: '1',
          type: 'Interno'
        }
      ],
      externals: [
        {
          id: '1',
          name: 'Balcone',
          size: '8',
          size_label: 'm²',
          number: '1',
          type: 'Esterno'
        }
      ],
      systems: [
        {
          id: '1',
          name: 'Riscaldamento',
          size: null,
          size_label: null,
          number: '1',
          type: 'Sistema'
        }
      ],
      utilities: [
        {
          id: '1',
          name: 'Acqua',
          size: null,
          size_label: null,
          number: '1',
          type: 'Utilità'
        }
      ],
      distanze: [
        {
          desc: 'Centro',
          value: '500',
          uom: 'm'
        }
      ]
    },
    land: {
      available: false,
      mq: 0,
      cultivation: '',
      urbanized: false,
      irrigated: false,
      archaeological_area: false,
      fenced: false,
      parceling_out: false,
      building_land: false
    },
    price_detail: {
      last_update: '2024-01-01',
      old_price: '0'
    },
    images: [
      {
        url: '/images/affitti_little.jpg',
        thumb_url: '/images/affitti_little.jpg',
        main: '1',
        maps: '',
        planimetry: '',
        title: 'Soggiorno',
        description: 'Vista del soggiorno',
        width: '800',
        height: '600'
      }
    ]
  }
];

// Funzione helper per le chiamate API
async function apiRequest<T>(endpoint: string, method: string = 'GET', body?: any): Promise<T> {
  // In sviluppo, usa i dati di fallback
  if (process.env.NODE_ENV === 'development') {
    console.log('Sviluppo: uso dati di fallback');
    return mockService.getProperties() as Promise<T>;
  }

  // In produzione, usa l'API reale
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'https://www.affitti-co.it';
    const url = `${baseUrl}/api/agim-proxy.php${endpoint}`;
    console.log('URL completa:', url);
    console.log('Metodo:', method);
    console.log('Body:', body);

    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      console.error('Errore HTTP:', response.status, response.statusText);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Risposta API completa:', data);

    // Se la risposta è un array, lo convertiamo nel formato atteso
    if (Array.isArray(data)) {
      return {
        response: {
          result: 'success',
          error: '',
          items: data.length,
          returneditems: data.length,
          pages: 1,
          currentpage: 1
        },
        properties: data
      } as T;
    }

    return data as T;
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
}

// Service per le proprietà
export const propertyService = {
  // Ottieni tutte le proprietà
  async getProperties(page: number = 1, limit: number = 10): Promise<ApiResponse> {
    if (process.env.NODE_ENV === 'development') {
      return mockService.getProperties(page, limit);
    }

    try {
      const response = await apiRequest<ApiResponse>(`?context=properties&action=list`, 'POST', {
        page,
        limit
      });
      
      if (!response || !response.properties) {
        console.error('Risposta API non valida:', response);
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
      
      return response;
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
  },

  // Cerca proprietà con filtri
  async searchProperties(filters: PropertyFilters): Promise<ApiResponse> {
    if (process.env.NODE_ENV === 'development') {
      return mockService.searchProperties(filters);
    }

    try {
      console.log('Ricerca proprietà con filtri:', filters);
      const response = await apiRequest<ApiResponse>(`?context=properties&action=search`, 'POST', filters);
      
      if (!response || !response.properties) {
        console.error('Risposta API non valida:', response);
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
      
      return response;
    } catch (error) {
      console.error('Error searching properties:', error);
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
  },

  // Ottieni dettagli di una proprietà
  async getPropertyById(id: string): Promise<Property | null> {
    if (process.env.NODE_ENV === 'development') {
      return mockService.getPropertyById(id);
    }

    try {
      const response = await apiRequest<Property>(`?context=properties&action=detail`, 'POST', { id });
      return response;
    } catch (error) {
      console.error('Errore nel recupero dei dettagli:', error);
      throw error;
    }
  },

  // Ottieni lista province
  async getProvinces(): Promise<Province[]> {
    if (process.env.NODE_ENV === 'development') {
      return mockService.getProvinces();
    }

    try {
      const response = await apiRequest<{provinces: Province[]}>(`?context=location&action=provinces`, 'GET');
      return response.provinces;
    } catch (error) {
      console.error('Error fetching provinces:', error);
      return [];
    }
  },

  // Ottieni lista categorie
  async getCategories(): Promise<Category[]> {
    if (process.env.NODE_ENV === 'development') {
      return mockService.getCategories();
    }

    try {
      const response = await apiRequest<{categories: Category[]}>(`?context=properties&action=categories`, 'GET');
      return response.categories;
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  },

  async getAllProperties(): Promise<Property[]> {
    const response = await this.getProperties(1, 1000);
    if (!response.properties || !Array.isArray(response.properties)) {
      return [];
    }
    return response.properties;
  }
}; 