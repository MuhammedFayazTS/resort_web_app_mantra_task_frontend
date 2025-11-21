import Image from "next/image";
import StatsSection from "@/components/landingPage/StatsSection";
import Header from "@/components/Header";
import ServicesSection from "@/components/landingPage/ServicesSection";
import GallerySection from "@/components/landingPage/GallerySection";
import Footer from "@/components/Footer";
import Hero from "@/components/landingPage/Hero";
import BookingFormSection from "@/components/landingPage/BookingFormSection";
import Link from "next/link";
import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function Home() {
  return (
    <main className="relative min-h-screen bg-background text-white">

      <div className="w-full h-screen fixed top-0 left-0 z-0 bg-gradient-to-br from-stone-950 to-stone-900">
        <Image
          src="/landing_page_bg.webp"
          alt="Background Image"
          fill
          priority
          className="object-cover opacity-30"
        />
      </div>

      <Header />

      <Hero />

      <ServicesSection />

      <GallerySection />

      <StatsSection />

      <BookingFormSection />

      <Footer />

      <Link href={'/admin'} className="h-fit w-fit">
        <Button variant={"secondary"} className="fixed bottom-5 right-5 z-50">
          <Settings />
        </Button>
      </Link>

    </main>
  );
}
