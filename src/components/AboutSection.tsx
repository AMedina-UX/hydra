import Image from "next/image";

export default function AboutSection() {
    return (
        <section id="about" className="relative w-full py-20 px-6 md:px-20 lg:px-[84px] text-white">
            {/* Top Part: Title and Short Desc */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 mb-24 relative">
                <div className="flex-1">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-2">INTRODUCTION</h2>
                    <h3 className="text-3xl lg:text-4xl font-light text-white/80 flex items-center gap-8">
                        TO HYDRA VR
                        <div className="hidden lg:block w-[200px] h-[33px] relative ml-[30px]">
                            <Image src="/images/about-arrow.svg" alt="" fill className="object-contain" />
                        </div>
                    </h3>
                </div>

                <div className="flex-1 text-sm lg:text-base text-white font-normal leading-relaxed text-justify lg:text-left">
                    <p>
                        Vitae sapien pellentesque habitant morbi tristique senectus et netus
                        et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
                        amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
                        aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
                        in. Lectus magna fringilla urna porttitor rhoncus vitae.
                    </p>
                </div>
            </div>

            {/* Bottom Part: Image and Long Desc */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20">
                <div className="flex-1 w-full max-w-[524px] relative aspect-square lg:aspect-auto lg:h-[557px]">
                    <div className="relative w-full h-full overflow-hidden rounded-[100px] rounded-bl-[240px]">
                        <Image
                            src="/images/about-image.png"
                            alt="Person experiencing VR"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="flex-1 flex flex-col items-start text-justify lg:text-left">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-2 hidden lg:block">ABOUT</h2>
                    <h3 className="text-3xl lg:text-4xl font-light text-white/80 mb-10 hidden lg:block">HYDRA VR</h3>

                    {/* Mobile Title */}
                    <div className="lg:hidden text-center w-full mb-8">
                        <h2 className="text-3xl font-bold mb-2">ABOUT</h2>
                        <h3 className="text-3xl font-light text-white/80">HYDRA VR</h3>
                    </div>

                    <p className="text-sm lg:text-base font-normal leading-relaxed mb-10">
                        Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
                        mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu
                        dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et
                        tortor at risus viverra adipiscing at in. Mattis aliquam faucibus
                        purus in massa. Est placerat in egestas erat imperdiet sed.
                        Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
                        etiam erat velit scelerisque in dictum non consectetur a. Laoreet
                        sit amet cursus sit amet. Vel eros donec ac odio tempor orci dapibus.
                        Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum.
                        Leo a diam sollicitudin tempor.
                    </p>

                    <button className="h-12 w-[214px] mx-auto lg:mx-0 rounded-full bg-gradient-to-r from-[#8176af] to-[#c0b7e8] text-violet-dark text-xs font-bold hover:opacity-90 transition-all uppercase shadow-[0_0_15px_rgba(192,183,232,0.3)]">
                        Let&apos;s Get in Touch
                    </button>
                </div>
            </div>
        </section>
    );
}
