export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  location: string;
  address: {
    street: string;
    cityStateZip: string;
    full: string;
  };
  phone: string;
  email: string;
  hours: {
    weekday: string;
    saturday: string;
    sunday: string;
  };
  social: {
    instagram: string;
    facebook: string;
    linkedin: string;
    youtube: string;
  };
  navLinks: Array<{ label: string; href: string }>;
}

export const siteConfig: SiteConfig = {
  name: "IDEAL REMODELING",
  shortName: "Ideal Remodeling",
  tagline: "INTERIORS & REMODELING",
  heroHeadline: "Spaces Made\nDistinctly Yours.",
  heroSubheadline: "Thoughtful interiors, refined materials, and craftsmanship designed around the way you live.",
  location: "Dallas, Texas",
  address: {
    street: "1234 Example Avenue",
    cityStateZip: "Dallas, TX 75201",
    full: "1234 Example Avenue, Dallas, TX 75201",
  },
  phone: "+1 (214) 555-0123",
  email: "hello@idealremodeling.com",
  hours: {
    weekday: "Monday – Friday: 8:00 AM – 6:00 PM",
    saturday: "Saturday: 9:00 AM – 2:00 PM",
    sunday: "Sunday: Closed",
  },
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com",
  },
  navLinks: [
    { label: "HOME", href: "#hero" },
    { label: "SERVICES", href: "#services" },
    { label: "WORK", href: "#work" },
    { label: "APPROACH", href: "#approach" },
    { label: "CONTACT", href: "#contact" },
  ],
};

