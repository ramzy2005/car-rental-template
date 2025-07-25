import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartProvider } from "../components/CartContext"; // Adjust path as needed


const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <CartProvider>
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        
        <Navbar />
        {children}
        <Footer />
        
      </body>
    </html>
    </CartProvider>
  );
}
