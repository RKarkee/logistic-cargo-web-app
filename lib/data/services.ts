export const services = {
  main: [
    {
      id: "cargo-transportation",
      title: "Cargo Transportation",
      description: "Reliable domestic freight solutions with FTL and LTL options",
      icon: "Truck",
      features: ["Full Truckload (FTL)", "Less Than Truckload (LTL)", "Express Delivery", "Scheduled Routes"],
    },
    {
      id: "warehousing",
      title: "Warehousing & Distribution",
      description: "Secure storage and efficient inventory management solutions",
      icon: "Warehouse",
      features: ["Climate-Controlled Storage", "Inventory Management", "Order Fulfillment", "Cross-Docking"],
    },
    {
      id: "specialized-logistics",
      title: "Specialized Logistics",
      description: "Custom solutions for unique shipping requirements",
      icon: "Shield",
      features: ["Customs Clearance", "Fragile Goods Handling", "Cold Chain Logistics", "Hazmat Transportation"],
    },
  ],

  detailed: {
    "cargo-transportation": {
      title: "Cargo Transportation",
      subtitle: "Reliable freight solutions for businesses of all sizes",
      description:
        "Our comprehensive cargo transportation services ensure your goods reach their destination safely and on time. With a modern fleet and experienced drivers, we handle everything from small packages to full truckloads.",
      whoItsFor: ["E-commerce businesses", "Manufacturers", "Retailers", "Distributors"],
      benefits: [
        "Real-time tracking and updates",
        "Competitive pricing with transparent costs",
        "Flexible scheduling options",
        "Insurance coverage for peace of mind",
      ],
      howItWorks: [
        "Request a quote with shipment details",
        "Schedule pickup at your convenience",
        "Track your shipment in real-time",
        "Receive confirmation upon delivery",
      ],
    },
    warehousing: {
      title: "Warehousing & Distribution",
      subtitle: "Scalable storage solutions with advanced inventory management",
      description:
        "Our state-of-the-art warehousing facilities provide secure, climate-controlled storage with advanced inventory management systems. Perfect for businesses looking to optimize their supply chain.",
      whoItsFor: ["Growing businesses", "Seasonal retailers", "Import/Export companies", "Manufacturing firms"],
      benefits: [
        "Flexible storage options",
        "Advanced inventory tracking",
        "Pick and pack services",
        "Same-day fulfillment capabilities",
      ],
      howItWorks: [
        "Assess your storage requirements",
        "Set up inventory management system",
        "Receive and organize your goods",
        "Fulfill orders as they come in",
      ],
    },
    "specialized-logistics": {
      title: "Specialized Logistics Solutions",
      subtitle: "Expert handling for unique shipping challenges",
      description:
        "When standard shipping won't do, our specialized logistics team provides custom solutions for complex transportation needs, including customs clearance, temperature-sensitive goods, and hazardous materials.",
      whoItsFor: ["International traders", "Pharmaceutical companies", "Art galleries", "Chemical manufacturers"],
      benefits: [
        "Expert regulatory compliance",
        "Specialized equipment and handling",
        "Dedicated project management",
        "Risk mitigation strategies",
      ],
      howItWorks: [
        "Consultation on specific requirements",
        "Custom solution development",
        "Regulatory compliance verification",
        "Specialized transportation execution",
      ],
    },
  },
}
