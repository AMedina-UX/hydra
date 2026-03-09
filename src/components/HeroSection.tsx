import Image from "next/image";
import { ArrowRight, MapPin, PhoneCall, Mail } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative w-full min-h-screen pt-40 pb-20 px-6 md:px-20 lg:px-[84px] flex flex-col justify-center">
            {/* Background Lines */}
            <div className="absolute top-[274px] left-[2.5px] w-[238px] h-[561px] -z-10 hidden lg:block">
                <img src="/images/hero-bg-lines.svg" alt="" className="w-full h-full object-cover" />
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
                {/* Left Content */}
                <div className="flex-1 text-center lg:text-left z-10">
                    <h1 className="text-white text-[2rem] md:text-[3.25rem] lg:text-[3rem] font-bold leading-tight mb-8">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#c0b7e8] to-[#8176af]">
                            Dive
                        </span>{" "}
                        Into The Depths
                        <br />
                        Of{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#c0b7e8] to-[#8176af]">
                            Virtual Reality
                        </span>
                    </h1>

                    <p className="text-white text-sm md:text-base font-normal max-w-[450px] mx-auto lg:mx-0 mb-16 hidden md:block">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
                        Lectus mauris eros in vitae.
                    </p>

                    <div className="flex items-center justify-center lg:justify-start gap-8">
                        <button className="h-12 w-[214px] rounded-full bg-gradient-to-r from-[#8176af] to-[#c0b7e8] text-violet-dark text-xs font-bold hover:opacity-90 transition-all uppercase">
                            Build Your World
                        </button>
                        <button
                            className="hidden sm:flex w-[100px] h-[100px] items-center justify-center text-[#c0b7e8] hover:translate-x-2 transition-transform"
                            aria-label="Next"
                        >
                            <ArrowRight size={48} strokeWidth={1} />
                        </button>
                    </div>
                </div>

                {/* Right Content / Image Area */}
                <div className="flex-1 flex justify-center lg:justify-end relative z-10 w-full">
                    {/* Decorative dark background behind image */}
                    <div className="absolute top-[14px] right-[8px] w-full max-w-[524px] aspect-[1.15] bg-[rgba(0,0,0,0.13)] rounded-tl-[100px] rounded-tr-[100px] rounded-br-[100px] rounded-bl-[240px] -z-10" />

                    {/* Masked Image */}
                    <div className="relative w-full max-w-[490px] aspect-[1.15] rounded-tl-[100px] rounded-tr-[100px] rounded-br-[100px] rounded-bl-[240px] overflow-hidden">
                        <Image
                            src="/images/hero-image.png"
                            alt="Person using VR headset"
                            fill
                            className="object-contain object-center"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Info Bar */}
            <div className="hidden lg:flex w-full mt-24 bg-gradient-to-r from-[rgba(58,52,86,0.95)] to-violet-dark h-[167px] rounded-[90px] items-center justify-between px-10 shadow-[0_4px_4px_rgba(192,183,232,0.01)] border-t border-[rgba(255,255,255,0.05)] relative overflow-hidden">

                {/* Info Item 1 */}
                <div className="flex items-center gap-4 flex-1 justify-center z-10">
                    <div className="w-[70px] h-[70px] rounded-full bg-white/5 flex items-center justify-center text-[#c0b7e8]">
                        <MapPin size={32} />
                    </div>
                    <div>
                        <h3 className="text-white text-2xl font-bold mb-1">Pay Us a Visit</h3>
                        <p className="text-white/80 text-sm font-normal">Union St, Seattle, WA 98101, United States</p>
                    </div>
                </div>

                {/* Divider SVG line mapping */}
                <div className="h-[116px] w-[2px] bg-[rgba(192,183,232,0.33)] z-10" />

                {/* Info Item 2 */}
                <div className="flex items-center gap-4 flex-1 justify-center z-10">
                    <div className="w-[70px] h-[70px] rounded-full bg-white/5 flex items-center justify-center text-[#c0b7e8]">
                        <PhoneCall size={32} />
                    </div>
                    <div>
                        <h3 className="text-white text-2xl font-bold mb-1">Give Us a Call</h3>
                        <p className="text-white/80 text-sm font-normal">(110) 1111-1010</p>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-[116px] w-[2px] bg-[rgba(192,183,232,0.33)] z-10" />

                {/* Info Item 3 */}
                <div className="flex items-center gap-4 flex-1 justify-center z-10">
                    <div className="w-[70px] h-[70px] rounded-full bg-white/5 flex items-center justify-center text-[#c0b7e8]">
                        <Mail size={32} />
                    </div>
                    <div>
                        <h3 className="text-white text-2xl font-bold mb-1">Send Us a Message</h3>
                        <p className="text-white/80 text-sm font-normal">Contact@HydraVTech.com</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
