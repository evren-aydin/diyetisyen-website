import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/components/blogCard.module.scss";

const BlogCard = ({ post }) => {
  const { title, excerpt, image, date, slug } = post;

  return (
    <article className={styles.blogCard}>
      <Link href={`/blog/${slug}`} className={styles.imageContainer}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.image}
        />
      </Link>
      <div className={styles.content}>
        <span className={styles.date}>{date}</span>
        <h3>
          <Link href={`/blog/${slug}`}>{title}</Link>
        </h3>
        <p>{excerpt}</p>
        <Link href={`/blog/${slug}`} className={styles.readMore}>
          Devamını Oku
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
    </article>
  );
};

export default BlogCard;
