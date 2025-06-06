export default function TestPage() {
    return (
      <main className="max-w-3xl mx-auto p-6">
        <article className="prose">
          <h1>标题</h1>
          <p>这是段落</p>
          <ul>
            <li>第一项</li>
            <li>第二项</li>
          </ul>
          <pre><code>console.log('Hello')</code></pre>
        </article>
      </main>
    );
  }