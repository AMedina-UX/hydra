import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function TechSection() {
    const logos = [
        { src: "/images/tech-1.png", alt: "Unreal Engine", width: 174, height: 174 },
        { src: "/images/tech-2.png", alt: "Unity", width: 252, height: 252 },
        { src: "/images/tech-3.png", alt: "Oculus", width: 263, height: 263 },
        { src: "/images/tech-4.png", alt: "Vive", width: 282, height: 282 },
    ];

    return (
        <section id="technologies" className="relative w-full py-20 px-6 md:px-20 lg:px-[84px] flex flex-col items-center">
            {/* Top Banner with Background Image */}
            <div className="relative w-full h-[303px] rounded-full overflow-hidden flex flex-col items-center justify-center text-center -mb-12 z-10">
                <Image
                    src="/images/tech-bg.png"
                    alt="Technologies used"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-[#302c42]/80 mix-blend-multiply" />

                <div className="relative z-10">
                    <h2 className="text-white text-3xl md:text-4xl font-bold mb-2">
                        TECHNOLOGIES &amp; HARDWARE
                    </h2>
                    <h3 className="text-white text-3xl md:text-4xl font-light">
                        USED BY HYDRA VR.
                    </h3>
                </div>

                {/* Floating Chevron Down */}
                <button
                    className="absolute -bottom-8 bg-[#343045] border-[10px] border-[#0e0e0e4d] rounded-full p-4 text-[#c0b7e8] hover:text-white transition-colors"
                    aria-label="Scroll down"
                >
                    <ChevronDown size={40} />
                </button>
            </div>

            {/* Tech Logos Grid */}
            <div className="w-full mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 items-center justify-items-center">
                {logos.map((logo, idx) => (
                    <div key={idx} className="relative w-full max-w-[200px] aspect-square flex items-center justify-center">
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            fill
                            className="object-contain"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
