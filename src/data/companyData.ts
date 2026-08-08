import { CompanyInfo, ServiceItem, PortfolioItem, Testimonial, ClientSocialPage, FaqItem, VideoDemo } from '../types';

export const companyDetails: CompanyInfo = {
  name: 'Everto Marketing',
  established: 2025,
  phone: '9835120266',
  whatsapp: '919835120266',
  email: 'Evertomarketing@gmail.com',
  address: 'Ranchi, Jharkhand',
  gstin: '20GCAPK2021P2ZW',
  udyamNo: 'UDYAM20047755',
  googleBusinessUrl: 'https://share.google/Vz22wknLFOs6F8vUM',
  instagramUrl: 'https://www.instagram.com/evertomarketing/',
  facebookUrl: 'https://www.facebook.com/evertomarketing',
};

export const servicesData: ServiceItem[] = [
  // Video Production
  {
    id: 'ai-video',
    category: 'video',
    title: 'AI Video Production',
    price: '₹1,200',
    numericPrice: 1200,
    description: 'Hyper-realistic AI avatars, voiceovers, scriptwriting, and high-converting marketing videos generated with cutting-edge AI tech.',
    features: [
      'Photorealistic AI Avatars & Voiceovers',
      'Scriptwriting & Storyboarding included',
      'Multi-language voice support',
      'Full Commercial Usage Rights',
      'Fast 24-48 hour turnaround'
    ]
  },
  {
    id: 'ugc-video',
    category: 'video',
    title: 'UGC Video Creation',
    price: '₹1,000',
    numericPrice: 1000,
    description: 'Authentic creator-led videos that build trust, demonstrate products naturally, and improve engagement on short-form social platforms.',
    features: [
      'Creator-led product storytelling',
      'High-converting hooks and scripts',
      'Optimized for Instagram Reels & Shorts',
      'Edited final video included'
    ],
    popular: true
  },
  {
    id: 'video-editing',
    category: 'video',
    title: 'Professional Video Editing',
    price: '₹400',
    numericPrice: 400,
    description: 'Engaging, fast-paced video editing with animated captions, motion graphics, sound effects, and color grading for reels & long-form content.',
    features: [
      'Alex Hormozi style animated subtitles',
      'Sound FX, transitions & B-roll insertion',
      'Color grading & audio enhancement',
      'Optimized 9:16 or 16:9 output',
      'Unlimited minor revisions'
    ]
  },

  // Website Development
  {
    id: 'static-website',
    category: 'web',
    title: 'Static Website',
    price: '₹10,000',
    numericPrice: 10000,
    description: 'Ultra-fast, mobile-friendly landing pages and corporate static websites designed to convert visitors into loyal clients.',
    features: [
      'Up to 5 Responsive HTML/React Pages',
      'Mobile & Desktop Optimized Layout',
      'SEO Friendly Code Structure',
      'Contact Form with Email Notifications',
      '1 Year Free Maintenance Support'
    ]
  },
  {
    id: 'dynamic-website',
    category: 'web',
    title: 'Dynamic Website',
    price: '₹20,000',
    numericPrice: 20000,
    description: 'Feature-rich dynamic web application with CMS integration, interactive lead forms, real-time database, and blog publishing.',
    features: [
      'Custom Admin Panel / Content Management',
      'Unlimited Pages & Dynamic Blog',
      'Database Integration (Firestore / SQL)',
      'Advanced Lead Generation Forms',
      'Fast Loading Speed & Core Web Vitals Optimization'
    ],
    popular: true
  },
  {
    id: 'ecommerce-website',
    category: 'web',
    title: 'E-commerce Website',
    price: '₹40,000',
    numericPrice: 40000,
    description: 'Complete online storefront featuring secure Razorpay/Stripe payment gateway, order tracking, product management, and cart abandoned recovery.',
    features: [
      'Unlimited Product Catalog Setup',
      'Payment Gateway & UPI Integration',
      'Order Management & Invoice Generator',
      'Coupons & Discount Engine',
      'Automated WhatsApp/Email Notifications'
    ]
  },

  // SEO Services
  {
    id: 'seo-package',
    category: 'seo',
    title: 'SEO Service Package',
    price: '₹15,000',
    numericPrice: 15000,
    description: 'Comprehensive 360° SEO package combining On-Page, Technical SEO, Local GMB optimization, and high-DA backlink building for #1 rank on Google.',
    features: [
      'Full On-Page SEO & Keyword Research',
      'Technical SEO Audit & Speed Fixes',
      'Google My Business (GMB) Local Optimization',
      'High Domain Authority Backlink Campaign',
      'Monthly Ranking & Organic Traffic Reports'
    ],
    popular: true
  },

  // Meta Ads Management
  {
    id: 'meta-ads',
    category: 'meta-ads',
    title: 'Meta Ads Management',
    price: '₹5,000',
    numericPrice: 5000,
    description: 'Data-driven Facebook & Instagram ad campaigns targeting high-intent leads and maximizing Return on Ad Spend (ROAS).',
    features: [
      'Target Audience & Pixel Setup',
      'High-CTR Ad Creative Copywriting',
      'A/B Testing of Creatives & Audiences',
      'Conversion API & Event Tracking',
      'Weekly ROAS & Sales Scaling Reports'
    ]
  },

  // Social Media Marketing
  {
    id: 'social-media-marketing',
    category: 'smm',
    title: 'Social Media Marketing',
    price: 'Starting from ₹10,000',
    numericPrice: 10000,
    description: 'End-to-end social media management across Instagram, Facebook, and YouTube to build brand authority and organic follower growth.',
    features: [
      'Monthly Content Calendar Strategy',
      'Custom Posts, Reels & Story Graphics',
      'Community Management & DM Automation',
      'Influencer Marketing & Hashtag Strategy',
      'Growth Analytics & Audience Insights'
    ],
    popular: true
  }
];

