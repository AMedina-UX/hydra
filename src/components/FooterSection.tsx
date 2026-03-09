import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Youtube, Instagram, Pin } from "lucide-react";

export default function FooterSection() {
    const socialIcons = [
        { icon: Facebook, href: "#" },
        { icon: Twitter, href: "#" },
        { icon: Linkedin, href: "#" },
        { icon: Youtube, href: "#" },
        { icon: Instagram, href: "#" },
        { icon: Pin, href: "#" },
    ];

    return (
        <footer className="relative w-full pt-20 pb-10 px-6 md:px-20 lg:px-[84px] text-white">
            {/* Top Section */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 mb-24">

                {/* Logo */}
                <div className="flex-1 flex justify-center lg:justify-start">
                    <div className="relative w-[185px] h-[187px]">
                        <Image
                            src="/images/logo-mark.svg"
                            alt="Hydra Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Divider SVG Line 1 */}
                <div className="hidden lg:block w-[2px] h-[196px] bg-gradient-to-b from-transparent via-[#c0b7e880] to-transparent" />

                {/* Links 1 */}
                <div className="flex-1 flex justify-center text-center lg:text-left">
                    <ul className="flex flex-col gap-5 text-base font-bold uppercase tracking-wider text-white hover:[&>li>a]:text-[#c0b7e8] transition-colors">
                        <li><Link href="#about">About</Link></li>
                        <li><Link href="#services">Services</Link></li>
                        <li><Link href="#technologies">Technologies</Link></li>
                        <li><Link href="#howto">How To</Link></li>
                        <li><Link href="#contact">Join Hydra</Link></li>
                    </ul>
                </div>

                {/* Divider SVG Line 2 */}
                <div className="hidden lg:block w-[2px] h-[196px] bg-gradient-to-b from-transparent via-[#c0b7e880] to-transparent" />

                {/* Links 2 */}
                <div className="flex-1 flex justify-center text-center lg:text-left">
                    <ul className="flex flex-col gap-5 text-base font-bold uppercase tracking-wider text-white hover:[&>li>a]:text-[#c0b7e8] transition-colors">
                        <li><Link href="#">F.A.Q</Link></li>
                        <li><Link href="#">Sitemap</Link></li>
                        <li><Link href="#">Conditions</Link></li>
                        <li><Link href="#">Licenses</Link></li>
                    </ul>
                </div>

                {/* Divider SVG Line 3 */}
                <div className="hidden lg:block w-[2px] h-[196px] bg-gradient-to-b from-transparent via-[#c0b7e880] to-transparent" />

                {/* Social & Button */}
                <div className="flex-1 flex flex-col items-center justify-center gap-8">
                    <h4 className="text-base font-bold uppercase tracking-wider">
                        Socialize with Hydra
                    </h4>

                    <div className="flex gap-4">
                        {socialIcons.map((Social, idx) => (
                            <a
                                key={idx}
                                href={Social.href}
                                className="w-[32px] h-[32px] rounded-full bg-white flex items-center justify-center text-[#343045] hover:bg-[#c0b7e8] transition-colors shadow-[0_0_10px_rgba(192,183,232,0.8)]"
                            >
                                <Social.icon size={20} strokeWidth={2.5} />
                            </a>
                        ))}
                    </div>

                    <button className="h-12 w-[214px] rounded-full bg-gradient-to-r from-[#8176af] to-[#c0b7e8] text-violet-dark text-xs font-bold hover:opacity-90 transition-all uppercase shadow-[0_4px_4px_rgba(192,183,232,0.3)]">
                        Build Your World
                    </button>
                </div>

            </div>

            {/* Bottom Section */}
            <div className="flex flex-col items-center">
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#c0b7e880] to-transparent mb-10" />
                <p className="text-sm font-bold tracking-widest text-[#c0b7e8] text-center uppercase">
                    2026 &copy; HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED
                </p>
            </div>
        </footer>
    );
}
