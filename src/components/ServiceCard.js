import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/components/serviceCard.module.scss";

const ServiceCard = ({ service }) => {
  const { title, description, icon, link } = service;

  return (
    <div className={styles.serviceCard}>
      <div className={styles.iconWrapper}>
        <Image src={icon} alt={title} width={50} height={50} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link href={link} className={styles.serviceLink}>
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
          <path d="M5 12h14"></path>
          <path d="M12 5l7 7-7 7"></path>
        </svg>
      </Link>
    </div>
  );
};

export default ServiceCard;
