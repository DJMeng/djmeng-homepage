// lib/blog.ts
import { readFile } from 'fs/promises'; 
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export  function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    return {
      slug,
      title: data.title || slug,
      date: data.date || '',
    };
  });
}

// export function getPostBySlug(slug: string) {
//   const fullPath = path.join(postsDirectory, `${slug}.mdx`);
//   const fileContents = fs.readFileSync(fullPath, 'utf8');
//   const { data, content } = matter(fileContents);
//   return {
//     slug,
//     title: data.title,
//     date: data.date,
//     content,
//   };
// }



export async function getPostBySlug(slug: string) {
  const filePath = path.join(process.cwd(), 'content/blog', `${slug}.mdx`);
  const source = await readFile(filePath, 'utf-8'); // ✅ 这里不会再报错

  const { data, content } = matter(source);

  return {
    title: data.title,
    date: data.date,
    content,
  };
}