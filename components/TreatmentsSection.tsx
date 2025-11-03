const treatments = [
  {
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/69d6948a5a05d2d2c250f8ed98b1820fdbe3b356?width=800",
    title: "Laserontharing",
  },
  {
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/dbe56a1bfae74505e0e3030448ab615b04ac1fe7?width=800",
    title: "GRATIS huidanalyse",
  },
  {
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/3410beae92096d910810dfab0d70905598f28947?width=800",
    title: "Apocalypsis Peeling",
  },
  {
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/878c3816017638cd3dba1945ded4aa78d4e15ac9?width=800",
    title: "Apocalypsis Peeling",
  },
  {
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/5f2f779f9e5722858820a151083e3ed09f720201?width=800",
    title: "Apocalypsis Peeling",
  },
];

export function TreatmentsSection() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="bg-[#FFFBFB] py-8 mb-8">
          <div className="max-w-[355px] mx-auto px-4">
            <div className="flex items-start gap-4 mb-6">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/77e1aa9ba00c320088d3a07710e7066c4fd6421e?width=200"
                alt="Customer review"
                className="w-[70px] h-[70px] rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <p className="font-raleway text-sm leading-[18px] mb-2">
                  "I've tried many facials before, but nothing compares to the
                  care and results I got here. My skin feels softer and
                  healthier than ever."
                </p>
                <p className="font-raleway text-xs font-bold">Ann Curtis</p>
                <div className="flex gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.97351 3.59048C9.94209 3.49792 9.88424 3.41658 9.80711 3.35651C9.72999 3.29645 9.63696 3.26028 9.53951 3.25248L6.68901 3.02598L5.45551 0.295484C5.41623 0.20754 5.35233 0.132845 5.27154 0.0804126C5.19074 0.0279806 5.09649 5.29395e-05 5.00018 7.51893e-08C4.90386 -5.27891e-05 4.80958 0.0277714 4.72873 0.0801147C4.64787 0.132458 4.58389 0.207083 4.54451 0.294984L3.31101 3.02598L0.460513 3.25248C0.364741 3.26007 0.273182 3.29509 0.196791 3.35335C0.120399 3.41161 0.0624096 3.49064 0.0297597 3.581C-0.00289019 3.67135 -0.00881797 3.7692 0.0126856 3.86284C0.0341892 3.95647 0.0822135 4.04193 0.151013 4.10898L2.25751 6.16248L1.51251 9.38848C1.48989 9.48613 1.49714 9.58833 1.53332 9.68181C1.5695 9.77528 1.63295 9.85573 1.71541 9.9127C1.79788 9.96968 1.89557 10.0005 1.99581 10.0013C2.09604 10.0021 2.19419 9.9727 2.27751 9.91698L5.00001 8.10198L7.72251 9.91698C7.80768 9.97353 7.90812 10.0026 8.01033 10.0004C8.11254 9.99816 8.2116 9.96467 8.29421 9.90445C8.37682 9.84422 8.439 9.76014 8.4724 9.66352C8.50579 9.5669 8.5088 9.46237 8.48101 9.36398L7.56651 6.16398L9.83451 4.12298C9.98301 3.98898 10.0375 3.77998 9.97351 3.59048Z"
                        fill="black"
                      />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-center font-medium font-serif text-[28px] leading-tight mb-4 px-4">
          Onze Behandelingen
        </h2>
        <p className="text-center font-raleway text-sm leading-[18px] max-w-[355px] mx-auto mb-8 px-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore gna aliqua. Ut enim ad
          minim veniam, quis...
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {treatments.map((treatment, index) => (
            <div key={index} className="relative group overflow-hidden">
              <div className="aspect-[393/247] relative">
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <h3 className="text-white font-playfair text-2xl font-semibold text-center px-4">
                    {treatment.title}
                  </h3>
                  <button className="border border-white text-white font-raleway text-xs px-4 h-[30px] hover:bg-white hover:text-black transition-colors">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="h-[41px] px-6 rounded-full bg-[#246A52] text-white font-raleway text-sm hover:bg-[#1d5442] transition-colors">
            Boek je behandeling
          </button>
        </div>
      </div>
    </section>
  );
}
