import Footer from '@/components/Footer/Footer'
import ServicesMain from '@/components/Services/ServicesMain'

 const metadata = {
  title: "Tapclone Services | Web, Marketing & Content Solutions",
  description: "Discover full-stack digital services – from web development to branding and performance marketing – all under one roof.",
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