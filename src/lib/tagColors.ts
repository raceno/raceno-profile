/**
 * Tag display name -> CSS variable for pill color.
 * Every tag used in blog posts must have an entry and a matching --color-tag-* in index.css.
 */
const TAG_COLORS: Record<string, string> = {
  /* Core / stack */
  Programming: "var(--color-tag-programming)",
  JavaScript: "var(--color-tag-javascript)",
  TypeScript: "var(--color-tag-typescript)",
  "Web Development": "var(--color-tag-web-development)",
  "Frontend Development": "var(--color-tag-frontend-development)",
  Frontend: "var(--color-tag-frontend)",
  React: "var(--color-tag-react)",
  Redux: "var(--color-tag-redux)",
  "Vue.js": "var(--color-tag-vuejs)",
  Svelte: "var(--color-tag-svelte)",
  "Software Engineering": "var(--color-tag-software-engineering)",
  "Software Development": "var(--color-tag-software-development)",
  "Framework Comparison": "var(--color-tag-framework-comparison)",
  "Backend Development": "var(--color-tag-backend-development)",
  "App Development": "var(--color-tag-appdevelopment)",
  Scalability: "var(--color-tag-scalability)",
  "Node.js": "var(--color-tag-nodejs)",
  API: "var(--color-tag-api)",
  REST: "var(--color-tag-rest)",
  GraphQL: "var(--color-tag-graphql)",
  NPM: "var(--color-tag-npm)",
  /* DevOps / infra */
  DevOps: "var(--color-tag-devops)",
  Devops: "var(--color-tag-devops)",
  Containers: "var(--color-tag-containers)",
  Infrastructure: "var(--color-tag-infrastructure)",
  Deployment: "var(--color-tag-deployment)",
  "CI/CD": "var(--color-tag-ci-cd)",
  "GitHub Actions": "var(--color-tag-githubactions)",
  Kubernetes: "var(--color-tag-kubernetes)",
  "Cloud Native": "var(--color-tag-cloud-native)",
  Cloud: "var(--color-tag-cloud)",
  Serverless: "var(--color-tag-serverless)",
  AWS: "var(--color-tag-aws)",
  Lambda: "var(--color-tag-lambda)",
  "AWS Lambda": "var(--color-tag-aws-lambda)",
  "Edge Computing": "var(--color-tag-edgecomputing)",
  /* Architecture / patterns */
  Architecture: "var(--color-tag-architecture)",
  Microservices: "var(--color-tag-microservices)",
  "Distributed Systems": "var(--color-tag-distributed-systems)",
  /* Real-time / async */
  WebSockets: "var(--color-tag-websockets)",
  "Real-Time": "var(--color-tag-real-time)",
  /* Mobile / PWA */
  Mobile: "var(--color-tag-mobile)",
  PWA: "var(--color-tag-pwa)",
  "Progressive Web Apps": "var(--color-tag-progressive-web-apps)",
  Flutter: "var(--color-tag-flutter)",
  "Cross-Platform": "var(--color-tag-cross-platform)",
  /* Web3 / blockchain */
  Web3: "var(--color-tag-web3)",
  Blockchain: "var(--color-tag-blockchain)",
  "Smart Contracts": "var(--color-tag-smartcontracts)",
  Ethereum: "var(--color-tag-ethereum)",
  Solidity: "var(--color-tag-solidity)",
  Decentralization: "var(--color-tag-decentralization)",
  DeFi: "var(--color-tag-defi)",
  DAOs: "var(--color-tag-daos)",
  Governance: "var(--color-tag-governance)",
  Interoperability: "var(--color-tag-interoperability)",
  /* Data / DB */
  Database: "var(--color-tag-database)",
  TypeORM: "var(--color-tag-typeorm)",
  /* Performance / quality */
  Performance: "var(--color-tag-performance)",
  Testing: "var(--color-tag-testing)",
  Security: "var(--color-tag-security)",
  "Zero-Trust": "var(--color-tag-zero-trust)",
  "Quality Assurance": "var(--color-tag-quality-assurance)",
  Automation: "var(--color-tag-automation)",
  /* AI / future */
  AI: "var(--color-tag-ai)",
  "Machine Learning": "var(--color-tag-machine-learning)",
  "Predictive Development": "var(--color-tag-predictivedevelopment)",
  "Quantum Computing": "var(--color-tag-quantumcomputing)",
  "Future Tech": "var(--color-tag-future-tech)",
  Algorithms: "var(--color-tag-algorithms)",
  Metaverse: "var(--color-tag-metaverse)",
  "Virtual Reality": "var(--color-tag-virtual-reality)",
  /* Other */
  Agile: "var(--color-tag-agile)",
  WebAssembly: "var(--color-tag-webassembly)",
};

export function tagColor(tag: string): string {
  return TAG_COLORS[tag] ?? "var(--color-text-muted)";
}
