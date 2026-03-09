"use client";

import Image from "next/image";

export default function OptInSection() {
    return (
        <section id="contact" className="relative w-full py-20 px-6 md:px-20 lg:px-[84px] text-white">
            <div
                className="w-full rounded-[40px] md:rounded-[100px] p-8 md:p-16 lg:p-24 shadow-2xl"
                style={{
                    background: "radial-gradient(circle at 50% 50%, #403A5F 0%, #312C46 50%, #211E2E 100%)"
                }}
            >
                {/* Header content */}
                <div className="flex flex-col items-center justify-center text-center w-full mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">JOIN HYDRA</h2>

                    {/* Decorative Line */}
                    <div className="relative w-full max-w-[414px] h-[2px] mb-6">
                        <Image src="/images/form-line.svg" alt="" fill className="object-contain" />
                    </div>

                    <h3 className="text-3xl md:text-4xl font-light text-white/90">
                        Let&apos;s Build Your VR Experience
                    </h3>
                </div>

                {/* Form fields */}
                <form className="w-full max-w-[1058px] mx-auto flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="flex flex-col md:flex-row gap-6">
                        <input
                            type="text"
                            placeholder="First Name"
                            className="w-full h-[72px] bg-transparent border-2 border-white rounded-[40px] px-8 text-sm outline-none focus:border-[#c0b7e8] transition-colors placeholder:text-white/80"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="w-full h-[72px] bg-transparent border-2 border-white rounded-[40px] px-8 text-sm outline-none focus:border-[#c0b7e8] transition-colors placeholder:text-white/80"
                            required
                        />
                    </div>

                    <div className="flex flex-col md:flex-row gap-6">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full h-[72px] bg-transparent border-2 border-white rounded-[40px] px-8 text-sm outline-none focus:border-[#c0b7e8] transition-colors placeholder:text-white/80"
                            required
                        />
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="w-full h-[72px] bg-transparent border-2 border-white rounded-[40px] px-8 text-sm outline-none focus:border-[#c0b7e8] transition-colors placeholder:text-white/80"
                            required
                        />
                    </div>

                    <input
                        type="text"
                        placeholder="Subject"
                        className="w-full h-[72px] bg-transparent border-2 border-white rounded-[40px] px-8 text-sm outline-none focus:border-[#c0b7e8] transition-colors placeholder:text-white/80"
                        required
                    />

                    <textarea
                        placeholder="Tell Us Something..."
                        className="w-full h-[210px] bg-transparent border-2 border-white rounded-[40px] p-8 text-sm outline-none focus:border-[#c0b7e8] transition-colors resize-none placeholder:text-white/80"
                        required
                    />

                    <button
                        type="submit"
                        className="mt-8 mx-auto h-[48px] w-full max-w-[214px] rounded-full bg-gradient-to-r from-[#8176af] to-[#c0b7e8] text-violet-dark text-xs font-bold hover:opacity-90 transition-all uppercase shadow-[0_4px_4px_rgba(192,183,232,0.3)]"
                    >
                        SEND TO HYDRA
                    </button>
                </form>
            </div>
        </section>
    );
}
