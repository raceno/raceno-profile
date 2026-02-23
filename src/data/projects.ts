import type { IconType } from "react-icons";
import {
  HiOutlineBookOpen,
  HiOutlineCube,
  HiOutlineServerStack,
  HiOutlineDocumentText,
  HiOutlineChartBar,
  HiOutlineShieldCheck,
  HiOutlineLightBulb,
  HiOutlineUserGroup,
  HiOutlineAcademicCap,
  HiOutlineCog,
} from "react-icons/hi2";

export type Project = {
  icon: IconType;
  title: string;
  description: string;
  url?: string;
};

/**
 * Senior-level "Things I've learned" — canonical sources (books, SRE, architecture, career).
 * Each item has a specific URL (learn path, chapter, or article), not just the host.
 */
export const projects: Project[] = [
  {
    icon: HiOutlineBookOpen,
    title: "Designing Data-Intensive Applications",
    description:
      "Design systems around data: storage, replication, streams, and correctness in real systems (Martin Kleppmann).",
    url: "https://dataintensive.net/",
  },
  {
    icon: HiOutlineServerStack,
    title: "Distributed Systems for Fun and Profit",
    description:
      "Trade-offs in distributed systems: CAP, time, consensus, and replication models (Mikito Takada).",
    url: "https://book.mixu.net/distsys/intro.html",
  },
  {
    icon: HiOutlineCube,
    title: "Microservices (Martin Fowler)",
    description:
      "When microservices make sense: boundaries, evolutionary design, and operational cost (Fowler & Lewis).",
    url: "https://martinfowler.com/articles/microservices.html",
  },
  {
    icon: HiOutlineCog,
    title: "Production-Ready Microservices",
    description:
      "What production-ready really requires: reliability, scalability, monitoring, deprecation (Susan Fowler, Uber).",
    url: "https://www.oreilly.com/library/view/production-ready-microservices/9781491965962/ch01.html",
  },
  {
    icon: HiOutlineCube,
    title: "Deconstructing the Monolith (Shopify)",
    description:
      "Why a well-designed monolith often beats a bad microservice mesh; modular monoliths at scale.",
    url: "https://shopify.engineering/deconstructing-monolith-designing-software-maximizes-developer-productivity",
  },
  {
    icon: HiOutlineDocumentText,
    title: "The Twelve-Factor App",
    description:
      "Build cloud apps with clean boundaries: config, logs, processes, and deploys (Heroku).",
    url: "https://12factor.net/",
  },
  {
    icon: HiOutlineChartBar,
    title: "Implementing SLOs (Google SRE Workbook)",
    description:
      "Design SLOs and error budgets before tuning alerts; how they drive product and ops decisions.",
    url: "https://sre.google/workbook/implementing-slos/",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Managing Incidents (Google SRE)",
    description:
      "Incident response as an engineering discipline: roles, runbooks, comms, coordination under pressure.",
    url: "https://sre.google/sre-book/managing-incidents/",
  },
  {
    icon: HiOutlineAcademicCap,
    title: "Postmortem Culture (Google SRE)",
    description:
      "Blameless postmortems as the engine of reliability and culture change; learning from failure.",
    url: "https://sre.google/sre-book/postmortem-culture/",
  },
  {
    icon: HiOutlineLightBulb,
    title: "You Are Not Google",
    description:
      "Right-size architecture for your scale: avoid big-tech cosplay, YAGNI, and premature microservices.",
    url: "https://blog.bradfieldcs.com/you-are-not-google-84912cf44afb",
  },
  {
    icon: HiOutlineUserGroup,
    title: "Staff-Plus Career Ladders (StaffEng)",
    description:
      "What staff+ engineers do: owning bets, cross-team influence, technical strategy (Will Larson).",
    url: "https://staffeng.com/guides/staff-career-ladders/",
  },
  {
    icon: HiOutlineBookOpen,
    title: "Google SRE Books",
    description:
      "End-to-end SRE: risk, monitoring, capacity, incident management, and org design in one mental model.",
    url: "https://sre.google/books/",
  },
];
