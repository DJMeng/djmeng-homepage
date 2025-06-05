// app/blog/[slug]/page.tsx

import { getPostBySlug, getAllPosts } from '@/lib/blog'
import { notFound } from 'next/navigation'
import { remark } from 'remark'
import html from 'remark-html'

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  if (!post) return notFound()

  const contentHtml = (await remark().use(html).process(post.content)).toString()

  return (
    <div className="max-w-3xl mx-auto py-20 px-4 text-white">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-8">{post.date}</p>
      <div
        dangerouslySetInnerHTML={{ __html: contentHtml }}
        className="prose prose-invert max-w-none"
      />
    </div>
  )
}
