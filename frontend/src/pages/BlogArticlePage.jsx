import { Link, useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import BlogArticleLayout from '../components/BlogArticleLayout'
import { BLOG_POSTS } from '../constants/content'

const BlogArticlePage = () => {
  const { slug } = useParams()
  const post = BLOG_POSTS.find((entry) => entry.slug === slug)

  return (
    <div className="container page-container">
      <main className="space-y-12">
        <section className="section-padding">
          {!post ? (
            <div className="glass-panel blog-article">
              <p className="blog-article-intro">That article moved or never existed.</p>
              <Link to="/blog" className="btn btn-secondary mt-4" style={{ width: 'fit-content' }}>
                Back to writing
              </Link>
            </div>
          ) : (
            <BlogArticleLayout post={post} />
          )}
        </section>
        <Footer />
      </main>
    </div>
  )
}

export default BlogArticlePage
