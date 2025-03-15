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
      title: "Kilo Verme / Kilo Alma Programı",
      description:
        "Hedefiniz kilo vermek ya da almak olabilir, ancak önemli olan bunu sağlıklı ve sürdürülebilir bir şekilde yapmak! Bu program, vücudunuzun ihtiyaçlarına uygun, bilimsel temelli ve uzun vadede sürdürülebilir beslenme alışkanlıkları kazanmanızı sağlar.",
      image: "/images/services/kilo-verme-alma.jpg",
      icon: "/images/icons/diet-plan.svg",
      link: "/hizmetler/kilo-verme-alma-programi",
    },
    {
      id: 2,
      title: "Özel Durumlarda Beslenme",
      description:
        "Hamilelik, menopoz, emzirme dönemi gibi dönemlerde ihtiyaçlarımız değişir. Bu program, vücudunuzun özel dönemlerdeki gereksinimlerini göz önünde bulundurarak, sizin için en uygun beslenme düzenini oluşturmayı hedefler.",
      image: "/images/services/özel-durum.jpg",
      icon: "/images/icons/weight-control.svg",
      link: "/hizmetler/ozel-beslenme",
    },
    {
      id: 3,
      title: "Hastalıklara Özel Beslenme Programı",
      description:
        "İnsülin direnci, PCOS, sindirim sistemi hastalıkları ve diğer kronik durumlar gibi sağlık soruları hem beslenme düzeninizden etkilenir hem de beslenme düzeninizin iyileştirilmesini gerektirir! Bu program, sağlık durumu ve ihtiyaçlarınız doğrultusunda özel olarak hazırlanır.",
      image: "/images/services/hastalıklarda-beslenme.jpg",
      icon: "/images/icons/pregnancy.svg",
      link: "/hizmetler/hastalik-beslenmesi",
    },
    {
      id: 4,
      title: "Sağlıklı ve Sürdürülebilir Beslenme Programı",
      description:
        "Kilomu korumak istiyorum ama beslenme konusunda doğru bildiğim yanlışları keşfetmeye ihtiyacım var diyorsanız, bu program tam size göre!",
      image: "/images/services/saglikli-beslenme.jpg",
      icon: "/images/icons/child.svg",
      link: "/hizmetler/surdurulebilir-beslenme",
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
