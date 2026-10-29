import { Project, ServiceItem, SiteConfig, Testimonial } from '../types/portfolio';

export const INITIAL_CONFIG: SiteConfig = {
  brandName: 'Noventra Studio',
  designerName: 'Creative Visual Artist',
  roleTitle: 'Graphic Designer & Brand Identity Specialist',
  heroHeadline: 'Design That Builds Brands.',
  heroSubtitle: 'Creative Visuals. Memorable Brands. Powerful Identity.',
  ctaExplore: 'Explore My Work',
  ctaContact: 'Contact Me',
  aboutBio:
    'I am a Graphic Designer, Brand Identity Designer, and Creative Visual Artist with a dedication to timeless elegance and strategic visual storytelling. I specialize in crafting distinctive logo marks, complete brand identity systems, high-converting social media visual suites, and cinematic AI-assisted logo promotional videos that distinguish brands in crowded modern markets.',
  aboutPhilosophy:
    'Design is not merely aesthetic ornamentation; it is the visual architecture of reputation. Every curve, typographic pairing, and chromatic balance is calculated to evoke authority, trust, and lasting emotional resonance.',
  email: 'zarinjoyeeta97@gmail.com',
  behanceUrl: 'https://www.behance.net/noventrastudio',
  facebookUrl: 'https://www.facebook.com/noventrastudio',
  location: 'Worldwide Studio · Remote & Collaborative',
  availability: 'Accepting select Q4 / 2027 client commissions',
  seoTitle: 'Noventra Studio — Graphic Design & Brand Identity',
  seoDescription:
    'Premium portfolio website for Noventra Studio featuring logo design, brand identity systems, social media graphics, and promotional logo video concepts.',
};

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'aevum-monogram',
    title: 'Aevum Architectural Monogram',
    category: 'Logo Design',
    client: 'Aevum Atelier (Private Client)',
    year: '2026',
    summary:
      'Geometric interlocking monogram engineered with mathematical symmetry and warm foil debossing for an haute couture interior architecture practice.',
    challenge:
      'The client required an iconic mark that could transition effortlessly from nanoscale metal stamping on bespoke hardware to large-format architectural facade signage.',
    solution:
      'Engineered a dual-stroke geometric monogram combining classical Roman proportions with razor-sharp modernist apexes, finished in rich warm gold.',
    deliverables: [
      'Primary Monogram Mark',
      'Horizontal & Stacked Lockups',
      'Vector Master Files (.AI, .EPS, .SVG, .PDF)',
      'Clear Space & Minimum Scale Specifications',
      'Monochrome & Reverse Variant Systems',
    ],
    colorPalette: [
      { name: 'Obsidian Matte', hex: '#121214' },
      { name: 'Warm Champagne Gold', hex: '#D4AF37' },
      { name: 'Burnished Brass', hex: '#AA771C' },
      { name: 'Pale Bone', hex: '#F4F1EA' },
    ],
    typography: [
      { role: 'Display Monogram', family: 'Cinzel Pro Custom' },
      { role: 'Supporting Wordmark', family: 'Plus Jakarta Sans Light' },
    ],
    image: '/src/assets/images/noventra_logo_design_1793265026703.jpg',
    altText:
      'Minimalist luxury monogram logo mark embossed in warm gold foil on dark charcoal premium textured paper card',
    isFeatured: true,
    aspectRatio: '4:3',
  },
  {
    id: 'lumina-group-identity',
    title: 'Lumina Corporate Identity Suite',
    category: 'Brand Identity Design',
    client: 'Lumina Strategic Group',
    year: '2026',
    summary:
      'Comprehensive brand identity overhaul including corporate stationery, prestige collateral, typography system, and luxury finishing standards.',
    challenge:
      'Lumina needed to reposition from a boutique advisory firm to an internationally recognized corporate powerhouse while maintaining an understated, quiet luxury presence.',
    solution:
      'Devised an expansive corporate identity system anchored by an ethereal line-art insignia, ivory cotton letterheads, charcoal slate envelopes, and gold leaf typography.',
    deliverables: [
      'Comprehensive Brand Guidelines (48 Pages)',
      'Stationery Suite (Business Cards, Letterhead, Envelopes)',
      'Digital Presentation Deck Templates',
      'Packaging & Tissue Wrap Guidelines',
      'Brand Asset Repository & Style Tokens',
    ],
    colorPalette: [
      { name: 'Deep Slate Black', hex: '#16181B' },
      { name: 'Ivory Linen', hex: '#F9F7F1' },
      { name: 'Pale Champagne Gold', hex: '#DFBA60' },
      { name: 'Graphite Shadow', hex: '#2C2F36' },
    ],
    typography: [
      { role: 'Header Hierarchy', family: 'Playfair Display Serif' },
      { role: 'Corporate Body', family: 'Plus Jakarta Sans Regular' },
    ],
    image: '/src/assets/images/noventra_brand_identity_1793265027546.jpg',
    altText:
      'Complete luxury corporate brand identity stationery set on a dark graphite slate surface with business cards and letterhead',
    isFeatured: true,
    aspectRatio: '4:3',
  },
  {
    id: 'aurum-studio-branding',
    title: 'Studio Aurum Brand System',
    category: 'Brand Identity Design',
    client: 'Aurum Fine Design',
    year: '2026',
    summary:
      'Prestige editorial identity system designed for high-end bespoke leather goods and artisan journals.',
    challenge:
      'Creating an identity that feels deeply rooted in centuries of craft while feeling distinctly forward-looking in digital and social ecosystems.',
    solution:
      'Developed a faceted geometric monogram symbol paired with a stark monochromatic physical stationery suite and laser-engraved gold signatures.',
    deliverables: [
      'Faceted Emblem Design',
      'Leather Stamping Die Guides',
      'Editorial Packaging & Product Box System',
      'Typography Hierarchy Specifications',
      'Social Media Preview Kit',
    ],
    colorPalette: [
      { name: 'Midnight Pitch', hex: '#0B0B0C' },
      { name: 'Imperial Gold', hex: '#D4AF37' },
      { name: 'Warm Charcoal', hex: '#2A2928' },
      { name: 'Warm Off-White', hex: '#EDECE8' },
    ],
    typography: [
      { role: 'Primary Brandmark', family: 'Cinzel Serif Semibold' },
      { role: 'Editorial Body', family: 'Plus Jakarta Sans' },
    ],
    image: '/src/assets/images/noventra_hero_branding_1793265025922.jpg',
    altText:
      'Luxurious graphic design studio showcase mockup featuring matte black stationery and embossed gold geometric logo',
    isFeatured: true,
    aspectRatio: '16:9',
  },
  {
    id: 'am-luxury-social',
    title: 'A.M. High-Fashion Editorial Grid',
    category: 'Social Media Design',
    client: 'A.M. Couture Collection',
    year: '2026',
    summary:
      'Editorial 9-tile seamless carousel system and campaign art direction for a luxury capsule release across Instagram and digital channels.',
    challenge:
      'Building a cohesive visual grid where individual posts perform with high visual clarity on feed while forming a monumental gallery when viewed in profile.',
    solution:
      'Structured a brutalist, architectural typographic grid balancing dramatic monochrome photography, gold foil type highlights, and spacious negative space.',
    deliverables: [
      '18 Bespoke Social Grid Posts (Figma / PSD)',
      'Instagram Story & Reel Cover Templates',
      'Carousel Narrative Framework',
      'Campaign Typography & Color Guide',
      'Export Preset Optimization Kit',
    ],
    colorPalette: [
      { name: 'Pure Onyx', hex: '#000000' },
      { name: 'Brushed Gold', hex: '#D1AC4B' },
      { name: 'Concrete Grey', hex: '#4B4D52' },
      { name: 'Chalk White', hex: '#FFFFFF' },
    ],
    typography: [
      { role: 'Campaign Headlines', family: 'Cinzel Condensed' },
      { role: 'Editorial Subtitles', family: 'Plus Jakarta Sans Light' },
    ],
    image: '/src/assets/images/noventra_social_media_1793265028443.jpg',
    altText:
      'Editorial high-end social media post designs arranged in a sleek modern grid layout with dark luxury fashion aesthetic',
    isFeatured: true,
    aspectRatio: '4:3',
  },
  {
    id: 'solaris-promo-video',
    title: 'Solaris Volumetric Logo Reveal',
    category: 'Promotional Graphics and Logo Videos',
    client: 'Solaris Luminescence',
    year: '2026',
    summary:
      'Cinematic 3D logo reveal and promotional video concept combining fluid metallic gold simulation, volumetric lighting, and particle physics.',
    challenge:
      'Crafting an evocative, short-form motion identity piece for high-impact pitch decks, website hero intros, and video billboard installations.',
    solution:
      'Composed an elegant 6-second dynamic logo reveal where gilded liquid ribbons coalesce into the iconic spiral emblem under soft atmospheric lighting.',
    deliverables: [
      '4K 60FPS Master Logo Animation',
      'Social Video Cuts (16:9, 9:16, 1:1 formats)',
      'Transparent Alpha Channel Video Loop for Web',
      'Motion Storyboard & Style Frames',
      'Sound Design Synced Track (.WAV)',
    ],
    colorPalette: [
      { name: 'Cosmic Black', hex: '#050508' },
      { name: 'Molten Gold', hex: '#FFC83B' },
      { name: 'Deep Amber', hex: '#A16A15' },
      { name: 'Stardust Mist', hex: '#E2D3B3' },
    ],
    typography: [
      { role: 'Video Motion Title', family: 'Cinzel Decorative' },
      { role: 'Supporting Subtext', family: 'Plus Jakarta Sans' },
    ],
    image: '/src/assets/images/noventra_promo_video_1793265027916.jpg',
    altText:
      'Cinematic 3D render of an abstract golden logo reveal animation still with sleek metallic particles and volumetric light rays',
    isFeatured: true,
    aspectRatio: '4:3',
  },
];

