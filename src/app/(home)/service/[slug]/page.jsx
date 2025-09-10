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
      titleLines: ['TAPCLONE', 'LOCAL SEO COMPANY', 'IN KOCHI'],
      paragraphs: [
          'In A Competitive City Like Kochi, Standing Out On Local Searches Is Imperative To Gain Customers. Local SEO Is Focused On Obtaining More Visibility On Location-Based Searches, So Potential Customers Are Able To Find Your Business When They Need It.',
          'Improving Local SEO Can Be Achieved By Utilizing Unique Keywords, Optimizing The Availability Of Google Maps On Your Site, And Boosting Your Online Reputation. Increased Brand Awareness And Higher Conversion Rates Can Lead To Achieving Results Like This For Your Business.',
          'It Is A Well-Known Fact That Tapclone Is An Local Seo Company In Kochi That You Can Trust, Providing Result-Driven Google My Business Optimization And Full Local Seo Services. Tapclone Assists You With Everything From Proper Business Listings And Engaging Content, To Keyword-Optimized Gmb Profiles And Managing Reviews To Dominate Local Seo Rankings.'
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
          src: map,
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
      src: step,
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
          src: google,
          alt: 'Google G Logo'
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
      titleLines: ['TAPCLONE', 'LOCAL SEO COMPANY', 'IN KOCHI'],
      paragraphs: [
          'In A Competitive City Like Kochi, Standing Out On Local Searches Is Imperative To Gain Customers. Local SEO Is Focused On Obtaining More Visibility On Location-Based Searches, So Potential Customers Are Able To Find Your Business When They Need It.',
          'Improving Local SEO Can Be Achieved By Utilizing Unique Keywords, Optimizing The Availability Of Google Maps On Your Site, And Boosting Your Online Reputation. Increased Brand Awareness And Higher Conversion Rates Can Lead To Achieving Results Like This For Your Business.',
          'It Is A Well-Known Fact That Tapclone Is An Local Seo Company In Kochi That You Can Trust, Providing Result-Driven Google My Business Optimization And Full Local Seo Services. Tapclone Assists You With Everything From Proper Business Listings And Engaging Content, To Keyword-Optimized Gmb Profiles And Managing Reviews To Dominate Local Seo Rankings.'
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