export const videoDemosData: VideoDemo[] = [
  {
    id: 'demo-ai-pants',
    title: 'AI Fashion & Apparel Commercial (Premium Stretch Pants)',
    category: 'ai',
    thumbnail: 'https://images.unsplash.com/photo-1542272604-780c36856842?auto=format&fit=crop&w=800&q=80',
    videoUrl: '/https://res.cloudinary.com/xkasds9q/video/upload/pant_ad_2_2_xdtte1.mp4',
    duration: 'Custom video',
    description: 'AI-generated high-converting apparel ad featuring stretch pants with soft cotton touch, wrinkle resistance, office & outing styling.'
  },
  {
    id: 'demo-ai-nimki',
    title: 'AI Snack Brand Commercial (Chacha Special Nimki)',
    category: 'ai',
    thumbnail: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://res.cloudinary.com/xkasds9q/video/upload/nimki_1_j31fbq.mp4',
    duration: 'Custom video',
    description: 'AI-generated snack brand commercial with product-focused visuals and a high-impact promotional story.'
  },
  {
    id: 'demo-ai-lv',
    title: 'AI Travel Agency Video (Astha Travels) — Creative 1',
    category: 'ai',
    thumbnail: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://res.cloudinary.com/xkasds9q/video/upload/Astha_Travels_AI_ads_pnewbe.mp4',
    duration: 'Custom video',
    description: 'AI-powered travel agency creative for Astha Travels, designed to promote destinations and drive bookings.'
  },
  {
    id: 'demo-ai-hiflier',
    title: 'AI Travel Agency Video (Hiflier Travels)',
    category: 'ai',
    thumbnail: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://res.cloudinary.com/xkasds9q/video/upload/hiflier_travels_AI_ads_mjwbwo.mp4',
    duration: 'Custom video',
    description: 'AI-powered travel agency creative showcasing destination-led storytelling and booking promotion.'
  },
  {
    id: 'demo-ai-event',
    title: 'AI Event Management Promotion Video',
    category: 'ai',
    thumbnail: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://res.cloudinary.com/xkasds9q/video/upload/0808_3_njcgmd.mp4',
    duration: 'Custom video',
    description: 'AI-powered event management video created to build excitement, highlight key moments, and drive attendance.'
  },
  {
    id: 'demo-ai-astha',
    title: 'AI Travel Agency Video (Astha Travels) — Creative 2',
    category: 'ai',
    thumbnail: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://res.cloudinary.com/xkasds9q/video/upload/astha_travels_AI_Ads_2_e1vp4w.mp4',
    duration: 'Custom video',
    description: 'AI-generated travel promotional video featuring compelling visuals and a clear travel booking call-to-action.'
  },
  {
    id: 'demo-ugc-6',
    title: 'UGC Product Demo 6',
    category: 'ugc',
    thumbnail: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://res.cloudinary.com/xkasds9q/video/upload/E2_wk4qsh.mp4',
    duration: 'Custom video',
    description: 'Creator-led UGC video built to showcase product benefits in a natural, engaging format.'
  },
  {
    id: 'demo-ugc-7',
    title: 'UGC Product Demo 7',
    category: 'ugc',
    thumbnail: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
    videoUrl: '/https://res.cloudinary.com/xkasds9q/video/upload/WhatsApp_Video_2026-08-09_at_12.38.53_AM_sg1vwu.mp4',
    duration: 'Custom video',
    description: 'Authentic product-focused UGC creative designed for high short-form engagement.'
  },
  {
    id: 'demo-ugc-5',
    title: 'UGC Product Demo 5',
    category: 'ugc',
    thumbnail: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80',
    videoUrl: '/https://res.cloudinary.com/xkasds9q/video/upload/E3_renigr.mp4',
    duration: 'Custom video',
    description: 'Relatable creator video that brings a product story to life for social media viewers.'
  },
  {
    id: 'demo-ugc-3',
    title: 'UGC Product Demo 3',
    category: 'ugc',
    thumbnail: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://res.cloudinary.com/xkasds9q/video/upload/WhatsApp_Video_2026-08-09_at_12.33.14_AM_ay4xeq.mp4',
    duration: 'Custom video',
    description: 'Short, direct UGC video designed to stop the scroll and highlight a clear product benefit.'
  },
  {
    id: 'demo-edit-5',
    title: 'Professional Video Editing Demo 5',
    category: 'editing',
    thumbnail: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://res.cloudinary.com/xkasds9q/video/upload/UGC1_bwde4u.mp4',
    duration: 'Custom video',
    description: 'Custom-edited video demonstrating engaging pacing, polished visuals, and social-ready presentation.'
  },
  {
    id: 'demo-edit-1',
    title: 'Professional Video Editing Demo 1',
    category: 'editing',
    thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
    videoUrl: '/https://res.cloudinary.com/xkasds9q/video/upload/E6_ntbrde.mp4',
    duration: 'Custom video',
    description: 'Professional edit with refined transitions, sound treatment, and an attention-holding flow.'
  },
  {
    id: 'demo-edit-3-variant',
    title: 'Professional Video Editing Demo 3 — Variant',
    category: 'editing',
    thumbnail: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80',
    videoUrl: '/https://res.cloudinary.com/xkasds9q/video/upload/E4_kjzb7k.mp4',
    duration: 'Custom video',
    description: 'An alternate professional editing style for compelling social media content.'
  },
  {
    id: 'demo-edit-1-variant',
    title: 'Professional Video Editing Demo 1 — Variant',
    category: 'editing',
    thumbnail: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=800&q=80',
    videoUrl: '/https://res.cloudinary.com/xkasds9q/video/upload/E1_vlnmua.mp4',
    duration: 'Custom video',
    description: 'Custom editing demo with a distinct creative treatment and polished final delivery.'
  }
];

