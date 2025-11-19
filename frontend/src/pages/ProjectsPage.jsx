import ProjectsSection from '../components/ProjectsSection'
import Footer from '../components/Footer'

const ProjectsPage = ({ projects }) => (
  <div className="container page-container">
    <main className="space-y-12">
      <ProjectsSection projects={projects} />
      <Footer />
    </main>
  </div>
)

export default ProjectsPage
