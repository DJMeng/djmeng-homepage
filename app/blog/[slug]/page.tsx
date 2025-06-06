
// app/blog/[slug]/page.tsx
import { getPostBySlug, getAllSlugs } from '@/lib/posts';

export const dynamicParams = true;

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug: string) => ({ slug }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return (
      <main className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold">文章不存在</h1>
      </main>
    );
  }
  console.log(post.content);
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{post.meta.title}</h1>
      <p className="text-sm text-gray-500 mb-8">{post.meta.date}</p>

      {/* 正确放置 prose 样式 */}
      <article
        className="prose prose-lg dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </main>
  );
}

