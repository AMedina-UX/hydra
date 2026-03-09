import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function Header() {
    return (
        <header className="absolute top-0 left-0 w-full z-50 py-10 px-6 md:px-20 lg:px-[84px] flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-[15px]">
                <div className="relative w-[102px] h-[103px]">
                    <Image
                        src="/images/logo-mark.svg"
                        alt="Hydra Logo Mark"
                        fill
                        className="object-contain"
                    />
                </div>
                <div className="relative w-[76px] h-[46px] hidden sm:block">
                    <Image
                        src="/images/logo-text.svg"
                        alt="HYDRA Text"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
                <Link
                    href="#about"
                    className="text-white text-xs font-bold hover:text-violet transition-colors uppercase tracking-wider"
                >
                    About
                </Link>
                <Link
                    href="#services"
                    className="text-white text-xs font-bold hover:text-violet transition-colors uppercase tracking-wider"
                >
                    Services
                </Link>
                <Link
                    href="#technologies"
                    className="text-white text-xs font-bold hover:text-violet transition-colors uppercase tracking-wider"
                >
                    Technologies
                </Link>
                <Link
                    href="#howto"
                    className="text-white text-xs font-bold hover:text-violet transition-colors uppercase tracking-wider"
                >
                    How To
                </Link>
            </nav>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center gap-9">
                <button className="h-12 w-[154px] rounded-full border-2 border-white text-white text-xs font-bold hover:bg-white hover:text-violet-dark transition-all uppercase">
                    Contact Us
                </button>
                <button className="h-12 w-[155px] rounded-full bg-gradient-to-r from-[#8176af] to-[#c0b7e8] text-violet-dark text-xs font-bold hover:opacity-90 transition-all uppercase shadow-[0_0_15px_rgba(192,183,232,0.3)]">
                    Join Hydra
                </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="lg:hidden text-white" aria-label="Toggle Menu">
                <Menu size={32} />
            </button>
        </header>
    );
}
