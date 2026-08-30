export interface Service {
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  imageAlt: string;
  details: string[];
}

export const servicesData: Service[] = [
  {
    number: "01",
    title: "KITCHEN REMODELING",
    shortDesc: "Spaces designed around how you cook, gather, and live.",
    fullDesc: "We reimagine kitchens as the quiet anchor of the home. Blending bespoke cabinetry, hand-selected natural stone, and seamless architectural lighting to create culinary spaces of calm refinement.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85",
    imageAlt: "Warm modern minimalist kitchen with natural oak cabinetry and marble island",
    details: ["Custom Architectural Cabinetry", "Natural Stone & Slab Selection", "Integrated Appliance Planning", "Spatial & Ergonomic Flow"]
  },
  {
    number: "02",
    title: "BATHROOM REMODELING",
    shortDesc: "Private sanctuaries defined by tactile materials and serenity.",
    fullDesc: "Elevating daily rituals through architectural bath design. Custom floating vanities, stone plaster finishes, curbless wet rooms, and concealed fixtures crafted for enduring comfort.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1800&q=85",
    imageAlt: "Serene minimalist master bathroom with freestanding soaking tub and limestone tiles",
    details: ["Curbless Walk-in Showers", "Custom Vanities & Millwork", "Atmospheric Lighting Systems", "Monolithic Stone & Plaster"]
  },
  {
    number: "03",
    title: "LIVING SPACES",
    shortDesc: "Refined gathering environments focused on proportion and light.",
    fullDesc: "Living rooms, libraries, and open spaces articulated with tailored fireplace surrounds, architectural wall paneling, integrated storage, and harmonious material palettes.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=85",
    imageAlt: "Sophisticated editorial living room with warm linen furniture and ambient light",
    details: ["Custom Built-ins & Media Architecture", "Fireplace Surround Transformations", "Acoustic & Soft Material Selection", "Architectural Trim & Moldings"]
  },
  {
    number: "04",
    title: "WHOLE HOME RENOVATION",
    shortDesc: "Comprehensive interior transformations built with singular vision.",
    fullDesc: "Complete structural and aesthetic overhauls of existing residences. We harmonize layout, interior architecture, flooring, and lighting to give older homes modern editorial clarity.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85",
    imageAlt: "Architectural whole home interior with open floor plan and warm oak flooring",
    details: ["Comprehensive Layout Reconfiguration", "Structural Interior Modifications", "Cohesive Material & Color Palettes", "Full Construction Management"]
  }
];
