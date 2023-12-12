import Head from "next/head";
import GradientWrapper from "../components/GradientWrapper";
import CTA from "../components/ui/CTA";
import Features from "../components/ui/Features";
import FooterCTA from "../components/ui/FooterCTA";
import Hero from "../components/ui/Hero";
import LogoGrid from "../components/ui/LogoGrid";
import Testimonials from "../components/ui/Testimonials";
import ToolKit from "../components/ui/ToolKit";

export default function Home() {
  return (
    <>
      <Head>
      <title>Wellforth</title>
        <meta name="description" content="Wellforth" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      {/* <LogoGrid /> */}
      <GradientWrapper>
        <Features />
        <CTA />
      </GradientWrapper>
      {/* <ToolKit /> */}
      <GradientWrapper>
        <Testimonials />
      </GradientWrapper>
      <FooterCTA />
    </>
  );
}
