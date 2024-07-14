import Faqs from "@/components/Faq";
import HeroSection from "@/components/Hero";
import Services from "@/components/Services";
import GalleryPage from "./gallery/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20 md:pt-28 px-5 md:px-20">
      <div className="container mx-auto">
        <HeroSection />
      </div>{" "}
      <div className="container mx-auto my-14">
        <Services />
      </div>{" "}
    </main>
  );
}
