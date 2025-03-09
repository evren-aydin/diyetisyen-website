import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import BlogCard from "@/components/BlogCard";
import styles from "@/styles/pages/home.module.scss";

export const metadata = {
  title: "Ana Sayfa | Diyetisyen Adı - Beslenme ve Diyet Uzmanı",
  description:
    "Kişiye özel beslenme programları ve diyet danışmanlığı ile sağlıklı yaşam için profesyonel diyetisyen hizmetleri.",
};

export default function Home() {
  const services = [
    {
      id: 1,
      title: "Kişiye Özel Beslenme Programı",
      description:
        "Yaş, cinsiyet, fiziksel aktivite ve sağlık durumunuza göre özel olarak hazırlanan beslenme programları.",
      icon: "/images/icons/diet-plan.svg",
      link: "/hizmetler/kisisel-beslenme-programi",
    },
    {
      id: 2,
      title: "Kilo Verme/Alma Programı",
      description:
        "Sağlıklı ve kalıcı kilo kontrolü için bilimsel temelli beslenme planları.",
      icon: "/images/icons/weight-control.svg",
      link: "/hizmetler/kilo-kontrolu",
    },
    {
      id: 3,
      title: "Hamilelik Dönemi Beslenme",
      description:
        "Anne ve bebek sağlığı için hamilelik öncesi, süreci ve sonrası için beslenme danışmanlığı.",
      icon: "/images/icons/pregnancy.svg",
      link: "/hizmetler/hamilelik-beslenmesi",
    },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Sağlıklı Kilo Vermenin 10 Altın Kuralı",
      excerpt:
        "Kalıcı ve sağlıklı kilo vermek için uygulamanız gereken bilimsel temelli 10 önemli kural.",
      image: "/images/blog/weight-loss.jpg",
      date: "15 Mayıs 2023",
      slug: "saglikli-kilo-vermenin-10-altin-kurali",
    },
    {
      id: 2,
      title: "Bağışıklık Sistemini Güçlendiren Besinler",
      excerpt:
        "Bağışıklık sisteminizi destekleyecek ve hastalıklara karşı korunmanızı sağlayacak süper besinler.",
      image: "/images/blog/immune-system.jpg",
      date: "3 Nisan 2023",
      slug: "bagisiklik-sistemini-guclendiren-besinler",
    },
    {
      id: 3,
      title: "Hormonal Dengeyi Sağlayan Beslenme Önerileri",
      excerpt:
        "Kadınlarda hormonal dengeyi destekleyen beslenme alışkanlıkları ve öneriler.",
      image: "/images/blog/hormones.jpg",
      date: "21 Mart 2023",
      slug: "hormonal-dengeyi-saglayan-beslenme-onerileri",
    },
  ];

  return (
    <>
      <Hero
        title="Sağlıklı Beslenme ile Yaşam Kalitenizi Artırın"
        subtitle="Kişiye özel beslenme programları ve profesyonel diyet danışmanlığı ile hedeflerinize ulaşın."
        buttonText="Randevu Al"
        buttonLink="/iletisim"
      />

      <section className={`section ${styles.about}`}>
        <div className="container">
          <div className={styles.aboutContent}>
            <div className={styles.aboutImage}>
              <Image
                src="/images/dietitian.jpg"
                alt="Diyetisyen Adı"
                width={500}
                height={600}
                className={styles.image}
              />
            </div>
            <div className={styles.aboutText}>
              <h2>Merhaba, Ben Dyt. Adı Soyadı</h2>
              <p>
                10 yıllık deneyimim ile sağlıklı beslenme alışkanlıkları
                kazandırarak yaşam kalitenizi artırmak için yanınızdayım.
                Beslenme ve Diyet Uzmanı olarak, her danışanımın ihtiyaçlarına
                özel beslenme programları hazırlıyorum.
              </p>
              <p>
                Amacım sadece kilo kontrolü sağlamak değil, aynı zamanda
                sağlıklı bir yaşam tarzı edinmenize yardımcı olmaktır. Bilimsel
                ve güncel yaklaşımlarla, sürdürülebilir beslenme alışkanlıkları
                kazanmanızı sağlıyorum.
              </p>
              <Link href="/hakkimda" className="button">
                Daha Fazla Bilgi
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.services}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Hizmetlerim</h2>
            <p>
              Size özel beslenme çözümleri ile hedeflerinize ulaşmanıza yardımcı
              oluyorum.
            </p>
          </div>
          <div className={styles.serviceGrid}>
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className={styles.sectionFooter}>
            <Link href="/hizmetler" className="button outline">
              Tüm Hizmetleri Görüntüle
            </Link>
          </div>
        </div>
      </section>

      <section className={`section ${styles.testimonials}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Danışan Yorumları</h2>
            <p>Başarı hikayelerini ve deneyimlerini paylaşan danışanlarım</p>
          </div>
          <div className={styles.testimonialSlider}>
            {/* Burada bir slider bileşeni kullanılabilir */}
            <div className={styles.testimonial}>
              <div className={styles.testimonialContent}>
                <p>
                  &ldquo;Dyt. Adı Hanım sayesinde sadece 3 ayda 12 kilo verdim
                  ve en önemlisi bu kilolarımı 2 yıldır koruyorum. Sağlıklı
                  beslenme alışkanlıkları kazandım ve kendimi çok daha enerjik
                  hissediyorum.&rdquo;
                </p>
                <div className={styles.testimonialAuthor}>
                  <Image
                    src="/images/testimonials/client1.jpg"
                    alt="Ayşe K."
                    width={60}
                    height={60}
                  />
                  <div>
                    <h4>Ayşe K.</h4>
                    <p>35 yaşında, Öğretmen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.blog}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Blog Yazılarım</h2>
            <p>
              Beslenme, sağlık ve yaşam tarzı hakkında bilgilendirici içerikler
            </p>
          </div>
          <div className={styles.blogGrid}>
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          <div className={styles.sectionFooter}>
            <Link href="/blog" className="button outline">
              Tüm Yazıları Görüntüle
            </Link>
          </div>
        </div>
      </section>

      <section className={`section ${styles.cta}`}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Sağlıklı Yaşam Yolculuğunuza Bugün Başlayın</h2>
            <p>
              Kişiye özel beslenme programı ve profesyonel destek için hemen
              randevu alın.
            </p>
            <Link href="/iletisim" className="button">
              Randevu Al
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
