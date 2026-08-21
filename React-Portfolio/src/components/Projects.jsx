import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Rock from "../assets/Rock_Paper_Scissor.png";
import Weather from "../assets/Weather.png"
import todo from "../assets/todo.png"

function Projects() {

    const projects = [
        {
            image: todo,
            name: "Todo List",
            description:
                "A simple Todo List app built with React using `useContext` for state management. Users can add, edit, delete, and manage their tasks.",
            technologies: ["Tailwind","React"],
            githubLink: "https://github.com/meetbharda/todo-list",
            liveLink: null,
        },
        {
            image: Rock,
            name: "Rock Paper Scissor",
            description:
                "A simple and interactive browser-based game where users can play Rock Paper Scissors against the computer with instant results and a clean, responsive interface.",
            technologies: ["HTML", "CSS", "JavaScript"],
            githubLink: null,
            liveLink: null,
        },
        {
            image: Weather,
            name: "Weather App",
            description:
                "A responsive weather application that uses a weather API to fetch and display real-time weather information for any city.",
            technologies: ["HTML", "CSS", "JavaScript"],
            githubLink: null,
            liveLink: null,
        },
    ];

    return (
        <section
            id="projects"
            className="max-w-6xl mx-auto text-white py-20 px-6"
        >
            {/* SECTION TITLE */}
            <h1 className="inline-block rounded-md border border-purple-500/30 bg-purple-500/10 px-5 py-2 mb-10 text-sm font-semibold uppercase tracking-wider text-purple-400">
                Projects
            </h1>

            {/* PROJECTS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {projects.map((project) => (
                    <div
                        key={project.name}
                        className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:bg-white/[0.07]"
                    >

                        {/* PROJECT IMAGE */}
                        <div className="overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.name}
                                className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                            />
                        </div>

                        {/* PROJECT CONTENT */}
                        <div className="p-6">

                            {/* PROJECT NAME */}
                            <h2 className="text-2xl font-semibold text-white">
                                {project.name}
                            </h2>

                            {/* DESCRIPTION */}
                            <p className="mt-3 text-sm leading-6 text-gray-400">
                                {project.description}
                            </p>

                            {/* TECHNOLOGIES */}
                            <div className="mt-5 flex flex-wrap gap-2">
                                {project.technologies.map((technology) => (
                                    <span
                                        key={technology}
                                        className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300"
                                    >
                                        {technology}
                                    </span>
                                ))}
                            </div>

                            {/* BUTTONS */}
                            <div className="mt-6 flex flex-wrap gap-3">

                                {/* SOURCE CODE */}
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-gray-300 transition duration-300 hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-white"
                                >
                                    <FaGithub size={18} />
                                    Source Code
                                </a>

                                {/* LIVE DEMO */}
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-lg bg-purple-500 px-4 py-2.5 text-sm font-medium text-white transition duration-300 hover:bg-purple-600"
                                >
                                    <FiExternalLink size={17} />
                                    Live Demo
                                </a>

                            </div>

                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}

export default Projects;