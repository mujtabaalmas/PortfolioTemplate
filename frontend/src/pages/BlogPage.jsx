import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { BLOG_POSTS } from '../constants/content'

const BlogPage = () => (
  <div className="container page-container">
    <main className="space-y-12">
      <section className="section-padding">
        <div className="section-header">
          <h1 className="section-title">All posts, one home</h1>
        </div>

        <div className="grid grid-3 mt-12">
          {BLOG_POSTS.map((post, index) => (
            <div key={post.slug} className="glass-panel p-6 blog-card fade-in-up" style={{ animationDelay: `${index * 0.05}s` }}>
              <p className="blog-category">{post.category}</p>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>
              <div className="blog-footer">
                <span className="blog-date">{post.date}</span>
                <Link to={`/blog/${post.slug}`} className="blog-link" aria-label={`Read ${post.title}`}>
                  Read article
                  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7m0 0H7m10 0v10" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  </div>
)

export default BlogPage
