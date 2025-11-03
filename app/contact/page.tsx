"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function PriceListSection() {
  return (
    <section className="bg-[#faf6f0] text-gray-800">
      {/* Header Image */}
      <div className="relative w-full h-[300px]">
        <Image
          src="/images/pricing-header.jpg" // replace with actual image
          alt="Prijslijst Banner"
          fill
          className="object-cover"
        />
      </div>

      {/* Price List */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-32 flex gap-8 md:gap-16">
        {/* Contact Description */}
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="mb-2 font-medium font-serif text-2xl md:text-3xl">Contact</h2>
            <p>
              Heb je een vraag over een behandeling, een product of een prijs?
              Laat het ons dan weten. Vul dit contactformulier zo uitgebreid en
              duidelijk mogelijk in, dan nemen wij zo snel mogelijk contact met
              je op om je verder te helpen. Wil je liever even bellen, mailen of
              langskomen? Dat kan natuurlijk ook!
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-medium font-serif text-xl md:text-2xl">
              Bel of mail ons
            </h3>
            <p>o471 33 73 90</p>
            <p>charlotte@debode.be</p>
          </div>

          <div>
            <h3 className="mb-2 font-medium font-serif text-xl md:text-2xl">
              Hier vind je ons
            </h3>
            <p>Klaverstraat 10</p>
            <p className="mb-4">8500 Kortrijk</p>
            <Button>Routebegeleiding</Button>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-white p-8 rounded-lg shrink-0 w-full max-w-xl">
          <h3 className="mb-4 font-medium font-serif text-xl md:text-2xl">
            Contactformulier
          </h3>

          <Input type="text" className="mb-4" placeholder="Naam" />
          <Input type="text" className="mb-4" placeholder="E-mailadres" />
          <Input type="text" className="mb-4" placeholder="Telefoonummer" />
          <Textarea
            className="mb-4"
            placeholder="Typ hier houw bericht of vraag"
          ></Textarea>
          <Button>verzenden</Button>
        </div>
      </div>
    </section>
  );
}
