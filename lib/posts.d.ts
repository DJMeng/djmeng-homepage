declare module '@/lib/posts' {
  interface Post {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    content: string;
  }

  export function getAllSlugs(): Promise<string[]>;
  export function getPostBySlug(slug: string): Promise<Post | null>;
}