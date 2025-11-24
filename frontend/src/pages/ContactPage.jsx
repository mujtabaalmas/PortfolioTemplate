import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

const ContactPage = ({ formStatus, isSubmitting, onSubmit }) => (
  <div className="container page-container">
    <main className="space-y-12">
      <ContactSection formStatus={formStatus} isSubmitting={isSubmitting} onSubmit={onSubmit} />
      <Footer />
    </main>
  </div>
)

export default ContactPage
