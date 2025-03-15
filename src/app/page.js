import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import BlogCard from "@/components/BlogCard";
import styles from "@/styles/pages/home.module.scss";

export const metadata = {
  title: "Ana Sayfa | Diyetisyen Bengisu Tekirdaş - Beslenme ve Diyet Uzmanı",
  description:
    "Kişiye özel beslenme programları ve diyet danışmanlığı ile sağlıklı yaşam için profesyonel diyetisyen hizmetleri.",
};

export default function Home() {
  const services = [
    {
      id: 1,
      title: "Kilo Verme / Kilo Alma Programı",
      description:
        "Bu program, vücudunuzun ihtiyaçlarına uygun, bilimsel temelli ve uzun vadede sürdürülebilir beslenme alışkanlıkları kazanmanızı sağlar.",
      icon: "/images/icons/diet-plan.svg",
      link: "/hizmetler/kilo-verme-alma-programi",
    },
    {
      id: 2,
      title: "Özel Durumlarda Beslenme",
      description:
        "Bu program, vücudunuzun özel dönemlerdeki gereksinimlerini göz önünde bulundurarak, sizin için en uygun beslenme düzenini oluşturmayı hedefler.",
      icon: "/images/icons/weight-control.svg",
      link: "/hizmetler/ozel-beslenme",
    },
    {
      id: 3,
      title: "Hastalıklara Özel Beslenme Programı",
      description:
        "Bu program, sağlık durumu ve ihtiyaçlarınız doğrultusunda özel olarak hazırlanır.",
      icon: "/images/icons/pregnancy.svg",
      link: "/hizmetler/hastalik-beslenmesi",
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
        title="Sağlıklı ve sürdürülebilir beslenme ile yaşam kalitenizi artırmaya ne dersiniz?"
        subtitle="Kişiye özel beslenme planları, hedeflerinize ulaşmanızı kolaylaştırabilir, nasıl mı?"
        buttonText="BİLGİ AL"
        buttonLink="/iletisim"
      />

      <section className={`section ${styles.about}`}>
        <div className="container">
          <div className={styles.aboutContent}>
            <div className={styles.aboutImage}>
              <Image
                src="/images/diyetisyen.jpg"
                alt="Diyetisyen Adı"
                width={500}
                height={600}
                className={styles.image}
              />
            </div>
            <div className={styles.aboutText}>
              <h2>Merhaba, ben Diyetisyen Bengisu Tekirdaş!</h2>
              <p>
                2022 Ege Üniversitesi Beslenme ve Diyetetik mezunuyum.
                Mezuniyetimin hemen ardından çalışmaya başladım ve bireysel
                beslenme danışmanlığı veriyorum.
              </p>
              <p>
                Beslenmenin kısıtlamalarla değil, bilinçli seçimlerle
                sürdürülebilir olduğuna inanıyorum. Diyetisyen olarak, sağlıklı
                yaşamı bir zorunluluk değil, keyifli bir yolculuk haline
                getirmeyi amaçlıyorum. Bunu yaparken bilimsel temellere dayalı
                bilgileri sizlerle paylaşmayı çok kıymetli buluyorum.
              </p>
              <p>
                Çevreye duyarlı beslenme alışkanlıkları, besin okuryazarlığı ve
                diyet mitlerini yıkmak üzerine içerikler üretiyor, bireysel
                danışmanlık hizmeti sunuyorum. Siz de sağlıklı yaşam
                yolculuğunda bana katılmak isterseniz, buradayım!
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
              oluyorum. Hangi alanlarda çalışıyorum?
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
