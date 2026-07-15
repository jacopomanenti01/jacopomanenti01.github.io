
export interface SectionItem {
  title: string;
  meta: string;
  desc: string;
  href?: string;     
  download?: boolean; 
}

export interface Section {
  id: string;
  path: string;
  num: string;
  preview: string;
  details: string;
  items: SectionItem[];
  footnote?: string; // optional (the ?)
  cv?: boolean;
}

export const sections: Section[] = [
  {
    id: 'projects',
    path: 'projects/',
    num: '01',
    preview: 'rag-ecb · gnn-fraud · zk-trading',
    details: '*code available on request',
    items: [
      {
        title: '*rag-collateral-eligibility',
        meta: 'ECB · 2025–26',
        desc: 'LLM-powered RAG chatbot on ECB collateral eligibility and haircut rules. Curated knowledge base, retrieval pipeline grounded in official sources. Deployed on AWS, used daily by ECB & NCB experts.',
      },
      {
        title: 'chronos-wage-forecasting',
        meta: '1st place · 2025',
        desc: 'Sentiment-driven economic indicators from the GDELT Global Knowledge Graph, refining the Chronos II foundation model for Eurozone negotiated-wage forecasts. First place, ECB hackathon.',
      },
      {
        title: 'zk-algorithmic-trading',
        meta: '2025',
        desc: 'High-frequency trading bot on S&P 500 (Alpaca API) with bracket orders, Grafana/InfluxDB monitoring, and Zero-Knowledge trade verification via Zokrates smart contracts.',
      },
      {
        title: 'gnn-fraud-detection',
        meta: '2024',
        desc: 'Graph neural networks for Bitcoin fraud detection — 95% AUC-ROC on the Elliptic dataset, +12% over GCN baseline using GAT, GraphSMOTE and GNN Transformer.',
      },
    ],
    footnote: '+ 3 more on GitHub →',
  },
  {
    id: 'career',
    path: 'career/',
    num: '02',
    preview: 'ecb · zenith-global',
    details: '2022 — NOW',
    items: [
      {
        title: 'European Central Bank',
        meta: 'Frankfurt · 2024–now',
        desc: 'Financial Analyst, Market Operations — Innovation & Data Analytics. Built the collateral RAG system, dbt pipelines for repo & money-market data (Bloomberg, OneTick), ML-driven research for US bond portfolio rebalancing.',
      },
      {
        title: 'Zenith Global S.p.A.',
        meta: 'Milan · 2022–23',
        desc: 'Junior Analyst, Master Servicer for NPL portfolios — €1B+ Gross Book Value. Investor reporting with Qlik, regulatory reporting for the Bank of Italy.',
      },
    ],
  },
  {
    id: 'education',
    path: 'education/',
    num: '03',
    preview: 'm.sc ×2 · cum laude',
    details: 'CUM LAUDE ×2',
    items: [
      {
        title: 'Double M.Sc. Computer Science — Fintech',
        meta: 'EIT Digital · 2023–25',
        desc: 'Università di Trento & ELTE Budapest. 110 cum laude (IT), 5/5 (HU).',
      },
      {
        title: 'B.Sc. Economics, Organizations & Markets',
        meta: 'Cattolica · 2019–22',
        desc: 'Università Cattolica del Sacro Cuore, Milan. 110 cum laude.',
      },
      {
        title: 'Summer School in Fintech',
        meta: 'UPM Madrid · 2024',
        desc: 'ML applied to finance, fintech regulation, and blockchain.',
      },
    ],
  },
  {
    id: 'talks',
    path: 'talks/',
    num: '04',
    preview: 'main-network · 100+ trained',
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
        title: 'SurrealDB × LangChain Hackathon',
        meta: 'London · 2026',
        desc: 'AI platform for supply-chain due diligence — agents and knowledge graphs, built in 3 days.',
      },
    ],
  },
  {
    id: 'cv',
    path: 'cv/',
    num: '05',
    preview: 'one page · updated 2026-07',
    details: 'UPDATED 2026-07',
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
