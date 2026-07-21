// Central content source for the Meta Growth Labs site.
// Derived from the company pitch deck.

export const site = {
  name: "Meta Growth Labs",
  tagline: "Scaling Brands with Data-Driven Growth",
  slogan: "Scale Faster. Grow Smarter.",
  description:
    "Meta Growth Labs is a performance-driven marketing agency specializing in Performance Marketing, Web3 Growth, and Fundraising for innovative brands and blockchain projects.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.metagrowthlabs.com",
  email: "labsmetagrowth@gmail.com",
  telegram: "@metagrowthlabs",
  telegramUrl: "https://t.me/metagrowthlabs",
  linkedin: "https://linkedin.com/in/usamasaleem07",
  linkedinName: "Usama Saleem",
  location: "Global / Remote",
  website: "www.metagrowthlabs.com",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Industries", href: "#industries" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Fundraising", href: "#fundraising" },
  { label: "Contact", href: "#contact" },
];

export const heroFeatures = [
  { title: "ROI Focused", sub: "Strategies" },
  { title: "Web3 Native", sub: "Marketing" },
  { title: "Data Driven", sub: "Decisions" },
  { title: "Scalable", sub: "Growth" },
  { title: "Transparent", sub: "Approach" },
];

export const aboutStats = [
  { num: "100+", label: "Projects Executed" },
  { num: "50M+", label: "Users Reached Worldwide" },
  { num: "300%", label: "Average Growth Achieved" },
  { num: "10", label: "Countries Served" },
];

export const pillars = [
  {
    title: "Our Vision",
    body: "To be the most trusted growth partner for global brands and web3 projects, driving innovation and creating long-term impact.",
  },
  {
    title: "Our Mission",
    body: "To empower businesses and projects with data-driven marketing solutions that deliver measurable growth, strong communities, and successful fundraising.",
  },
  {
    title: "Why Choose Us",
    body: "We are ROI-focused, transparent, and result-oriented. Our expert team, proven strategies, and global network ensure your brand grows faster and smarter.",
  },
];

export const services = [
  { name: "Performance Marketing", body: "ROI-focused campaigns that drive measurable results and business growth." },
  { name: "Google Ads", body: "High-converting search, display, YouTube & shopping campaigns to maximize ROI." },
  { name: "Meta Ads", body: "Advanced targeting & creative strategies to drive engagement, leads & sales." },
  { name: "LinkedIn Ads", body: "B2B lead generation campaigns that build pipeline and accelerate growth." },
  { name: "Web3 Marketing", body: "Specialized marketing strategies for blockchain, crypto & Web3 projects." },
  { name: "Influencer Marketing", body: "Connect with the right KOLs to expand reach, build trust & drive growth." },
  { name: "Community Management", body: "Build, engage & grow active communities on Telegram, Discord & more." },
  { name: "ICO / IDO Marketing", body: "End-to-end marketing support for successful token sales & fundraising." },
  { name: "Market Making", body: "Increase liquidity, reduce volatility and maintain healthy trading volume." },
  { name: "CEX Listing", body: "Get listed on top centralized exchanges to increase credibility & liquidity." },
  { name: "DEX Listing", body: "Strategic listing on leading decentralized exchanges to maximize reach." },
  { name: "IEO Support & Launchpad", body: "Complete support for IEO campaigns on trusted launchpads." },
];

export const processSteps = [
  {
    step: "01",
    title: "Strategy",
    sub: "Plan with Purpose.",
    items: ["Market & Competitor Research", "Audience & User Persona", "Growth Strategy Development", "Channel & Budget Planning", "KPI & Goal Setting"],
  },
  {
    step: "02",
    title: "Launch",
    sub: "Execute with Precision.",
    items: ["Campaign Setup & Tracking", "Ad Creation & Copywriting", "Landing Page Optimization", "Pixel, Tag & Conversion Setup", "Community & KOL Onboarding"],
  },
  {
    step: "03",
    title: "Optimize",
    sub: "Improve. Test. Scale.",
    items: ["A/B Testing & Creatives", "Audience & Placement Optimization", "Bid & Budget Optimization", "Funnel & CRO Optimization", "Daily Monitoring & Reporting"],
  },
  {
    step: "04",
    title: "Scale",
    sub: "Scale What Works.",
    items: ["Scale Winning Campaigns", "Expand to New Channels", "Advanced Targeting", "Lookalike & Retargeting Scale", "Sustainable Growth & ROI"],
  },
];

export const industries = [
  { name: "Crypto & Blockchain", body: "From new tokens to leading protocols, we help Web3 projects gain visibility, build communities, and drive mass adoption." },
  { name: "SaaS", body: "Helping SaaS companies generate high-quality leads, increase sign-ups, and accelerate recurring revenue." },
  { name: "E-Commerce", body: "Driving targeted traffic, boosting conversions, and scaling online stores with performance marketing." },
  { name: "AI & Technology", body: "Positioning AI & tech brands for growth with strategic campaigns that drive engagement and credibility." },
  { name: "Fintech", body: "Building trust and acquiring users for fintech platforms through data-driven acquisition strategies." },
  { name: "Gaming & NFT", body: "Promoting games, NFTs & P2E ecosystems with community building, influencer campaigns & user acquisition." },
  { name: "Healthcare & Wellness", body: "Helping health & wellness brands grow awareness, engage audiences, and drive meaningful conversions." },
];

