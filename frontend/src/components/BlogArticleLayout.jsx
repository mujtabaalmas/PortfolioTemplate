const BlogArticleLayout = ({ post }) => (
  <article className="glass-panel blog-article">
    <header className="blog-article-hero">
      <span className="blog-category">{post.category}</span>
      <h1 className="blog-article-title">{post.title}</h1>
      <p className="blog-article-intro">{post.intro}</p>
      <div className="blog-article-meta">
        <span>{post.date}</span>
        <span>•</span>
        <span>{post.readTime}</span>
      </div>
    </header>

    <div className="blog-article-body">
      {post.content.map((section) => (
        <section key={section.heading} className="blog-article-section">
          <h2>{section.heading}</h2>
          {section.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </section>
      ))}
    </div>
  </article>
)

export default BlogArticleLayout
