import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FiSend, FiArrowUpRight } from "react-icons/fi";
import { useState } from "react";

function Contact() {

    const [submitted, setSubmitted] = useState(false);

    const contacts = [
        {
            icon: FaEnvelope,
            name: "Email",
            value: "240130107065@gecg28.ac.in",
            link: "mailto:240130107065@gecg28.ac.in",
            color: "#EA4335",
        },
        {
            icon: FaGithub,
            name: "GitHub",
            value: "github.com/yourusername",
            link: "https://github.com/meetbharda",
            color: "#ffffff",
        },
        {
            icon: FaLinkedin,
            name: "LinkedIn",
            value: "linkedin.com/in/gecgce2024meet",
            link: "https://www.linkedin.com/in/gecgce2024meet",
            color: "#0A66C2",
        },
        {
            icon: FaInstagram,
            name: "Instagram",
            value: "meet_bharda_7",
            link: "https://instagram.com/meet_bharda_7",
            color: "#E1306C",
        },
    ];

    return (
        <section
            id="contact"
            className="relative mx-auto max-w-6xl overflow-hidden px-6 py-20 text-white"
        >

            {/* BACKGROUND GLOW */}
            <div className="pointer-events-none absolute -left-32 top-40 h-72 w-72 rounded-full bg-purple-600/10 blur-3xl"></div>

            <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>


            {/* SECTION TITLE */}
            <div className="relative mb-12">
                <h1 className="inline-block rounded-md border border-purple-500/30 bg-purple-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-purple-400">
                    Contact Me
                </h1>

                <h2 className="mt-5 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
                    Let's build something{" "}
                    <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        amazing together.
                    </span>
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-gray-400">
                    Have a project idea, question, or just want to connect?
                    Feel free to reach out. I'm always open to new ideas and
                    opportunities.
                </p>
            </div>


            {/* MAIN CONTACT AREA */}
            <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2">


                {/* LEFT — CONTACT HUB */}
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl md:p-8">

                    {/* CARD GLOW */}
                    <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-purple-600/10 blur-3xl"></div>

                    <div className="relative">

                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm uppercase tracking-wider text-purple-400">
                                    Let's Connect
                                </p>

                                <h3 className="mt-2 text-2xl font-semibold text-white">
                                    Find me online
                                </h3>
                            </div>

                            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-400">
                                <FiArrowUpRight size={20} />
                            </div>
                        </div>


                        {/* CONTACT CARDS */}
                        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">

                            {contacts.map((contact) => {

                                const Icon = contact.icon;

                                return (
                                    <a
                                        key={contact.name}
                                        href={contact.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-white/[0.07]"
                                    >

                                        {/* HOVER GLOW */}
                                        <div
                                            className="absolute -right-8 -top-8 h-20 w-20 rounded-full opacity-0 blur-2xl transition duration-300 group-hover:opacity-40"
                                            style={{
                                                backgroundColor: contact.color,
                                            }}
                                        ></div>


                                        <div className="relative flex items-center gap-4">

                                            {/* ICON */}
                                            <div
                                                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#020817] transition duration-300 group-hover:scale-110"
                                                style={{
                                                    color: contact.color,
                                                }}
                                            >
                                                <Icon size={21} />
                                            </div>


                                            {/* TEXT */}
                                            <div className="min-w-0">

                                                <h4 className="font-medium text-white">
                                                    {contact.name}
                                                </h4>

                                                <p className="mt-1 truncate text-sm text-gray-500 transition duration-300 group-hover:text-gray-300">
                                                    {contact.value}
                                                </p>

                                            </div>

                                        </div>

                                    </a>
                                );
                            })}

                        </div>


                        {/* AVAILABILITY */}
                        <div className="mt-8 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">

                            <span className="relative flex h-3 w-3">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60"></span>

                                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400"></span>
                            </span>

                            <p className="text-sm text-gray-400">
                                Open to new opportunities and collaborations
                            </p>

                        </div>

                    </div>
                </div>


                {/* RIGHT — CONTACT FORM */}
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl md:p-8">

                    {/* FORM GLOW */}
                    <div className="pointer-events-none absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl"></div>

                    <div className="relative">

                        <p className="text-sm uppercase tracking-wider text-purple-400">
                            Get in touch
                        </p>

                        <h3 className="mt-2 text-2xl font-semibold text-white">
                            Send a Message
                        </h3>


                        <form
                            className="mt-8 space-y-5"
                            onSubmit={(e) => {
                                e.preventDefault();
                                setSubmitted(true);
                            }}
                        >

                            {/* NAME */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-300">
                                    Your Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full rounded-xl border border-white/10 bg-[#020817]/70 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 transition duration-300 focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/10"
                                />
                            </div>


                            {/* EMAIL */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-300">
                                    Your Email
                                </label>

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full rounded-xl border border-white/10 bg-[#020817]/70 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 transition duration-300 focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/10"
                                />
                            </div>


                            {/* MESSAGE */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-300">
                                    Your Message
                                </label>

                                <textarea
                                    rows="5"
                                    placeholder="Tell me about your project..."
                                    className="w-full resize-none rounded-xl border border-white/10 bg-[#020817]/70 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 transition duration-300 focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/10"
                                ></textarea>
                            </div>


                            {/* SEND BUTTON */}
                            <button
                                type="submit"
                                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20"
                            >
                                Send Message

                                <FiSend
                                    size={17}
                                    className="transition duration-300 group-hover:translate-x-1"
                                />
                            </button>

                            {submitted && (
                                <p className="mt-4 text-center text-sm font-medium text-green-400">
                                    ✅ Message sent successfully!
                                </p>
                            )}

                        </form>

                    </div>
                </div>

            </div>

        </section>
    );
}

export default Contact;