import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  itsmy,
  yrts,
  skinsaver,
  toshiba,
} from "../assets";
import atriumModules from "../assets/projects/atrium/modules.png";
import atriumRoles from "../assets/projects/atrium/roles.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Engineering",
    tag: "CORE",
    icon: web,
    description:
      "End-to-end application development from database design through deployment, with a bias toward clean architecture and maintainable code.",
    bulletPoints: [
      "React & Next.js SPAs",
      "Node.js / Express APIs",
      "PostgreSQL & MongoDB",
      "CI/CD & Cloud (AWS, Vercel)",
    ],
  },
  {
    title: "Mobile Development",
    tag: "NATIVE",
    icon: mobile,
    description:
      "Cross-platform mobile applications built with React Native, delivering native performance with shared business logic.",
    bulletPoints: [
      "React Native (iOS & Android)",
      "Expo & EAS workflows",
      "Push notifications & deep links",
      "App Store deployment",
    ],
  },
  {
    title: "Backend & Infrastructure",
    tag: "INFRA",
    icon: backend,
    description:
      "Scalable server-side systems and cloud infrastructure designed for reliability, security, and straightforward observability.",
    bulletPoints: [
      "REST & GraphQL APIs",
      "AWS (S3, Lambda, EC2)",
      "Docker & containerisation",
      "Database optimisation",
    ],
  },
  {
    title: "Automation & AI",
    tag: "AGENTS",
    icon: creator,
    description:
      "Streamlining workflows with custom automation pipelines, agentic systems, and AI-powered tooling that saves time and reduces manual overhead.",
    bulletPoints: [
      "Agentic workflows & LLM tooling",
      "Browser & data automation",
      "CI/CD pipeline design",
      "Workflow scripting & bots",
    ],
  },
  {
    title: "Technical Consulting",
    tag: "STRATEGY",
    icon: creator,
    description:
      "Architecture reviews, technical due diligence, and hands-on guidance for teams scaling their engineering practices.",
    bulletPoints: [
      "Code & architecture audits",
      "Tech stack selection",
      "Team mentoring & pairing",
      "STEM education delivery",
    ],
  },
];

const stats = [
  { value: "5+", label: "Years Exp" },
  { value: "10+", label: "Projects" },
  { value: "5+", label: "Clients" },
  { value: "4", label: "Industries" },
];

const skills = [
  { name: "JavaScript", level: "Advanced" },
  { name: "TypeScript", level: "Advanced" },
  { name: "React", level: "Advanced" },
  { name: "Node.js", level: "Advanced" },
  { name: "Python", level: "Intermediate" },
  { name: "React Native", level: "Intermediate" },
  { name: "AWS", level: "Intermediate" },
  { name: "Docker", level: "Intermediate" },
  { name: "PostgreSQL", level: "Intermediate" },
  { name: "MongoDB", level: "Intermediate" },
  { name: "Tailwind CSS", level: "Advanced" },
  { name: "Git", level: "Advanced" },
];

const technologies = [
  { name: "JavaScript", icon: javascript, category: "Language" },
  { name: "TypeScript", icon: typescript, category: "Language" },
  { name: "React", icon: reactjs, category: "Frontend" },
  { name: "Redux", icon: redux, category: "Frontend" },
  { name: "Tailwind CSS", icon: tailwind, category: "Frontend" },
  { name: "HTML 5", icon: html, category: "Frontend" },
  { name: "CSS 3", icon: css, category: "Frontend" },
  { name: "Node.js", icon: nodejs, category: "Backend" },
  { name: "MongoDB", icon: mongodb, category: "Database" },
  { name: "Three.js", icon: threejs, category: "Library" },
  { name: "Git", icon: git, category: "Tooling" },
  { name: "Figma", icon: figma, category: "Design" },
  { name: "Docker", icon: docker, category: "DevOps" },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "The ItsMy Group",
    icon: itsmy,
    iconBg: "#6DBC8D",
    date: "Sep 2022 - Sep 2023",
    points: [
      "Spearheaded the development and upkeep of a robust AngularJS / Django data driven application supporting Australian private health funds",
      "Elevated website functionality and improved UX by leveraging React.js to revamp the application's frontend. Designed custom themed components for individual health fund organizations, leading to a 20% increase in conversions.",
    ],
  },
  {
    title: "Technical Facilitator / Programmer",
    company_name: "Yarra Ranges Tech School",
    icon: yrts,
    iconBg: "#FFF",
    date: "Feb 2022 - Sep 2022",
    points: [
      "Facilitated the development and enhancement of technology stack to develop effective STEM based learning programs with cutting-edge technology",
      "Leveraged C++ programming skills to create engaging Arduino projects, fostering hands-on learning experiences.",
    ],
  },
  {
    title: "Co-founder",
    company_name: "Skin Saver",
    icon: skinsaver,
    iconBg: "#EC7F60",
    date: "Jun 2019 - Jul 2020",
    points: [
      "A startup developing an application that could allow for AI-based detection and tracking of various skin lesions (i.e. Melanoma, Acne, and Eczema).",
      "Developed a marketable MVP using React Native, Express.js, PostgresSQL and AWS (S3, Route 53).",
    ],
  },
  {
    title: "Systems Support Officer",
    company_name: "Toshiba International Corporation",
    icon: toshiba,
    iconBg: "#FFFF",
    date: "May 2018 - Jul 2021",
    points: [
      "Improved workflow efficiency by designing customized auto-generating templates for essential documentation using Excel Visual Basic programming.",
    ],
  },
];

