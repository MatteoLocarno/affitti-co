export interface Property {
  id: string;
  idcompany_id: string;
  user_id: string;
  partner_id: string;
  constructionsite_id: string;
  date_insert: string;
  date_update: string;
  date_available_for_business: string;
  rental: string;
  rent_to_buy: string;
  auction: string;
  code: string;
  company_code: string;
  name: string;
  technical_ref: string;
  for_holiday: string;
  rented: string;
  exclusive: string;
  treaty: string;
  special_negotiation: string;
  newbuilding: string;
  building_floors_number: string;
  students: string;
  investment: string;
  luxury: string;
  rooms: string;
  bathrooms?: string;
  size: string;
  size_lot: string;
  size_functional: string;
  last_floor: string;
  floor: string;
  level_number: string;
  view_id: string;
  plot: string;
  animals: string;
  condominium: string;
  hidden_price: string;
  price: string;
  negotiable_price: string;
  rental_insurance: string;
  business_location: string;
  beds: string;
  energy_class: string;
  energy_class_value: string;
  being_registered: string;
  vat: string;
  building_year: string;
  renovation_year: string;
  no_additional_cost: string;
  monthly_costs: string;
  annual_costs: string;
  heating_costs: string;
  systems_status: string;
  rent_to_buy_sale_price: string;
  rent_to_buy_option_premium: string;
  rent_to_buy_balance: string;
  availability_notes: string;
  status: string;
  inhabited_by: {
    id: number;
    label: string;
  };
  condition_type: {
    id: string;
    desc: string;
  };
  building_type: {
    id: string;
    desc: string | null;
  };
  contract_type: {
    id: string;
    desc: string | null;
  };
  ownership_type: {
    id: string;
    desc: string | null;
  };
  building_class_type: {
    id: string;
    desc: string;
  };
  designed_for_type: {
    id: string;
    desc: string;
  };
  typology: {
    category_id: string;
    category: string;
    type_id: string;
    type: string;
    subtype_id: string;
    subtype: string;
    features?: string[];
  };
  location: {
    country_id: string;
    country: string;
    region_id: string;
    region: string;
    province_id: string;
    province: string;
    province_shortname: string;
    city_id: string;
    city: string;
    district_id: string;
    district: string;
    subdistrict_id: string;
    subdistrict: string;
    area_id: string;
    area: string | null;
    position_id: string;
    position: string;
    vista_id: string;
    vista: string;
    zip: string;
    public_address: string;
    public_street_number: string;
    latitude: string;
    longitude: string;
    places_of_interest: string;
    zone?: string;
  };
  exposure: {
    n: boolean;
    s: boolean;
    w: boolean;
    e: boolean;
  };
  auction_details: {
    auction_expertise: string;
    auction_date_incanto: string;
    auction_date_no_incanto: string;
    auction_base_price: string;
    auction_minimum_price: string;
    minimum_bid_auction: string;
  };
  features: {
    internals: Array<{
      id: string;
      name: string;
      size: string | null;
      size_label: string | null;
      number: string | null;
      type: string | null;
    }>;
    externals: Array<{
      id: string;
      name: string;
      size: string | null;
      size_label: string | null;
      number: string | null;
      type: string | null;
    }>;
    systems: Array<{
      id: string;
      name: string;
      size: string | null;
      size_label: string | null;
      number: string | null;
      type: string | null;
    }>;
    utilities: Array<{
      id: string;
      name: string;
      size: string | null;
      size_label: string | null;
      number: string | null;
      type: string | null;
    }>;
    distanze: Array<{
      desc: string;
      value: string;
      uom: string;
    }>;
  };
  land: {
    available: boolean;
    mq: number;
    cultivation: string;
    urbanized: boolean;
    irrigated: boolean;
    archaeological_area: boolean;
    fenced: boolean;
    parceling_out: boolean;
    building_land: boolean;
  };
  price_detail: {
    last_update: string;
    old_price: string;
  };
  images: Array<{
    url: string;
    thumb_url: string;
    main: string;
    maps: string;
    planimetry: string;
    title: string;
    description: string;
    width: string;
    height: string;
  }>;
  contact?: {
    phone?: string;
    email?: string;
  };
  description?: string;
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

export interface PropertyFilters {
  page?: number;
  per_page?: number;
  provincia?: string;
  categoria?: string;
  tipologia?: string;
  comune?: string;
  zona?: string;
  prezzo_min?: number;
  prezzo_max?: number;
  superficie_min?: number;
  superficie_max?: number;
  vani?: number;
  energy_class?: string;
  features?: string[];
  status?: string;
  rental?: string;
  rent_to_buy?: boolean;
  auction?: boolean;
  for_holiday?: boolean;
  newbuilding?: boolean;
  luxury?: boolean;
  investment?: boolean;
  students?: boolean;
  operation?: string;
  type?: string;
  city?: string;
  province?: string;
  minPrice?: number;
  maxPrice?: number;
  rooms?: number;
  minSquareMeters?: number;
  maxSquareMeters?: number;
  [key: string]: any;
}

export interface Province {
  id: string;
  nome: string;
}

export interface Category {
  id: string;
  nome: string;
}

export interface PropertyResponse {
  properties: Property[];
  total: number;
} 