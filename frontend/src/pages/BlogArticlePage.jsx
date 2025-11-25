import { Link, useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import BlogArticleLayout from '../components/BlogArticleLayout'
import TableOfContents from '../components/TableOfContents'
import { BLOG_POSTS } from '../constants/content'

const BlogArticlePage = () => {
  const { slug } = useParams()
  const post = BLOG_POSTS.find((entry) => entry.slug === slug)

  return (
    <div className="container page-container blog-article-page">
      <main className="space-y-12">
        <section className="section-padding">
          <nav className="blog-breadcrumb" aria-label="Breadcrumb">
            <Link to="/" className="blog-breadcrumb__link">
              Home
            </Link>
            <span className="blog-breadcrumb__separator" aria-hidden="true">
              /
            </span>
            <Link to="/blog" className="blog-breadcrumb__link">
              Blog
            </Link>
            {post && (
              <>
                <span className="blog-breadcrumb__separator" aria-hidden="true">
                  /
                </span>
                <span className="blog-breadcrumb__current">{post.title}</span>
              </>
            )}
          </nav>
          {!post ? (
            <div className="glass-panel blog-article">
              <p className="blog-article-intro">That article moved or never existed.</p>
              <Link to="/blog" className="btn btn-secondary mt-4" style={{ width: 'fit-content' }}>
                Back to writing
              </Link>
            </div>
          ) : (
            <div className="blog-article-container">
              <TableOfContents htmlContent={post.html} isHtmlArticle={Boolean(post.html)} />
              <BlogArticleLayout post={post} />
            </div>
          )}
        </section>
        <Footer />
      </main>
    </div>
  )
}

export default BlogArticlePage
