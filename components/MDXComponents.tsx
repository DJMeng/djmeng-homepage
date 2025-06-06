// components/MDXComponents.tsx
import { MDXComponents } from 'mdx/types'

const components: MDXComponents = {
  // 你可以在这里添加自定义组件映射，比如
  h1: ({ children }) => <h1 className="text-3xl font-bold my-4">{children}</h1>,
  p: ({ children }) => <p className="text-base leading-7 my-2">{children}</p>,
}

export default components
