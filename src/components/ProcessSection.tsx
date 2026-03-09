import { ArrowRight } from "lucide-react";

export default function ProcessSection() {
    const steps = [
        { num: "01", title: "3D Conception", subtitle: "& Design" },
        { num: "02", title: "Interaction", subtitle: "Design" },
        { num: "03", title: "VR World", subtitle: "User Testing" },
        { num: "04", title: "Hydra VR", subtitle: "Deploy" },
    ];

    return (
        <section id="howto" className="relative w-full py-20 px-6 md:px-20 lg:px-[84px] text-white overflow-hidden">
            {/* Top Header */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 mb-24">
                <div className="flex-1">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-2">HOW WE BUILD</h2>
                    <h3 className="text-3xl lg:text-4xl font-light text-white/80 flex items-center gap-8">
                        WITH HYDRA VR?
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

            {/* Process Steps */}
            <div className="relative w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4 mt-16 z-10">

                {/* Background Wavy Line (Approximated with a straight line across for simplicity if SVG not available) */}
                <div className="hidden md:block absolute top-[80px] left-[10%] w-[80%] h-[2px] bg-[rgba(192,183,232,0.33)] -z-10" />

                {steps.map((step, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center max-w-[250px] relative">

                        {/* Number Circle */}
                        <div className="w-[198px] h-[198px] rounded-full border-[20px] border-[rgba(14,14,14,0.3)] bg-gradient-to-r from-[#8176af] to-[#c0b7e8] flex items-center justify-center shadow-2xl mb-8 relative z-10">
                            <span className="text-[4rem] font-bold text-violet-dark tracking-tighter">
                                {step.num}
                            </span>
                        </div>

                        {/* Title with Arrow */}
                        <div className="flex items-start gap-4">
                            <ArrowRight size={32} className="text-[#c0b7e8] flex-shrink-0 mt-2" />
                            <div className="text-left">
                                <h4 className="text-2xl font-bold">{step.title}</h4>
                                <h4 className="text-2xl font-bold">{step.subtitle}</h4>
                            </div>
                        </div>

                    </div>
                ))}

            </div>
        </section>
    );
}
