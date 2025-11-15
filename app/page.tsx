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
        <h2 className="text-4xl font-bold text-center mb-14">
          Projects & Case Studies
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 justify-center px-6">

          {/* ---------- PROJECT 1: Alibaba ---------- */}
          <PinContainer
            title="Sales Internship — Alibaba"
            href="https://competenceconsulting.in/"
          >
            <Image
              src="/projects/alibaba.png"
              alt="Alibaba Internship"
              width={360}
              height={360}
              className="rounded-xl object-cover"
            />
            <p className="mt-3 text-sm text-gray-300">
              Sales executive intern supporting Alibaba.com onboarding.
            </p>
          </PinContainer>

          {/* ---------- PROJECT 2: Glamour Glow ---------- */}
          <PinContainer
            title="Instagram Growth — Glamour Glow"
            href="https://www.instagram.com/glamour_glow2023/"
          >
            <Image
              src="/projects/glamourglow.png"
              alt="Glamour Glow"
              width={360}
              height={360}
              className="rounded-xl object-cover"
            />
            <p className="mt-3 text-sm text-gray-300">
              Beauty & fashion page growth through reels & trend optimization.
            </p>
          </PinContainer>

          {/* ---------- PROJECT 3: Aesthx Makeups ---------- */}
          <PinContainer
            title="Instagram Growth — Aesthx Makeups"
            href="https://www.instagram.com/aesthxmakeups/"
          >
            <Image
              src="/projects/Makeup.png"
              alt="Aesthx Makeups"
              width={360}
              height={360}
              className="rounded-xl object-cover"
            />
            <p className="mt-3 text-sm text-gray-300">
              Aesthetic makeup content & reels growth.
            </p>
          </PinContainer>

          {/* ---------- PROJECT 4: Girls Being Girls ---------- */}
          <PinContainer
            title="Instagram Growth — Girls Being Girls"
            href="https://www.instagram.com/girlsbeinggirls02/"
          >
            <Image
              src="/projects/instagram.png"
              alt="Girls Being Girls"
              width={360}
              height={360}
              className="rounded-xl object-cover"
            />
            <p className="mt-3 text-sm text-gray-300">
              High-engagement meme/community page.
            </p>
          </PinContainer>

        </div>
      </section>
    </div>
  );
}
