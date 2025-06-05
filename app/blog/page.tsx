// app/blog/page.tsx
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'

export default function BlogListPage() {
  const posts = getAllPosts()

  return (
    <div className="max-w-3xl mx-auto py-20 px-4 text-white">
      <h1 className="text-4xl font-bold mb-6">📝 博客文章</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug} className="bg-gray-900 p-6 rounded-xl">
            <Link href={`/blog/${post.slug}`} className="text-2xl text-teal-400 hover:underline">
              {post.title}
            </Link>
            <p className="text-gray-400 mt-1">{post.summary}</p>
            <span className="text-gray-500 text-sm">
              {(() => {
                try {
                  const dateStr = String(post.date);
                  const date = new Date(dateStr);
                  if (isNaN(date.getTime())) return '日期无效';
                  return date.toLocaleDateString('zh-CN', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit'
                  });
                } catch {
                  return '日期无效';
                }
              })()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
