import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="">
      <div className="relative w-full h-[300px]">
        <Image
          src="/images/pricing-header.jpg" // replace with actual image
          alt="Prijslijst Banner"
          fill
          className="object-cover"
        />
      </div>
      <div className="text-center px-4 py-12">
        <h2 className="text-4xl text-gray-900 mb-4 font-medium font-serif">
          About us
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700 mb-6">
          Hieronder vind je de prijslijst van al onze behandelingen die jouw
          huid weer gaan laten stralen. Heb je een vraag? Bel of mail ons dan
          even!
        </p>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-16 flex flex-col gap-20">
        {/* Section 1 */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex flex-1 gap-4">
            <Image
              src="/images/about1.jpg"
              alt="Debode sign"
              className="rounded-lg w-1/2 object-cover"
              width={400}
              height={400}
            />
            <Image
              src="/images/about2.jpg"
              alt="Charlotte working"
              className="rounded-lg w-1/2 object-cover"
              width={400}
              height={400}
            />
          </div>
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-semibold font-serif">
              Een{" "}
              <span className="text-[#b0835e] font-medium">warm welkom</span>
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Vanaf het eerste contact tot de nazorg van de behandelingen; we
              voorzien je altijd van eerlijk en transparant advies. Mijn naam is
              Charlotte Debode, oprichtster en eigenares van Huidpraktijk
              Débodé. Na mijn eerste werkervaring, heb ik in 2017 Débodé
              opgericht. Ik ben mijn praktijk gestart in samenwerking met een
              afslankcentrum in het centrum van Kortrijk, maar na iets meer dan
              een jaar heb ik besloten om mijn vleugels open te slaan en mijn
              praktijk te verhuizen naar Hoog Kortrijk.
            </p>
            <button className="text-sm font-medium text-[#b0835e] underline">
              Lees meer
            </button>
          </div>
        </div>
        {/* Section 2 */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-medium font-serif">
              Een team van 3{" "}
              <span className="italic font-normal">huidexperten</span>
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Passie voor perfectie en liefde voor het vak heeft ons na 10 jaar
              gebracht waar we nu staan.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Jaarlijks worden tal van opleidingen gevolgd om jullie met{" "}
              <span className="font-semibold">
                de nieuwste en beste technieken, apparaten en producten
              </span>{" "}
              te behandelen.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/images/about3.jpg"
              alt="Team of experts"
              className="rounded-lg object-cover w-full"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
