import Image from "next/image";
import TextRevealCard from "./components/TextRevealCard";
import {
  CardContainer,
  CardBody,
  CardItem,
} from "./components/ThreeDCard";


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
        <h2 className="text-4xl font-bold text-center mb-10">
          Projects & Case Studies
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center px-6">

          {/* ---------- Card 1: Alibaba ---------- */}
          <a href="https://competenceconsulting.in/" target="_blank">
            <CardContainer>
              <CardBody>
                <CardItem translateZ={40}>
                  <Image
                    src="/projects/alibaba.png"
                    alt="Alibaba"
                    width={350}
                    height={350}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </CardItem>

                <CardItem
                  translateZ={80}
                  className="absolute bottom-3 left-3 text-lg font-semibold"
                >
                  Sales Internship
                </CardItem>

                <CardItem
                  translateZ={100}
                  className="absolute bottom-3 right-3 text-sm text-gray-300 w-40 text-right"
                >
                  Sales executive intern supporting Alibaba.com onboarding
                </CardItem>
              </CardBody>
            </CardContainer>
          </a>

          {/* ---------- Card 2: Glamour Glow ---------- */}
          <a
            href="https://www.instagram.com/glamour_glow2023/"
            target="_blank"
          >
            <CardContainer>
              <CardBody>
                <CardItem translateZ={40}>
                  <Image
                    src="/projects/glamourglow.jpeg"
                    alt="Glamour Glow"
                    width={350}
                    height={350}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </CardItem>

                <CardItem
                  translateZ={80}
                  className="absolute bottom-3 left-3 text-lg font-semibold"
                >
                  Instagram Growth — Glamour Glow
                </CardItem>

                <CardItem
                  translateZ={100}
                  className="absolute bottom-3 right-3 text-sm text-gray-300 w-40 text-right"
                >
                  Beauty & fashion page growth through reels
                  and trend optimization
                </CardItem>
              </CardBody>
            </CardContainer>
          </a>

          {/* ---------- Card 3: Aesthx Makeups ---------- */}
          <a
            href="https://www.instagram.com/aesthxmakeups/"
            target="_blank"
          >
            <CardContainer>
              <CardBody>
                <CardItem translateZ={40}>
                  <Image
                    src="/projects/makeup.jpeg"
                    alt="Aesthx Makeups"
                    width={350}
                    height={350}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </CardItem>

                <CardItem
                  translateZ={80}
                  className="absolute bottom-3 left-3 text-lg font-semibold"
                >
                  Instagram Growth — Aesthx Makeups
                </CardItem>

                <CardItem
                  translateZ={100}
                  className="absolute bottom-3 right-3 text-sm text-gray-300 w-40 text-right"
                >
                  Aesthetic makeup content and reels growth
                </CardItem>
              </CardBody>
            </CardContainer>
          </a>

          {/* ---------- Card 4: Girls Being Girls ---------- */}
          <a
            href="https://www.instagram.com/girlsbeinggirls02/"
            target="_blank"
          >
            <CardContainer>
              <CardBody>
                <CardItem translateZ={40}>
                  <Image
                    src="/projects/instagram.jpeg"
                    alt="Girls Being Girls"
                    width={350}
                    height={350}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </CardItem>

                <CardItem
                  translateZ={80}
                  className="absolute bottom-3 left-3 text-lg font-semibold"
                >
                  Instagram Growth — Girls Being Girls
                </CardItem>

                <CardItem
                  translateZ={100}
                  className="absolute bottom-3 right-3 text-sm text-gray-300 w-40 text-right"
                >
                  High-engagement meme/community page
                </CardItem>
              </CardBody>
            </CardContainer>
          </a>
        </div>
      </section>
    </div>
  );
}
