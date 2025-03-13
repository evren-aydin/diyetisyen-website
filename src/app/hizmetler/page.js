import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/pages/services.module.scss";

export const metadata = {
  title: "Hizmetler | Diyetisyen Bengisu Tekirdaş - Beslenme ve Diyet Uzmanı",
  description:
    "Kişiye özel beslenme programları, kilo kontrolü, hamilelik beslenmesi ve daha fazla profesyonel diyetisyen hizmetleri.",
};

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Kişiye Özel Beslenme Programı",
      description:
        "Yaş, cinsiyet, fiziksel aktivite düzeyi, sağlık durumu ve hedeflerinize göre tamamen size özel olarak hazırlanan beslenme programları. Günlük yaşam tarzınız ve yeme alışkanlıklarınız dikkate alınarak oluşturulan bu programlar, sürdürülebilir ve uygulanabilir olması için özenle tasarlanır.",
      image: "/images/services/personal-nutrition.jpg",
      icon: "/images/icons/diet-plan.svg",
      link: "/hizmetler/kisisel-beslenme-programi",
    },
    {
      id: 2,
      title: "Kilo Verme/Alma Programı",
      description:
        "Sağlıklı ve kalıcı kilo kontrolü için bilimsel temelli beslenme planları. Hızlı kilo verme diyetleri yerine, metabolizmanızı destekleyen, kas kaybını önleyen ve uzun vadede kalıcı sonuçlar sağlayan beslenme programları ile ideal kilonuza ulaşmanıza yardımcı oluyorum.",
      image: "/images/services/weight-control.jpg",
      icon: "/images/icons/weight-control.svg",
      link: "/hizmetler/kilo-kontrolu",
    },
    {
      id: 3,
      title: "Hamilelik Dönemi Beslenme",
      description:
        "Anne ve bebek sağlığı için hamilelik öncesi, süreci ve sonrası için beslenme danışmanlığı. Hamilelik döneminde artan besin ihtiyaçlarınızı karşılamak, bebeğinizin sağlıklı gelişimini desteklemek ve doğum sonrası toparlanma sürecinizi hızlandırmak için özel beslenme programları.",
      image: "/images/services/pregnancy-nutrition.jpg",
      icon: "/images/icons/pregnancy.svg",
      link: "/hizmetler/hamilelik-beslenmesi",
    },
    {
      id: 4,
      title: "Çocuk ve Adölesan Beslenmesi",
      description:
        "Çocukluk ve ergenlik döneminde sağlıklı büyüme ve gelişmeyi destekleyen beslenme danışmanlığı. Çocuğunuzun yaşına uygun besin seçimleri, porsiyon kontrolü ve sağlıklı beslenme alışkanlıkları kazandırma konusunda rehberlik.",
      image: "/images/services/child-nutrition.jpg",
      icon: "/images/icons/child.svg",
      link: "/hizmetler/cocuk-beslenmesi",
    },
    {
      id: 5,
      title: "Sporcu Beslenmesi",
      description:
        "Spor performansınızı artırmak, kas kütlenizi korumak veya artırmak ve antrenman sonrası toparlanmanızı hızlandırmak için özel beslenme programları. Spor dalınıza, antrenman yoğunluğunuza ve hedeflerinize göre özelleştirilmiş beslenme stratejileri.",
      image: "/images/services/sports-nutrition.jpg",
      icon: "/images/icons/sports.svg",
      link: "/hizmetler/sporcu-beslenmesi",
    },
    {
      id: 6,
      title: "Kronik Hastalıklarda Beslenme",
      description:
        "Diyabet, hipertansiyon, kalp hastalıkları, tiroid hastalıkları gibi kronik hastalıklarda beslenme tedavisi. Hastalığınızın yönetimini destekleyen, ilaç tedavinizle uyumlu ve yaşam kalitenizi artıran beslenme programları.",
      image: "/images/services/chronic-disease.jpg",
      icon: "/images/icons/health.svg",
      link: "/hizmetler/kronik-hastaliklar",
    },
  ];

  return (
    <>
      <section className={`section ${styles.pageHeader}`}>
        <div className="container">
          <div className={styles.headerContent}>
            <h1>Hizmetlerim</h1>
            <p>
              Size özel beslenme çözümleri ile hedeflerinize ulaşmanıza yardımcı
              oluyorum
            </p>
          </div>
        </div>
      </section>

      <section className={`section ${styles.servicesOverview}`}>
        <div className="container">
          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <div key={service.id} className={styles.serviceCard}>
                <div className={styles.serviceImage}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={500}
                    height={350}
                    className={styles.image}
                  />
                  <div
                    className={styles.serviceIcon}
                    style={{ transform: "translateY(-25px)" }}
                  >
                    <Image src={service.icon} alt="" width={45} height={45} />
                  </div>
                </div>
                <div className={styles.serviceContent}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link href={service.link} className={styles.readMore}>
                    Detaylı Bilgi
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.process}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Çalışma Sürecim</h2>
            <p>
              Beslenme danışmanlığı sürecinde izlediğim adımlar ve yaklaşımım
            </p>
          </div>

          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <h3>İlk Görüşme ve Değerlendirme</h3>
                <p>
                  Detaylı bir sağlık geçmişi, beslenme alışkanlıkları, yaşam
                  tarzı ve hedefleriniz hakkında bilgi topluyorum. Vücut
                  analizinizi yaparak mevcut durumunuzu değerlendiriyorum.
                </p>
              </div>
            </div>

            <div className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <h3>Kişiye Özel Beslenme Programı</h3>
                <p>
                  Toplanan bilgiler doğrultusunda, tamamen size özel bir
                  beslenme programı hazırlıyorum. Bu program, günlük rutininize,
                  yeme alışkanlıklarınıza ve tercihlerinize uygun olarak
                  tasarlanır.
                </p>
              </div>
            </div>

            <div className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepContent}>
                <h3>Düzenli Takip ve Destek</h3>
                <p>
                  Beslenme programınızın etkinliğini değerlendirmek ve
                  gerektiğinde düzenlemeler yapmak için düzenli takip
                  görüşmeleri gerçekleştiriyorum. Bu süreçte karşılaştığınız
                  zorlukları aşmanıza yardımcı oluyorum.
                </p>
              </div>
            </div>

            <div className={styles.processStep}>
              <div className={styles.stepNumber}>4</div>
              <div className={styles.stepContent}>
                <h3>Eğitim ve Bilinçlendirme</h3>
                <p>
                  Sadece ne yiyeceğinizi söylemekle kalmıyor, neden o besinleri
                  tüketmeniz gerektiğini de açıklıyorum. Sağlıklı beslenme
                  konusunda bilinçlenmenizi sağlayarak, uzun vadede kendi
                  beslenmenizi yönetebilmenize yardımcı oluyorum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.faq}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Sık Sorulan Sorular</h2>
            <p>Beslenme danışmanlığı hizmetlerim hakkında merak edilenler</p>
          </div>

          <div className={styles.faqList}>
            <div className={styles.faqItem}>
              <h3>Beslenme programı ne kadar sürede hazırlanır?</h3>
              <p>
                İlk görüşmemizden sonra, genellikle 2-3 iş günü içerisinde
                kişiye özel beslenme programınız hazırlanır ve size iletilir.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>Takip görüşmeleri ne sıklıkla yapılır?</h3>
              <p>
                Takip görüşmeleri genellikle ilk ay haftalık, sonraki aylarda
                iki haftada bir veya ayda bir olacak şekilde planlanır. Ancak bu
                süre, kişisel ihtiyaçlarınıza ve hedeflerinize göre değişiklik
                gösterebilir.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>Online danışmanlık hizmeti veriyor musunuz?</h3>
              <p>
                Evet, yüz yüze görüşmenin yanı sıra, online danışmanlık hizmeti
                de sunuyorum. Zoom, Skype veya WhatsApp üzerinden görüntülü
                görüşme yaparak, beslenme danışmanlığı hizmetinden
                faydalanabilirsiniz.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>Beslenme programına uyum sağlayamazsam ne olur?</h3>
              <p>
                Beslenme programına uyum sağlamakta zorlanıyorsanız, bunu
                benimle paylaşmanız çok önemlidir. Programı yaşam tarzınıza ve
                tercihlerinize daha uygun hale getirmek için gerekli
                düzenlemeleri yapabiliriz. Amacımız, sürdürülebilir ve
                uygulanabilir bir beslenme planı oluşturmaktır.
              </p>
            </div>
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
