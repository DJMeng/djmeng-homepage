// import fs from 'fs';
// import path from 'path';
// import matter from 'gray-matter';
// import { marked } from 'marked';

// const postsDirectory = path.join(process.cwd(), 'posts');

// interface Post {
//   slug: string;
//   title: string;
//   date: string;
//   excerpt: string;
//   content: string;
// }

// export async function getAllSlugs(): Promise<string[]> {
//   return fs.readdirSync(postsDirectory).map((filename) =>
//     filename.replace(/\.mdx?$/, '')
//   );
// }

// export async function getPostBySlug(slug: string): Promise<Post | null> {
//   const fullPath = path.join(postsDirectory, `${slug}.md`);
//   if (!fs.existsSync(fullPath)) return null;

//   const fileContents = fs.readFileSync(fullPath, 'utf8');
//   const { data, content } = matter(fileContents);

//   return {
//     slug,
//     title: data.title || slug,
//     date: data.date || '',
//     excerpt: data.excerpt || '',
//     content,
//   };
// }



// ---

// ## ✅ 第二步：创建 `lib/posts.ts`

// 这是读取和转换 Markdown 的核心工具：

// lib/posts.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import highlight from 'remark-highlight.js';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getAllSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''));
}

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(highlight)
    .use(html)
    .process(content);

  const contentHtml = processedContent.toString();

  return {
    slug,
    content: contentHtml,
    meta: data,
  };
}
