import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ravindra tax Advice & Preparation",
  description:
    "Maximize Your Refunds and Minimize Your Stress with Our Professional Tax Solutions",
  openGraph: { images: "http://localhost:3000/og.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.className} `}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
