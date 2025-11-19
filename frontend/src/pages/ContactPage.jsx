import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

const ContactPage = ({ formStatus, isSubmitting, onSubmit, contactLinks, contactDetails }) => (
  <div className="container page-container">
    <main className="space-y-12">
      <ContactSection
        formStatus={formStatus}
        isSubmitting={isSubmitting}
        onSubmit={onSubmit}
        contactLinks={contactLinks}
        contactDetails={contactDetails}
      />
      <Footer />
    </main>
  </div>
)

export default ContactPage
