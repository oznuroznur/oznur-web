import React from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

function Projects() {
  return (
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
                Express.js, PostgreSQL, Prisma, PM2, NGINX, SSL, React Native
                (Expo), Next.js, Firebase, Sentry
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
              Smart cocktail assistant with AI features. AI-based suggestions,
              web scraping, and automated recipe syncing.
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
              src="/assets/vatan-bilgisayar.png"
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
                .NET MVC, PostgreSQL, PM2, NGINX, SSL, Bootstrap 5, jQuery, SCSS
              </code>
            </div>
          </div>
        </div>

        {/* Foodion */}
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
              AI-powered nutrition & recipe app. OCR scans fridge ingredients,
              AI suggests recipes & diet plans.
            </p>
            <div className="mb-4">
              <span className="text-green-400 font-bold">STACK:</span>
              <code className="ml-2">
                Node.js, PostgreSQL, pytesseract, PM2, NGINX, SSL, React Native
                (Expo), n8n, Clerk, Sentry
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
            <Image
              width={800}
              height={400}
              src="/assets/rc.png"
              alt="Call Center CRM panel with hotel intake and roles"
              className="w-full h-48 object-cover border-2 border-white mb-4"
            />
            <p className="mb-4">
              Custom certification search system with admin panel, integrated
              into Royalcert’s official website.
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
              Peer-to-peer car rental app with socket-based messaging and offer
              management.
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
              src="/assets/call-center.png"
              alt="Call Center CRM panel with hotel intake and roles"
              className="w-full h-48 object-cover border-2 border-white mb-4"
            />
            <p className="mb-4">
              Multi-role operations panel for call center, hotels, admins, and
              external consultants. Pulls TGA hotel listings via n8n into a
              unified table. Users add role-scoped notes per hotel, manage
              pre-audit documentation, and run a proposal → approval workflow
              before hand-off to the Audit system.
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
                <b>Hotel dossier:</b> required documents collected; hotels can
                log in and upload; consultants can update on behalf.
              </li>
              <li>
                <b>Proposals:</b> email offer sent from panel; if accepted,
                signed contract is recorded and the hotel is queued for audit.
              </li>
              <li>
                <b>Activity & notes:</b> per-hotel timelines, filters by
                role/status, audit readiness flags.
              </li>
              <li>
                <b>Observability:</b> Sentry for error tracking; Clarity for UX
                insights.
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
              src="/assets/crm.png"
              alt="GSTC audit scheduling, forms, e-signature, and reporting"
              className="w-full h-48 object-cover border-2 border-white mb-4"
            />
            <p className="mb-4">
              End-to-end audit management: assignment, scheduling, on-site
              execution, evidence capture, e-signatures, PDF export, and
              non-conformity reporting. Hotels accepted from the CRM queue wait
              for auditor assignment; auditors confirm audits on their calendar
              and proceed with a versioned form.
            </p>

            <ul className="list-disc ml-5 mb-4 text-sm leading-relaxed">
              <li>
                <b>Intake → assignment:</b> items arriving from CRM; auditor
                assignment with accept/decline workflow.
              </li>
              <li>
                <b>Calendar:</b> auditor calendar view; conflicts and overlaps
                flagged before confirmation.
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
                <b>Reporting:</b> export finalized form to PDF; auto-generate
                Non-Conformity Report when applicable.
              </li>
              <li>
                <b>Expenses:</b> auditor expense form (travel, accommodation,
                misc.); admin review & approval.
              </li>
              <li>
                <b>Admin overview:</b> pipeline & progress tracking across all
                audits; filters by status/auditor/hotel.
              </li>
              <li>
                <b>Security & telemetry:</b> Clerk for auth; Sentry + Clarity
                for monitoring and UX analysis.
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
              Restaurant management app with real-time table/order interface and
              kitchen stock control.
            </p>
            <div className="mb-4">
              <span className="text-green-400 font-bold">STACK:</span>
              <code className="ml-2">
                Express.js, PostgreSQL, PM2, NGINX, SSL, Next.js, React Native
                (Expo)
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
              The first relief of Web & mobile platform connecting lawyers and
              clients. Booking system, role-based UI, video calls.
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
  );
}

export default Projects;
