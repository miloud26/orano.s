import React from "react";

const Results: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white px-4 sm:px-10 md:px-20">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-4xl md:text-6xl font-black text-center mb-12 md:mb-24 text-[#0a0d1f] tracking-tight">
          بعض النتائج لشركاء وكالتنا
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
          {[
            "https://res.cloudinary.com/dsqon0kae/image/upload/v1769830018/Untitled_design_10_kihtrn.png",
            "https://res.cloudinary.com/dsqon0kae/image/upload/v1769830021/Untitled_design_7_es3uvf.png",
            "https://res.cloudinary.com/dsqon0kae/image/upload/v1769830019/Untitled_design_8_urbzzb.png",
            "https://res.cloudinary.com/dsqon0kae/image/upload/v1769830019/Untitled_design_9_m2rrpz.png",
          ].map((i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden border border-gray-200 shadow-md md:shadow-[0_15px_40px_rgba(0,0,0,0.1)] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
            >
              <img
                src={`${i}`}
                alt={`Result ${i}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
