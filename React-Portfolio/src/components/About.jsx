import { FaGraduationCap, FaLaptopCode, FaRocket } from "react-icons/fa";

function About() {
    return (
        <section id='about' className="max-w-6xl mx-auto text-white py-20 px-6">
            <h1 className="inline-block rounded-md border border-purple-500/30 bg-purple-500/10 px-5 py-2 mb-10 text-sm font-semibold uppercase tracking-wider text-purple-400">
                About Me
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                {/* LEFT */}
                <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-purple-400">
                        Who I Am
                    </h2>

                    <p className="mt-5 text-base leading-7 text-gray-400 md:text-lg">
                        I'm a passionate developer who enjoys building modern and
                        user-friendly web applications. I like turning ideas into
                        real-world projects and continuously improving my problem-solving
                        and development skills.
                    </p>

                    <p className="mt-4 text-base leading-7 text-gray-400 md:text-lg">
                        I'm currently focused on strengthening my skills in React,
                        JavaScript and the MERN stack while exploring backend development
                        and software engineering concepts.
                    </p>

                    <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400"></div>
                </div>

                {/* RIGHT */}
                <div className="flex-1">
                    <h2 className="mb-5 text-2xl font-semibold text-white">
                        Quick Info
                    </h2>

                    <div className="flex flex-col gap-4">

                        <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition duration-300 hover:-translate-y-1 hover:bg-white/10">
                            <FaGraduationCap size={28} className="text-purple-400" />

                            <div>
                                <h3 className="font-medium text-white">
                                    Education
                                </h3>
                                <p className="mt-1 text-gray-400">
                                    Computer Science Student
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition duration-300 hover:-translate-y-1 hover:bg-white/10">
                            <FaLaptopCode size={28} className="text-purple-400" />

                            <div>
                                <h3 className="font-medium text-white">
                                    Current Focus
                                </h3>
                                <p className="mt-1 text-gray-400">
                                    MERN Stack Development
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition duration-300 hover:-translate-y-1 hover:bg-white/10">
                            <FaRocket size={28} className="text-purple-400" />

                            <div>
                                <h3 className="font-medium text-white">
                                    Goal
                                </h3>
                                <p className="mt-1 text-gray-400">
                                    Build impactful software
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
