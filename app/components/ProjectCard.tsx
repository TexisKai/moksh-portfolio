import Image from "next/image";
import { PinContainer } from "./PinCard";

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* ================= PROJECTS ================= */}
      <section className="py-20">
        <h2 className="text-4xl font-bold text-center mb-10">
          Projects & Case Studies
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center px-6">

          {/* ---------- Card 1: Alibaba ---------- */}
          <PinContainer
            title="Sales Internship"
            href="https://competenceconsulting.in/"
          >
            <Image
              src="/projects/alibaba.png"
              alt="Alibaba Internship"
              width={350}
              height={350}
              className="rounded-xl object-cover"
            />
          </PinContainer>

          {/* ---------- Card 2: Glamour Glow ---------- */}
          <PinContainer
            title="Instagram Growth — Glamour Glow"
            href="https://www.instagram.com/glamour_glow2023/"
          >
            <Image
              src="/projects/glamourglow.png"
              alt="Glamour Glow"
              width={350}
              height={350}
              className="rounded-xl object-cover"
            />
          </PinContainer>

          {/* ---------- Card 3: Aesthx Makeups ---------- */}
          <PinContainer
            title="Instagram Growth — Aesthx Makeups"
            href="https://www.instagram.com/aesthxmakeups/"
          >
            <Image
              src="/projects/Makeup.png"
              alt="Aesthx Makeups"
              width={350}
              height={350}
              className="rounded-xl object-cover"
            />
          </PinContainer>

          {/* ---------- Card 4: Girls Being Girls ---------- */}
          <PinContainer
            title="Instagram Growth — Girls Being Girls"
            href="https://www.instagram.com/girlsbeinggirls02/"
          >
            <Image
              src="/projects/instagram.png"
              alt="Girls Being Girls"
              width={350}
              height={350}
              className="rounded-xl object-cover"
            />
          </PinContainer>

        </div>
      </section>
    </div>
  );
}
