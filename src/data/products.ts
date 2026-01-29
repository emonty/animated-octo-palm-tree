export interface Product {
  id: string;
  name: string;
  description: string;
  price: number; // in cents
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: "vhf-radio-standard",
    name: "Standard Horizon VHF Radio",
    description: "25W fixed mount VHF radio with DSC, GPS, and AIS receiver. Essential for marine communication and safety.",
    price: 34999,
    image: "/products/vhf-radio.svg",
    category: "Communication",
  },
  {
    id: "chartplotter-7inch",
    name: "7\" GPS Chartplotter",
    description: "High-resolution touchscreen chartplotter with built-in GPS, detailed nautical charts, and wireless connectivity.",
    price: 79999,
    image: "/products/chartplotter.svg",
    category: "Navigation",
  },
  {
    id: "fishfinder-dual",
    name: "Dual Beam Fishfinder",
    description: "Professional-grade fishfinder with CHIRP sonar technology, 500W power, and 7\" color display.",
    price: 44999,
    image: "/products/fishfinder.svg",
    category: "Fishing",
  },
  {
    id: "radar-dome-4kw",
    name: "4kW Radar Dome",
    description: "Compact 24\" radome with 48nm range, MARPA target tracking, and bird mode for finding fish.",
    price: 189999,
    image: "/products/radar.svg",
    category: "Navigation",
  },
  {
    id: "autopilot-system",
    name: "Marine Autopilot System",
    description: "Complete autopilot system for boats up to 40ft. Includes heading sensor, rudder feedback, and control unit.",
    price: 249999,
    image: "/products/autopilot.svg",
    category: "Navigation",
  },
  {
    id: "ais-transponder",
    name: "Class B AIS Transponder",
    description: "SOTDMA Class B+ AIS transponder with built-in GPS. See and be seen by other vessels.",
    price: 59999,
    image: "/products/ais.svg",
    category: "Safety",
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function formatPrice(cents: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(cents / 100);
}
