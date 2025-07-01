import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Tapclone",
  description: "Tapclone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
