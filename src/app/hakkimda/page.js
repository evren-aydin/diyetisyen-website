import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/pages/about.module.scss";

export const metadata = {
  title: "Hakkımda | Diyetisyen Adı - Beslenme ve Diyet Uzmanı",
  description:
    "Diyetisyen Adı Soyadı'nın eğitim geçmişi, uzmanlık alanları ve profesyonel deneyimleri hakkında bilgi edinin.",
};

export default function About() {
  return (
    <>
      <section className={`section ${styles.pageHeader}`}>
        <div className="container">
          <div className={styles.headerContent}>
            <h1>Hakkımda</h1>
            <p>
              Beslenme ve diyet alanında uzmanlaşmış bir diyetisyen olarak
              profesyonel deneyimim ve yaklaşımım
            </p>
          </div>
        </div>
      </section>

      <section className={`section ${styles.aboutMe}`}>
        <div className="container">
          <div className={styles.aboutContent}>
            <div className={styles.aboutImage}>
              <Image
                src="/images/dietitian-profile.jpg"
                alt="Diyetisyen Adı Soyadı"
                width={500}
                height={600}
                className={styles.image}
              />
            </div>
            <div className={styles.aboutText}>
              <h2>Merhaba, Ben Dyt. Bengisu Tekirdaş</h2>
              <p>
                Beslenme ve Diyet Uzmanı olarak 3 yıldır sağlıklı beslenme ve
                yaşam tarzı konusunda danışanlarıma rehberlik ediyorum. İstanbul
                Üniversitesi Beslenme ve Diyetetik Bölümü{"'"}nden mezun
                olduktan sonra, alanımda kendimi sürekli geliştirmek için
                çeşitli sertifika programlarına ve eğitimlere katıldım.
              </p>
              <p>
                Uzmanlık alanlarım arasında kilo yönetimi, sporcu beslenmesi,
                hamilelik dönemi beslenmesi, çocuk ve adölesan beslenmesi
                bulunmaktadır. Her danışanımın ihtiyaçlarına özel beslenme
                programları hazırlayarak, sadece kısa vadeli sonuçlar değil,
                uzun vadede sürdürülebilir sağlıklı yaşam alışkanlıkları
                kazandırmayı hedefliyorum.
              </p>
              <p>
                Danışanlarımla kurduğum güçlü iletişim ve empati sayesinde,
                beslenme programlarına uyum sürecini kolaylaştırıyor ve
                hedeflerine ulaşmalarında onlara destek oluyorum. Beslenme
                alanındaki güncel bilimsel gelişmeleri takip ederek, her zaman
                en doğru ve güncel bilgileri danışanlarımla paylaşıyorum.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.education}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Eğitim ve Sertifikalar</h2>
          <div className={styles.timelineContainer}>
            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineContent}>
                  <h3>İstanbul Üniversitesi</h3>
                  <p className={styles.degree}>
                    Beslenme ve Diyetetik Bölümü, Lisans
                  </p>
                  <p className={styles.year}>2010 - 2014</p>
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineContent}>
                  <h3>Fonksiyonel Tıp ve Beslenme Sertifikası</h3>
                  <p className={styles.degree}>
                    Uluslararası Fonksiyonel Tıp Enstitüsü
                  </p>
                  <p className={styles.year}>2016</p>
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineContent}>
                  <h3>Sporcu Beslenmesi Uzmanlık Sertifikası</h3>
                  <p className={styles.degree}>
                    Spor Bilimleri ve Beslenme Akademisi
                  </p>
                  <p className={styles.year}>2018</p>
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineContent}>
                  <h3>Klinik Beslenme Yüksek Lisansı</h3>
                  <p className={styles.degree}>Marmara Üniversitesi</p>
                  <p className={styles.year}>2015 - 2017</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.approach}`}>
        <div className="container">
          <div className={styles.approachContent}>
            <div className={styles.approachText}>
              <h2>Beslenme Yaklaşımım</h2>
              <p>
                Beslenme programlarımı oluştururken benimsediğim temel ilke,
                kişiye özel yaklaşımdır. Her bireyin genetik yapısı, yaşam
                tarzı, sağlık durumu ve hedefleri farklıdır. Bu nedenle, tek tip
                bir beslenme programı yerine, danışanlarımın ihtiyaçlarına göre
                özelleştirilmiş programlar hazırlıyorum.
              </p>
              <p>
                Sürdürülebilirlik, beslenme programlarımın en önemli
                özelliklerinden biridir. Kısa süreli, katı diyetler yerine, uzun
                vadede yaşam tarzı haline getirilebilecek beslenme
                alışkanlıkları kazandırmayı hedefliyorum. Danışanlarımın
                sevdikleri yiyecekleri tamamen hayatlarından çıkarmak yerine,
                dengeli ve bilinçli bir şekilde tüketmelerini sağlıyorum.
              </p>
              <p>
                Bilimsel ve güncel yaklaşımlarla, beslenme alanındaki son
                gelişmeleri takip ediyor ve danışanlarıma en doğru bilgileri
                sunuyorum. Beslenme programlarımı oluştururken, bilimsel
                kanıtlara dayalı yöntemleri kullanıyor ve popüler diyet
                trendlerinden uzak duruyorum.
              </p>
            </div>
            <div className={styles.approachImage}>
              <Image
                src="/images/nutrition-approach.jpg"
                alt="Beslenme Yaklaşımı"
                width={500}
                height={400}
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.cta}`}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Sağlıklı Yaşam Yolculuğunuza Birlikte Başlayalım</h2>
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