const testimonials = [];

const projects = [
  {
    name: "Atrium",
    slug: "atrium",
    featured: true,
    eyebrow: "Live production · 2025-present",
    year: "2025",
    type: "Full-Stack",
    tagline: "Calm operations for places that gather people.",
    description:
      "End-to-end booking and operations platform for a retreat & conference centre — four role-aware interfaces, one Next.js + Supabase codebase, live in daily production.",
    tags: [
      { name: "next.js" },
      { name: "supabase" },
      { name: "row-level-security" },
      { name: "production" },
    ],
    image: atriumModules,
    source_code_link: null,
    demo_link: "https://atrium-portal-demo1.vercel.app/",
    liveDemoUrl: "https://atrium-portal-demo1.vercel.app/",

    brief: [
      "The Holy Cross Centre — a Melbourne retreat venue — was running its entire operation on spreadsheets and email. Multi-day group bookings, room allocations across buildings, dietary tracking, staff rostering, and external caterer coordination all lived as untracked side conversations.",
      "Atrium is the public-facing demo of the production platform I built to replace that workflow. One codebase, four roles, every guest tracked from enquiry to invoice — with database-level access control so a caterer literally cannot query another caterer's jobs.",
    ],

    architectureDecisions: [
      {
        title: "Database-level access control",
        quote:
          "Row Level Security enforces access control at the PostgreSQL level. Every table has policies scoped by role. Even if application code has a bug, a caterer physically cannot query another caterer's jobs. The database rejects it.",
      },
      {
        title: "Atomic mutations via SECURITY DEFINER RPCs",
        quote:
          "Multi-step mutations don't use sequential JavaScript calls. They use SECURITY DEFINER RPCs that execute within a single database transaction. Row-level locking (FOR UPDATE) prevents TOCTOU races in concurrent operations like room allocation.",
      },
      {
        title: "Layered cache + tag-based invalidation",
        quote:
          "React cache() deduplicates within SSR, unstable_cache with tags for slow data, revalidateTag() after mutations, PostgreSQL RPCs collapse 5+ queries into 1. Real impact: booking detail pages went from 13 sequential queries (~70ms) to 1 RPC call (~12ms).",
      },
      {
        title: "Melbourne timezone discipline",
        quote:
          "All dates represent local calendar dates in Melbourne time (AEDT/AEST, UTC+10/+11). A dedicated formatDateLocal() utility handles this. Date strings in the database are stored as plain YYYY-MM-DD with no timezone — never toISOString().split('T')[0] because UTC conversion shifts dates backward.",
      },
      {
        title: "Public-form hardening",
        quote:
          "Public forms protected by CSRF (double-submit cookie), rate limiting per endpoint (3 bookings / 15 min, 5 auth attempts / 5 min), honeypot fields, timing validation (rejects < 3 seconds), and SHA-256 token hashing — never plaintext.",
      },
    ],

    modules: [
      {
        number: "01",
        name: "Bookings",
        blurb:
          "Multi-step wizard, status pipeline, pricing engine, cost tracking, guest management — from enquiry to invoice across seven booking states.",
      },
      {
        number: "02",
        name: "Rostering",
        blurb:
          "Drag-and-drop shift scheduler, timesheet approval, staff availability tracking, fortnightly pay period with Excel payroll export.",
      },
      {
        number: "03",
        name: "Kitchen Display",
        blurb:
          "Real-time meal cards, colour-coded by type, dietary counts, caterer tracking — built with kitchen staff by mapping their existing paper run sheets.",
      },
      {
        number: "04",
        name: "Catering",
        blurb:
          "Menu management, dietary and fatal-allergy tracking, external caterer assignment, meal job workflow with status lifecycle.",
      },
      {
        number: "05",
        name: "Customer Portal",
        blurb:
          "Self-service booking view, guest management, dietary preferences, room allocation — password-less access via SHA-256-hashed booking tokens.",
      },
      {
        number: "06",
        name: "Room Management",
        blurb:
          "Room grid with occupancy, cleaning status, housekeeping progress, allocation by building and wing.",
      },
    ],

    roles: [
      {
        name: "Admin",
        blurb:
          "Full system access. CRUD across every table, audit log of every privileged operation, configuration of spaces / rooms / meal pricing.",
      },
      {
        name: "Staff",
        blurb:
          "Operational views — schedule, kitchen, rooms, rostering. SELECT on operational data, INSERT/UPDATE on own shifts and timesheets only.",
      },
      {
        name: "Caterer",
        blurb:
          "Meal job management. SELECT on assigned meal jobs only — RLS rejects any cross-caterer query at the database, not in the application.",
      },
      {
        name: "Customer",
        blurb:
          "Self-service portal. Booking overview, guest management, dietary profiles, room preferences. SELECT/UPDATE limited to own booking via token.",
      },
    ],

    distinctiveChoices: [
      {
        title: "PostgreSQL RPCs as the mutation layer",
        body:
          "Booking cascade deletes, room allocation, meal job item updates, and token consumption all run inside SECURITY DEFINER functions with FOR UPDATE locks. The application sends one RPC call; the database guarantees atomicity. No more half-written booking states from a network timeout mid-mutation.",
      },
      {
        title: "Tag-based cache invalidation",
        body:
          "Each domain owns a constant set of cache tags (BOOKINGS, MEAL_JOBS, ROOMS, AUDIT…). Mutations call revalidateTag() with the affected domains; everything downstream re-fetches once, on demand. The booking detail page went from 13 queries / 70ms to 1 / 12ms after this consolidation.",
      },
      {
        title: "11 React Email templates + Web Push",
        body:
          "Outbound notifications use React Email rendered via Resend (shared layout, design tokens, MJML-quality preview). In-app and mobile use VAPID Web Push + Supabase Realtime. Thirteen notification types span the four roles. All notify() calls are fire-and-forget — wrapped in void IIFEs so they never block the user.",
      },
      {
        title: "Built with Claude Code as the dev surface",
        body:
          "The whole thing was developed with agentic coding workflows as a force multiplier — not a shortcut. PRDs, ADRs, and system design docs live in /docs and are written before the code they describe. The .claude/ folder contains a living context map so the agent reaches for the right patterns automatically.",
      },
    ],

    metrics: [
      { value: 451, suffix: "+", label: "TypeScript files" },
      { value: 4, suffix: "", label: "Role-aware interfaces" },
      { value: 126, suffix: "+", label: "SQL migrations" },
      { value: 15, suffix: "+", label: "Tables with RLS policies" },
    ],

    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Supabase (Postgres 15)",
      "Tailwind CSS 4",
      "Radix UI",
      "Zod 4",
      "TanStack Table",
      "React Email + Resend",
      "Web Push (VAPID)",
      "dnd-kit",
      "Vitest",
      "Vercel",
    ],

    // TODO: drop additional screenshots as they're ready
    //   - landing.png (Atrium homepage hero)
    //   - booking-wizard.png (multi-step booking flow)
    //   - kitchen-display.png (real-time meal cards)
    //   - rostering-board.png (drag-and-drop scheduler)
    //   - customer-portal.png (self-service view)
    screenshots: [
      { src: atriumModules, caption: "Six modules, one platform" },
      { src: atriumRoles, caption: "One codebase, four role-aware lenses" },
    ],
  },
];

export { services, technologies, experiences, testimonials, projects, stats, skills };
