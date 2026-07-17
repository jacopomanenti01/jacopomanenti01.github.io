export interface SectionItem {
  title: string;
  meta: string;
  desc: string;
  role?: string;
  bullets?: string[];   
  tags?: string[];
  href?: string;
  download?: boolean;
}

export interface Section {
  id: string;
  path: string;
  num: string;
  preview: string;
  icon: string;   // shown in the mobile dock
  details: string;
  items: SectionItem[];
  footnote?: string; 
  footnoteHref?: string;
  cv?: boolean;
}

export const sections: Section[] = [
  {
    id: 'projects',
    icon: 'lucide:folder-code',
    path: 'projects/',
    num: '01',
    preview: 'rag · gnn · ml-trading · blockchain',
    details: '*code available on request',
    items: [
    {
      title: 'rag-ecb-frameworks',
      meta: 'ECB · 2025–26',
      role: 'Production system',
      desc: 'A multi-host RAG platform serving ECB and NCB experts across Eurosystem frameworks. Each bot is configured against its own combination of frameworks. Piloted on collateral eligibility.',
      bullets: [
        'Frameworks standardised via a custom ECB ontology built on ELI and FIBO, developed with subject-matter experts, then compiled into a knowledge graph on Apache AGE (EC2). Retrieval spans BM25 through graph traversal, with queries augmented and normalised against the ontology.',
        'Ports-and-adapters architecture with the compiled LangGraph agent cached on TTL.',
        'Short- and long-term memory feeds conversations back as durable facts about ECB frameworks.'
      ],
      tags: ['AWS', 'Bedrock', 'Apache AGE', 'PostgreSQL', 'Ontologies', 'Datadog', 'LangGraph', 'LangChain', 'RAG', 'Knowledge Graphs'],
    },

    {
      title: 'zk-algorithmic-trading',
      meta: '2025', 
      desc: 'Algorithmic trading system on S&P 500 via the Alpaca API, driven by an XGBoost trend model with a custom bracket-order execution strategy and live Grafana/InfluxDB telemetry. Zero-knowledge proofs (Zokrates) allow trade execution to be verified on-chain without disclosing the underlying strategy.',
      tags: ['Python', 'XGBoost', 'Zokrates', 'Solidity', 'Grafana', 'InfluxDB'],
      href: 'https://github.com/jacopomanenti01/Privacy-Preserving-Algorithmic-Trading-with-Zero-Knowledge-Proofs',
    },
    {
      title: 'gnn-fraud-detection',
      meta: '2024',
      desc: 'Node classification over the Elliptic dataset (graph dataset of sampled Bitcoin transactions) labelling nodes as illicit from network topology. 95% AUC-ROC, 12 points over a GCN baseline, using GAT, GraphSMOTE and a GNN Transformer.',      href: 'https://github.com/jacopomanenti01/Graph-Neural-Networks',
      tags: ['PyTorch', 'PyTorch Geometric', 'NetworkX', 'Network Analysis'],

    },
    {
      title: 'easy-music',
      meta: '2024',
      role: 'Team of three · EIT Digital',
      desc: 'NFTs marketplace letting small record labels sell shares of their artists\' music rights to fans and investors. Album rights are minted as ERC-1155 NFTs; labels are onboarded by invitation, then create singers and albums under their own deployed contract. Rights trade via fixed-price sell orders or timed auctions. Deployed on Polygon Amoy testnet.',
      tags: ['Solidity', 'ERC-1155', 'Polygon', 'Next.js', 'Hardhat'],
      href: 'https://github.com/jacopomanenti01/Blockchain',
    },

    ],
    footnote: '+ more on GitHub →',
    footnoteHref: 'https://github.com/jacopomanenti01'
  },
  {
    id: 'career',
    icon: 'lucide:briefcase',
    path: 'career/',
    num: '02',
    preview: 'central banking · fintech',
    details: '2022 — NOW',
    items: [
    {
      title: 'European Central Bank',
      meta: 'Frankfurt am Main · 2025–now',
      role: 'AI Engineer & Researcher — Market Operations, Innovation & Data Analytics',
      desc: 'Automating business processes and driving adoption of AI and data-driven technology across DG Markets.',
      bullets: [
        'Built a multi-host RAG application over Eurosystem frameworks — vector, hybrid and ontology-based knowledge-graph retrieval. Piloted on collateral eligibility; now used daily across the Eurosystem. Deployed on AWS.',
        'dbt pipelines processing daily repo and money-market transactions from internal databases, Bloomberg, OneTick and clearing house feeds.',
        "Research across Market Operations and Economics: Nelson-Siegel-Svensson models with survival analysis for ECB's US bond portfolio rebalancing, and GDELT network analysis using media coverage as a proxy for inflation perception in nowcasting.",
      ],
      tags: ['Python', 'AWS', 'LangChain', 'LangGraph', 'dbt', 'Tableau', 'Bloomberg', 'OneTick', 'Agents', 'RAG', 'Knowledge Graphs'],
      href: "https://www.ecb.europa.eu/home/html/index.en.html"
    },
    {
      title: 'Zenith Global S.p.A.',
      meta: 'Milan · 2022–23',
      role: 'Junior Analyst — Master Servicer, NPL portfolios',
      desc: "Investor and Banca d'Italia reporting, and regulatory compliance across a €1B+ Gross Book Value non-performing loan portfolio.",      
      bullets: [
        'Periodic analysis of NPL portfolios: recovery rates, collection performance, and risk exposure.',
        'Automated the feed into the internal system with SQL, reconciling collection amounts.',
        'Investor reporting on a monthly, quarterly and semiannual cycle via Qlik dashboards. Regulatory reporting for the Bank of Italy against prospectus and credit transfer agreement requirements.',
      ],
      tags: ['SQL', 'Excel', 'Qlik', 'NPL', 'Regulatory Reporting'],
      href: "https://www.zenithglobal.eu/en/"
    },
    ],
  },
  {
    id: 'education',
    icon: 'lucide:graduation-cap',
    path: 'education/',
    num: '03',
    preview: 'double M.Sc. in CS · cum laude',
    details: 'CUM LAUDE ×2',
    items: [
      {
        title: 'Double M.Sc. Computer Science — Fintech',
        meta: 'EIT Digital · 2023–25',
        role: 'Università di Trento & ELTE University Budapest · taught in English · 110 cum laude (IT), 5/5 (HU)',
        desc: 'Double degree in computer science with a Fintech specialisation path, co-funded by the European Union — two years across Trento and Budapest.',
        bullets: [
            'EIT Student Ambassador: promoted the programme at tech events to prospective students and business sponsors.',
            'Thesis: Comparative Efficacy of RAG Techniques in ECB Collateral Asset Eligibility Management - Towards a Novel Multi-Agent Architecture.',
          ],
        tags: ['Machine Learning', 'Deep Learning', 'Graph Neural Networks', 'Financial Simulation', 'Data Mining', 'Distributed Systems', 'Blockchain'],
      },
      {
        title: 'B.Sc. Economics, Organizations & Markets',
        meta: 'Cattolica · 2019–22',
        role: 'Università Cattolica del Sacro Cuore, Milan · taught in Italian · 110 cum laude',
        desc: 'Markets-focused economics degree with a strong quantitative component, covering econometrics and statistical analysis.',        bullets: [
          'Thesis: Bitcoin and 10-year US Treasury yields — analysing the relationship between two time series.',
        ],
        tags: ['Python', 'R', 'Econometrics', 'Time Series', 'Statistics'],
      }, 
      {
        title: 'Summer School in Fintech',
        meta: 'UPM Madrid · 2024',
        role: 'Universidad Politécnica de Madrid · fully funded, selected by EIT Digital',
        desc: 'Two-week intensive on fintech, machine learning applied to finance, fintech regulation, and blockchain.',
        tags: ['Fintech', 'Project Management', 'Networking', 'Pitching'],

      },
      
    ],
  },
  {
    id: 'talks',
    icon: 'lucide:presentation',
    path: 'talks/',
    num: '04',
    preview: 'hackathons · conferences · seminars',     
    details: '100+ TRAINED',
    items: [
      {
        title: 'MAIN — Market AI Network',
        meta: 'Eurosystem · ongoing',
        desc: 'ECB-hosted conference bringing together markets and IT experts from across the national central banks to discuss developments in AI and technology for markets and central banking, and to showcase ongoing projects and initiatives at each institution. Presenting on behalf of the ECB.',
      },
      {
        title: 'LLM & RAG training for ECB staff',
        meta: '5 sessions · 100+ attendees',
        desc: 'Peer-to-peer training delivered as part of an ECB initiative supporting staff adoption of AI. Sessions covered retrieval-augmented generation and agent workflows, complemented by hands-on workshops.',
      },
      {
        title: 'SurrealDB × LangChain Hackathon',
        meta: 'London · 2026',
        desc: 'Build a LangChain agent on a knowledge graph in SurrealDB, in three days, solving a real business need. Working in a team of five, we built an AI platform with a chat interface for supply-chain due diligence, letting companies ask about their suppliers and partners.',        
        tags: ['LangChain', 'SurrealDB', 'Agents', 'Knowledge Graphs'],
        href: 'https://www.linkedin.com/posts/jacopo-manenti-7885651a7_many-thanks-to-surrealdb-and-langchain-for-ugcPost-7436882219870150656-lJLj/',
      },
      {
        title: 'ECB Hackathon — "From News to AI Forecasts"',
        meta: 'Frankfurt · 2025',
        role: '1st place',
        desc: 'Improve medium-term forecasts of Eurozone negotiated wages using news data. Working in a team of six, we built sentiment-driven economic indicators from the GDELT Global Knowledge Graph and combined them with traditional indicators to fine-tune Chronos II, a time-series foundation model. First place.',
        tags: ['Chronos II', 'GDELT'],
        href:'https://www.linkedin.com/posts/in-the-5th-edition-of-our-hackathon-series-ugcPost-7399837801896099840-9qSu/'

      },



    ],
  },
  {
    id: 'cv',
    icon: 'lucide:file-down',
    path: 'cv/',
    num: '05',
    preview: 'download · updated 2026-07',
    details: 'UPDATED 2026-07 - click to download',
    cv: true,
    items: [
    {
      title: 'CV — Full',
      meta: 'two pages · 2026-07',
      desc: 'Comprehensive two-page CV with experience, education, projects, skills, publications, and talks.',
      href: '/files/cv-full.pdf',
      download: true,
    },
    {
      title: 'CV — ATS friendly',
      meta: 'one page · 2026-07',
      desc: 'CV optimized for Applicant Tracking Systems and condensed to a single page.',
      href: '/files/cv-onepager.pdf',
      download: true,
    },
  ],
  },
];