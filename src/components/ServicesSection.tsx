import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ServicesSection() {
    const services = [
        {
            title: "SIMULATION",
            image: "/images/service-1.png",
            desc: "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae."
        },
        {
            title: "EDUCATION",
            image: "/images/service-2.png",
            desc: "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae."
        },
        {
            title: "SELF-CARE",
            image: "/images/service-3.png",
            desc: "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae."
        },
        {
            title: "OUTDOOR",
            image: "/images/service-4.png",
            desc: "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae."
        }
    ];

    return (
        <section id="services" className="relative w-full py-20 px-6 md:px-20 lg:px-[84px] text-white">
            {/* Top Header */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 mb-20">
                <div className="flex-1">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-2">WHY BUILD</h2>
                    <h3 className="text-3xl lg:text-4xl font-light text-white/80 flex items-center gap-8">
                        WITH HYDRA?
                        <div className="hidden lg:flex items-center gap-2 ml-[30px] w-full max-w-[200px]">
                            <div className="h-[2px] w-full bg-[#c0b7e84d]" />
                            <ArrowRight size={32} className="text-[#c0b7e8]" />
                        </div>
                    </h3>
                </div>

                <div className="flex-1 text-sm lg:text-base font-normal leading-relaxed text-justify lg:text-left">
                    <p>
                        Vitae sapien pellentesque habitant morbi tristique senectus et netus
                        et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
                        amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
                        aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
                        in. Lectus magna fringilla urna porttitor rhoncus vitae.
                    </p>
                </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pointer-events-auto">
                {services.map((service, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center text-center p-8 rounded-[40px] shadow-xl hover:scale-105 transition-transform duration-300"
                        style={{
                            background: "radial-gradient(circle at 50% 50%, #433D60 0%, #322D47 50%, #211E2E 100%)"
                        }}
                    >
                        {/* Circular Image */}
                        <div className="w-[190px] h-[190px] rounded-full overflow-hidden border-[15px] border-[#0e0e0e4d] mb-6 relative">
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h4 className="text-2xl font-bold mb-4">{service.title}</h4>

                        <div className="h-[1px] w-[154px] bg-[#c0b7e84d] mb-5" />

                        <p className="text-xs font-normal text-white/80 leading-relaxed mb-8 h-[60px]">
                            {service.desc}
                        </p>

                        <button className="h-12 w-[154px] rounded-full bg-gradient-to-r from-[#8176af] to-[#c0b7e8] text-violet-dark text-xs font-bold hover:opacity-90 transition-all uppercase mt-auto shadow-[0_4px_4px_rgba(192,183,232,0.3)]">
                            Try It Now
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
