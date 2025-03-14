import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/pages/about.module.scss";

export const metadata = {
  title: "Hakkımda | Diyetisyen Bengisu Tekirdaş - Beslenme ve Diyet Uzmanı",
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
                src="/images/diyetisyen.jpg"
                alt="Diyetisyen Adı Soyadı"
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
