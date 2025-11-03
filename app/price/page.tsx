"use client";
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

      {/* Header Content BELOW image */}
      <div className="text-center px-4 py-12">
        <h2 className="text-4xl text-gray-900 mb-4 font-medium font-serif">
          Prijslijst
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700 mb-6">
          Hieronder vind je de prijslijst van al onze behandelingen die jouw
          huid weer gaan laten stralen. Heb je een vraag? Bel of mail ons dan
          even!
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-[#8b8778] text-white px-6 py-2 rounded-full">
            Plan een afspraak
          </button>
          <button className="bg-white text-[#8b8778] px-6 py-2 rounded-full border border-[#8b8778]">
            Neem contact op
          </button>
        </div>
      </div>

      {/* Price List */}
      <div className="max-w-3xl mx-auto px-6 pb-16 space-y-12">
        {/* Category */}
        <div>
          <h3 className="text-xl mb-3 font-medium font-serif">Skinpen</h3>
          <hr className="border-t border-gray-300 mb-4" />
          <div className="flex justify-between mb-2">
            <p>1 SkinPen behandeling</p>
            <p>€ 200,-</p>
          </div>
          <div className="flex justify-between mb-2">
            <p>3 SkinPen behandelingen (kuur)</p>
            <p>€ 595,-</p>
          </div>
          <div className="flex justify-between">
            <p>6 SkinPen behandelingen (kuur)</p>
            <p>€ 1050,-</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium font-serif mb-3">
            Radiofrequentie
          </h3>
          <hr className="border-t border-gray-300 mb-4" />
          <div className="flex justify-between mb-2">
            <p>Gelaat</p>
            <p>€ 125,-</p>
          </div>
          <div className="flex justify-between">
            <p>Gelaat + hals</p>
            <p>€ 150,-</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium font-serif mb-3">Venus Viva</h3>
          <hr className="border-t border-gray-300 mb-4" />
          <div className="flex justify-between">
            <p>1 Venus Viva behandeling</p>
            <p>€ 200,-</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium font-serif mb-3">Spray tanning</h3>
          <hr className="border-t border-gray-300 mb-4" />
          <div className="flex justify-between mb-2">
            <p>Volledig lichaam</p>
            <p>€ 45,-</p>
          </div>
          <div className="flex justify-between mb-2">
            <p>Gezicht, hals en decolleté</p>
            <p>€ 25,-</p>
          </div>
          <div className="flex justify-between mb-2">
            <p>Gezicht, hals, decolleté en armen</p>
            <p>€ 25,-</p>
          </div>
          <div className="flex justify-between">
            <p>Benen apart</p>
            <p>€ 25,-</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium font-serif mb-3">
            Peels: ZO Skin Health – AlumierMD
          </h3>
          <hr className="border-t border-gray-300 mb-4" />
          <div className="flex justify-between mb-2">
            <p>Glow peel</p>
            <p>€ 125,-</p>
          </div>
          <div className="flex justify-between mb-2">
            <p>Pigmentatie peel</p>
            <p>€ 145,-</p>
          </div>
          <div className="flex justify-between mb-2">
            <p>Acne peel</p>
            <p>€ 155,-</p>
          </div>
          <div className="flex justify-between mb-2">
            <p>Rosacea peel</p>
            <p>€ 165,-</p>
          </div>
          <div className="flex justify-between">
            <p>Hydratatie BOOST</p>
            <p>€ 175,-</p>
          </div>
        </div>
      </div>
    </section>
  );
}
