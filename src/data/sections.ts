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
        title: '*rag-collateral-eligibility',
        meta: 'ECB · 2025–26',
        desc: 'LLM-powered RAG chatbot on ECB collateral eligibility and haircut rules. Curated knowledge base, retrieval pipeline grounded in official sources. Deployed on AWS, used daily by ECB & NCB experts.',
      },
      {
        title: '*chronos-wage-forecasting',
        meta: '1st place · 2025',
        desc: 'Sentiment-driven economic indicators from the GDELT Global Knowledge Graph, refining the Chronos II foundation model for Eurozone negotiated-wage forecasts. First place, ECB hackathon.',
      },
      {
        title: 'zk-algorithmic-trading',
        meta: '2025',
        desc: 'High-frequency trading bot on S&P 500 (Alpaca API) with bracket orders, Grafana/InfluxDB monitoring, and Zero-Knowledge trade verification via Zokrates smart contracts.',
        href: 'https://github.com/jacopomanenti01/Privacy-Preserving-Algorithmic-Trading-with-Zero-Knowledge-Proofs'
      },
      {
        title: 'gnn-fraud-detection',
        meta: '2024',
        desc: 'Graph neural networks for Bitcoin fraud detection — 95% AUC-ROC on the Elliptic dataset, +12% over GCN baseline using GAT, GraphSMOTE and GNN Transformer.',
        href: 'https://github.com/jacopomanenti01/Graph-Neural-Networks'
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
        desc: 'Active presenter showcasing AI projects to central-banking professionals across the Eurosystem.',
      },
      {
        title: 'LLM & RAG training for ECB staff',
        meta: '5 sessions',
        desc: 'Peer-to-peer trainer: 5 sessions on LLMs and RAG for 100+ ECB employees.',
      },
      {
        title: 'AWS × European Central Bank Hackathon',
        meta: 'Frankfurt · 2025',
        desc: 'AI platform for supply-chain due diligence — agents and knowledge graphs, built in 3 days.',
        href:'https://www.linkedin.com/posts/in-the-5th-edition-of-our-hackathon-series-ugcPost-7399837801896099840-9qSu/'
      },
      {
        title: 'SurrealDB × LangChain Hackathon',
        meta: 'London · 2026',
        desc: 'AI platform for supply-chain due diligence — agents and knowledge graphs, built in 3 days.',
        href:'https://www.linkedin.com/posts/jacopo-manenti-7885651a7_many-thanks-to-surrealdb-and-langchain-for-ugcPost-7436882219870150656-lJLj/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADBQeBgBuPl7lszuUFa_le4Z63FnU7qgXbg'
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
      desc: 'Complete record: experience, education, projects, skills, talks.',
      href: '/files/cv-full.pdf',
      download: true,
    },
    {
      title: 'CV — One-pager',
      meta: 'one page · 2026-07',
      desc: 'Condensed to a single page. The version to send when brevity matters.',
      href: '/files/cv-onepager.pdf',
      download: true,
    },
  ],
  },
];