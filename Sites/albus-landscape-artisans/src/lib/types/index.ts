// Service types
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
  slug: string;
}

// Gallery/Portfolio types
export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  category: string;
  location?: string;
  date: Date;
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service?: string;
  message: string;
}

// Quote request types
export interface QuoteRequestData extends ContactFormData {
  address: string;
  propertySize?: string;
  preferredDate?: Date;
  budget?: string;
}

// Booking types
export interface BookingData {
  name: string;
  email: string;
  phone: string;
  service: string;
  preferredDate: Date;
  preferredTime: string;
  notes?: string;
}

// Service area types
export interface ServiceArea {
  id: string;
  name: string;
  state: string;
  zipCodes: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
}

// Team member types
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  email?: string;
}

// Testimonial types
export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  content: string;
  rating: number;
  date: Date;
  image?: string;
}
