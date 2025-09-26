import Footer from '@/components/Footer/Footer'
import ServicesMain from '@/components/Services/ServicesMain'

export const metadata = {
  title: "Marketing Agencies in kochi,Kerala | Advertising company in kochi",
  description: "Leading marketing agencies in Kochi, Kerala, and advertising company in Kochi offering Branding, Video Production, Web Development, SEO, SMM, PPC and UI/UX services.",
  keywords: "Best Adverting And Ad Agency Companies In Kochi, kerala, best Digital Marketing services in Kochi, social media marketing kochi, it companies in palarivattom, local seo company near me kochi",
  alternates: {
    canonical: "https://www.tapclone.in/services",
  },
};

const Services = () => {
  return (
    <div className='bg-black'>
          <ServicesMain />
          <Footer />
    </div>
  )
}

export default Services