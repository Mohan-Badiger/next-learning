import { Poppins, Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-geist",
});

export const metadata = {
  title: "React Learning",
  description: "Learning Website",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${poppins.variable} ${geist.variable} antialiased bg-black text-zinc-50`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
