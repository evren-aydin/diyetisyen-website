import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/pages/blogDetail.module.scss";
import { getBlogPostBySlug, getAllBlogSlugs } from "@/lib/blog";

export async function generateMetadata({ params }) {
  const post = await getBlogPostBySlug(params.slug);

  return {
    title: `${post.title} | Diyetisyen Bengisu - Beslenme ve Diyet Uzmanı`,
    description: post.excerpt,
  };
}

// Bu fonksiyon statik sayfaların oluşturulması için gerekli
export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogPost({ params }) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    return <div>Blog yazısı bulunamadı</div>;
  }

  return (
    <>
      <section className={`section ${styles.blogHeader}`}>
        <div className="container">
          <span className={styles.date}>{post.date}</span>
          <h1>{post.title}</h1>
        </div>
      </section>

      <section className={`section ${styles.blogContent}`}>
        <div className="container">
          <div className={styles.featuredImage}>
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={600}
              priority
            />
          </div>

          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className={styles.backToBlogs}>
            <Link href="/blog">← Tüm Blog Yazılarına Dön</Link>
          </div>
        </div>
      </section>
    </>
  );
}
