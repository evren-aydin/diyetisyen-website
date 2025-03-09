//import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import styles from "@/styles/pages/blog.module.scss";

export const metadata = {
  title: "Blog | Diyetisyen Bengisu - Beslenme ve Diyet Uzmanı",
  description:
    "Beslenme, sağlık ve yaşam tarzı hakkında bilgilendirici makaleler ve öneriler.",
};

export default function Blog() {
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
    {
      id: 4,
      title: "Metabolizmayı Hızlandıran 5 Beslenme Stratejisi",
      excerpt:
        "Metabolizma hızınızı artırarak daha fazla kalori yakmanıza yardımcı olacak beslenme önerileri.",
      image: "/images/blog/metabolism.jpg",
      date: "10 Mart 2023",
      slug: "metabolizmayi-hizlandiran-5-beslenme-stratejisi",
    },
    {
      id: 5,
      title: "Şekersiz 21 Gün: Vücudunuzdaki Değişimler",
      excerpt:
        "Şekeri hayatınızdan çıkardığınızda vücudunuzda meydana gelen olumlu değişimler.",
      image: "/images/blog/sugar-free.jpg",
      date: "28 Şubat 2023",
      slug: "sekersiz-21-gun-vucudunuzdaki-degisimler",
    },
    {
      id: 6,
      title: "Sağlıklı Bağırsak Florası İçin Beslenme Rehberi",
      excerpt:
        "Bağırsak sağlığınızı destekleyecek ve sindirim sisteminizi güçlendirecek beslenme önerileri.",
      image: "/images/blog/gut-health.jpg",
      date: "15 Şubat 2023",
      slug: "saglikli-bagirsak-florasi-icin-beslenme-rehberi",
    },
    {
      id: 7,
      title: "Sporcu Beslenmesinde Protein Tüketimi",
      excerpt:
        "Sporcular için optimal protein tüketimi, zamanlaması ve kaynakları hakkında bilimsel bilgiler.",
      image: "/images/blog/protein.jpg",
      date: "3 Şubat 2023",
      slug: "sporcu-beslenmesinde-protein-tuketimi",
    },
    {
      id: 8,
      title: "Çocuklarda Sağlıklı Beslenme Alışkanlıkları",
      excerpt:
        "Çocuklarınıza sağlıklı beslenme alışkanlıkları kazandırmanın yolları ve pratik öneriler.",
      image: "/images/blog/children-nutrition.jpg",
      date: "20 Ocak 2023",
      slug: "cocuklarda-saglikli-beslenme-aliskanliklari",
    },
    {
      id: 9,
      title: "Menopoz Döneminde Beslenme",
      excerpt:
        "Menopoz döneminde yaşanan hormonal değişimleri destekleyecek beslenme stratejileri.",
      image: "/images/blog/menopause.jpg",
      date: "10 Ocak 2023",
      slug: "menopoz-doneminde-beslenme",
    },
  ];

  return (
    <>
      <section className={`section ${styles.pageHeader}`}>
        <div className="container">
          <div className={styles.headerContent}>
            <h1>Blog</h1>
            <p>
              Beslenme, sağlık ve yaşam tarzı hakkında bilgilendirici içerikler
            </p>
          </div>
        </div>
      </section>

      <section className={`section ${styles.blogContent}`}>
        <div className="container">
          <div className={styles.blogGrid}>
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.subscribe}`}>
        <div className="container">
          <div className={styles.subscribeContent}>
            <h2>Yeni Yazılardan Haberdar Olun</h2>
            <p>
              E-bültenimize abone olarak en güncel beslenme ve sağlık
              içeriklerinden haberdar olabilirsiniz.
            </p>
            <form className={styles.subscribeForm}>
              <input type="email" placeholder="E-posta adresiniz" required />
              <button type="submit" className="button">
                Abone Ol
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
