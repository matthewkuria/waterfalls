import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "Waterfalls Country Home ",
  description: "Thika Greens Phase 1, also known as Waterfalls Country Homes, is a premier gated community offering a homogenous lifestyle estate. The estate is 5 minutes drive from The Blue Posts Hotel, off the well-maintained Kandara Road. This upmarket address comprises of 960 quarter acre properties in a secure serviced environment. The infrastructure, comprising of water, electricity, roads and security features is already set up.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
