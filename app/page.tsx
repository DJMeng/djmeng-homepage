/*Add commentMore actions
DJMENG.vip - 个人主页首页代码（Next.js + Tailwind CSS）
*/

// app/page.tsx (Next.js App Router 入口首页)


export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <section className="flex flex-col items-center justify-center h-screen text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Coding the Mind. Riding the World.
        </h1>
        <p className="text-lg md:text-2xl text-gray-400 mb-6">
          算法工程师 | 摩托车爱好者
        </p>
        <div className="space-x-4">
          <a href="#about" className="px-6 py-2 bg-teal-400 text-black rounded-xl hover:brightness-125 transition">
            📍了解我
          </a>
          <a href="#tech" className="px-6 py-2 bg-gray-800 border border-gray-600 rounded-xl hover:bg-gray-700 transition">
            📈项目精选
          </a>
          <a href="#contact" className="px-6 py-2 bg-gray-800 border border-gray-600 rounded-xl hover:bg-gray-700 transition">
            📬联系我
          </a>
        </div>
      </section>

      <section id="about" className="py-20 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">👋 Hi，我是 James</h2>
        <div className="text-gray-300 leading-relaxed space-y-4">
          <p>一名专注于NLP与多模态算法的工程师，拥有丰富的大模型调优经验以及在实战中打磨出来的系统设计与落地能力。</p>
          <p>在微博工作期间，我独立承担了多个核心模块的算法设计与服务上线，服务于新闻推荐、内容理解、广告运营、AIGC等多个方向。</p>
          <p>技术栈主要涵盖：CV、NLP、多模态、模型推理加速、RAG知识库、大模型训练调优、数字人、图片生成等。</p>
          <p>目标是成为能理解业务逻辑、主导项目落地、掌控模型细节的 AI 架构型人才。</p>
        </div>
      </section>

      <section id="tech" className="py-20 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">📈项目精选</h2>

        <div className="space-y-8 text-gray-300">

          <div>
            <h3 className="text-2xl font-semibold text-teal-400">2025 年 · 智能推荐 + 商业化探索</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>智慧小浪AI助手 / 微博运营工具开发</li>
              <li>广告图片智能生成 / 高CTR文案模型训练</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-teal-400">2024 年 · 多模态 + LLM应用深化</h3>
            <ul className="list-disc list-inside space-y-2">
              <p></p>
              <li>妙笔平台：数码/汽车/美妆/情感领域  / AI评论 / AI助理 </li>
              <li>汽车智能配图 / 新浪移动AI素材工具 / 微博评论机器人</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-teal-400">2023 年 · AIGC探索 </h3>
            <ul className="list-disc list-inside space-y-2">
              <p></p>
              <li>智能文案改写 / 矩阵账号孵化 / RAG知识库 </li>
              <li>图文向量化 / 图片生成 / 图片超分 </li>
              <li>数字人 / 微博热点挖掘 / 广告识别</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-teal-400">2022 年 · NLP 服务 + 舆情识别</h3>
            <ul className="list-disc list-inside space-y-2">
              <p></p>
              <li>文本纠错 / 文本指纹 / 文本去重 / NER / 疫情识别 </li>
              <li>舆情识别 工商舆情 / 社会舆情 / 品牌舆情 / 明星舆情</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-teal-400">2021 年 · CV 服务 + 推理加速</h3>
            <ul className="list-disc list-inside space-y-2">
              <p></p>
              <li>图片指纹 / 图片去重 / OCR / 地图识别 / 清晰度识别  </li>
              <li>奥运台标检测 / 小程序码检测 /模型推理加速</li>
            </ul>
          </div>

        </div>
      </section>

      <section id="belief" className="py-20 px-6 max-w-3xl mx-auto text-center">
        <blockquote className="text-xl italic text-teal-400">
          “享受孤独和自由”
        </blockquote>
        <p className="text-gray-500 mt-2">愿你我都能平静下来，早日心之所至</p>
      </section>

      <section id="contact" className="py-20 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">📬 联系我</h2>
        <p className="text-gray-300">📧 Email: mdj1370572781@gmail.com</p>
        <p className="text-gray-300">📧 Wechat: 18810445899</p>
        <p className="text-gray-300">🐙 GitHub: <a href="https://github.com/DJMeng" className="underline">DJMeng</a></p>
        <p className="text-gray-300">📄 简历下载：<a href="/resume.pdf" className="underline">点击查看</a></p>
      </section>
    </main>
  );
}
