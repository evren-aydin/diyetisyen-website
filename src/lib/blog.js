import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/blog");

export async function getAllBlogPosts() {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      id: slug,
      slug,
      title: matterResult.data.title,
      excerpt: matterResult.data.excerpt,
      image: matterResult.data.image,
      date: matterResult.data.date,
    };
  });

  return allPostsData.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getBlogPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
      id: slug,
      slug,
      title: matterResult.data.title,
      excerpt: matterResult.data.excerpt,
      image: matterResult.data.image,
      date: matterResult.data.date,
      content: contentHtml,
    };
  } catch (error) {
    return error;
  }
}

export async function getAllBlogSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => fileName.replace(/\.md$/, ""));
}
