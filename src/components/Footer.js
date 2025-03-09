import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/components/footer.module.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <Link href="/">
              <Image
                src="/images/logo-footer.svg"
                alt="Diyetisyen Logo"
                width={400}
                height={80}
              />
            </Link>
            <p>
              Sağlıklı beslenme ve yaşam tarzı ile ilgili profesyonel
              danışmanlık hizmetleri.
            </p>
          </div>

          <div className={styles.footerLinks}>
            <div className={styles.linkColumn}>
              <h4>Hızlı Erişim</h4>
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
            </div>

            <div className={styles.linkColumn}>
              <h4>Hizmetler</h4>
              <ul>
                <li>
                  <Link href="/hizmetler/kisisel-beslenme-programi">
                    Kişiye Özel Beslenme
                  </Link>
                </li>
                <li>
                  <Link href="/hizmetler/kilo-kontrolu">
                    Kilo Verme/Alma Programı
                  </Link>
                </li>
                <li>
                  <Link href="/hizmetler/hamilelik-beslenmesi">
                    Hamilelik Dönemi Beslenme
                  </Link>
                </li>
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h4>İletişim</h4>
              <ul>
                <li>
                  <a href="tel:+905001234567">+90 500 123 45 67</a>
                </li>
                <li>
                  <a href="mailto:info@diyetisyenadi.com">
                    info@diyetisyenadi.com
                  </a>
                </li>
                <li>
                  <address>
                    Örnek Mahallesi, Sağlık Caddesi No:123, İstanbul
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {currentYear} Diyetisyen Adı. Tüm hakları saklıdır.</p>
          <div className={styles.socialLinks}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
