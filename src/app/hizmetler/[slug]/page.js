import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import styles from "@/styles/pages/service-detail.module.scss";

// Tüm hizmetlerin verileri
const servicesData = [
  {
    id: 1,
    title: "Kilo Verme / Kilo Alma Programı",
    slug: "kilo-verme-alma-programi",
    description:
      "Bu program, vücudunuzun ihtiyaçlarına uygun, bilimsel temelli ve uzun vadede sürdürülebilir beslenme alışkanlıkları kazanmanızı sağlar.",
    fullDescription: `
      <h1>Bu Programda Sizi Neler Bekliyor?</h1>
       <h3>📌Kişiye Özel Beslenme Planı: </h3> <p>Yaşam tarzınıza, metabolizmanıza ve hedeflerinize göre uygulanabilir bir program hazırlıyorum.</p>
      
       <h3>📌Kısıtlayıcı Değil, Sürdürülebilir Yaklaşım: </h3> <p>Aç kalmadan, sosyal hayatınızı kısıtlamadan sağlıklı kilo yönetimi sağlamanıza yardımcı oluyorum.</p>
      
       <h3>📌Bilimsel ve Gerçekçi Stratejiler: </h3> <p>Hızlı sonuç vaat eden diyetlerden uzak duruyorum! Unutmayın, amacımız uzun vadede sağlıklı bir beslenme düzeni oluşturmak. Kısa sürece sonuç arıyorum diyorsanız, burası orası değil :)</p>
      
     <h3>Nasıl Çalışıyorum?</h3> 
     <p>İlk görüşmemizde beslenme alışkanlıklarınızı, günlük rutininizi ve hedeflerinizi
değerlendiriyorum ve size en uygun beslenme planını oluşturuyorum. Kilo verme veya alma
sürecinde <b>sağlığınızı ön planda tutarak</b>, dengeli bir beslenme modeli geliştiriyorum.</p>

<h3>Programın Kazandırdıkları:</h3> 
     <p>✔️Günlük rutininizde az/fazla kalori almanıza sebep olan detayları düzenlemeyi hedefler.<br>
     ✔️ Sağlıklı kilo değişimi sağlar.<br>
      ✔️ Vücudunuzun ihtiyaçlarını ön planda tutar.
     </p>
    
   <p>Sağlıklı kilo yönetimi için bilinçli ve sürdürülebilir bir adım atmaya hazırsanız, benimle iletişime geçebilirsiniz! </p>
    `,
    image: "/images/services/kilo-verme-alma.jpg",
    icon: "/images/icons/diet-plan.svg",
  },
  {
    id: 2,
    title: "Kilo Verme/Alma Programı",
    slug: "ozel-beslenme",
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
    image: "/images/services/özel-durum.jpg",
    icon: "/images/icons/weight-control.svg",
  },
  {
    id: 3,
    title: "Hamilelik Dönemi Beslenme",
    slug: "hastalik-beslenmesi",
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
    image: "/images/services/hastalıklarda-beslenme.jpg",
    icon: "/images/icons/pregnancy.svg",
  },
  {
    id: 4,
    title: "Çocuk ve Adölesan Beslenmesi",
    slug: "surdurulebilir-beslenme",
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
    image: "/images/services/saglikli-beslenme.jpg",
    icon: "/images/icons/child.svg",
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
