// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <section className="flex flex-col items-center justify-center h-screen text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Coding the Mind. Riding the World.</h1>
        <p className="text-lg md:text-2xl text-gray-400 mb-6">算法工程师 ｜ LLM训练专家 ｜ 自由骑士</p>
        <div className="space-x-4">
          <a href="#about" className="px-6 py-2 bg-teal-400 text-black rounded-xl hover:brightness-125 transition">📍了解我</a>
          <a href="#projects" className="px-6 py-2 bg-gray-800 border border-gray-600 rounded-xl hover:bg-gray-700 transition">💻项目展示</a>
          <a href="/blog" className="px-6 py-2 bg-gray-800 border border-gray-600 rounded-xl hover:bg-gray-700 transition">📝技术博客</a>
        </div>
      </section>

      <section id="about" className="py-20 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">👋 Hi，我是 James</h2>
        <p className="text-gray-300 leading-relaxed">
          一个在算法与世界之间不断切换视角的探索者。
          专注于大模型微调（SFT / DPO）、CTR内容生成、多模态推荐系统，以及构建本地自动评测框架。
          技术之外，我热爱露营和骑行，正在筹划一次真正意义上的全球之旅。
        </p>
      </section>

      <section id="projects" className="py-20 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">💼 精选项目</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-300">
          <li>🧠 高CTR文案生成模型：基于微博广告数据训练+预测+GPT-4o评估</li>
          <li>🛠️ LLM评测工具链搭建：本地部署MMLU/CMMLU/C-Eval自动评估脚本</li>
          <li>🧹 大规模语义去重系统：10万级中英文数据集高效清洗+多维保留策略</li>
          <li>📊 微博用户心理特征建模：基于行为数据自动推断性格用于广告投放</li>
        </ul>
      </section>

      <section id="belief" className="py-20 px-6 max-w-3xl mx-auto text-center">
        <blockquote className="text-xl italic text-teal-400">
          “搞清楚游戏规则，然后优雅地打赢它。”
        </blockquote>
        <p className="text-gray-500 mt-2">不仅是算法，也适用于职场、人生，和未来。</p>
      </section>

      <section id="contact" className="py-20 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">📬 联系我</h2>
        <p className="text-gray-300">📧 Email: your@email.com</p>
        <p className="text-gray-300">🐙 GitHub: <a href="https://github.com/yourname" className="underline">yourname</a></p>
        <p className="text-gray-300">📄 简历下载：<a href="/resume.pdf" className="underline">点击查看</a></p>
      </section>
    </main>
  )
}