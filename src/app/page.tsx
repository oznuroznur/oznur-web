import { Download, ExternalLink, Mail, Github, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-mono">
      {/* Header */}
      <header className="border-b-4 border-green-400 p-4 md:p-6">
        <div className="max-w-6xl mx-auto">
          <div className="border-2 border-white p-3 md:p-4 mb-4">
            <h1 className="text-2xl md:text-4xl font-bold mb-2">OZNUR OZNUR</h1>
            <p className="text-base md:text-xl text-green-400">
              SOFTWARE DEVELOPER
            </p>
          </div>
          <nav className="flex flex-col sm:flex-row gap-3 md:gap-6">
            <a
              href="#about"
              className="border-2 border-white px-3 py-2 md:px-4 md:py-2 hover:bg-white hover:text-black transition-none text-center text-sm md:text-base"
            >
              [ABOUT]
            </a>
            <a
              href="#projects"
              className="border-2 border-white px-3 py-2 md:px-4 md:py-2 hover:bg-white hover:text-black transition-none text-center text-sm md:text-base"
            >
              [PROJECTS]
            </a>
            <a
              href="#resume"
              className="border-2 border-white px-3 py-2 md:px-4 md:py-2 hover:bg-white hover:text-black transition-none text-center text-sm md:text-base"
            >
              [RESUME]
            </a>
            <a
              href="#contact"
              className="border-2 border-white px-3 py-2 md:px-4 md:py-2 hover:bg-white hover:text-black transition-none text-center text-sm md:text-base"
            >
              [CONTACT]
            </a>
          </nav>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="border-b-4 border-green-400 p-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-white pb-2">
            ABOUT_ME.TXT
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="border-2 border-white p-6">
              <h3 className="text-xl font-bold mb-4 text-green-400">
                DESCRIPTION:
              </h3>
              <p className="mb-4 leading-relaxed">
                I&apos;m a software developer with hands-on experience building
                fullstack applications from scratch, with a strong focus on
                backend systems and architectural design. Proficient in
                technologies like Express.js ,PostgreSQL,Prisma,and React
                Native,and familiar with DevOps practices such as NGINX
                configuration and server setup. Currently seeking
                backend-focused opportunities after independently developing B2C
                products across both mobile and web platforms.
              </p>
              <p className="mb-4 leading-relaxed">
                I’ve independently built and deployed cross-platform products
                using technologies like <b>Express.js</b>, <b>PostgreSQL</b>,{" "}
                <b>Prisma</b>, and <b>React Native (Expo)</b>, and I’m
                comfortable working with <b>NGINX</b>, <b>PM2</b>, and{" "}
                <b>SSL</b> for server-side deployment. Currently seeking
                backend-oriented opportunities after developing multiple B2C
                products across mobile and web.
              </p>
              <p className="mb-4 leading-relaxed">
                Experienced with tools like <b>Next.js</b>,{" "}
                <b>TanStack Query</b>, <b>Redis</b>, <b>Jira</b>, and{" "}
                <b>Postman</b>. I&apos;ve also contributed to enterprise-level{" "}
                <b>.NET MVC</b> systems — analyzing and debugging backend flows,
                implementing backend-side fixes, and enhancing legacy frontend
                modules within a high-traffic e-commerce platform.
              </p>
              <p className="mb-4 leading-relaxed">
                I care deeply about maintainable code, well-thought
                architecture, and systems that actually work — not just ones
                that look good in theory.
              </p>
            </div>
            <div className="border-2 border-white p-6">
              <h3 className="text-xl font-bold mb-4 text-green-400">
                SKILLS.JSON:
              </h3>
              <pre className="text-sm leading-relaxed">
                {`{
    "languages": [
        "TypeScript", "JavaScript", "C#",
        "Python", "SQL"
      ],
    "frameworks": [
        "Express.js", "Next.js", "Expo",
        ".Net MVC"
      ],
    "databases": [
        "PostgreSQL", "Redis", "MongoDB",
      ],
    "infrastructure": [
        "NGINX", "PM2", "SSL", "VDS"
      ],
    "tools": [
        "Git", "Postman", "Jira",
        "TanStackQuery","Figma",
        "Tag Manager"
      ]
    }`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="border-b-4 border-green-400 p-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-white pb-2">
            PROJECTS.DIR
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Project 1 */}
            <div className="border-2 border-white">
              <div className="border-b-2 border-white p-4 bg-green-400 text-black">
                <h3 className="text-xl font-bold">DISTRIBUTED_CACHE_SYSTEM</h3>
              </div>
              <div className="p-6">
                <Image
                  width={100}
                  height={100}
                  src="/placeholder.svg?height=200&width=400"
                  alt="Distributed Cache System Architecture"
                  className="w-full h-48 object-cover border-2 border-white mb-4"
                />
                <p className="mb-4">
                  High-performance distributed caching system handling 100K+
                  requests/second. Built for horizontal scaling with consistent
                  hashing.
                </p>
                <div className="mb-4">
                  <span className="text-green-400 font-bold">STACK:</span>
                  <code className="ml-2">Go, Redis, Docker, Kubernetes</code>
                </div>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="border-2 border-white px-3 py-1 hover:bg-white hover:text-black flex items-center gap-2"
                  >
                    <Github size={16} />
                    CODE
                  </a>
                  <a
                    href="#"
                    className="border-2 border-white px-3 py-1 hover:bg-white hover:text-black flex items-center gap-2"
                  >
                    <ExternalLink size={16} />
                    DEMO
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="border-2 border-white">
              <div className="border-b-2 border-white p-4 bg-green-400 text-black">
                <h3 className="text-xl font-bold">API_GATEWAY_SERVICE</h3>
              </div>
              <div className="p-6">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="API Gateway Dashboard"
                  className="w-full h-48 object-cover border-2 border-white mb-4"
                />
                <p className="mb-4">
                  Custom API gateway with rate limiting, authentication, and
                  request routing. Reduced latency by 40% compared to existing
                  solutions.
                </p>
                <div className="mb-4">
                  <span className="text-green-400 font-bold">STACK:</span>
                  <code className="ml-2">
                    Python, FastAPI, PostgreSQL, Redis
                  </code>
                </div>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="border-2 border-white px-3 py-1 hover:bg-white hover:text-black flex items-center gap-2"
                  >
                    <Github size={16} />
                    CODE
                  </a>
                  <a
                    href="#"
                    className="border-2 border-white px-3 py-1 hover:bg-white hover:text-black flex items-center gap-2"
                  >
                    <ExternalLink size={16} />
                    DOCS
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="border-2 border-white">
              <div className="border-b-2 border-white p-4 bg-green-400 text-black">
                <h3 className="text-xl font-bold">REAL_TIME_ANALYTICS</h3>
              </div>
              <div className="p-6">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Analytics Dashboard"
                  className="w-full h-48 object-cover border-2 border-white mb-4"
                />
                <p className="mb-4">
                  Real-time data processing pipeline for analytics. Processes
                  millions of events per day with sub-second latency.
                </p>
                <div className="mb-4">
                  <span className="text-green-400 font-bold">STACK:</span>
                  <code className="ml-2">
                    Rust, Apache Kafka, ClickHouse, Docker
                  </code>
                </div>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="border-2 border-white px-3 py-1 hover:bg-white hover:text-black flex items-center gap-2"
                  >
                    <Github size={16} />
                    CODE
                  </a>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="border-2 border-white">
              <div className="border-b-2 border-white p-4 bg-green-400 text-black">
                <h3 className="text-xl font-bold">CLI_DEPLOYMENT_TOOL</h3>
              </div>
              <div className="p-6">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="CLI Tool Terminal"
                  className="w-full h-48 object-cover border-2 border-white mb-4"
                />
                <p className="mb-4">
                  Command-line deployment tool for containerized applications.
                  Zero-downtime deployments with automatic rollback
                  capabilities.
                </p>
                <div className="mb-4">
                  <span className="text-green-400 font-bold">STACK:</span>
                  <code className="ml-2">
                    Go, Docker, Kubernetes API, Cobra CLI
                  </code>
                </div>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="border-2 border-white px-3 py-1 hover:bg-white hover:text-black flex items-center gap-2"
                  >
                    <Github size={16} />
                    CODE
                  </a>
                  <a
                    href="#"
                    className="border-2 border-white px-3 py-1 hover:bg-white hover:text-black flex items-center gap-2"
                  >
                    <ExternalLink size={16} />
                    INSTALL
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="border-b-4 border-green-400 p-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-white pb-2">
            RESUME.PDF
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 border-2 border-white p-6">
              <h3 className="text-xl font-bold mb-4 text-green-400">
                EXPERIENCE:
              </h3>

              <div className="mb-6">
                <h4 className="font-bold">SOFTWARE DEVELOPER</h4>
                <p className="text-green-400">
                  Vatan Computer | 2025 - Present
                </p>
                <ul className="mt-2 space-y-1">
                  <li>
                    • Gained hands-on experience in .NET MVC architecture ,
                    contributing to backend improvements by debugging
                    controller-service-model flows and fixing logic-level
                    issues.
                  </li>
                  <li>
                    • Delivered key features including the PC Build Wizard ,
                    product comparison drawer , AJAX filtering , and store
                    locator , while supporting core flows like login and
                    messaging.
                  </li>
                  <li>
                    • Migrated the entire frontend framework from Bootstrap 3 to
                    5 , and maintained legacy modules using jQuery , SCSS , and
                    JavaScript .
                  </li>
                  <li>
                    • Built reusable utility functions and integrated Google Tag
                    Manager for user behavior tracking and analytics.
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-bold">SOFTWARE DEVELOPER </h4>
                <p className="text-green-400">
                  Ideon Information Technologies | 2023 - 2025
                </p>
                <ul className="mt-2 space-y-1">
                  <li>
                    • Implemented real-time communication features using
                    WebSocket and collaborated on API integration, debugging
                    backend-related logic and contributing to data structure
                    decisions.
                  </li>
                  <li>
                    • Developed mobile applications using React Native and Expo
                    and built web interfaces with Next.js, TanStack Query, and
                    Tailwind CSS, delivering responsive and user-focused UIs.
                  </li>
                  <li>
                    • Worked within agile teams to deliver production-ready
                    mobile and web solutions with an emphasis on scalability and
                    maintainability.
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-bold">INTERN ENGINEER</h4>
                <p className="text-green-400">
                  Mebant Insulation and Tape Industry INC. | 2022 - 2023
                </p>
                <ul className="mt-2 space-y-1">
                  <li>
                    • Contributed to an internal .NET-based admin panel project
                    with teammates.
                  </li>
                </ul>
              </div>
              <div className="mb-6">
                <h4 className="font-bold">INTERN ENGINEER</h4>
                <p className="text-green-400">
                  Eskisehir Industrial Zone Directorate | 2021 - 2022
                </p>
                <ul className="mt-2 space-y-1">
                  <li>
                    • Gained experience in SQL Server through data normalization
                    tasks.
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-2 border-white p-6">
              <h3 className="text-xl font-bold mb-4 text-green-400">
                EDUCATION:
              </h3>
              <div className="mb-4">
                <h4 className="font-bold">B.S. SOFTWARE ENGINEERING </h4>
                <p className="text-green-400">Uskudar University | 2023</p>

                <p>
                  * 75% Scholarship.
                  <br />* GPA: 3,25 <br /> * 100% English <br /> * (PEIC) - C1
                </p>
              </div>
              <h3 className="text-xl font-bold mb-4 text-green-400 mt-6">
                GPA: 3.25
              </h3>
              <div className="mb-4">
                <h4 className="font-bold">
                  B.S. Management Information Systems
                </h4>
                <p className="text-green-400">Anadolu University | 2023</p>
              </div>
              <h3 className="text-xl font-bold mb-4 text-green-400 mt-6">
                GPA: 3.67
              </h3>

              <div className="mt-8">
                <a
                  href="/oznuroznur.pdf"
                  className="border-2 border-green-400 bg-green-400 text-black px-4 py-2 hover:bg-black hover:text-green-400 flex items-center gap-2 justify-center"
                >
                  <Download size={16} />
                  DOWNLOAD_RESUME.PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-white pb-2">
            CONTACT.SH
          </h2>
          <div className="border-2 border-white p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Mail size={48} className="mx-auto mb-4 text-green-400" />
                <h3 className="font-bold mb-2">EMAIL</h3>
                <a
                  href="mailto:oznuroznurr26@gmail.com"
                  className="border-2 border-white px-4 py-2 hover:bg-white hover:text-black inline-block"
                >
                  oznuroznurr26@gmail.com
                </a>
              </div>

              <div className="text-center">
                <Github size={48} className="mx-auto mb-4 text-green-400" />
                <h3 className="font-bold mb-2">GITHUB</h3>
                <a
                  href="https://github.com/oznuroznur"
                  className="border-2 border-white px-4 py-2 hover:bg-white hover:text-black inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/oznuroznur
                </a>
              </div>

              <div className="text-center">
                <Linkedin size={48} className="mx-auto mb-4 text-green-400" />
                <h3 className="font-bold mb-2">LINKEDIN</h3>
                <a
                  href="https://linkedin.com/in/oznuroznur"
                  className="border-2 border-white px-4 py-2 hover:bg-white hover:text-black inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/oznuroznur
                </a>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-green-400 font-bold">
                console.log(&quot;Let&apos;s build something that
                works.:)&quot;)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-green-400 p-6 text-center">
        <p className="text-green-400">© 2025 OZNUR OZNUR</p>
      </footer>
    </div>
  );
}