export const portfolioProjects: PortfolioItem[] = [
  {
    id: 'port-1',
    category: 'web',
    title: 'Subhash Homoeo Clinic Website',
    client: 'Subhash Homoeo Clinic (Subhash Ranjan)',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    description: 'Dynamic healthcare and homeopathy clinic web platform developed with patient appointment booking, treatment showcase, and online consultation.',
    metrics: 'Live Website',
    link: 'https://shrvan899.github.io/subhashomoeoclinic/'
  },
  {
    id: 'port-3',
    category: 'video',
    title: 'AI Fashion & Apparel Commercial (Premium Stretch Pants)',
    client: 'Premium Stretch Pants',
    image: 'https://images.unsplash.com/photo-1542272604-780c36856842?auto=format&fit=crop&w=800&q=80',
    description: 'AI-generated apparel commercial highlighting premium stretch pants with product-focused styling and marketing visuals.',
    metrics: 'AI Video Demo',
    videoUrl: '/videos/pant-ad-2.mp4'
  },
  {
    id: 'port-6',
    category: 'smm',
    title: 'Sri Radhey Jewellers Social Campaign',
    client: 'Sri Radhey Jewellers',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
    description: 'Aesthetic jewelry showcasing, viral reels, and local target audience growth on Instagram.',
    metrics: 'Active Instagram Page',
    link: 'https://www.instagram.com/sri_radhey_jewellers/'
  }
];

