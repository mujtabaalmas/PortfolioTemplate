import { BLOG_POSTS } from '../constants/content'

const BlogSection = () => (
  <section id="blog" className="section-padding">
    <div className="section-header">
      <span className="section-eyebrow">Writing</span>
      <h2 className="section-title">Notes from the backend lab</h2>
      <p className="section-description">Architecture experiments, incident reviews, and practical playbooks.</p>
    </div>
    <div className="grid grid-3 mt-12">
      {BLOG_POSTS.map((post, index) => (
        <div
          key={post.title}
          className="glass-panel p-6 blog-card fade-in-up"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <p className="blog-category">{post.category}</p>
          <h3 className="blog-title">{post.title}</h3>
          <p className="blog-excerpt">{post.excerpt}</p>
          <div className="blog-footer">
            <span className="blog-date">{post.date}</span>
            <a href={post.href} target="_blank" rel="noopener noreferrer" className="blog-link">
              Read
              <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7m0 0H7m10 0v10" />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
)

export default BlogSection
