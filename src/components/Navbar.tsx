"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Comment ça marche", href: "/#processus" },
  { label: "Avis clients", href: "/#avis" },
  { label: "Conseils", href: "/conseils" },
  { label: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/70 backdrop-blur-2xl shadow-[0_1px_0_rgba(0,0,0,0.04)]"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1 lg:px-8">
          <Link href="/" className="flex items-center group">
            <Image
              src="/menage/images/logo/Votre texte de paragraphe.png"
              alt="Quido"
              width={260}
              height={90}
              className="h-16 md:h-[88px] w-auto"
              priority
            />
          </Link>

          <div className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[15px] font-medium text-black/40 hover:text-black px-4 py-2 rounded-full hover:bg-black/[0.03] transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/reservation"
              className="group inline-flex items-center gap-2 rounded-full bg-quido px-6 py-2.5 text-[13.5px] font-semibold text-white font-display hover:bg-quido-dark hover:scale-[1.03] transition-all duration-300"
            >
              Réserver
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-xl hover:bg-black/5 transition-colors text-black"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-8 lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-3xl font-display font-bold text-black py-3 tracking-tight"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                <Link
                  href="/reservation"
                  onClick={() => setMobileOpen(false)}
                  className="mt-8 btn-primary justify-center flex"
                >
                  Réserver un créneau
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
