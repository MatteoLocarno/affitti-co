import { Property, PropertyFilters, Province, Category, ApiResponse } from '../types/property';

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
      public_address: 'Via Roma 1',
      public_street_number: '1',
      latitude: '45.8206',
      longitude: '8.8251',
      places_of_interest: 'Centro storico'
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
      internals: [],
      externals: [],
      systems: [],
      utilities: [],
      distanze: []
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
  },
  {
    id: '2',
    idcompany_id: '1',
    user_id: '1',
    partner_id: '1',
    constructionsite_id: '1',
    date_insert: '2024-01-01',
    date_update: '2024-01-01',
    date_available_for_business: '2024-01-01',
    rental: '1',
    rent_to_buy: '0',
    auction: '0',
    code: 'TEST002',
    company_code: 'COMP001',
    name: 'Villa con giardino',
    technical_ref: '',
    for_holiday: '0',
    rented: '0',
    exclusive: '1',
    treaty: '0',
    special_negotiation: '0',
    newbuilding: '0',
    building_floors_number: '2',
    students: '0',
    investment: '0',
    luxury: '1',
    rooms: '6',
    size: '200',
    size_lot: '500',
    size_functional: '180',
    last_floor: '0',
    floor: '0',
    level_number: '2',
    view_id: '1',
    plot: '1',
    animals: '1',
    condominium: '0',
    hidden_price: '0',
    price: '850000',
    negotiable_price: '1',
    rental_insurance: '0',
    business_location: '0',
    beds: '4',
    energy_class: 'C',
    energy_class_value: '120',
    being_registered: '0',
    vat: '0',
    building_year: '2010',
    renovation_year: '2020',
    no_additional_cost: '0',
    monthly_costs: '200',
    annual_costs: '2400',
    heating_costs: '1500',
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
      type_id: '2',
      type: 'Villa',
      subtype_id: '2',
      subtype: 'Villa indipendente'
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
      district_id: '2',
      district: 'Periferia',
      subdistrict_id: '2',
      subdistrict: 'Zona residenziale',
      area_id: '2',
      area: 'Residenziale',
      position_id: '2',
      position: 'Periferia',
      vista_id: '2',
      vista: 'Giardino',
      zip: '21100',
      public_address: 'Via dei Giardini',
      public_street_number: '10',
      latitude: '45.8306',
      longitude: '8.8351',
      places_of_interest: 'Parco, Scuole, Supermercato'
    },
    exposure: {
      n: true,
      s: true,
      w: true,
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
          size: '25',
          size_label: 'm²',
          number: '1',
          type: 'Interno'
        },
        {
          id: '2',
          name: 'Soggiorno',
          size: '40',
          size_label: 'm²',
          number: '1',
          type: 'Interno'
        }
      ],
      externals: [
        {
          id: '1',
          name: 'Giardino',
          size: '500',
          size_label: 'm²',
          number: '1',
          type: 'Esterno'
        },
        {
          id: '2',
          name: 'Terrazza',
          size: '30',
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
        },
        {
          id: '2',
          name: 'Climatizzazione',
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
        },
        {
          id: '2',
          name: 'Gas',
          size: null,
          size_label: null,
          number: '1',
          type: 'Utilità'
        }
      ],
      distanze: [
        {
          desc: 'Centro',
          value: '2000',
          uom: 'm'
        },
        {
          desc: 'Scuola',
          value: '500',
          uom: 'm'
        }
      ]
    },
    land: {
      available: true,
      mq: 500,
      cultivation: 'Giardino',
      urbanized: true,
      irrigated: true,
      archaeological_area: false,
      fenced: true,
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
        title: 'Villa',
        description: 'Vista frontale della villa',
        width: '800',
        height: '600'
      }
    ]
  },
  {
    id: '3',
    idcompany_id: '1',
    user_id: '1',
    partner_id: '1',
    constructionsite_id: '1',
    date_insert: '2024-01-01',
    date_update: '2024-01-01',
    date_available_for_business: '2024-01-01',
    rental: '1',
    rent_to_buy: '0',
    auction: '0',
    code: 'TEST003',
    company_code: 'COMP001',
    name: 'Ufficio in centro',
    technical_ref: '',
    for_holiday: '0',
    rented: '0',
    exclusive: '0',
    treaty: '0',
    special_negotiation: '0',
    newbuilding: '0',
    building_floors_number: '8',
    students: '0',
    investment: '1',
    luxury: '0',
    rooms: '4',
    size: '120',
    size_lot: '0',
    size_functional: '100',
    last_floor: '0',
    floor: '3',
    level_number: '3',
    view_id: '1',
    plot: '0',
    animals: '0',
    condominium: '1',
    hidden_price: '0',
    price: '350000',
    negotiable_price: '1',
    rental_insurance: '0',
    business_location: '1',
    beds: '0',
    energy_class: 'D',
    energy_class_value: '150',
    being_registered: '0',
    vat: '1',
    building_year: '1995',
    renovation_year: '2015',
    no_additional_cost: '0',
    monthly_costs: '150',
    annual_costs: '1800',
    heating_costs: '1000',
    systems_status: '1',
    rent_to_buy_sale_price: '0',
    rent_to_buy_option_premium: '0',
    rent_to_buy_balance: '0',
    availability_notes: '',
    status: 'active',
    inhabited_by: {
      id: 2,
      label: 'Locatore'
    },
    condition_type: {
      id: '1',
      desc: 'Ottimo'
    },
    building_type: {
      id: '2',
      desc: 'Commerciale'
    },
    contract_type: {
      id: '2',
      desc: 'Affitto'
    },
    ownership_type: {
      id: '1',
      desc: 'Piena proprietà'
    },
    building_class_type: {
      id: '2',
      desc: 'Commerciale'
    },
    designed_for_type: {
      id: '2',
      desc: 'Commerciale'
    },
    typology: {
      category_id: '2',
      category: 'Commerciale',
      type_id: '3',
      type: 'Ufficio',
      subtype_id: '3',
      subtype: 'Open space'
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
      public_address: 'Via del Commercio',
      public_street_number: '5',
      latitude: '45.8206',
      longitude: '8.8251',
      places_of_interest: 'Centro commerciale, Stazione, Ristoranti'
    },
    exposure: {
      n: true,
      s: true,
      w: false,
      e: false
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
          name: 'Sala riunioni',
          size: '20',
          size_label: 'm²',
          number: '1',
          type: 'Interno'
        },
        {
          id: '2',
          name: 'Open space',
          size: '60',
          size_label: 'm²',
          number: '1',
          type: 'Interno'
        }
      ],
      externals: [],
      systems: [
        {
          id: '1',
          name: 'Riscaldamento',
          size: null,
          size_label: null,
          number: '1',
          type: 'Sistema'
        },
        {
          id: '2',
          name: 'Climatizzazione',
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
        },
        {
          id: '2',
          name: 'Internet',
          size: null,
          size_label: null,
          number: '1',
          type: 'Utilità'
        }
      ],
      distanze: [
        {
          desc: 'Centro',
          value: '100',
          uom: 'm'
        },
        {
          desc: 'Stazione',
          value: '800',
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
        title: 'Ufficio',
        description: 'Vista dell\'open space',
        width: '800',
        height: '600'
      }
    ]
  }
];

