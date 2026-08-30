export interface PortfolioProject {
  id: string;
  number: string;
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  image: string;
  imageAlt: string;
  specs: {
    duration: string;
    scope: string;
    keyMaterials: string;
  };
}

export const portfolioData: PortfolioProject[] = [
  {
    id: "oak-residence",
    number: "01",
    title: "Oak Residence",
    category: "Whole Home Interior",
    location: "Dallas, Texas",
    year: "2024",
    description: "An understated residential interior shaped around warm oak, natural stone, and open living spaces designed for slow living.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85",
    imageAlt: "Oak Residence living room featuring white oak millwork and plaster fireplace",
    specs: {
      duration: "7 Months",
      scope: "4,200 sq ft Full Interior",
      keyMaterials: "White Oak, Calacatta Marble, Roman Clay Plaster"
    }
  },
  {
    id: "willow-kitchen",
    number: "02",
    title: "Willow Kitchen",
    category: "Kitchen Renovation",
    location: "Austin, Texas",
    year: "2024",
    description: "A culinary environment balancing dark walnut joinery with tactile brushed brass and monolithic quartzite surfaces.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1800&q=85",
    imageAlt: "Willow Kitchen featuring custom walnut cabinets and quartzite waterfall island",
    specs: {
      duration: "3.5 Months",
      scope: "Kitchen & Pantry Overhaul",
      keyMaterials: "American Walnut, Taj Mahal Quartzite, Unlacquered Brass"
    }
  },
  {
    id: "parkside-residence",
    number: "03",
    title: "Parkside Residence",
    category: "Bathroom & Living Spaces",
    location: "Dallas, Texas",
    year: "2023",
    description: "Serene bathroom suites and interconnected lounge areas bathed in soft morning light with custom acoustic paneling.",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1800&q=85",
    imageAlt: "Parkside Residence master suite with freestanding tub and glass shower wall",
    specs: {
      duration: "4 Months",
      scope: "Primary Suite & Great Room",
      keyMaterials: "Travertine, Fluted Glass, Linen Drapery"
    }
  },
  {
    id: "the-cedar-house",
    number: "04",
    title: "The Cedar House",
    category: "Whole Home Renovation",
    location: "Plano, Texas",
    year: "2023",
    description: "A mid-century dwelling thoughtfully modernized with open sightlines, architectural lighting, and seamless indoor-outdoor transitions.",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1800&q=85",
    imageAlt: "The Cedar House whole home interior open dining and living space",
    specs: {
      duration: "8 Months",
      scope: "Complete Structural & Interior",
      keyMaterials: "Western Red Cedar, Honed Limestone, Steel Accents"
    }
  }
];

