export function HeroSection() {
  return (
    <section className="relative w-full">
      <div className="relative h-[676px] md:h-[80vh] max-h-[900px]">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/77d9a18ea987d355d878655f78654c0128f21bc2?width=1200"
          alt="Spa treatment"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <div className="max-w-md space-y-8 bg-white/60 px-8 py-12 rounded-lg">
            <div className="space-y-2">
              <div className="text-[#202020] font-raleway text-base font-medium">
                SKIN CARE SPA
              </div>
              <div className="h-px w-full bg-black my-1 relative">
                <div className="absolute left-1/2 top-[-3px] -translate-x-1/2 flex flex-col items-center">
                  <div className="w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-b-[3px] border-b-black" />
                  <div className="w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-t-[3px] border-t-black" />
                </div>
              </div>
              <h1 className="text-[#202020] font-playfair text-3xl md:text-5xl italic">
                The Glow Sanctuary
              </h1>
            </div>
            <p className="text-black font-raleway text-sm md:text-base">
              Book your treatment today and enjoy personalized skin care
              designed to restore your glow and boost your confidence.
            </p>
            <button className="mx-auto h-[41px] px-6 rounded-full bg-[#246A52] text-white font-raleway text-sm hover:bg-[#1d5442] transition-colors">
              boek je behandeling
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