export const clientSocialPages: ClientSocialPage[] = [
  {
    name: 'Sri Radhey Jewellers',
    platform: 'Instagram',
    handle: '@sri_radhey_jewellers',
    followers: 'Jewelry Brand',
    growth: 'Viral Reels & Posts',
    link: 'https://www.instagram.com/sri_radhey_jewellers/',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Subhash Homoeo Clinic',
    platform: 'Instagram',
    handle: '@subhashhomoeoclinic',
    followers: 'Healthcare Page',
    growth: 'Patient Guidance & Tips',
    link: 'https://www.instagram.com/subhashhomoeoclinic/',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80'
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 't-1',
    name: 'Subhash Ranjan',
    company: 'Subhash Homoeo Clinic',
    role: 'Founder & Chief Homeopath',
    avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    content: 'Everto Marketing built our website subhashomoeoclinic with outstanding design and functionality. Patient appointments and online queries have increased significantly!',
    serviceUsed: 'Dynamic Website Development',
    location: 'Ranchi, Jharkhand'
  },
  {
    id: 't-2',
    name: 'Priya Singh',
    company: 'Astha Travels',
    role: 'Founder',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    content: 'The AI video promos created by Everto skyrocketed our Meta Ads ROAS from 1.8x to 4.5x. The ROI is unreal.',
    serviceUsed: 'AI Video & Meta Ads',
    location: 'Buxar, Bihar'
  },
  {
    id: 't-3',
    name: 'Amitabh Verma',
    company: 'Verma Real Estate Group',
    role: 'Marketing Head',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    content: 'Starting Meta Ads management with Everto at ₹5,000 was the best decision for our property listings. We generated over 400 verified buyer calls in a month.',
    serviceUsed: 'Meta Ads Management',
    location: 'Ranchi, Jharkhand'
  },
  {
    id: 't-4',
    name: 'Sneha Roy',
    company: 'GlowCare Organics',
    role: 'Co-Founder',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    content: 'Everto Marketing produced custom Video Ads and manages our Social Media accounts seamlessly. They are creative, reliable, and prompt.',
    serviceUsed: 'Social Media & Video Production',
    location: 'Dhanbad'
  }
];

export const faqsData: FaqItem[] = [
  {
    category: 'SEO',
    question: 'How long does it take to see results from Everto Marketing\'s SEO Package?',
    answer: 'Most of our clients in Ranchi and pan-India begin seeing initial ranking improvements within 30 to 45 days. Major keyword movements and traffic surges typically occur between 60 to 90 days after technical and on-page fixes.'
  },
  {
    category: 'Web Development',
    question: 'Are Everto Marketing websites mobile-responsive and SEO optimized?',
    answer: 'Yes, 100%! All websites created by Everto Marketing (Static at ₹10,000, Dynamic at ₹20,000, and E-commerce at ₹40,000) are built mobile-first, load under 1.5 seconds, and strictly follow Google Core Web Vitals guidelines.'
  },
  {
    category: 'Meta Ads',
    question: 'How does Meta Ads Management work at Everto Marketing?',
    answer: 'We craft high-converting ad copy, design eye-catching video creatives, configure Meta Pixel and CAPI event tracking, target your ideal audience demographics, and optimize daily for maximum ROAS.'
  },
  {
    category: 'General',
    question: 'Where is Everto Marketing located and how can I start?',
    answer: 'Everto Marketing was established in 2025 and is headquartered in Ranchi, Jharkhand. You can call or WhatsApp us directly at 9835120266 or email Evertomarketing@gmail.com for an instant proposal!'
  }
];

export const techStackList = [
  { name: 'React.js', category: 'Web Dev', desc: 'Modern reactive component architecture' },
  { name: 'Tailwind CSS', category: 'Styling', desc: 'Utility-first fast responsive styling' },
  { name: 'Node.js & Express', category: 'Backend', desc: 'Scalable API & server runtime' },
  { name: 'Gemini AI', category: 'AI Tools', desc: 'Scriptwriting & content generation engine' },
  { name: 'Meta Ads Manager', category: 'Marketing', desc: 'Advanced campaign targeting & pixel' },
  { name: 'SEMrush & Ahrefs', category: 'SEO', desc: 'In-depth keyword research & competitor audit' },
  { name: 'Adobe Premiere & After Effects', category: 'Video', desc: 'Pro video editing & motion graphics' }
];

export const workProcessSteps = [
  {
    step: '01',
    title: 'Discovery & Consultation',
    desc: 'We analyze your business goals, target audience, brand identity, and current digital presence.'
  },
  {
    step: '02',
    title: 'Custom Growth Strategy',
    desc: 'Our specialists build a tailored strategy across Web Dev, Video, SEO, or Paid Ads with clear KPIs.'
  },
  {
    step: '03',
    title: 'Execution & Creative Build',
    desc: 'We craft high-converting code, AI videos, graphic designs, and optimized SEO content.'
  },
  {
    step: '04',
    title: 'Launch, Track & Scale',
    desc: 'We deploy your assets, monitor analytics in real-time, refine conversions, and scale your ROI.'
  }
];
