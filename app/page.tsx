import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Skills } from "@/components/skills";
import { UseCases } from "@/components/use-cases";
import { Architecture } from "@/components/architecture";
import { GetStarted } from "@/components/get-started";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Skills />
        <UseCases />
        <Architecture />
        <GetStarted />
      </main>
      <Footer />
    </>
  );
}
