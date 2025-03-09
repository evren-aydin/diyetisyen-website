import Link from "next/link";
import styles from "@/styles/components/hero.module.scss";

const GradientHero = ({
  title,
  subtitle,
  buttonText = null,
  buttonLink = null,
  gradientColors = ["#8A2BE2", "#9370DB", "#E6E6FA"], // Lila ve beyaz tonları
}) => {
  return (
    <section
      className={styles.gradientHero}
      style={{
        background: `linear-gradient(135deg, ${gradientColors.join(", ")})`,
      }}
    >
      {/* İçerik */}
      <div className={styles.heroContent}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {buttonText && buttonLink && (
          <Link href={buttonLink} passHref>
            <span className={styles.heroButton}>{buttonText}</span>
          </Link>
        )}
      </div>
    </section>
  );
};

export default GradientHero;
