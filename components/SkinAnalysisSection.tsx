export function SkinAnalysisSection() {
  return (
    <section className="bg-[#F5EEE6] py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="max-w-[375px] mx-auto space-y-6">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/0b562777c3a60864c7019b4d31df383658cabb6d?width=800"
            alt="Skin analysis"
            className="w-full aspect-[351/359] object-cover rounded-[10px]"
          />

          <div className="space-y-1">
            <h2 className="font-playfair text-[26px] leading-normal">
              Een goed behandelplan
            </h2>
            <h3 className="font-playfair text-[26px] font-semibold leading-normal">
              start met een GRATIS
            </h3>
            <h3 className="font-playfair text-[26px] font-semibold leading-normal">
              huidanalyse
            </h3>
          </div>

          <p className="font-raleway text-sm leading-5">
            Een goed behandelplan op maat begint bij een grondige huidanalyse.
            Veel huidproblemen beginnen in de diepere huidlagen en worden pas
            in de loop der tijd aan het huidoppervlak zichtbaar. De Visia
            huidanalyse maakt het onzichtbare zichtbaar en brengt dergelijke
            huidproblemen aan het licht. Daardoor worden huidproblemen
            vroegtijdig opgespoord en kunnen ze ook worden behandeld.
          </p>

          <p className="font-raleway text-sm font-medium leading-5">
            Wil jij graag werken aan de beste versie van jo huid?
          </p>

          <button className="w-full max-w-[160px] h-[41px] px-6 rounded-full bg-[#246A52] text-white font-raleway text-sm font-medium hover:bg-[#1d5442] transition-colors">
            Plan een afspraak
          </button>
        </div>
      </div>
    </section>
  );
}
