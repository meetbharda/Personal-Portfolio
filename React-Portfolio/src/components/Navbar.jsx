import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#020817]/80 backdrop-blur-md">

            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

                {/* LOGO */}
                <a href="#home" onClick={closeMenu}>
                    <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-purple-500">
                            &lt;/&gt;
                        </span>

                        <span className="text-xl font-semibold text-white">
                            Meet Bharda
                        </span>
                    </div>
                </a>

                {/* DESKTOP NAVIGATION */}
                <div className="hidden items-center gap-8 md:flex">

                    <a href="#home" className="text-sm text-gray-400 transition duration-300 hover:text-white">
                        Home
                    </a>

                    <a href="#about" className="text-sm text-gray-400 transition duration-300 hover:text-white">
                        About
                    </a>

                    <a href="#skills" className="text-sm text-gray-400 transition duration-300 hover:text-white">
                        Skills
                    </a>

                    <a href="#projects" className="text-sm text-gray-400 transition duration-300 hover:text-white">
                        Projects
                    </a>

                    <a href="#contact" className="text-sm text-gray-400 transition duration-300 hover:text-white">
                        Contact
                    </a>

                    <a
                        href="https://instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-md bg-purple-600 px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:scale-105 hover:bg-purple-700"
                    >
                        Follow Me
                        <FaInstagram size={19} color="#E1306C" />
                    </a>

                </div>

                {/* MOBILE MENU BUTTON */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="rounded-lg border border-white/10 bg-white/5 p-2 text-white transition duration-300 hover:bg-white/10 md:hidden"
                    aria-label="Toggle navigation menu"
                >
                    {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>

            </div>

            {/* FLOATING MOBILE MENU */}
            <div
                className={`absolute right-6 top-full mt-3 w-56 origin-top-right rounded-2xl border border-white/10 bg-[#020817]/90 p-3 shadow-2xl backdrop-blur-xl transition-all duration-300 md:hidden ${
                    menuOpen
                        ? "translate-y-0 scale-100 opacity-100"
                        : "pointer-events-none -translate-y-2 scale-95 opacity-0"
                }`}
            >

                <div className="flex flex-col gap-1">

                    <a
                        href="#home"
                        onClick={closeMenu}
                        className="rounded-xl px-4 py-3 text-sm text-gray-300 transition duration-200 hover:bg-white/10 hover:text-white"
                    >
                        Home
                    </a>

                    <a
                        href="#about"
                        onClick={closeMenu}
                        className="rounded-xl px-4 py-3 text-sm text-gray-300 transition duration-200 hover:bg-white/10 hover:text-white"
                    >
                        About
                    </a>

                    <a
                        href="#skills"
                        onClick={closeMenu}
                        className="rounded-xl px-4 py-3 text-sm text-gray-300 transition duration-200 hover:bg-white/10 hover:text-white"
                    >
                        Skills
                    </a>

                    <a
                        href="#projects"
                        onClick={closeMenu}
                        className="rounded-xl px-4 py-3 text-sm text-gray-300 transition duration-200 hover:bg-white/10 hover:text-white"
                    >
                        Projects
                    </a>

                    <a
                        href="#contact"
                        onClick={closeMenu}
                        className="rounded-xl px-4 py-3 text-sm text-gray-300 transition duration-200 hover:bg-white/10 hover:text-white"
                    >
                        Contact
                    </a>

                    <a
                        href="https://instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMenu}
                        className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-4 py-3 text-sm font-medium text-white transition duration-300 hover:bg-purple-700"
                    >
                        Follow Me
                        <FaInstagram size={18} color="#E1306C" />
                    </a>

                </div>

            </div>

        </nav>
    );
}

export default Navbar;