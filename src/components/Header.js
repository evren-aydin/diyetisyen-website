"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/components/header.module.scss";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/logo.svg"
            alt="Diyetisyen Logo"
            width={250}
            height={50}
          />
        </Link>

        <button
          className={styles.mobileMenuButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menüyü aç/kapat"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.open : ""}`}>
          <ul>
            <li>
              <Link href="/">Ana Sayfa</Link>
            </li>
            <li>
              <Link href="/hakkimda">Hakkımda</Link>
            </li>
            <li>
              <Link href="/hizmetler">Hizmetler</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/iletisim">İletişim</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
