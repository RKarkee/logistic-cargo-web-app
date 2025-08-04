export const fleetData = {
  hero: {
    title: "Our Fleet",
    subtitle: "Modern vehicles, professional drivers, reliable service",
    description:
      "Our diverse fleet of over 120 vehicles is maintained to the highest standards, ensuring your cargo arrives safely and on time, every time.",
  },

  overview: {
    totalVehicles: 120,
    averageAge: "3.2 years",
    maintenanceUptime: "99.8%",
    safetyRating: "5-Star DOT Rating",
  },

  categories: [
    {
      id: "long-haul",
      name: "Long-Haul Trucks",
      count: 45,
      description: "Heavy-duty trucks for cross-country freight transportation",
      specs: [
        "53-foot dry van trailers",
        "80,000 lbs gross vehicle weight",
        "GPS tracking and ELD compliance",
        "Fuel-efficient engines",
      ],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "local-delivery",
      name: "Local Delivery Vehicles",
      count: 35,
      description: "Versatile vehicles for regional and last-mile deliveries",
      specs: [
        "Box trucks (16-26 feet)",
        "Hydraulic lift gates",
        "Urban-friendly design",
        "Real-time route optimization",
      ],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "specialized",
      name: "Specialized Vehicles",
      count: 25,
      description: "Purpose-built vehicles for unique transportation needs",
      specs: [
        "Refrigerated trailers",
        "Flatbed trailers",
        "Hazmat-certified vehicles",
        "Climate-controlled compartments",
      ],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "warehouse",
      name: "Warehouse Equipment",
      count: 15,
      description: "Material handling equipment for efficient operations",
      specs: [
        "Forklifts (3,000-15,000 lbs)",
        "Pallet jacks and dollies",
        "Loading dock equipment",
        "Inventory scanning systems",
      ],
      image: "/placeholder.svg?height=300&width=400",
    },
  ],

  safety: {
    title: "Safety & Maintenance",
    description: "Safety is our top priority. Every vehicle undergoes rigorous maintenance and safety checks.",
    features: [
      {
        title: "Regular Inspections",
        description: "DOT-compliant inspections every 90 days",
        icon: "CheckCircle",
      },
      {
        title: "Driver Training",
        description: "Comprehensive safety training and certification programs",
        icon: "BookOpen",
      },
      {
        title: "Real-time Monitoring",
        description: "Advanced telematics for vehicle health monitoring",
        icon: "Activity",
      },
      {
        title: "Emergency Response",
        description: "24/7 roadside assistance and emergency support",
        icon: "Phone",
      },
    ],
  },

  technology: {
    title: "Fleet Technology",
    description: "Cutting-edge technology keeps our fleet running efficiently and safely.",
    features: [
      "GPS tracking and route optimization",
      "Electronic logging devices (ELD)",
      "Fuel management systems",
      "Predictive maintenance alerts",
      "Driver performance monitoring",
      "Real-time communication systems",
    ],
  },
}