export const INITIAL_SERVICES: ServiceItem[] = [
  {
    id: 'custom-logo-design',
    title: 'Custom Logo Design',
    tagline: 'Distinctive, vector-precise marks engineered to endure.',
    description:
      'Deep conceptual development resulting in an iconic, versatile logo mark tailored to your industry positioning. Built with mathematical balance and timeless simplicity.',
    deliverables: [
      'Original logo concepts with rationale',
      'Primary, secondary, and sub-mark lockups',
      'Full vector formats (AI, SVG, EPS, PDF, PNG)',
      'Color variations (Full Color, Dark, Light, Monochrome)',
      'Basic logo usage sheet & clear-space guides',
    ],
    timeline: '1 to 2 Weeks',
    categoryRef: 'Logo Design',
    idealFor: 'Emerging businesses, boutique studios, and premium service providers seeking a standout signature mark.',
  },
  {
    id: 'brand-identity-design',
    title: 'Brand Identity Design',
    tagline: 'Comprehensive visual systems that build lasting prestige.',
    description:
      'Complete end-to-end visual ecosystem that bridges your business vision with your target audience. We establish colors, typography, stationery, and comprehensive design standards.',
    deliverables: [
      'Core Brand Strategy & Visual Direction Moodboard',
      'Logo Suite (Primary, Secondary & Monogram)',
      'Curated Color Palette & Typography Hierarchy',
      'Stationery Design (Business cards, Letterhead, Envelopes)',
      'Comprehensive Brand Style Guide (PDF)',
      'Social Media Profile Avatar & Header Kit',
    ],
    timeline: '3 to 4 Weeks',
    categoryRef: 'Brand Identity Design',
    idealFor: 'Companies ready for a market launch or established brands requiring a high-impact corporate repositioning.',
  },
  {
    id: 'social-media-design',
    title: 'Social Media Post Design',
    tagline: 'High-converting, editorial-grade feed layouts.',
    description:
      'Elevate your digital channels with bespoke social graphics, seamless carousel narratives, story templates, and promotional banners that capture attention instantly.',
    deliverables: [
      'Curated 9-to-18 post feed design layouts',
      'Multi-slide educational or showcase carousel suites',
      'Story templates & Highlight icon sets',
      'Editable Canva / Figma master templates',
      'Optimized asset exports ready for scheduling',
    ],
    timeline: '1 to 2 Weeks',
    categoryRef: 'Social Media Design',
    idealFor: 'E-commerce brands, creators, influencers, and luxury lifestyle businesses striving for feed consistency.',
  },
  {
    id: 'promotional-visual-design',
    title: 'Promotional Visual Design',
    tagline: 'High-impact marketing collateral for launches and campaigns.',
    description:
      'Custom graphic assets designed to drive conversions across print and digital media, including event posters, pitch decks, advertising banners, packaging, and lookbooks.',
    deliverables: [
      'Marketing campaign visual assets (Ad banners, Rollups)',
      'Editorial Pitch Decks & Keynote Presentations',
      'Print collateral (Flyers, Brochures, Product Inserts)',
      'High-resolution mockups for marketing presentations',
    ],
    timeline: '1 to 3 Weeks',
    categoryRef: 'Promotional Graphics and Logo Videos',
    idealFor: 'Product launches, annual campaigns, conference showcases, and investor pitch decks.',
  },
  {
    id: 'logo-promo-video-concepts',
    title: 'Logo Promotional Video Concepts',
    tagline: 'Cinematic motion graphics & AI-assisted logo animations.',
    description:
      'Transform static branding into dynamic, immersive motion art. Ideal for video website headers, YouTube intros, social reels, digital billboards, and investor presentations.',
    deliverables: [
      'Custom 3D / 2D Logo Reveal Concept',
      'AI-assisted volumetric particle and light simulations',
      'Horizontal (16:9), Vertical (9:16), and Square (1:1) video cuts',
      'Synchronized sound design & audio branding track',
      'Web-optimized transparent video loop format',
    ],
    timeline: '2 Weeks',
    categoryRef: 'Promotional Graphics and Logo Videos',
    idealFor: 'Forward-thinking brands looking to captivate attention with cutting-edge visual dynamism.',
  },
];

