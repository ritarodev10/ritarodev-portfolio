import React from "react";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import type { Viewport } from "next";

export const viewport: Viewport = {
  width: "1024",
  initialScale: 0.5, // Start zoomed out slightly to fit
  maximumScale: 1,
  userScalable: true,
};

export default function CVPage() {
  return (
    <div className="min-h-screen bg-zinc-100 text-black font-sans selection:bg-zinc-900 selection:text-white print:bg-white print:p-0 -mt-20 min-w-[1024px]">
      {/* Navigation / Actions - Hidden in Print */}
      <div className="fixed top-0 left-0 right-0 p-6 flex justify-between gap-4 items-center z-50 print:hidden pointer-events-none w-[1024px] mx-auto relative">
        <Link
          href="/"
          className="pointer-events-auto flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-zinc-200 shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>
        <a
          href="https://drive.google.com/uc?export=download&id=11VFtiy1ghbc9pH8fqJhTONEWmasdCDIy"
          className="pointer-events-auto flex items-center gap-2 text-sm font-medium text-white bg-zinc-900 hover:bg-zinc-800 transition-colors px-4 py-2 rounded-full shadow-lg hover:shadow-xl"
        >
          <Download className="w-4 h-4" />
          Download PDF
        </a>
      </div>

      <div className="flex flex-col items-center py-16 gap-8 print:block print:py-0 print:gap-0">
        {/* PAGE 1 */}
        <div className="w-[210mm] min-h-[297mm] bg-white p-[15mm] shadow-2xl print:shadow-none print:w-full print:h-auto print:min-h-0 print:p-0 print:mb-0 relative text-[10.5pt] leading-normal">
          {/* Header */}
          <header className="mb-6">
            <h1 className="text-2xl font-bold text-black mb-1">
              Riza Rohman - Full Stack Developer
            </h1>
            <p className="text-sm text-black mb-4">
              Malang, Indonesia · <a href="mailto:rizarohman@ritaro.dev" className="text-blue-700 underline">rizarohman@ritaro.dev</a> · +62 878-5582-6341 · <a href="https://linkedin.com/in/riza-rohman" className="text-blue-700 underline">linkedin.com/in/riza-rohman</a> · <a href="https://github.com/ritarodev10" className="text-blue-700 underline">github.com/ritarodev10</a> · <a href="https://ritaro.dev" className="text-blue-700 underline">ritaro.dev</a>
            </p>
          </header>

          {/* Summary */}
          <section className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-black border-b border-zinc-300 pb-1 mb-3">
              SUMMARY
            </h2>
            <p className="mb-3 text-justify">
              Full-stack developer (4+ yrs) specializing in React/Next.js and Node.js, building AI-powered automation, dashboards, multi-site systems, and cloud-deployed apps. Experienced working with teams across Canada, USA, Europe, and Asia. Daily user of Cursor + MCP for rapid refactors, code generation, and production-grade tooling.
            </p>
            <p>
              <span className="font-bold">Strengths:</span> Next.js architectures, dashboard systems, AI automation, RAG workflows, cloud deployment.
            </p>
          </section>

          {/* Experiences */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-wider text-black border-b border-zinc-300 pb-1 mb-4">
              EXPERIENCES
            </h2>

            {/* CloudNow */}
            <div className="mb-5">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-black">
                  <a href="#" className="text-blue-700 underline">CloudNow</a> — Full-Stack Developer (Remote, Canada)
                </h3>
                <span className="font-bold text-black whitespace-nowrap">Dec 2024–Present</span>
              </div>
              <p className="mb-2">CloudNow provides cloud solutions, IT consulting, hosting, and cybersecurity services.</p>
              <ul className="list-disc list-outside ml-4 space-y-1 mb-2">
                <li>Building and maintaining company + client sites end-to-end (UI/UX, frontend, backend, deployment).</li>
                <li>Shipping internal dashboards and client platforms with clean, scalable API integrations.</li>
                <li>Delivering <span className="font-bold">Mailtrace</span> (DMARC SaaS) to improve email deliverability insights.</li>
                <li>Developing reusable <span className="font-bold">admin + RAG + page-builder kit</span> using n8n workflows to cut launch time.</li>
              </ul>
              <p className="text-zinc-600 italic">
                Stack: Next.js, TypeScript, Tailwind, n8n, OpenAI, Postgres, Supabase, Strapi, Azure, GitHub Actions.
              </p>
            </div>

            {/* Ingersoll Rand */}
            <div className="mb-5">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-black">
                  <a href="#" className="text-blue-700 underline">Ingersoll Rand</a> — Frontend Developer (Remote, US)
                </h3>
                <span className="font-bold text-black whitespace-nowrap">Nov 2024–Mar 2025</span>
              </div>
              <p className="mb-2">Ingersoll Rand is a global industrial technology manufacturer specializing in compressors, pumps, fluid systems, and mission-critical industrial tools.</p>
              <ul className="list-disc list-outside ml-4 space-y-1 mb-2">
                <li>Built a <span className="font-bold">multi-site template</span> (Next.js + Contentstack) to accelerate brand rollouts across subsidiaries.</li>
                <li>Converted Figma design system into atomic components for consistent global usage.</li>
              </ul>
              <p className="text-zinc-600 italic">
                Stack: Next.js, Contentstack, GraphQL, SCSS, TypeScript.
              </p>
            </div>

            {/* Monis */}
            <div className="mb-5">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-black">
                  <a href="#" className="text-blue-700 underline">Monis</a> (Desent Solution GmbH) — Full-Stack Developer (Remote, Germany)
                </h3>
                <span className="font-bold text-black whitespace-nowrap">Sep 2024–Aug 2025</span>
              </div>
              <p className="mb-2">Monis is a global rental marketplace for ergonomic desks, chairs, and productivity equipment.</p>
              <ul className="list-disc list-outside ml-4 space-y-1 mb-2">
                <li>Developed <span className="font-bold">advanced checkout system</span> supporting subscription-based renting, renewals, and automated billing workflows.</li>
                <li>Built <span className="font-bold">admin dashboard for merchants</span> to manage rentals, extensions, pickup schedules, and customer issue resolution.</li>
                <li>Built WhatsApp automation + AI chatbot handling <span className="font-bold">300+ daily notifications</span> and auto-resolving ~80% inquiries.</li>
                <li>Implemented automated return scheduling (<span className="font-bold">20+/day</span>), improving on-time returns by ~30%.</li>
              </ul>
              <p className="text-zinc-600 italic">
                Stack: Next.js, TypeScript, Strapi, Stripe, Express, n8n, Tailwind.
              </p>
            </div>

            {/* NavDeck */}
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-black">
                  <a href="#" className="text-blue-700 underline">NavDeck</a> — Frontend Developer (Remote, Singapore)
                </h3>
                <span className="font-bold text-black whitespace-nowrap">Apr 2024–Aug 2024</span>
              </div>
              <p className="mb-2">NavDeck helps companies map skill sets and generate AI-driven learning plans.</p>
              <ul className="list-disc list-outside ml-4 space-y-1 mb-2">
                <li>Co-built Next.js dashboard (team of 3) from design to MVP using agile delivery.</li>
                <li>Added <span className="font-bold">AI-driven career mapping</span> and an <span className="font-bold">AI-powered LMS</span> with dynamic challenges.</li>
              </ul>
              <p className="text-zinc-600 italic">
                Stack: Next.js, TypeScript, Zustand, TanStack Query, Tailwind, WebSocket.
              </p>
            </div>
          </section>
        </div>

        {/* PAGE 2 */}
        <div className="w-[210mm] min-h-[297mm] bg-white p-[15mm] shadow-2xl print:shadow-none print:w-full print:h-auto print:min-h-0 print:p-0 print:break-before-page relative text-[10.5pt] leading-normal">
          
          {/* Experiences Continued */}
          <div className="mb-6">
            {/* Beamco */}
            <div className="mb-5">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-black">
                  <a href="#" className="text-blue-700 underline">Beamco</a> — Frontend Developer (Remote, Singapore)
                </h3>
                <span className="font-bold text-black whitespace-nowrap">Apr 2023–Mar 2024</span>
              </div>
              <p className="mb-2">Beamco is a music & artist community platform integrating blockchain and real-time fan engagement.</p>
              <ul className="list-disc list-outside ml-4 space-y-1 mb-2">
                <li>Led a team delivering the official site, admin dashboard, and artist dashboard.</li>
                <li>Built an offline concert stage screen integrated with mobile app real-time tipping via WebSocket.</li>
              </ul>
              <p className="text-zinc-600 italic">
                Stack: React, React Native, TypeScript, Tailwind, WebSocket, Firebase, Jest/RTL.
              </p>
            </div>

            {/* G2Academy */}
            <div className="mb-5">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-black">
                  <a href="#" className="text-blue-700 underline">G2Academy</a> — Full-Stack Developer (Jakarta)
                </h3>
                <span className="font-bold text-black whitespace-nowrap">Jan 2022–Feb 2023</span>
              </div>
              <p className="mb-2">G2Academy is Indonesia’s tech education and bootcamp organization serving enterprises and students.</p>
              <ul className="list-disc list-outside ml-4 space-y-1 mb-2">
                <li>Redesigned React company site for better navigation & conversion.</li>
                <li>Overhauled student CMS/admin (Vue) for national “Program Prakerja” reporting.</li>
                <li>Developed and maintained mobile app modules powering the real-time tipping feature.</li>
                <li>Developed backend services using Java Spring Boot.</li>
              </ul>
              <p className="text-zinc-600 italic">
                Stack: React, Vue, TypeScript, Spring Boot, Tailwind.
              </p>
            </div>

            {/* Ternaknesia */}
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-black">
                  <a href="#" className="text-blue-700 underline">Ternaknesia</a> — Web Developer (Surabaya)
                </h3>
                <span className="font-bold text-black whitespace-nowrap">Apr 2018–Feb 2020</span>
              </div>
              <p className="mb-2">Ternaknesia is an agritech company focusing on digital livestock commerce and online farming investment.</p>
              <ul className="list-disc list-outside ml-4 space-y-1 mb-2">
                <li>Developed and optimized the company’s primary website for better UX and consistent branding.</li>
                <li>Implemented gamification and viral marketing workflows to drive digital platform interaction.</li>
                <li>Contributed to milestones including <span className="font-bold">200+ products sold</span> and <span className="font-bold">300M+ rupiah revenue</span>, supporting overall digital growth.</li>
              </ul>
              <p className="text-zinc-600 italic">
                Stack: WordPress, WooCommerce, PHP, jQuery, MySQL, Elementor, Whatsapp API
              </p>
            </div>
          </div>

          {/* Selected Project */}
          <section className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-black border-b border-zinc-300 pb-1 mb-4">
              SELECTED PROJECT
            </h2>
            
            <ul className="list-none space-y-4">
              <li className="flex gap-2">
                <span className="text-black">–</span>
                <div>
                  <span className="font-bold text-blue-700 underline"><a href="#">Hire My Trailer</a></span> – Built a full-featured trailer rental platform using Nuxt.js, integrating secure payments and real-time booking that improved customer ratings from 3 → 4.2
                </div>
              </li>
              <li className="flex gap-2">
                <span className="text-black">–</span>
                <div>
                  <span className="font-bold">Hijra Planner</span> – Developed e-commerce and referral platform using WooCommerce, driving 200K+ app downloads and 500+ product sales in two weeks through viral marketing workflow using Whatsapp chatbot integration.
                </div>
              </li>
              <li className="flex gap-2">
                <span className="text-black">–</span>
                <div>
                  <span className="font-bold">Pertamina Geothermal (PGE)</span> – Created an internal inventory dashboard using React and a WordPress REST API, enabling real-time tracking and WhatsApp notifications that reduced tool loss and improved operational accuracy.
                </div>
              </li>
            </ul>
          </section>

          {/* Skills */}
          <section className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-black border-b border-zinc-300 pb-1 mb-4">
              SKILLS
            </h2>
            <div className="space-y-2">
              <p><span className="font-bold">Frontend:</span> React, Next.js, Vue/Nuxt, React Native, TypeScript, Tailwind, Zustand, Jest</p>
              <p><span className="font-bold">Backend:</span> Node.js (Express), Laravel, Spring Boot · REST, GraphQL</p>
              <p><span className="font-bold">Data & Cloud:</span> PostgreSQL/MySQL, MongoDB, Supabase (pgvector), Firebase, Azure App Service</p>
              <p><span className="font-bold">AI & Tooling:</span> n8n, OpenAI API, Cursor IDE, GitHub Actions, Storybook, WebSocket, PWA, Lighthouse</p>
              <p><span className="font-bold">WordPress:</span> WooCommerce, ACF, custom themes/plugins, WP REST API</p>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-wider text-black border-b border-zinc-300 pb-1 mb-4">
              EDUCATION
            </h2>
            <div className="space-y-1">
              <p><span className="font-bold">B.Eng., Physics Engineering</span> — Sepuluh Nopember Institute of Technology (2011–2016)</p>
              <p><span className="font-bold">B.Sc., Informatics</span> (incomplete) — Sepuluh Nopember Institute of Technology (2009–2011)</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
