import { getAllSlugs, getPostBySlug } from '@/lib/posts';
import Link from 'next/link';

interface PostMeta {
  slug: string;
  title: string;
  date: string;
}

export default async function BlogPage() {
  const slugs = await getAllSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const post = await getPostBySlug(slug);
      return {
        slug,
        title: post?.title || slug,
        date: post?.date || '',
      };
    })
  );

  // 按日期降序排序
  const sortedPosts = [...posts].sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">博客列表</h1>
      <ul>
        {sortedPosts.map(({ slug, title, date }) => (
          <li key={slug} className="mb-4">
            <Link href={`/blog/${slug}`} className="text-teal-500 hover:underline text-xl">
              {title}
            </Link>
            <p className="text-gray-400 text-sm">{date}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
