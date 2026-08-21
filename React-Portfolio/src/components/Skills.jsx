import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
} from "react-icons/fa";

import {
    SiTailwindcss,
    SiExpress,
    SiMongodb,
} from "react-icons/si";

function Skills() {

    const frontendSkills = [
        {
            name: "HTML",
            icon: <FaHtml5 size={42} className="text-orange-500" />,
        },
        {
            name: "CSS",
            icon: <FaCss3Alt size={42} className="text-blue-500" />,
        },
        {
            name: "JavaScript",
            icon: <FaJs size={42} className="text-yellow-400" />,
        },
        {
            name: "React",
            icon: <FaReact size={42} className="text-cyan-400" />,
        },
        {
            name: "Tailwind CSS",
            icon: <SiTailwindcss size={42} className="text-cyan-400" />,
        },
    ];

    const backendSkills = [
        {
            name: "Node.js",
            icon: <FaNodeJs size={42} className="text-green-500" />,
        },
        {
            name: "Express.js",
            icon: <SiExpress size={42} className="text-white" />,
        },
        {
            name: "MongoDB",
            icon: <SiMongodb size={42} className="text-green-500" />,
        },
    ];

    return (
        <section
            id="skills"
            className="max-w-6xl mx-auto text-white py-15 px-6"
        >

            {/* SECTION TITLE */}
            <h1 className="inline-block rounded-md border border-purple-500/30 bg-purple-500/10 px-5 py-2 mb-10 text-sm font-semibold uppercase tracking-wider text-purple-400">
                Skills
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* FRONTEND */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:border-purple-500/30 hover:bg-white/[0.07]">

                    <h2 className="mb-6 text-2xl font-semibold text-purple-400">
                        Frontend
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">

                        {frontendSkills.map((skill) => (
                            <div
                                key={skill.name}
                                className="group flex flex-col items-center justify-center gap-3 rounded-xl border border-white/10 bg-black/20 p-5 transition duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-white/10"
                            >

                                {/* ICON */}
                                <div className="transition duration-300 group-hover:scale-110">
                                    {skill.icon}
                                </div>

                                {/* NAME */}
                                <span className="text-center text-sm font-medium text-gray-300 transition duration-300 group-hover:text-white">
                                    {skill.name}
                                </span>

                            </div>
                        ))}

                    </div>
                </div>


                {/* BACKEND */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:border-purple-500/30 hover:bg-white/[0.07]">

                    <h2 className="mb-6 text-2xl font-semibold text-purple-400">
                        Backend
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">

                        {backendSkills.map((skill) => (
                            <div
                                key={skill.name}
                                className="group flex flex-col items-center justify-center gap-3 rounded-xl border border-white/10 bg-black/20 p-5 transition duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-white/10"
                            >

                                {/* ICON */}
                                <div className="transition duration-300 group-hover:scale-110">
                                    {skill.icon}
                                </div>

                                {/* NAME */}
                                <span className="text-center text-sm font-medium text-gray-300 transition duration-300 group-hover:text-white">
                                    {skill.name}
                                </span>

                            </div>
                        ))}

                    </div>
                </div>

            </div>

        </section>
    );
}

export default Skills;