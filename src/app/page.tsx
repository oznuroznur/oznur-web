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
            {/* CoffeeNEst */}
            <div className="border-2 border-white">
              <div className="border-b-2 border-white p-4 bg-green-400 text-black">
                <h3 className="text-xl font-bold">COFFEE_NEST</h3>
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
                  B2C café review platform built end-to-end. Includes database
                  design, API docs, mobile app & web landing.
                </p>
                <div className="mb-4">
                  <span className="text-green-400 font-bold">STACK:</span>
                  <code className="ml-2">
                    Express.js, PostgreSQL, Prisma, PM2, NGINX, SSL, React
                    Native (Expo), Next.js, Firebase, Sentry
                  </code>
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/oznuroznur/CoffeeNest_Landing_Page"
                    className="border-2 border-white px-3 py-1 hover:bg-white hover:text-black flex items-center gap-2"
                  >
                    <Github size={16} />
                    CODE
                  </a>
                  <a
                    href="http://coffeenest.oznuroznur.com"
                    className="border-2 border-white px-3 py-1 hover:bg-white hover:text-black flex items-center gap-2"
                  >
                    <ExternalLink size={16} />
                    SEE
                  </a>
                </div>
              </div>
            </div>

            {/* Mixograph aı */}
            <div className="border-2 border-white">
              <div className="border-b-2 border-white p-4 bg-green-400 text-black">
                <h3 className="text-xl font-bold">MIXOGRAPH_AI</h3>
              </div>
              <div className="p-6">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="API Gateway Dashboard"
                  className="w-full h-48 object-cover border-2 border-white mb-4"
                />
                <p className="mb-4">
                  Smart cocktail assistant with AI features. AI-based
                  suggestions, web scraping, and automated recipe syncing.
                </p>
                <div className="mb-4">
                  <span className="text-green-400 font-bold">STACK:</span>
                  <code className="ml-2">
                    Express.js, PostgreSQL, Prisma, React Native (Expo), n8n,
                    Firebase
                  </code>
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/oznuroznur/Mixograph_Landing_Page"
                    className="border-2 border-white px-3 py-1 hover:bg-white hover:text-black flex items-center gap-2"
                  >
                    <Github size={16} />
                    CODE
                  </a>
                  <a
                    href="http://mixograph.oznuroznur.com"
                    className="border-2 border-white px-3 py-1 hover:bg-white hover:text-black flex items-center gap-2"
                  >
                    <ExternalLink size={16} />
                    SEE
                  </a>
                </div>
              </div>
            </div>

            {/* Vatan Bilgisayar */}
            <div className="border-2 border-white">
              <div className="border-b-2 border-white p-4 bg-green-400 text-black">
                <h3 className="text-xl font-bold">VATAN_BILGISAYAR_WEBSITE</h3>
              </div>
              <div className="p-6">
                <Image
                  width={800}
                  height={400}
                  src="/projects/vatan.png" // TODO: gerçek görsel
                  alt="Vatan Bilgisayar e-commerce platformu"
                  className="w-full h-48 object-cover border-2 border-white mb-4"
                />
                <p className="mb-4">
                  High-traffic e-commerce site. Contributed to backend logic
                  improvements and full frontend migration.
                </p>
                <div className="mb-4">
                  <span className="text-green-400 font-bold">STACK:</span>
                  <code className="ml-2">
                    .NET MVC, PostgreSQL, PM2, NGINX, SSL, Bootstrap 5, jQuery,
                    SCSS
                  </code>
                </div>
              </div>
            </div>

            {/* Foofion */}
            <div className="border-2 border-white">
              <div className="border-b-2 border-white p-4 bg-green-400 text-black">
                <h3 className="text-xl font-bold">FOODION</h3>
              </div>
              <div className="p-6">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Analytics Dashboard"
                  className="w-full h-48 object-cover border-2 border-white mb-4"
                />
                <p className="mb-4">
                  AI-powered nutrition & recipe app. OCR scans fridge
                  ingredients, AI suggests recipes & diet plans.
                </p>
                <div className="mb-4">
                  <span className="text-green-400 font-bold">STACK:</span>
                  <code className="ml-2">
                    Node.js, PostgreSQL, pytesseract, PM2, NGINX, SSL, React
                    Native (Expo), n8n, Clerk, Sentry
                  </code>
                </div>
              </div>
            </div>

            {/* RC  CS*/}
            <div className="border-2 border-white">
              <div className="border-b-2 border-white p-4 bg-green-400 text-black">
                <h3 className="text-xl font-bold">ROYALCERT_SEARCH_PLATFORM</h3>
              </div>
              <div className="p-6">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="CLI Tool Terminal"
                  className="w-full h-48 object-cover border-2 border-white mb-4"
                />
                <p className="mb-4">
                  Custom certification search system with admin panel,
                  integrated into Royalcert’s official website.
                </p>
                <div className="mb-4">
                  <span className="text-green-400 font-bold">STACK:</span>
                  <code className="ml-2">
                    FastAPI, PostgreSQL, PM2, NGINX, SSL, Next.js
                  </code>
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/olbition/CS-by-oznur"
                    className="border-2 border-white px-3 py-1 hover:bg-white hover:text-black flex items-center gap-2"
                  >
                    <Github size={16} />
                    CODE
                  </a>
                  <a
                    href="/https://certification.royalcert.com/"
                    className="border-2 border-white px-3 py-1 hover:bg-white hover:text-black flex items-center gap-2"
                  >
                    <ExternalLink size={16} />
                    SEE
                  </a>
                </div>
              </div>
            </div>

            {/* Nyon */}
            <div className="border-2 border-white">
              <div className="border-b-2 border-white p-4 bg-green-400 text-black">
                <h3 className="text-xl font-bold">NYON</h3>
              </div>
              <div className="p-6">
                <p className="mb-4">
                  Peer-to-peer car rental app with socket-based messaging and
                  offer management.
                </p>
                <div className="mb-4">
                  <span className="text-green-400 font-bold">STACK:</span>
                  <code className="ml-2">
                    Node.js, WebSocket, PostgreSQL, React Native (Expo), Sentry
                  </code>
                </div>
              </div>
            </div>

            {/* CALL_CENTER_CRM */}
            <div className="border-2 border-white">
              <div className="border-b-2 border-white p-4 bg-green-400 text-black">
                <h3 className="text-xl font-bold">CALL_CENTER_CRM</h3>
              </div>
              <div className="p-6">
                <Image
                  width={800}
                  height={400}
                  src="/projects/callcenter_crm.png"
                  alt="Call Center CRM panel with hotel intake and roles"
                  className="w-full h-48 object-cover border-2 border-white mb-4"
                />
                <p className="mb-4">
                  Multi-role operations panel for call center, hotels, admins,
                  and external consultants. Pulls TGA hotel listings via n8n
                  into a unified table. Users add role-scoped notes per hotel,
                  manage pre-audit documentation, and run a proposal → approval
                  workflow before hand-off to the Audit system.
                </p>

                <ul className="list-disc ml-5 mb-4 text-sm leading-relaxed">
                  <li>
                    <b>RBAC:</b> call-center agent, hotel, admin, external
                    consultant — scoped permissions and views.
                  </li>
                  <li>
                    <b>Data sync:</b> n8n integration fetches TGA hotel list on
                    schedule; normalized into PostgreSQL.
                  </li>
                  <li>
                    <b>Hotel dossier:</b> required documents collected; hotels
                    can log in and upload; consultants can update on behalf.
                  </li>
                  <li>
                    <b>Proposals:</b> email offer sent from panel; if accepted,
                    signed contract is recorded and the hotel is queued for
                    audit.
                  </li>
                  <li>
                    <b>Activity & notes:</b> per-hotel timelines, filters by
                    role/status, audit readiness flags.
                  </li>
                  <li>
                    <b>Observability:</b> Sentry for error tracking; Clarity for
                    UX insights.
                  </li>
                </ul>

                <div className="mb-4">
                  <span className="text-green-400 font-bold">STACK:</span>
                  <code className="ml-2">
                    Node.js, PostgreSQL, Prisma, Next.js, NextAuth, n8n, Sentry,
                    Clarity
                  </code>
                </div>
              </div>
            </div>

            {/* GSTC_AUDIT_PLATFORM */}
            <div className="border-2 border-white">
              <div className="border-b-2 border-white p-4 bg-green-400 text-black">
                <h3 className="text-xl font-bold">GSTC_AUDIT_PLATFORM</h3>
              </div>
              <div className="p-6">
                <Image
                  width={800}
                  height={400}
                  src="/projects/gstc_audit.png" 
                  alt="GSTC audit scheduling, forms, e-signature, and reporting"
                  className="w-full h-48 object-cover border-2 border-white mb-4"
                />
                <p className="mb-4">
                  End-to-end audit management: assignment, scheduling, on-site
                  execution, evidence capture, e-signatures, PDF export, and
                  non-conformity reporting. Hotels accepted from the CRM queue
                  wait for auditor assignment; auditors confirm audits on their
                  calendar and proceed with a versioned form.
                </p>

                <ul className="list-disc ml-5 mb-4 text-sm leading-relaxed">
                  <li>
                    <b>Intake → assignment:</b> items arriving from CRM; auditor
                    assignment with accept/decline workflow.
                  </li>
                  <li>
                    <b>Calendar:</b> auditor calendar view; conflicts and
                    overlaps flagged before confirmation.
                  </li>
                  <li>
                    <b>Audit form:</b> structured per-criterion form; evidence
                    uploads (photos/docs) per item.
                  </li>
                  <li>
                    <b>E-signature:</b> digital signing during/after inspection;
                    immutable record stored with audit.
                  </li>
                  <li>
                    <b>Reporting:</b> export finalized form to PDF;
                    auto-generate Non-Conformity Report when applicable.
                  </li>
                  <li>
                    <b>Expenses:</b> auditor expense form (travel,
                    accommodation, misc.); admin review & approval.
                  </li>
                  <li>
                    <b>Admin overview:</b> pipeline & progress tracking across
                    all audits; filters by status/auditor/hotel.
                  </li>
                  <li>
                    <b>Security & telemetry:</b> Clerk for auth; Sentry +
                    Clarity for monitoring and UX analysis.
                  </li>
                </ul>

                <div className="mb-4">
                  <span className="text-green-400 font-bold">STACK:</span>
                  <code className="ml-2">
                    Node.js, PostgreSQL, Prisma, Next.js, Clerk, Sentry, Clarity
                  </code>
                </div>
              </div>
            </div>

            {/* IORder Track */}
            <div className="border-2 border-white">
              <div className="border-b-2 border-white p-4 bg-green-400 text-black">
                <h3 className="text-xl font-bold">ORDER_TRACKING_APP</h3>
              </div>
              <div className="p-6">
                <Image
                  width={800}
                  height={400}
                  src="/projects/order_tracking.png"
                  alt="Order tracking and restaurant management system"
                  className="w-full h-48 object-cover border-2 border-white mb-4"
                />
                <p className="mb-4">
                  Restaurant management app with real-time table/order interface
                  and kitchen stock control.
                </p>
                <div className="mb-4">
                  <span className="text-green-400 font-bold">STACK:</span>
                  <code className="ml-2">
                    Express.js, PostgreSQL, PM2, NGINX, SSL, Next.js, React
                    Native (Expo)
                  </code>
                </div>
              </div>
            </div>

            {/* Hukukcun */}
            <div className="border-2 border-white">
              <div className="border-b-2 border-white p-4 bg-green-400 text-black">
                <h3 className="text-xl font-bold">HUKUKCUN</h3>
              </div>
              <div className="p-6">
                <p className="mb-4">
                  The first relief of Web & mobile platform connecting lawyers
                  and clients. Booking system, role-based UI, video calls.
                </p>
                <div className="mb-4">
                  <span className="text-green-400 font-bold">STACK:</span>
                  <code className="ml-2">
                    Node.js, PostgreSQL, Prisma, WebRTC, Next.js, React Native
                    (Expo), Sentry
                  </code>
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
                    • Gained hands-on experience in .NET MVC architecture by
                    debugging controller-service-model flows and fixing
                    logic-level issues.
                  </li>
                  <li>
                    • Delivered features like PC Build Wizard, product
                    comparison drawer, AJAX filtering, and store locator.
                  </li>
                  <li>
                    • Migrated frontend framework from Bootstrap 3 to 5,
                    maintained legacy modules (jQuery, SCSS, JS).
                  </li>
                  <li>
                    • Built reusable utilities and integrated Google Tag Manager
                    for analytics.
                  </li>
                </ul>
              </div>
              {/* Ideon */}
              <div className="mb-6">
                <h4 className="font-bold">SOFTWARE DEVELOPER </h4>
                <p className="text-green-400">
                  Ideon Information Technologies | 2023 - 2025
                </p>
                <ul className="mt-2 space-y-1">
                  <li>
                    • Implemented real-time features using WebSocket,
                    collaborated on API integration and backend debugging.
                  </li>
                  <li>
                    • Designed & developed AI-integrated mobile apps (e.g.,
                    Foodion) using React Native (Expo) and web UIs with Next.js,
                    TanStack Query, Tailwind CSS.
                  </li>
                  <li>
                    • Delivered scalable, production-ready mobile & web
                    solutions in agile teams.
                  </li>
                </ul>
              </div>

              {/* Mebant */}
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
              {/* Eskisehir Industrial Zone */}
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
                <h4 className="font-bold">B.S. SOFTWARE ENGINEERING</h4>
                <p className="text-green-400">Uskudar University | 2023</p>
                <p>
                  * 75% Scholarship
                  <br />* GPA: 3.25
                  <br />* 100% English
                  <br />* (PEIC) - C1
                </p>
              </div>

              <div className="mb-4 mt-6">
                <h4 className="font-bold">
                  B.S. MANAGEMENT INFORMATION SYSTEMS
                </h4>
                <p className="text-green-400">Anadolu University | 2026</p>
                <p>* GPA: 3.67</p>
              </div>

              <h3 className="text-xl font-bold mb-4 text-green-400 mt-6">
                CERTIFICATIONS:
              </h3>
              <ul className="list-disc ml-5 text-sm">
                <li>
                  Generative AI: Prompt Engineering Basics – IBM (In Progress)
                </li>
              </ul>

              <h3 className="text-xl font-bold mb-4 text-green-400 mt-6">
                LANGUAGES:
              </h3>
              <p>
                Turkish – Native
                <br />
                English – Full Professional
                <br />
                German – Elementary
              </p>

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
