import SkillsSection from '../components/SkillsSection'
import Footer from '../components/Footer'

const SkillsPage = ({ skills, skillBarsActive }) => (
  <div className="container page-container">
    <main className="space-y-12">
      <SkillsSection skills={skills} skillBarsActive={skillBarsActive} />
      <Footer />
    </main>
  </div>
)

export default SkillsPage
