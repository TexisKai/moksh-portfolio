"use client";

import Image from "next/image";
import TextRevealCard from "./components/TextRevealCard";
import { PinContainer } from "./components/PinCard";

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* ================= HEADER ================= */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h1 className="text-4xl font-semibold">Moksh Prajapati</h1>
          <p className="text-gray-300 mt-2">
            Digital Marketer • Performance Marketing • Instagram Growth
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <TextRevealCard
            text="You know The Business,"
            revealText="I know The Chemistry."
          >
            <h2 className="text-white text-lg mb-2">
              Hey, I'm Moksh — Digital Marketer & Growth Specialist
            </h2>
            <p className="text-gray-400 text-sm">
              Currently interning as Sales Executive at CompetenceConsulting.in
              (Alibaba.com channel partner)
            </p>
          </TextRevealCard>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="py-20">
        <h2 className="text-4xl font-bold text-center mb-16">
          Projects & Case Studies
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 justify-center px-6">

          {/* ---------- Card 1: Alibaba ---------- */}
          <PinContainer
            title="Sales Internship — Alibaba"
            href="https://competenceconsulting.in/"
            containerClassName="w-full flex justify-center"
          >
            <div className="flex flex-col items-center w-64">
              <Image
                src="/projects/alibaba.png"
                alt="Alibaba Internship"
                width={400}
                height={400}
                className="rounded-xl w-full h-auto"
              />

              <p className="text-sm text-gray-300 text-center mt-4">
                Sales executive intern supporting Alibaba.com onboarding.
              </p>
            </div>
          </PinContainer>

          {/* ---------- Card 2: Glamour Glow ---------- */}
          <PinContainer
            title="Instagram Growth — Glamour Glow"
            href="https://www.instagram.com/glamour_glow2023/"
            containerClassName="w-full flex justify-center"
          >
            <div className="flex flex-col items-center w-64">
              <Image
                src="/projects/glamourglow.png"
                alt="Glamour Glow"
                width={400}
                height={400}
                className="rounded-xl w-full h-auto"
              />

              <p className="text-sm text-gray-300 text-center mt-4">
                Beauty & fashion page growth through reels & trend optimization.
              </p>
            </div>
          </PinContainer>

          {/* ---------- Card 3: Aesthx Makeups ---------- */}
          <PinContainer
            title="Instagram Growth — Aesthx Makeups"
            href="https://www.instagram.com/aesthxmakeups/"
            containerClassName="w-full flex justify-center"
          >
            <div className="flex flex-col items-center w-64">
              <Image
                src="/projects/Makeup.png"
                alt="Aesthx Makeups"
                width={400}
                height={400}
                className="rounded-xl w-full h-auto"
              />

              <p className="text-sm text-gray-300 text-center mt-4">
                Aesthetic makeup content & reels growth.
              </p>
            </div>
          </PinContainer>

          {/* ---------- Card 4: Girls Being Girls ---------- */}
          <PinContainer
            title="Instagram Growth — Girls Being Girls"
            href="https://www.instagram.com/girlsbeinggirls02/"
            containerClassName="w-full flex justify-center"
          >
            <div className="flex flex-col items-center w-64">
              <Image
                src="/projects/instagram.png"
                alt="Girls Being Girls"
                width={400}
                height={400}
                className="rounded-xl w-full h-auto"
              />

              <p className="text-sm text-gray-300 text-center mt-4">
                High-engagement meme/community page.
              </p>
            </div>
          </PinContainer>

        </div>
      </section>

    </div>
  );
}
