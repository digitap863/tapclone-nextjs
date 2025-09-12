"use client"
import React from 'react'
import Banner from '@/components/Service/Banner';
import FeatureBlock from '@/components/Service/FeatureBlock';
import step from "../../../../assets/service/step.svg";
import map from "../../../../assets/service/mapp.svg";
import google from "../../../../assets/service/google.svg";
import Footer from '@/components/Footer/Footer'
import MobileNavbar from '@/components/Home/MobileNavbar'
import NavBar from '@/components/Home/NavBar'
import gmb from "../../../../assets/service/gmb.png";
import tapp from "../../../../assets/service/tapp.svg";
import { useParams } from 'next/navigation';
import Knowmore from '@/components/Shared/Knowmore';
import googleads from  "../../../../assets/service/googleads.svg";
import googleads2 from  "../../../../assets/service/googleads2.png";
import seo1 from  "../../../../assets/service/seo1.svg";
import seo2 from  "../../../../assets/service/seo2.svg";
import seo3 from  "../../../../assets/service/seo3.svg";
import globe from  "../../../../assets/service/globe.svg";
import social1 from  "../../../../assets/service/social1.svg";
import social2 from  "../../../../assets/service/social2.svg";
import social3 from  "../../../../assets/service/social3.svg";
import social4 from  "../../../../assets/service/social4.svg";
import web1 from  "../../../../assets/service/web1.svg";
import web2 from  "../../../../assets/service/web2.svg";
import web3 from  "../../../../assets/service/web3.png";



  const sectionsData = {
  googleMyBusiness: {
    heading:"GOOGLE MY BUSINESS",
    section1:{
    title1: [
      'GOOGLE MY BUSINESS','LISTING & LOCAL SEO','SERVICES IN','KOCHI, KERALA'],
    subtitle1:
      'Boost your local visibility, connect with customers, and grow faster with optimized GMB services',
    image1: {
      src: map,
      alt: 'Google My Business location on a map',
    },
    },
    section2:{
    title2: [
      'GROW YOUR BUSINESS','WITH GOOGLE MY ','BUSINESS OPTIMIZATION ','IN KOCHI'],
    paragraphs2: [
      'Google My Business  is a great tool that businesses around the world rely on to connect to local customers and build their business! Google My Business gets potential customers to find, contact and visit your business easily on any platform including mobile, desktop or Google Maps.',
      'At Tapclone, we take tested SEO techniques, smart optimization, and reporting to give you the best optimization advantages in your local search, and at the specific time a customer is looking for your service or product. We manage your profile accurately but we also manage the keywords, updates, and reviews that will ensure your listings pop out!.',
    ],
    image2: {
      src: step,
      alt: 'Business growth chart',
    },
    },
    section3:{
       title: 
      'GMB VERIFICATION SERVICE IN KOCHI & LOCAL SEO SOLUTIONS IN KERALA',
    paragraphs: [
      'Google My Business Is One Of The Most Effective Free Tools From Google, Which Helps Businesses Engage With Local Customers. Being The Largest Search Engine In The World It Promotes Businesses In Each Locality Using GMB Listings. As Such, It Allows Potential Customers To Find Detailed Information About Your Business Presence On A Map; Name, Address Details And The Name Of The Business.',
      'As Google Added The Verification Process, Audiences Can Trust The Authenticity And Accuracy Of Your Business Information Using Google Verification Check As Well. This Builds Credibility And Often Results In Better Visibility In Local Search. At Tapclone, Our GMB Verification Service In Kochi, Gets Your Listing Verified Quickly, Correctly And Effectively. With The Local SEO Service In Kochi, Kerala We Help You Amplify Your Visibility To Allow You To Rank Better For Local Searches And Ultimately Get You The Chance To Sell More Products To Customers to Your Business.'
    ],
    image: {
      src: google,
      alt: 'Google G Logo'
    }
    },
    section4:{
      title: 'WE FOCUS ON',
      subtitle: 'COMPREHENSIVE GOOGLE MY BUSINESS SOLUTIONS TO BOOST YOUR LOCAL PRESENCE AND DRIVE MORE CUSTOMERS TO YOUR BUSINESS.',
      count:3,
      features: [

        {
          number: '01',
          title: 'Listing Optimization',
          description: 'We Help Recover Suspended Google My Business Listings Quickly And Efficiently. Our Team Identifies The Root Cause And Applies The Right Solutions To Get Your Profile Reinstated. This Ensures Your Business Regains Visibility And Continues Attracting Local Customers Without Delay.'
        },
        {
          number: '02',
          title: 'Quality Issues',
          description: 'Poor-Quality Or Inaccurate Information Can Hurt Your GMB Performance. We Audit Your Listing, Fix Errors, And Ensure It Meets Google\'s Quality Guidelines. This Builds Trust With Both Google And Your Customers, Improving Search Visibility.'
        },
        {
          number: '03',
          title: 'Ownership Issues',
          description: 'If You\'ve Lost Access To Your GMB Listing Or Have Ownership Conflicts, We Can Help. Our Team Works Directly With Google To Verify Your Ownership And Transfer Access. This Gives You Full Control To Manage And Update Your Profile Anytime.'
        },
        {
          number: '04',
          title: 'Listing Optimization',
          description: 'We Optimize Every Part Of Your GMB Profile For Maximum Impact. This Includes Keyword-Rich Descriptions, Engaging Photos, And Regular Updates. A Well-Optimized Listing Ranks Higher And Attracts More Clicks From Potential Customers.'
        },
        {
          number: '05',
          title: 'Management Service',
          description: 'Our GMB Management Service Keeps Your Profile Fresh, Accurate, And Engaging. From Responding To Reviews To Posting Updates, We Handle It All. This Ongoing Attention Ensures Your Business Stays Competitive In Local Search Results.'
        },
        {
          number: '06',
          title: 'Local Directory Submission',
          description: 'We Submit Your Business Details To Trusted Local And Niche Directories. This Boosts Your SEO, Increases Backlinks, And Improves Your Chances Of Appearing In Local Search Results. Consistent Listings Also Enhance Your Online Credibility.'
        }
      ]
    },
    section5:{
      title: 'WHAT IS GOOGLE MY BUSINESS (GMB) ?',
      subtitle: 'LOCAL SEO SERVICES IN KOCHI, KERALA',
      mainParagraphs: [
        'GMB, Now Called Google Business Profile, Is A Free And Valuable Resource That Provides A Way For You To Show Your Business In Local Search Results And On Google Maps. It Gives Clients Access To Your Business Contact Information, Location, Service Options, And Reviews — All In One Location.',
        'If You’re A Business In Kochi Or Any Of The Suburbs In Kerala, You Must Have A Well-Optimized GMB Profile To Build Credibility And Reach Local Clientele. For Businesses Searching For GMB Optimization Services Or An SEO Company Near Me, Having A Strong Local Presence Is Essential.'
      ],
      features: [
        {
          title: 'Location Information',
          description: 'Show Your Business Location On Google Maps With Accurate Address Details'
        },
        {
          title: 'Customer Reviews',
          description: 'Display Customer Reviews And Ratings To Build Trust And Credibility'
        },
        {
          title: 'Contact Details',
          description: 'Provide Easy Access To Your Phone Number, Website, And Contact Information'
        },
        {
          title: 'Business Hours',
          description: 'Keep Customers Informed About Your Operating Hours And Availability'
        }
      ],
      concludingParagraphs: [
        'Tapclone is Dedicated To Local SEO Services in Kochi, Kerala, Ensuring Your GMB Listing Is Fully Optimized For Exposure With The Correct Strategy. We Utilize Keyword-Rich Descriptions, Accurate Business Information, Images, Updates, And Review Management To Improve Your Local Search Position.',
        'With The Right Strategy, Your Business Can Stand Out In Competitive Markets, Connect With Local Customers, And Help Expand The Business Effectively And Responsibly.'
      ]
    },
    section6:{
       title: 'BENEFITS OF GMB FOR BUSINESS',
       subtitle :  'GOOGLE MY BUSINESS SERVICES - TRANSFORM YOUR LOCAL PRESENCE',
      sections: [
        {
          paragraph: 'In A Growing Marketplace, It Is Essential For You To Establish An Effective Online Presence For Customers To Find You And Your Brand. Google My Business Services Offer Your Business The Ability To Show Up A Local Search Result And On Google Maps, Making It Easy For Potential Clients To Find You Quickly. Google My Business Not Only Allows You To Present Your Contact Info And Service Information, But It Can Also Be Used To Display Your Reviews From Customers To Help Build Trust And Increase Your Exposure In The Local Area.',
          image: {
            src: gmb,
            alt: 'Google My Business 3D Illustration'
          }
        },
        {
          paragraph: 'By Using Tapclone’s GMB Service, You Are Guaranteed A Fully Optimized Business Profile With All The Correct Information, Engaging Images, Rich Descriptions With Relevant Keywords, And Regular Updates. This Improvement In Local Search Ranking Increases The Chances To Connect With Your Audience Directly. If You’ve Been Searching For An SEO Agency Near Me, Tapclone Offers Full Local SEO Strategies To Assist With Ensuring Your Business Is Found Locally, And Establishing Measurable Growth.',
          image: {
            src: gmb,
            alt: 'Google My Business 3D Illustration 2'
          }
        }
      ]
    },
    section7:{
      titleLines: 'TAPCLONE LOCAL SEO COMPANY IN KOCHI' ,
      paragraphs: [
          'In a competitive city like Kochi, standing out on local searches is imperative to gain customers. Local SEO is focused on obtaining more visibility on location-based searches, so potential customers are able to find your business when they need it. Improving local SEO can be achieved by utilizing unique keywords, optimizing the availability of Google Maps on your site, and boosting your online reputation. Increased brand awareness and higher conversion rates can lead to achieving results like this for your business.',
          'It is a well-known fact that Tapclone is a Local  SEO company in Kochi that you can trust, providing result-driven Google My Business optimization and full local SEO services. Tapclone assists you with everything from proper business listings and engaging content, to keyword-optimized GMB profiles and managing reviews to dominate local SEO rankings.',
      ],
      services: {
          title: 'Our Complete Local SEO Services Include:',
          list: [
              'GMB Profile Optimization & Management',
              'Local Directory Submissions',
              'Review Management & Response',
              'Local Keyword Optimization',
              'Citation Building & NAP Consistency'
          ]
      },
      imageUrl: tapp,
      imageAlt: 'Tapclone T Logo'
    },
    section8:{
       title: 'WHY CHOOSE TAPCLONE?',
        subtitle: 'LOCAL SEO SERVICES IN KOCHI, KERALA',
        mainParagraphs: 'At Tapclone, We Integrate Creativity, Strategy And Technology To Deliver Marketing Solutions That Really Work. From Google My Business Optimizations To Local SEO And Even Large-Scale Digital Campaigns, Our Approach Is Results-Focused And Tailored To Suit Your Brand And Its Goals.',
        features: [
            { title: 'Proven Results', description: 'We Integrate Creativity, Strategy And Technology To Deliver Marketing Solutions That Really Work.' },
            { title: 'Expert Team', description: 'Dedicated Professionals Who Manage Everything From GMB Optimization To Review Management.' },
            { title: 'Results-Focused', description: 'Our Approach Is Results-Focused And Tailored to Suit Your Brand And Its Specific Goals.' },
            { title: 'Full Transparency', description: 'We Believe In Delivering Full Transparency, Measurable Outcomes And Sustainable Growth Strategies.' }
        ],
        concludingParagraphs: [
            'As A Service-Focused SEO Company Based In Kochi, We Focus On Delivering Highly-Visible Local Search Visibility Results Via Superior Search Rankings, And Finding The Right Audience At The Right Time.',
            'We Have A Dedicated Team That Can Manage Optimizing Your Listings And Managing Reviews, To Managing Other GMB Issues Like Listing Suspensions, Ownership Issues And Quality Compliance. We Believe In Delivering Full Transparency, Measurable Outcomes and Sustainable Growth Strategies That Keep Your Business Ahead Of The Competition.'
        ],
        buttonText: 'START YOUR PROJECT TODAY'
    }
  },
  googleAds:{
    heading:"GOOGLE ADS",
    section1:{
        title1: [
          'Google Ads','Services in Kochi,','Kerala',],
        subtitle1:
          'Our Google Ads services in Kochi, Kerala, provide instant visibility and the highest ROIs for your business. Our PPC Company in Kochi builds highly targeted Google Ads campaigns to help deliver high-quality leads and conversion rates. Best of all, our PPC agency in Kochi will handle keyword research, ad copies, budget, bids, and overall performance management so your ads reach your primary target audience at the right time. Our team will customize a Google Ads strategy, whether you are a small business or larger recognized brand, to ensure you dominate your Google search results and grow your business presence across Kerala',
        image1: {
          src: googleads,
          alt: 'Google My Business location on a map',
        },
    },
    section2:{
    title2: [
      'ppc company in Kochi',],
    paragraphs2: [
      'Google My Business  is a great tool that businesses around the world rely on to connect to local customers and build their business! GooTapclone is a results-oriented PPC company in Kochi that helps brands gain instant visibility online and get measurably more conversions. Our experienced professionals create custom Pay-Per-Click campaigns based on who you are trying to reach - and make sure every click matters for your business! Tapclone is a premier PPC company in Kochi that maximizes ROI by strategically selecting keywords, ad creatives, etc. and continues to optimize the campaign. From search ads, display campaigns, re-marketing solutions, Tapclone provides complete PPC services to enhance your brand presence and achieve measurable growth amidst Kerala s competitive online market. gle My Business gets potential customers to find, contact and visit your business easily on any platform including mobile, desktop or Google Maps.',
,
    ],
    image2: {
      src: googleads2,
      alt: 'Business growth chart',
    },
    },
    section3:{
       title: 
      'Tapclone - PPC Marketing Agency Kochi',
        paragraphs: [
          'Google is the premier platform for discovering products and services. You must take advantage of this central role - considering that it accounts for over 85% of online searches. As a business, ignoring Google is tantamount to ignoring business growth. Tapclone is a leading PPC agency in Kochi that specializes in Google Ads services. They focus on all aspects of your Google Ads campaigns and your overall online advertising. It is easy to just run ads, but the successful factor is in the selection of keywords, writing quality ad copies and targeting the correct audiences.',
          ' Our team will assess your business type, your competitors and your audience behaviours to develop the best Google Ads strategies for the best possible results for your business and the best measurable ROI. Whether your focus is on generating visibility for your start-up or just getting conversions to the next level for your established business - our data driven PPC campaigns will allow your ads to reach potential customers at the proper time. ',
          'Tapclone offers a number of Pay Per Click (PPC) services, including Paid Search Advertising, Display Ads, Remarketing, and Social Media Ads. As the most trusted PPC agency in Kochi, we can help you increase traffic, leads and grow your business. Please contact us today, the leading provider of performance-driven PPC marketing solutions in Kerala.'
        ],
        image: {
          src: googleads,
          alt: 'googleads G Logo'
        }
    },
    section4:{
      title: 'WE FOCUS ON',
      count:2,
      features: [
        {
          number: '01',
          title: 'Display Ads',
          description: 'Use display ads in Kochi to attract your audience, visually stimulating them to create brand awareness and grow traffic on leading websites. '
        },
        {
          number: '02',
          title: 'Search Ads',
          description: 'Use timely search ads in Kochi to give you immediate visibility in searches to connect with people immediately searching for your products or services.'
        },
        {
          number: '03',
          title: 'Re-marketing',
          description: 'Use re-marketing ads in Kochi to reconnect with potential customers, increase their conversions with a simple reminder of your brand.',
        },
        {
          number: '04',
          title: 'Branding',
          description: 'Use branding in Kochi to effectively establish yourself online so all competition can see, creating a differentiation in an already competitive market in Kerala.'
        },
      ]
    },
    section8:{
       title: 'WHY CHOOSE TAPCLONE?',
        subtitle: 'LOCAL SEO & PPC SERVICES IN KOCHI, KERALA',
        mainParagraphs: 'Tapclone is the top provider of PPC Advertising Services in Kochi because we focus on what counts: results.Our certified professionals build customized campaigns that produce quality leads, drive conversions, and maximize return on investment.',
        features: [
            { title: 'Proven Results', description: 'Our certified professionals build customized campaigns that generate quality leads, drive conversions, and maximize ROI.' },
            { title: 'Expert Team', description: 'A dedicated team ensures consistent business growth every time you run an ad or campaign with Tapclone.' },
            { title: ' Smart Targeting', description: 'We combine targeting methods, reliable research, and performance optimizations to reach the right audience at the right time.' },
            { title: 'Full Transparency', description: 'With verified strategies, open reporting, and accountability to your business needs, we deliver measurable outcomes you can trust.' }
        ],
        concludingParagraphs: [
            'We integrate targeting methods, reliable research, and performance optimizations to reach the right audience at the right time. Our expert team works to ensure business growth every time you run an ad or campaign with Tapclone.',
            'With verified strategies, open reporting, and accountability to your business needs, Tapclone is the trusted partner for businesses seeking reliable PPC advertising services in Kochi.'
        ],
        buttonText: 'START YOUR PROJECT TODAY'
    }
  },
  branding:{
     heading:"BRANDING",
      section1:{
        title1: [
          'BRANDING COMPANY','IN KERALA,'],
        subtitle1:
          'Our branding work may include everything from a logo that captures your vision to tag lines that constantly remind customers of how they\'ll feel, to brand storytelling so customers can\'t help but trust you. We’re the top branding company  in Kerala.We combine fresh thinking and an outlet for creativity with strategy to deliver innovative campaigns that attract attention and foster an impression in customers\' minds. With TapClone on your team, your brand will not just slip into the crowd.',
        image1: {
          src: map,
          alt: 'Google My Business location on a map',
        },
    },
    section3:{
       title: 
      'Why tapclone is Top best branding agency in kerala,Kochi',
        paragraphs: [
          'In today\'s competitive market, every business relies on a strong brand identity to ensure they stand out, connect with customers and build long-term loyalty and trust. At TapClone, we love to help brands achieve these goals. As one of the Best  branding agency  in Kerala, we want to help you turn your business into a great brand using creativity, strategy, and innovation.',
          'As has a branding  agency in Kochi,kerala . we understand that branding is much more than just a logo or tagline; it includes the entire story of your business. Our qualified team is good at logo design, designing brochures, product mockups, flyer designing, brand identity design, business cards and letterheads to ensure consistency with every customer interaction. The end result is that we must work on every customer touchpoint and each element we produce, every small detail goes towards creating consistency and must accurately reflect your vision, values and goals. ',
          'At TapClone,  our not just creative people; we add strategy into our designs. So many branding agencies will develop what they call a \'brand\' but are really just developing the standard look and feel for your brand. At TapClone, we put the customer first, instead, we develop meaningful connections between your business and your target audience. With customer first system developers, we are one of the best branding companies  in Kerala, who set out to build a strong brand that is unique and impactful.'
        ],
        // image: {
        //   src: google,
        //   alt: 'Google G Logo'
        // }
    },
    section4:{
      title: 'OUR SERVICES',
      count:3,
      features: [
        {
          number: '01',
          title: 'Logo Designing',
          description: 'We create thoughtful and unique logos and help you develop a logo that tells your brand story in a memorable way to set your business a level above the rest of the market.'
        },
        {
          number: '02',
          title: 'Brochure Designing',
          description: 'Well designed creative brochures will make a positive impression on your audience while showcasing your products and services in a professional and customer friendly way.'
        },
        {
          number: '03',
          title: 'Product Mockups',
          description: 'Bring your ideas to life by showcasing your products with professionally designed mock ups for every intangible brand item before production.',
        },
        {
          number: '04',
          title: 'Flyer Design',
          description: 'Bold and beautiful flyers are sure to grab the attention of your audience and communicate your message in a thoughtful and effective way.'
        },
         {
          number: '05',
          title: 'Brand Identity Design',
          description: ' We create full brand identity examples that inspire trust in your brand, create brand recognition, and build on-going customer engagement .'
        },
         {
          number: '06',
          title: 'Business Card Design',
          description: 'Professionally designed business cards leave an impression wherever you go.'
        },
         {
          number: '07',
          title: 'Letterheads',
          description: 'Be as nice as possible with your corporate letterhead while creating an overall sense of professionalism, sophistication and elegance.'
        },
      ]
    },
      

  },
  seo: {
    heading:"SEO",
    section1:{
    title1: [
      'Boost Your Website','Rankings with the top','SEO Company in','KOCHI, KERALA'],
    subtitle1:
      'Searching for reliable SEO services near you? TapClone is the Top SEO Company in Kochi, Kerala, trusted by businesses to deliver real, measurable results. We help brands improve their online presence, attract the right audience, and stay ahead of competitors in today’s competitive digital market.',
    image1: {
      src: seo1,
      alt: 'Google My Business location on a map',
    },
    },
    section2:{
    title2: [
      'Tapclone  –','The Leading SEO ','Agency in Kochi SEO','Company in Kochi'],
    paragraphs2: [
     'In a competitive city like Kochi, standing out on local searches is imperative to gain customers. Local SEO is focused on obtaining When it comes to enhancing your digital presence, TapClone is the most trustworthy SEO agency in Kochi. We stand as experts for businesses seeking to take a top position in search engine rankings with strategically developed plans of action with the intent of creating maximum impact. Our authentic team focuses on your business goals using competition analysis and proven strategies to grow your business in a measurable way. Whether you are searching for an SEO company near me, TapClone ensures you get the expertise you need to succeed.more visibility on location-based searches, so potential customers are able to find your business when they need it.',
      'As a results focused SEO Agency in Kochi, we help you achieve more than basic optimization. We talk you through every step including competitive keyword research and analysis, on-page SEO, technical improvements, and link building so that you are ranked higher in search engines, attracting the right audience, and generating leads with consistency. With TapClone you receive a visible presence, and a trusted partner looking to build long term success for you in the digital environment.'
    ],
    image2: {
      src: seo2,
      alt: 'Business growth chart',
    },
    },
    section3:{
       title: 
      'What is search engine optimization ?',
    paragraphs: [
      'Search engine optimization (SEO) is optimizing a website for better visibility on search engine results pages of search engines, like Google, to help the business reach the right users at the right time. SEO focuses on earning organic traffic to your site (which is considered free) instead of relying only on paid ads, you\'re able to make your site relevant, user friendly, and an authority on the subject matter, which in turn helps earn traffic. There is much more than just adding keywords to a page. The best SEO agencies perform deep research on your audience, study your competitors, and optimize everything on your website (content, structure, speed, backlinks, etc.).',
      'When looking for an SEO company near me, you really want a company that will be able to create a plan that meets your business goals and provide you metrics you can measure. In summary, SEO is not just increasing rankings, it\'s supporting your business growth online by attracting and engaging customers and driving conversions.'
    ],
    image: {
      src: seo3,
      alt: 'Google G Logo'
    }
    },
    section4:{
      title: 'Our Core SEO Services',
      subtitle: 'COMPREHENSIVE GOOGLE MY BUSINESS SOLUTIONS TO BOOST YOUR LOCAL PRESENCE AND DRIVE MORE CUSTOMERS TO YOUR BUSINESS.',
      count:3,
      features: [

        {
          number: '01',
          title: 'Website SEO Audit',
          description: 'Identify and fix issues to improve rankings.'
        },
        {
          number: '02',
          title: 'Comprehensive Keyword Research',
          description: 'Identifying profitable keywords to increase traffic.',
        },
        {
          number: '03',
          title: 'On-Page & Off-Page Optimization',
          description: 'Strengthening your website’s authority and relevance.'
        },
        {
          number: '04',
          title: 'Technical SEO',
          description: 'Ensuring flawless website performance for search engine compatibility.'
        },
        {
          number: '05',
          title: 'Content Strategy & Optimization',
          description: 'Creating SEO-friendly content that engages and Converts.'
        },
        {
          number: '06',
          title: 'Competitor Analysis',
          description: 'Assess and enhance your brand’s online presence.'
        },
         {
          number: '07',
          title: 'Brand Analysis',
          description: 'Assess and enhance your brand’s online presence.'
        }
      ]
    },
    section75:{
       title1: 
        'Organic SEO Vs Paid SEO',
      paragraphs1: [
        'Organic SEO is all about improving your website\'s natural visibility in search engines, without paying them for ads. It consists of optimizing content, keywords, the structure of the website, and building backlinks in order to achieve rankings longer term. Organic SEO takes time, however it\'s inexpensive, sustainable, and a perfect supplement to a PPC Advertising Service. They offer a complementary or balanced approach to any digital marketing strategy.',
        'Paid SEO (Search Engine Marketing): Paid SEO is the practice of paying for ads (such as via Google Ads) to be placed at the top of search results. You get instant visibility and traffic, but you have to keep paying for the advertising. When your advertising ends, your visibility ends.',
        'Key Difference: Organic SEO takes time to build authority and free traffic, while Paid SEO is instant and temporary for a price.'
      ],
      color1:'#F5558E',
      title2: 
        'How SEO Helps Businesses - best SEO services in Kochi',
      paragraphs2: [
        'For any business to thrive online, being noticed is essential. TapClone, the best SEO services in Kochi, ensures that your brand is seen by the right people, at the right time. Focusing on quality traffic, high conversions, and elevating your business to that trusted industry icon on the online map.',
        'As the best SEO Services provider, we utilize evergreen strategies including keyword optimization, competitor analysis, and technical improvements to increase your online reach. Working with TapClone means more than just increasing your search rankings; building credibility, long term growth, and showing measurable results to your business.'
      ],
      image2: {
        src: google,
        alt: 'Google G Logo'
      },
      color2:'#FA8957'
    },
    section8:{
       title: 'Why TapClone is the Best Choice?',
        subtitle: 'Local SEO Services in Kochi, Kerala',
        mainParagraphs: 'As the Leading SEO Company in Kochi, Kerala, we know that scaled solutions do not meet the needs of every individual. That’s why we approach each project with ROI-driven results in mind. This means we will learn about your business’ specific goals and create a unique project that will focus on achieving your goals. We utilize unique creativity and data-driven information to ensure business growth using ethical SEO methods.',
        features: [
            { title: 'Proven Results', description: 'Years of experience in delivering successful SEO campaigns.' },
            { title: 'Local & Global SEO', description: 'We optimize for both local businesses in Kerala and nationwide brands.' },
            { title: 'Transparent Reporting', description: 'Detailed insights on your SEO performance.' },
            { title: 'User-Centric Approach:', description: 'Strategies designed to attract and engage your target.' }
        ],
    }
  },
  socialMediaMarketing: {
    heading:"Social Media Marketing",
    section1:{
    title1: [
      'Establish a Strong','Presence. Drive ','Targeted Traffic.','Capture Quality', 'Leads. Scale Your' ,'Success.'],
    subtitle1:
      'We develop initiatives that create a stable foundation, reach more people, and develop engagement into the measurable growth you and your clients expect. Contact Tapclone today to engage your audience, increase your impact, and grow your business',
    image1: {
      src: social1,
      alt: 'Google My Business location on a map',
    },
    },
    section2:{
    title2: [
      'Social Media','Marketing Company','in Kochi, Kerala '],
    paragraphs2: [
      'Tapclone is a top Social Media Marketing Agency in Kochi, Kerala with over 7 years of experience to create value for your brand online. We develop initiatives that create a stable foundation, reach more people, and develop engagement into the measurable growth you and your clients expect. Contact Tapclone today to engage your audience, increase your impact, and grow your business. ',
      'We offer personalized marketing strategies that go beyond laying the groundwork for your presence online. With Tapclone you grow targeted traffic, and a return on engagement that you can measure. Tapclone\'s mission is to help you identify your audience, grow your influence and develop your business with confidence.',
    ],
    image2: {
      src: social2,
      alt: 'Business growth chart',
    },
    },
    section3:{
       title: 
      'Best Advertising Agency in Kochi',
    paragraphs: [
      'Tapclone is your premier source for strong digital growth through our expert Facebook, Instagram, and LinkedIn marketing, creative content-marketing, and highly professional production services. We are recognized as the best advertising agency in Kochi, Kerala and as a leading social media marketing company in Kochi, Kerala. Tapclone is a proven creator of impactful social media campaigns that increase brand awareness, targeted engagement, and deliver impactful results. From innovative storytelling and image / video production, our solutions are designed to resonate with your audience and grow your business.'
    ],
    image: {
      src: social3,
      alt: 'Google G Logo'
    }
    },
    section4:{
      title: 'Platforms We Specialize In',
      // subtitle: 'COMPREHENSIVE GOOGLE MY BUSINESS SOLUTIONS TO BOOST YOUR LOCAL PRESENCE AND DRIVE MORE CUSTOMERS TO YOUR BUSINESS.',
      count:2,
      features: [

        {
          number: '01',
          title: 'Facebook Marketing',
          description: 'To increase brand exposure and conversions, use personalized ad campaigns, compelling content, and community-building methods on the world\'s largest social platform.'
        },
        {
          number: '02',
          title: 'YouTube Marketing',
          description: 'To increase visibility and audience loyalty, optimize channels, develop engaging stories, and use targeted adverts.'
        },
        {
          number: '03',
          title: 'Production Service',
          description: 'Our quality visuals bring your brand to life. Whether through videos, photography, or event coverage, the production team will deliver creative, engaging, and impactful content, to connect your brand to your audience.'
        },
        {
          number: '04',
          title: 'LinkedIn Marketing',
          description: 'Generate high-value leads by building professional credibility and connecting with B2B audiences via thought leadership content, targeted marketing, and smart networking.'
        }
        
      ]
    },
    section75:{
       title1: 
        'Understanding Social Media Marketing',
      paragraphs1: [
        'Social media marketing is not just about publishing content — it is about creating a strategic relationship between your brand and your audience. This entails using social media platforms like Facebook, Instagram, and LinkedIn to publish content, create campaigns to reach your target audience, and build relationships with customers in a meaningful way. As the leading Social Media Marketing Company in Kochi, Tapclone combines creativity, narrative, and data-driven strategy to help your brand develop unique social media marketing efforts that outshine competitors and drive engagement and sustainable and measurable business growth.',
      ],
      color1:'#F5558E',
      title2: 
        'Benefits of Social Media Marketing for A Businesses',
      paragraphs2: [
        'Social media marketing is not just about publishing content — it is about creating a strategic relationship between your brand and your audience. This entails using social media platforms like Facebook, Instagram, and LinkedIn to publish content, create campaigns to reach your target audience, and build relationships with customers in a meaningful way. As the leading Social Media Marketing Company in Kochi, Tapclone combines creativity, narrative, and data-driven strategy to help your brand develop unique social media marketing efforts that outshine competitors and drive engagement and sustainable and measurable business growth.',
        'Social media marketing provides endless opportunities for brands to connect, engage, and grow in today\'s digital-first world. Top social media marketing companies in Kerala can help brands reach their target audience, deepen customer relationships, and create visibility online across Facebook, Instagram, and LinkedIn. By teaming up with a great ad agency based in Kochi or a reliable digital marketing agency in Kochi, brands can run innovative and data-driven campaigns that increase brand awareness, generate great leads, and show results.'
      ],
      image2: {
        src: social4,
        alt: 'Social Image'
      },
      color2:'#FA8957'

    },
    section8:{
       title: 'HOW TAPCLONE CREATES AND ELEVATES YOUR BRAND?',
        subtitle: 'SOCIAL MEDIA MARKETING IN KOCHI, KERALA',
        mainParagraphs: 'At Tapclone, we offer more than traditional marketing — we create a unique, powerful brand. With imaginative and innovative strategies that utilize Facebook, Instagram, and LinkedIn marketing, engaged content creation, and high-quality production, we deliver your brand to create lasting impressions in the hearts and minds of your audience.As the best advertising agency in Kochi and most trusted social media marketing company in Kochi, Kerala, we create marketing solutions that build awareness, trust, and measurable results wherever your brand is established in today’s competitive environment.',
        features: [
            { title: 'Innovative Strategies', description: 'Creative campaigns designed for maximum engagement.' },
            { title: 'Multi-Platform Presence', description: 'Expertise across Facebook, Instagram & LinkedIn.' },
            { title: 'High-Quality Content', description: 'Professional production to elevate your brand image' },
            { title: 'Proven Results', description: ' Measurable growth with trust and brand awareness.' }
        ],
        concludingParagraphs: [
            'Social media gives every business — big or small — the chance to compete on an even bigger playing field. It provides a way to advertise on a budget, interact instantly with your customers, and offer a cost-effective way to tell your story, showcase your product, and build trust with your brand. When done properly, online marketing goes beyond promotion — it creates lasting connections.',
        ],
        // buttonText: 'START YOUR PROJECT TODAY'
    }
  },
  webDevelopment: {
    heading:" Web Development",
    section1:{
    title1: [
      'Custom Web','Development','Solutions for','Businesses That', 'Want to Grow' ],
    subtitle1:
      ' Choose Tapclone, the web development company in Kochi, Kerala, for unique and tailored online solutions that elevate your brand and user experience.',
    image1: {
      src: web1,
      alt: 'Development ',
    },
    },
    section2:{
    title2: [
      'Tapclone Website','Development ','Company in Kochi, ',' Kerala '],
    paragraphs2: [
      'In today\'s digital world, a visually attractive and fully functional website is a must-have for any successful business. It does not matter if you are a new start up based in Kochi, or a well-established firm in Kerala; you need a significant online presence.  ',
      'At Tapcone, we clearly understand this. We specialize in creating Static Websites, Dynamic Websites, E-Commerce Websites, SEO-friendly Websites, Custom Websites, Website redesign and revamp, and Web Applications. The best part is you do not have to spend a small fortune to get a professional grade, modern website. We provide affordable and comprehensive solutions to help SME\'s and large businesses stand out online. Join the best web development company in Kochi, Kerala. We will take your business to another level.',
    ],
    image2: {
      src: web2,
      alt: 'Devleopment growth chart',
    },
    },
    section3:{
       title: 
      'Web Design Company in Kochi, Kerala',
    paragraphs: [
      'Tapclone is leading Web Design Company in Kochi, Kerala reputed for developing modern, user-friendly, functional and aesthetically pleasing websites. We focus on creative designs that not only look great but function beautifully to help businesses create their own individuality in today\'s cluttered digital marketplace.',
      'With many years of design experience behind us, Tapclone has earned itself an outstanding reputation as a trusted Web Design Company in Kochi, Kerala. Our team has the experience, creative talent and technical prowess to design websites that are visually stunning and results-oriented ensuring your brand stands out online.'
    ],
    image: {
      src: social3,
      alt: 'Google G Logo'
    }
    },
    section4:{
      title: 'Services We Provide',
      count:2,
      features: [
        {
          number: '01',
          title: 'Facebook Marketing',
          description: 'To increase brand exposure and conversions, use personalized ad campaigns, compelling content, and community-building methods on the world\'s largest social platform.'
        },
        {
          number: '02',
          title: 'YouTube Marketing',
          description: 'To increase visibility and audience loyalty, optimize channels, develop engaging stories, and use targeted adverts.'
        },
        {
          number: '03',
          title: 'Production Service',
          description: 'Our quality visuals bring your brand to life. Whether through videos, photography, or event coverage, the production team will deliver creative, engaging, and impactful content, to connect your brand to your audience.'
        },
        {
          number: '04',
          title: 'LinkedIn Marketing',
          description: 'Generate high-value leads by building professional credibility and connecting with B2B audiences via thought leadership content, targeted marketing, and smart networking.'
        }
        
      ]
    },
    section75:{
       title1: 
        'Ready to take your business to the next level?',
      paragraphs1: [
        'Web design companies in Kochi offer the perfect combination of affordability, creative design, and technical expertise. Whether you need a simple static website, a dynamic corporate portal, or a full-featured e-commerce platform, Partnering with a web design company in Kochi can greatly enhance your business’s online visibility. Tapclone Digital Marketing Company known as one of the top web development agencies in Kerala provides customized solutions to suit your requirements.',
      ],
      color1:'#FA8957',
      image1: {
        src: web3,
        alt: 'web Image'
      },

    },
    section8:{
       title: 'Why Tapclone is the Top Web Designing Company in Kerala?',
        subtitle: 'Web Designing Company IN KOCHI, KERALA',
        mainParagraphs: 'If you\'re trying to create a strong online presence, Tapclone is the best web designing company in Kerala. We combine creativity and technical skills with a solid understanding of your business needs. Backed by a team of experienced developers and designers, we don’t just design websites — we craft digital experiences that engage your visitors, build trust, and ultimately deliver results..',
        features: [
            { title: 'Comprehensive Web Solutions', description: 'From Static & Dynamic Websites to E-Commerce Stores, SEO-friendly Websites, Custom Web Applications, and Website Redesign & Revamp, we provide end-to-end services under one roof.' },
            { title: 'Creative & User-Centric Designs', description: 'Each website we develop, is all about your brand identity with a great user experience.' },
            { title: 'Cutting-Edge Technology', description: 'We use the new technologies and standards to create the fastest, and most secure websites that work on all mobile devices' },
            { title: 'SEO-Optimized for Growth', description: 'Our websites are not just aesthetically pleasing, but they are also designed to rank better in search, which delivers more traffic and leads.' }
        ],
        
        // buttonText: 'START YOUR PROJECT TODAY'
    }
  },

};

const kebabToCamel = (str) => {
  if (!str) return '';
  return str.replace(/-(\w)/g, (_, c) => c.toUpperCase());
};

function page() {
   const params = useParams();
   const slug = params.slug;
   const dataKey = kebabToCamel(slug);
   const sectionData = sectionsData[dataKey];

 if (!sectionData) {
    return (
      <div className="homeMin overflow-hidden h-screen" style={{ backgroundColor: "black" }}>
        
        <MobileNavbar />
        <NavBar />
        <h1 className="text-4xl font-bold text-center pt-32">404 - Service Not Found</h1>
        <p className="mt-4 text-center ">The page you are looking for does not exist.</p>
        <Footer />

      </div>
    );
  }

  return (
    <div className="homeMin overflow-hidden" style={{ backgroundColor: "black" }}>

          <MobileNavbar />
            <NavBar />
            <Banner title ={sectionData.heading}/>
            <FeatureBlock section={sectionData} />   
            <Knowmore />    
        <Footer />
    </div>
  )
}

export default page
