"use client"

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonialResults = [
  {
    beforeImage:
      "https://api.builder.io/api/v1/image/assets/TEMP/77e1aa9ba00c320088d3a07710e7066c4fd6421e?width=400",
    afterImage:
      "https://api.builder.io/api/v1/image/assets/TEMP/3e5a4156f4d5c00d3764d6b72860b2834abcd834?width=400",
    quote:
      '"I\'ve tried many facials before, but nothing compares to the care and results I got here. My skin feels softer and healthier than ever."',
    name: "Ann Curtis",
    rating: 5,
  },
  {
    beforeImage:
      "https://api.builder.io/api/v1/image/assets/TEMP/77e1aa9ba00c320088d3a07710e7066c4fd6421e?width=400",
    afterImage:
      "https://api.builder.io/api/v1/image/assets/TEMP/3e5a4156f4d5c00d3764d6b72860b2834abcd834?width=400",
    quote:
      '"The transformation is incredible. My confidence has never been higher and my skin looks absolutely radiant!"',
    name: "Maria Santos",
    rating: 5,
  },
  {
    beforeImage:
      "https://api.builder.io/api/v1/image/assets/TEMP/77e1aa9ba00c320088d3a07710e7066c4fd6421e?width=400",
    afterImage:
      "https://api.builder.io/api/v1/image/assets/TEMP/3e5a4156f4d5c00d3764d6b72860b2834abcd834?width=400",
    quote:
      '"Best decision I made for my skin. The team is so professional and caring. Highly recommended!"',
    name: "Sophie Müller",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialResults.length);
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialResults.length - 1 : prev - 1
    );
  };

  const testimonial = testimonialResults[currentIndex];

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-center font-medium font-serif text-[28px] leading-tight mb-8">
          Real Experiences,
          <br />
          Real Results
        </h2>

        <div className="max-w-[375px] mx-auto">
          <div className="flex gap-1 mb-6">
            <div className="flex-1 relative aspect-[173/201]">
              <img
                src={testimonial.beforeImage}
                alt="Before"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-1 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1">
                <span className="text-white font-lato text-sm font-bold">
                  Before
                </span>
              </div>
            </div>
            <div className="flex-1 relative aspect-[178/201]">
              <img
                src={testimonial.afterImage}
                alt="After"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-1 bg-white/10 backdrop-blur-sm rounded-full px-5 py-1">
                <span className="text-white font-lato text-sm font-bold">
                  After
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-2 justify-center mb-6">
            <button
              onClick={prev}
              className="w-[26px] h-[26px] rounded-full border border-[#797979] flex items-center justify-center hover:bg-gray-100"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-[#797979]" />
            </button>
            <button
              onClick={next}
              className="w-[26px] h-[26px] rounded-full border border-[#797979] flex items-center justify-center hover:bg-gray-100"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 text-[#797979]" />
            </button>
          </div>

          <p className="font-raleway text-sm leading-[18px] mb-2">
            {testimonial.quote}
          </p>
          <p className="font-raleway text-xs font-bold mb-1">
            {testimonial.name}
          </p>
          <div className="flex gap-1 mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
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

          <div className="flex gap-2 justify-center">
            {testimonialResults.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === currentIndex ? "bg-[#8D8888]" : "bg-[#D9D9D9]"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12 space-y-4">
          <p className="font-raleway text-base max-w-md mx-auto px-4">
            Ready to see your own results? Take the first step toward
            healthier, radiant skin.
          </p>
          <button className="h-[41px] px-6 rounded-full bg-[#246A52] text-white font-raleway text-sm hover:bg-[#1d5442] transition-colors">
            boek je behandeling
          </button>
        </div>
      </div>
    </section>
  );
}
