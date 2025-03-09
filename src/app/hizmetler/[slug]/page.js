import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import styles from "@/styles/pages/service-detail.module.scss";

// Tüm hizmetlerin verileri
const servicesData = [
  {
    id: 1,
    title: "Kişiye Özel Beslenme Programı",
    slug: "kisisel-beslenme-programi",
    description:
      "Yaş, cinsiyet, fiziksel aktivite düzeyi, sağlık durumu ve hedeflerinize göre tamamen size özel olarak hazırlanan beslenme programları.",
    fullDescription: `
      <p>Kişiye özel beslenme programı, bireyin yaşı, cinsiyeti, fiziksel aktivite düzeyi, sağlık durumu, genetik özellikleri ve yaşam tarzı gibi faktörler dikkate alınarak hazırlanan, tamamen kişiye özgü bir beslenme planıdır.</p>
      
      <p>Bu program, sadece kilo kontrolü sağlamakla kalmaz, aynı zamanda genel sağlık durumunuzu iyileştirmeyi, enerji seviyenizi artırmayı ve uzun vadede sağlıklı beslenme alışkanlıkları kazandırmayı hedefler.</p>
      
      <h3>Kişiye Özel Beslenme Programı Nasıl Hazırlanır?</h3>
      
      <p>İlk görüşmemizde detaylı bir anamnez alarak beslenme alışkanlıklarınızı, yaşam tarzınızı, sağlık geçmişinizi ve hedeflerinizi değerlendiriyorum. Vücut analizinizi yaparak mevcut durumunuzu tespit ediyorum.</p>
      
      <p>Toplanan tüm bu bilgiler doğrultusunda, günlük besin ihtiyaçlarınızı hesaplayarak, tamamen size özel bir beslenme programı hazırlıyorum. Bu program, sevdiğiniz ve sevmediğiniz besinleri, günlük rutininizi ve yemek düzeninizi dikkate alarak oluşturulur.</p>
      
      <h3>Kişiye Özel Beslenme Programının Faydaları</h3>
      
      <ul>
        <li>Metabolizmanızın daha verimli çalışmasını sağlar</li>
        <li>Enerji seviyenizi artırır</li>
        <li>Bağışıklık sisteminizi güçlendirir</li>
        <li>Sindirim sistemi problemlerini azaltır</li>
        <li>Uyku kalitenizi iyileştirir</li>
        <li>Cilt sağlığınızı destekler</li>
        <li>Kronik hastalık risklerini azaltır</li>
      </ul>
    `,
    image: "/images/services/personal-nutrition.jpg",
    icon: "/images/icons/diet-plan.svg",
  },
  {
    id: 2,
    title: "Kilo Verme/Alma Programı",
    slug: "kilo-kontrolu",
    description:
      "Sağlıklı ve kalıcı kilo kontrolü için bilimsel temelli beslenme planları.",
    fullDescription: `
      <p>Kilo kontrolü programı, sağlıklı bir şekilde kilo vermenizi veya almanızı sağlayan, bilimsel temelli bir beslenme planıdır. Hızlı kilo verme diyetleri yerine, metabolizmanızı destekleyen, kas kaybını önleyen ve uzun vadede kalıcı sonuçlar sağlayan bir yaklaşım benimsiyorum.</p>
      
      <h3>Kilo Verme Programı</h3>
      
      <p>Kilo verme programında amacımız, sadece tartıdaki rakamları düşürmek değil, vücut yağ oranınızı azaltırken kas kütlenizi korumaktır. Bu şekilde metabolizmanız yavaşlamaz ve verdiğiniz kilolar kalıcı olur.</p>
      
      <p>Program, kalori kısıtlamasının yanı sıra, besin kalitesine odaklanır. Protein, kompleks karbonhidratlar, sağlıklı yağlar, vitamin ve mineraller açısından zengin bir beslenme planı oluşturulur.</p>
      
      <h3>Kilo Alma Programı</h3>
      
      <p>Kilo alma programında hedefimiz, sağlıklı bir şekilde kilo almanızı sağlamak ve bu süreçte kas kütlenizi artırmaktır. Sadece kalori artışı değil, doğru besinlerle kalori artışı sağlanır.</p>
      
      <p>Program, protein açısından zengin besinler, kompleks karbonhidratlar ve sağlıklı yağları içerir. Günlük kalori ihtiyacınızın üzerinde, ancak sindirim sisteminizi zorlamayacak şekilde bir beslenme planı oluşturulur.</p>
      
      <h3>Kilo Kontrolü Programının Faydaları</h3>
      
      <ul>
        <li>Sağlıklı ve kalıcı kilo kontrolü sağlar</li>
        <li>Metabolizma hızınızı artırır</li>
        <li>Kas kütlenizi korur veya artırır</li>
        <li>Enerji seviyenizi yükseltir</li>
        <li>Yeme alışkanlıklarınızı iyileştirir</li>
        <li>Kronik hastalık risklerini azaltır</li>
      </ul>
    `,
    image: "/images/services/weight-control.jpg",
    icon: "/images/icons/weight-control.svg",
  },
  {
    id: 3,
    title: "Hamilelik Dönemi Beslenme",
    slug: "hamilelik-beslenmesi",
    description:
      "Anne ve bebek sağlığı için hamilelik öncesi, süreci ve sonrası için beslenme danışmanlığı.",
    fullDescription: `
      <p>Hamilelik dönemi beslenme programı, anne ve bebeğin sağlığını desteklemek için hamilelik öncesi, hamilelik süreci ve doğum sonrası dönemleri kapsayan özel bir beslenme planıdır.</p>
      
      <h3>Hamilelik Öncesi Beslenme</h3>
      
      <p>Hamilelik öncesi beslenme, hem anne adayının hem de bebeğin sağlığı için kritik öneme sahiptir. Bu dönemde folik asit, demir, kalsiyum gibi önemli besin öğelerinin yeterli alımı sağlanarak, sağlıklı bir hamilelik için zemin hazırlanır.</p>
      
      <h3>Hamilelik Dönemi Beslenme</h3>
      
      <p>Hamilelik sürecinde, bebeğin sağlıklı gelişimi ve annenin sağlığının korunması için özel bir beslenme programı uygulanır. Bu program, her trimesterde değişen besin ihtiyaçlarını karşılamak üzere düzenlenir.</p>
      
      <p>Protein, demir, kalsiyum, folik asit, omega-3 yağ asitleri gibi kritik besin öğelerinin yeterli alımı sağlanır. Aynı zamanda, bulantı, reflü, kabızlık gibi hamilelik döneminde sık görülen şikayetleri azaltmaya yönelik beslenme önerileri sunulur.</p>
      
      <h3>Doğum Sonrası Beslenme</h3>
      
      <p>Doğum sonrası dönemde, annenin toparlanma sürecini hızlandırmak, emzirme döneminde süt üretimini desteklemek ve bebeğin sağlıklı gelişimini sağlamak için özel bir beslenme programı uygulanır.</p>
      
      <p>Bu program, annenin enerji ihtiyacını karşılarken, doğum sonrası kilo kontrolünü de destekler. Emziren anneler için süt üretimini artıran besinlere ağırlık verilir.</p>
      
      <h3>Hamilelik Dönemi Beslenme Programının Faydaları</h3>
      
      <ul>
        <li>Bebeğin sağlıklı gelişimini destekler</li>
        <li>Hamilelik komplikasyonları riskini azaltır</li>
        <li>Annenin enerji seviyesini yükseltir</li>
        <li>Hamilelik şikayetlerini hafifletir</li>
        <li>Doğum sonrası toparlanma sürecini hızlandırır</li>
        <li>Emzirme döneminde süt üretimini destekler</li>
      </ul>
    `,
    image: "/images/services/pregnancy-nutrition.jpg",
    icon: "/images/icons/pregnancy.svg",
  },
  {
    id: 4,
    title: "Çocuk ve Adölesan Beslenmesi",
    slug: "cocuk-beslenmesi",
    description:
      "Çocukluk ve ergenlik döneminde sağlıklı büyüme ve gelişmeyi destekleyen beslenme danışmanlığı. Çocuğunuzun yaşına uygun besin seçimleri, porsiyon kontrolü ve sağlıklı beslenme alışkanlıkları kazandırma konusunda rehberlik.",
    fullDescription: `<p>Çocuk ve adölesan beslenmesi, çocukların ve gençlerin sağlıklı büyüme, gelişim ve genel sağlıklarını desteklemek için özel olarak hazırlanmış bir beslenme planıdır.</p>
    
    <h3>Çocukluk Dönemi Beslenmesi</h3>
    
    <p>Çocukluk döneminde, sağlıklı büyüme ve gelişme için vitaminler, mineraller, proteinler ve sağlıklı yağlar gibi temel besin öğeleri doğru oranlarda alınmalıdır. Çocukların ihtiyaçlarına göre özelleştirilmiş beslenme programları ile bağışıklık sistemini güçlendirir ve sağlıklı kilo gelişimini destekleriz.</p>
    
    <h3>Adölesan Dönemi Beslenmesi</h3>
    
    <p>Ergenlik dönemi, fiziksel ve hormonal değişimlerin en yoğun olduğu bir dönemdir. Bu dönemde doğru beslenme, sağlıklı kilo yönetimi ve enerji seviyelerinin korunması için çok önemlidir. Hedef, gençlerin aktif yaşam tarzlarına uyacak beslenme alışkanlıkları kazandırmaktır.</p>
    
    <h3>Çocuk ve Adölesan Beslenmesinin Faydaları</h3>
    
    <ul>
      <li>Sağlıklı büyüme ve gelişmeyi destekler</li>
      <li>Enerji seviyelerini artırır</li>
      <li>Bağışıklık sistemini güçlendirir</li>
      <li>Sağlıklı kilo kontrolünü sağlar</li>
      <li>Sağlıklı beslenme alışkanlıkları kazandırır</li>
    </ul>`,
    image: "/images/services/child-nutrition.jpg",
    icon: "/images/icons/child.svg",
  },
  {
    id: 5,
    title: "Sporcu Beslenmesi",
    slug: "sporcu-beslenmesi",
    description:
      "Spor performansınızı artırmak, kas kütlenizi korumak veya artırmak ve antrenman sonrası toparlanmanızı hızlandırmak için özel beslenme programları. Spor dalınıza, antrenman yoğunluğunuza ve hedeflerinize göre özelleştirilmiş beslenme stratejileri.",
    fullDescription: `<p>Sporcu beslenmesi, sporcuların performansını en üst düzeye çıkarmak, kas gelişimini desteklemek ve toparlanmayı hızlandırmak için özel olarak tasarlanmış bir beslenme programıdır. Hedef, vücudun ihtiyaç duyduğu enerji ve besin öğelerini doğru şekilde almak ve antrenman performansını artırmaktır.</p>
    
    <h3>Sporcu Beslenmesinin Temel İlkeleri</h3>
    
    <p>Sporcular için doğru beslenme, egzersiz öncesi, sırası ve sonrasında vücuda uygun besinleri sağlamak anlamına gelir. Protein, karbonhidrat ve yağların doğru oranlarda alınması, enerji seviyelerinin ve kas onarımının desteklenmesi gerekmektedir.</p>
    
    <h3>Sporcu Beslenmesinin Faydaları</h3>
    
    <ul>
      <li>Performansı artırır</li>
      <li>Kas kütlesini korur veya artırır</li>
      <li>Toparlanmayı hızlandırır</li>
      <li>Enerji seviyelerini yükseltir</li>
      <li>Sakatlık risklerini azaltır</li>
    </ul>`,
    image: "/images/services/sports-nutrition.jpg",
    icon: "/images/icons/sports.svg",
  },
  {
    id: 6,
    title: "Kronik Hastalıklarda Beslenme",
    slug: "kronik-hastaliklar",
    description:
      "Diyabet, hipertansiyon, kalp hastalıkları, tiroid hastalıkları gibi kronik hastalıklarda beslenme tedavisi. Hastalığınızın yönetimini destekleyen, ilaç tedavinizle uyumlu ve yaşam kalitenizi artıran beslenme programları.",
    fullDescription: ` <p>Kronik hastalıklarda beslenme, hastalıkların yönetilmesine yardımcı olmak ve genel sağlık durumunu iyileştirmek amacıyla özel olarak hazırlanan bir beslenme planıdır. Diyabet, hipertansiyon, kalp hastalıkları, tiroid hastalıkları gibi durumlar için uygun beslenme tedavisi sağlanır.</p>
    
    <h3>Diyabet Beslenmesi</h3>
    
    <p>Diyabet hastalarına yönelik beslenme programları, kan şekerini dengelemeyi hedefler. Karbonhidratlar, proteinler ve yağların doğru miktarlarda alınması, insülin duyarlılığını artırır ve kan şekeri dalgalanmalarını engeller.</p>
    
    <h3>Hipertansiyon Beslenmesi</h3>
    
    <p>Hipertansiyon, tuz ve doymuş yağların kısıtlandığı, potasyum, magnezyum ve liften zengin besinlerin tüketildiği bir beslenme planı ile yönetilebilir. Bu beslenme planı, kan basıncını dengelemeye yardımcı olur.</p>
    
    <h3>Kronik Hastalıklarda Beslenmenin Faydaları</h3>
    
    <ul>
      <li>Hastalıkların yönetilmesine yardımcı olur</li>
      <li>Yaşam kalitesini artırır</li>
      <li>İlaç tedavisiyle uyumlu beslenme sağlar</li>
      <li>Metabolik dengeyi sağlar</li>
      <li>Genel sağlık durumunu iyileştirir</li>
    </ul>`,
    image: "/images/services/chronic-disease.jpg",
    icon: "/images/icons/health.svg",
  },
];

