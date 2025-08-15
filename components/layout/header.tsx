"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { companyInfo } from "@/lib/data/company-info";
import { services } from "@/lib/data/services";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    submenu: services.main.map((service) => ({
      name: service.title,
      href: `/services/${service.id}`,
      description: service.description,
    })),
  },
  { name: "Branches", href: "/branches" },
  { name: "Success Stories", href: "/success-stories" },
  { name: "Fleet", href: "/fleet" },
  { name: "Certifications", href: "/certifications" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  return (
    <motion.header
      className="bg-white shadow-sm sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Container>
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/" className="flex items-center space-x-2">
              <motion.div
              animate={{ rotate: 0 }}
              whileHover={{
                rotate: 360,
                transition: { duration: 1 },
              }}
              transition={{
                type: "tween",
                ease: "linear",
                duration: 1,
              }}
              >
              <img
                src="/dp-NEx.png"
                alt="DP-NEx Portfolio Logo"
                className="h-16 w-36 object-contain"
                style={{ display: "block" }}
              />
              </motion.div>
            </Link>
            </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                className="relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {item.submenu ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <motion.button
                      className={cn(
                        "flex items-center space-x-1 transition-colors",
                        "text-primary-900 hover:text-accent-500",
                        servicesOpen && "text-accent-500"
                      )}
                      whileHover={{ scale: 1.05 }}
                    >
                      <span>{item.name}</span>
                      <motion.div
                        animate={{ rotate: servicesOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </motion.div>
                    </motion.button>

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.submenu.map((subItem, subIndex) => (
                            <motion.div
                              key={subItem.name}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                delay: subIndex * 0.05,
                                duration: 0.2,
                              }}
                            >
                              <Link
                                href={subItem.href}
                                className={cn(
                                  "block px-4 py-3 transition-colors",
                                  "text-primary-700 hover:text-accent-500 hover:bg-gray-300",
                                  pathname === subItem.href && "text-accent-500"
                                )}
                              >
                                <div className="font-medium">
                                  {subItem.name}
                                </div>
                                <div className="text-sm text-gray-500 mt-1">
                                  {subItem.description}
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "transition-colors relative",
                        "text-primary-900 hover:text-accent-500",
                        pathname === item.href && "text-accent-500 font-medium"
                      )}
                    >
                      {item.name}
                      {pathname === item.href && (
                        <motion.div
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-500"
                          layoutId="activeTab"
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild className="bg-primary-600 hover:bg-primary-900 text-white">
                <Link href="/quote">Request Quote</Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="lg:hidden border-t border-gray-200 py-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="space-y-2"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
                initial="hidden"
                animate="visible"
              >
                {navigation.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "block py-2 text-gray-700 hover:text-primary-600 transition-colors",
                        pathname === item.href && "text-primary-600 font-medium"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <div className="ml-4 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block py-1 text-sm text-gray-600 hover:text-primary-600 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
                <motion.div
                  className="pt-4"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Button asChild className="w-full">
                    <Link
                      href="/quote"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Request Quote
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.header>
  );
}
