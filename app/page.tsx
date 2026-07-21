import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Industries } from "@/components/Industries";
import { CaseStudies } from "@/components/CaseStudies";
import { Reach } from "@/components/Reach";
import { Fundraising } from "@/components/Fundraising";
import { WhyUs } from "@/components/WhyUs";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Industries />
        <CaseStudies />
        <Reach />
        <Fundraising />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