export async function generateMetadata({ params }) {
  const awaitParams = await params;
  const slug = awaitParams.slug;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) {
    return {
      title: "Hizmet Bulunamadı | Diyetisyen Bengisu",
    };
  }
  return {
    title: `${service.title} | Diyetisyen Bengisu - Beslenme ve Diyet Uzmanı`,
    description: service.description,
  };
}

export default async function ServiceDetail({ params }) {
  const awaitParams = await params;
  const slug = awaitParams.slug;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) {
    notFound();
  }

  return (
    <>
      <section className={`section ${styles.serviceHeader}`}>
        <div className="container">
          <div className={styles.headerContent}>
            <h1>{service.title}</h1>
            <p>{service.description}</p>
          </div>
        </div>
      </section>

      <section className={`section ${styles.serviceDetail}`}>
        <div className="container">
          <div className={styles.serviceContent}>
            <div className={styles.serviceImage}>
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={400}
                className={styles.image}
              />
            </div>
            <div
              className={styles.serviceDescription}
              dangerouslySetInnerHTML={{ __html: service.fullDescription }}
            />
          </div>
        </div>
      </section>

      <section className={`section ${styles.cta}`}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Bu Hizmet Hakkında Daha Fazla Bilgi Almak İster misiniz?</h2>
            <p>
              Sorularınız için benimle iletişime geçebilir veya hemen randevu
              alabilirsiniz.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/iletisim" className="button">
                Randevu Al
              </Link>
              <Link href="/hizmetler" className="button outline">
                Diğer Hizmetleri Görüntüle
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