// Service per le proprietà con dati di fallback
export const mockService = {
  // Ottieni tutte le proprietà
  async getProperties(page: number = 1, limit: number = 10): Promise<ApiResponse> {
    // Simula un ritardo di rete
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return {
      response: {
        result: 'success',
        error: '',
        items: fallbackProperties.length,
        returneditems: fallbackProperties.length,
        pages: 1,
        currentpage: 1
      },
      properties: fallbackProperties
    };
  },

  // Cerca proprietà con filtri
  async searchProperties(filters: PropertyFilters): Promise<ApiResponse> {
    // Simula un ritardo di rete
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return {
      response: {
        result: 'success',
        error: '',
        items: fallbackProperties.length,
        returneditems: fallbackProperties.length,
        pages: 1,
        currentpage: 1
      },
      properties: fallbackProperties
    };
  },

  // Ottieni dettagli di una proprietà
  async getPropertyById(id: string): Promise<Property | null> {
    // Simula un ritardo di rete
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const property = fallbackProperties.find(p => p.id === id);
    return property || null;
  },

  // Ottieni lista province
  async getProvinces(): Promise<Province[]> {
    // Simula un ritardo di rete
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return fallbackProvinces;
  },

  // Ottieni lista categorie
  async getCategories(): Promise<Category[]> {
    // Simula un ritardo di rete
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return fallbackCategories;
  }
}; 