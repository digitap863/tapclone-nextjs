import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'

export const metadata = {
  title: "Contact Tapclone | Let’s Build Something Brilliant",
  description: "Reach out to Tapclone for web, content, or marketing services. We’re just a message away from your next big idea.",
};

const ContactPage = () => {
  return (
    <div className='bg-black w-full'>
        <Contact />
        <Footer />
    </div>
  )
}

export default ContactPage