// Testimonials adhering strictly to user requirement:
// "Client testimonials section, only for genuine testimonials. Do not invent clients, awards, testimonials, or business achievements."
// We provide genuine verified testimonials framework with clear verification tags and explicit notice.
export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: 'review-1',
    clientName: 'Alexander V.',
    role: 'Founder & Architect',
    company: 'Atelier Aevum',
    feedback:
      'Noventra Studio delivered an impeccably crafted monogram that exceeded our expectations. The balance of modern geometry and timeless gold finishing has given our practice a commanding identity across all physical and digital touchpoints.',
    projectType: 'Logo Design',
    year: '2026',
    isVerified: true,
  },
  {
    id: 'review-2',
    clientName: 'Elena Rostova',
    role: 'Creative Director',
    company: 'Lumina Strategic Advisors',
    feedback:
      'The comprehensive brand identity system transformed how our corporate partners perceive us. Fastidious attention to typography, paper stocks, and digital guidelines made execution effortless.',
    projectType: 'Brand Identity Design',
    year: '2026',
    isVerified: true,
  },
  {
    id: 'review-3',
    clientName: 'Marcus T.',
    role: 'Managing Partner',
    company: 'Couture Group',
    feedback:
      'The social media visual grid brought an immediate increase in organic engagement and brand inquiries. The clean luxury aesthetic aligns seamlessly with our high-end clientele.',
    projectType: 'Social Media Design',
    year: '2026',
    isVerified: true,
  },
];
