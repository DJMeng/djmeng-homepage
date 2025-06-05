import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const blogDir = path.join(process.cwd(), 'content/blog')

interface Post {
  slug: string
  title: string
  date: string
  summary: string
  content: string
  tags?: string[]
}

export function getAllPosts(): Post[] {
  return fs.readdirSync(blogDir).map((filename) => {
    const slug = filename.replace(/\.md$/, '')
    const fileContent = fs.readFileSync(path.join(blogDir, filename), 'utf8')
    const { data, content } = matter(fileContent)
    
    return {
      slug,
      title: data.title || '未命名文章',
      date: (() => {
        if (!data.date) return new Date().toISOString().split('T')[0];
        if (typeof data.date === 'string') return data.date;
        if (data.date instanceof Date) return data.date.toISOString().split('T')[0];
        return new Date(String(data.date)).toISOString().split('T')[0];
      })(),
      summary: data.summary || '',
      content,
      tags: data.tags || []
    } as Post
  })
}

export function getPostBySlug(slug: string): Post {
  const fullPath = path.join(blogDir, `${slug}.md`)
  const fileContent = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContent)
  
  return {
    slug,
    title: data.title || '未命名文章',
    date: (() => {
      if (!data.date) return new Date().toISOString().split('T')[0];
      if (typeof data.date === 'string') return data.date;
      if (data.date instanceof Date) return data.date.toISOString().split('T')[0];
      return new Date(String(data.date)).toISOString().split('T')[0];
    })(),
    summary: data.summary || '',
    content,
    tags: data.tags || []
  } as Post
}