export const caseStudies = [
  {
    id: "01",
    name: "NFTXC",
    type: "NFT Marketplace",
    campaign: "Marketing Campaign",
    body: "We executed a full-scale marketing campaign for NFTXC on PinkSale and got it trending on the platform.",
    metrics: [
      { num: "5.2M+", label: "Impressions" },
      { num: "72K+", label: "Website Visitors" },
      { num: "21K+", label: "Token Holders" },
      { num: "#3", label: "Trending on PinkSale" },
    ],
    quote: "The Meta Growth Labs team brought insane visibility and made us trend on PinkSale. Highly recommended!",
    author: "NFTXC Team",
  },
  {
    id: "02",
    name: "Whistle",
    type: "MLM Platform",
    campaign: "Fundraising Campaign",
    body: "We helped Whistle, an MLM platform, raise funds and build momentum with a result-driven marketing strategy.",
    metrics: [
      { num: "$100K+", label: "Total Business Generated" },
      { num: "25K+", label: "Total Sign-ups" },
      { num: "$50K+", label: "In Fundraised Amount" },
      { num: "300%+", label: "Growth in Network" },
    ],
    quote: "Meta Growth Labs played a key role in our success. Their strategy brought us a solid $100K+ business.",
    author: "Whistle Team",
  },
  {
    id: "03",
    name: "Edchess",
    type: "Gaming Platform",
    campaign: "Marketing Campaign",
    body: "We built awareness, acquired users, and scaled Edchess globally with performance marketing and community strategies.",
    metrics: [
      { num: "3.8M+", label: "Impressions" },
      { num: "40K+", label: "User Registrations" },
      { num: "18K+", label: "App Downloads" },
      { num: "6.5K+", label: "Active Players" },
    ],
    quote: "The marketing strategy was on point. We saw massive user growth and engagement across all channels.",
    author: "Edchess Team",
  },
  {
    id: "04",
    name: "Nooks Art",
    type: "E-commerce Store",
    campaign: "Meta & Google Ads",
    body: "We ran high-converting Meta and Google Ads campaigns to scale Nooks Art's online store and boost revenue.",
    metrics: [
      { num: "1.6M+", label: "Ad Clicks" },
      { num: "85K+", label: "Website Purchases" },
      { num: "$210K+", label: "Revenue Generated" },
      { num: "4.2X", label: "ROAS Achieved" },
    ],
    quote: "The ads were perfectly optimized and delivered excellent ROI. Sales increased significantly!",
    author: "Nooks Art Team",
  },
];

export const reachStats = [
  { num: "200+", label: "KOLs & Influencers" },
  { num: "1000+", label: "Telegram Groups" },
  { num: "1M+", label: "Active Subscribers" },
  { num: "500M+", label: "Total Impressions" },
];

export const fundraisingServices = [
  { name: "Fundraising Strategy", body: "Custom fundraising strategies tailored to your project's goals, stage, and market." },
  { name: "Investor Sourcing", body: "Access to our global network of VCs, crypto funds, angels, and HNWIs." },
  { name: "Pitch Deck Creation", body: "High-converting pitch decks that showcase your vision and drive investor interest." },
  { name: "Whitepaper Development", body: "Professional, investor-ready whitepapers that build trust and credibility." },
  { name: "Investor Outreach", body: "Targeted outreach campaigns and follow-ups that get responses and book meetings." },
  { name: "Due Diligence Support", body: "We help you prepare all the essential docs, tokenomics, and legal frameworks." },
  { name: "Negotiation Support", body: "We assist in term negotiations to ensure the best outcome for your project." },
  { name: "Closing & Continued Support", body: "From closing the round to post-investment support — we stay with you long-term." },
];

export const fundraisingStats = [
  { num: "150+", label: "Successful Rounds Facilitated" },
  { num: "$100M+", label: "Total Capital Raised" },
  { num: "300+", label: "Active Investors in Network" },
  { num: "90%+", label: "Project Success Rate" },
];

export const whyUs = [
  { title: "Web3 Native Expertise", body: "We live and breathe Web3. Our team understands the ecosystem, trends, and what it takes to win." },
  { title: "Data-Driven Strategies", body: "We don't rely on guesswork. Every decision is backed by real data, insights, and proven frameworks." },
  { title: "Strong Network & Connections", body: "200+ KOLs, 1000+ Telegram groups & strong relationships across VCs, exchanges & communities." },
  { title: "Results That Speak", body: "From trending launches to six-figure fundraising, we deliver measurable results that drive real impact." },
  { title: "Transparency & Communication", body: "We believe in clear, honest, and timely communication at every step of the journey." },
  { title: "Long-Term Partnership", body: "We're not just a service provider — we're your growth partner, invested in your long-term success." },
];
