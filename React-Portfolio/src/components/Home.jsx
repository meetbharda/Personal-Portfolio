
import Profile from "../assets/Profile.jpg"
import { FaReact, FaHtml5, FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";


function Home() {
    return (
        <main id="home" className=" bg-[#020617] px-6 text-white pt-5">
            <div className="mx-auto flex flex-col md:flex-row min-h-screen max-w-6xl items-center gap-12">

                {/* LEFT */}
                <div className="flex flex-col flex-1 justify-center items-center gap-7">
                    <div className="relative animate-float h-72 w-72 md:h-80 md:w-80">

                        {/* Glow */}
                        <div className="absolute inset-0 scale-110 rounded-full bg-purple-600/20 blur-3xl"></div>

                        {/* Gradient Border */}
                        <div className="relative h-full w-full rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-purple-600 p-1">

                            {/* Image Container */}
                            <div className="h-full w-full  overflow-hidden rounded-full border-4 border-[#020617]">
                                <img
                                    src={Profile}
                                    alt="Meet Bharda"
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>

                        </div>
                    </div>
                    {/* ICONS */}
                    <div className="mt-6 flex gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:bg-white/10">
                            <FaHtml5 size={28} color="#E34F26" />
                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:bg-white/10">
                            <FaCss3 size={28} color="#1572B6" />
                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:bg-white/10">
                            <IoLogoJavascript size={28} color="#F7DF1E" />
                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:bg-white/10">
                            <FaReact size={28} color="#61DAFB" />
                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:bg-white/10">
                            <FaNodeJs size={28} color="#339933" />
                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:bg-white/10">
                            <SiExpress size={28} color="#339933" />
                        </div>
                    </div>
                </div>


                {/* RIGHT */}
                <div className="flex-1 text-left">

                    <p className="mb-3 text-lg font-medium text-white">
                        Hey, I'm
                    </p>

                    <TypeAnimation
                        sequence={["Meet Bharda"]}
                        speed={10}
                        repeat={0}
                        wrapper="h1"
                        className="text-5xl font-bold tracking-tight bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent md:text-6xl"
                    />

                    <TypeAnimation
                        sequence={[
                            "Software Engineer",
                            4000,
                            "Full Stack Developer",
                            4000,
                        ]}
                        wrapper="h2"
                        speed={7}
                        repeat={Infinity}
                        className="mt-3 text-2xl font-semibold text-gray-300 md:text-3xl"
                    />

                    <p className="mt-5 max-w-xl text-base leading-7 text-gray-400 md:text-lg">
                        I build modern, responsive and user-friendly web applications
                        with React and JavaScript. I enjoy turning ideas into clean,
                        functional digital experiences while continuously improving
                        my development skills.
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex items-center gap-4">

                        <a
                            href="#projects"
                            className="rounded-lg bg-purple-600 px-6 py-3 font-medium text-white transition duration-300 hover:scale-105 hover:bg-purple-700"
                        >
                            View Projects
                        </a>

                        <a
                            href="#contact"
                            className="rounded-lg border border-purple-500 px-6 py-3 font-medium text-purple-400 transition duration-300 hover:bg-purple-500 hover:text-white"
                        >
                            Contact Me
                        </a>

                    </div>

                </div>

            </div>
        </main>
    )
}

export default Home