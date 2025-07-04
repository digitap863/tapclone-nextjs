import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Tapclone | Digital Marketing, Content & Web Development in Kerala",
  description: "Tapclone is a Kerala-based agency offering ROI-driven digital marketing, engaging content production, and custom website development for brands that want to grow.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "LocalBusiness"],
              name: "Tapclone",
              url: "https://www.tapclone.in",
              logo: "https://www.tapclone.in/favicon.png",
              description:
                "Tapclone is a Kerala-based agency offering ROI-driven digital marketing, engaging content production, and custom website development for brands that want to grow.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kerala",
                addressRegion: "KL",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+919037 833 933",
                contactType: "customer support",
                availableLanguage: ["English", "Malayalam"],
              },
              sameAs: [
                "https://www.linkedin.com/company/tapclone/",
                "https://www.instagram.com/tapclone_official/",
                "https://www.facebook.com/Tapclone",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${poppins.variable} antialiased`}
        style={{
          '--font-monument-bold': '"Monument Extended Bold", sans-serif',
          '--font-monument-ultrabold': '"Monument Extended Ultrabold", sans-serif',
        }}
      >
        {children}
        <div id="star-root"></div>
      </body>
    </html>
  );
}
