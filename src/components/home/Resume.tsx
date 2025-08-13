import { Download } from 'lucide-react'
import React from 'react'

function Resume() {
  return (
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-white pb-2 ">
            RESUME.PDF
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 border-2 border-white p-6 bg-gray-900">
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

            <div className="border-2 border-white p-6 bg-gray-900">
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
                  className="border-2 border-green-400 bg-green-400 text-black px-4 py-2 hover:text-white hover:bg-black hover:bg-[url('/assets/banner-bg.png')] hover:bg-cover hover:bg-center flex items-center gap-2 justify-center"
                >
                  <Download size={16} />
                  DOWNLOAD_RESUME.PDF
                </a>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Resume
