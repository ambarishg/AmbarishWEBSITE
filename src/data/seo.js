import { hero } from './profile.js';

const baseSiteUrl = (() => {
  const raw = import.meta.env?.VITE_SITE_URL;
  if (typeof raw === 'string' && raw.trim().length > 0) {
    return raw.replace(/\/+$/, '');
  }
  return 'https://ambarishganguly.com';
})();

const absoluteUrl = (pathOrUrl) => {
  if (!pathOrUrl) {
    return undefined;
  }
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl;
  }
  const normalised = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`;
  return `${baseSiteUrl}${normalised}`;
};

const SITE_KEYWORDS = [
  'Data and AI leader',
  'Utilities analytics',
  'Hackathon winner',
  'Azure AI',
  'Machine learning',
  'Enterprise architecture'
];

const highlightsList = [
  {
    title: 'Random Walk of the Penguins',
    path: '/highlights/random-walk-of-the-penguins'
  },
  {
    title: 'Bees Health Detection on Azure',
    path: '/highlights/bees-health-detection'
  },
  {
    title: 'Future Ready Champions of Code Winner',
    path: '/highlights/future-ready-champions'
  },
  {
    title: 'Azure Blogathon Champion',
    path: '/highlights/azure-blogathon-champion'
  },
  {
    title: 'Azure Blogathon Cassava Leaf Detection',
    path: '/highlights/azure-blogathon-cassava'
  },
  {
    title: 'Microsoft & Azure Impact Portfolio',
    path: '/highlights/microsoft-azure'
  },
  {
    title: 'DST Geospatial Hackathon Winner',
    path: '/highlights/dst-geospatial-hackathon'
  },
  {
    title: 'DonorsChoose Recommendation Challenge',
    path: '/highlights/donors-choose-recommendation'
  },
  {
    title: 'Kiva Crowdfunding Analysis',
    path: '/highlights/kiva-crowdfunding-analysis'
  },
  {
    title: 'African Conflicts Visualisation',
    path: '/highlights/african-conflicts-visualisation'
  },
  {
    title: 'Center for Policing Equity Visualisation',
    path: '/highlights/cpe-equity-visualisation'
  },
  {
    title: 'Kaggle Achievements',
    path: '/highlights/kaggle-achievements'
  }
];

export const seo = {
  home: {
    title: 'Home',
    description:
      'Explore the portfolio of Ambarish Ganguly, a Data and AI leader driving transformation for utilities and sustainability programmes worldwide.',
    pathname: '/',
    keywords: SITE_KEYWORDS,
    image: '/images/AG.jpg',
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Ambarish Ganguly Portfolio',
        url: baseSiteUrl,
        description:
          'Portfolio of Ambarish Ganguly highlighting leadership across data, analytics, and artificial intelligence initiatives.',
        inLanguage: 'en'
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: hero.name,
        jobTitle: hero.title,
        image: absoluteUrl('/images/AG.jpg'),
        url: baseSiteUrl,
        sameAs: [hero.contact.linkedin, `mailto:${hero.contact.email}`],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Kolkata',
          addressRegion: 'West Bengal',
          addressCountry: 'IN'
        }
      }
    ]
  },
  highlights: {
    title: 'Highlights',
    description:
      'Awards, case studies, and community impact initiatives led by Ambarish Ganguly across AI, analytics, and sustainability.',
    pathname: '/highlights',
    keywords: ['awards', 'data science case studies', 'Microsoft showcase', 'NASA award'],
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Highlights',
        url: absoluteUrl('/highlights'),
        description:
          'Collection of award-winning AI and analytics projects delivered by Ambarish Ganguly.',
        hasPart: highlightsList.map((item, index) => ({
          '@type': 'CreativeWork',
          position: index + 1,
          name: item.title,
          url: absoluteUrl(item.path)
        }))
      }
    ]
  },
  highlightRandomWalk: {
    title: 'Random Walk of the Penguins Case Study',
    description:
      'Learn how an ensemble forecasting strategy won the NASA-backed Random Walk of the Penguins challenge with production-ready deliverables.',
    pathname: '/highlights/random-walk-of-the-penguins',
    keywords: ['time series forecasting', 'NASA', 'DrivenData', 'ecology analytics'],
    image: '/images/AG.jpg',
    type: 'article',
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Random Walk of the Penguins: Winning NASA Sponsored Forecast',
        description:
          'Case study covering the ensemble forecasting approach that secured first place in the Random Walk of the Penguins challenge.',
        author: {
          '@type': 'Person',
          name: hero.name
        },
        url: absoluteUrl('/highlights/random-walk-of-the-penguins'),
        mainEntityOfPage: absoluteUrl('/highlights/random-walk-of-the-penguins'),
        image: absoluteUrl('/images/AG.jpg')
      }
    ]
  },
  highlightBees: {
    title: 'Bees Health Detection on Azure',
    description:
      'Discover how Azure Custom Vision powers an award-winning bee health detection pipeline recognised by Microsoft India.',
    pathname: '/highlights/bees-health-detection',
    keywords: ['bees health detection', 'Azure Custom Vision', 'sustainability', 'computer vision'],
    type: 'article',
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Bees Health Detection on Azure',
        description:
          'Computer vision pipeline that monitors hive health using Azure Custom Vision and was showcased by Microsoft India.',
        author: {
          '@type': 'Person',
          name: hero.name
        },
        url: absoluteUrl('/highlights/bees-health-detection'),
        mainEntityOfPage: absoluteUrl('/highlights/bees-health-detection'),
        image: 'https://www.youtube.com/watch?v=d92H_wPyrUE&t=16s'
      }
    ]
  },
  highlightFutureReady: {
    title: 'Future Ready Champions of Code Winner',
    description:
      "Inside the Agriculture Hub innovation that won Microsoft India recognition in the Future Ready Champions of Code competition.",
    pathname: '/highlights/future-ready-champions',
    keywords: ['Future Ready Champions of Code', 'Agriculture Hub', 'Azure AI', 'Microsoft India'],
    type: 'article',
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Future Ready Champions of Code Winner',
        description:
          "Agriculture Hub, the Azure powered platform that secured first place in Microsoft India for the Future Ready Champions of Code programme.",
        author: {
          '@type': 'Person',
          name: hero.name
        },
        url: absoluteUrl('/highlights/future-ready-champions'),
        mainEntityOfPage: absoluteUrl('/highlights/future-ready-champions'),
        image:
          'https://news.microsoft.com/en-in/wp-content/uploads/sites/145/2023/01/Future-ready-champions-of-code-hero.jpg'
      }
    ]
  },
  highlightAzureBlogathon: {
    title: 'Azure Blogathon Champion',
    description:
      'How a recommendation engine and enterprise architecture approach secured top honours at Azure Blogathon.',
    pathname: '/highlights/azure-blogathon-champion',
    keywords: ['Azure Blogathon', 'recommendation engine', 'enterprise architecture'],
    type: 'article'
  },
  highlightAzureBlogathonCassava: {
    title: 'Azure Blogathon Cassava Leaf Detection',
    description:
      'Case study on Cassava leaf disease detection using Azure AI that earned acclaim in the Azure Blogathon.',
    pathname: '/highlights/azure-blogathon-cassava',
    keywords: ['Cassava leaf detection', 'Azure AI', 'computer vision'],
    type: 'article'
  },
  highlightMicrosoftAzure: {
    title: 'Microsoft & Azure Impact Portfolio',
    description:
      'Collection of Microsoft-recognised case studies, hackathon wins, and Azure-first architectures delivered by Ambarish Ganguly.',
    pathname: '/highlights/microsoft-azure',
    keywords: ['Microsoft Azure case studies', 'Azure AI', 'Microsoft hackathon winners'],
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Microsoft & Azure Impact Portfolio',
        description:
          'Showcase of Microsoft and Azure achievements including Blogathon wins, Future Ready programmes, and platform architectures.',
        url: absoluteUrl('/highlights/microsoft-azure')
      }
    ]
  },
  highlightDSTGeospatial: {
    title: 'DST Geospatial Hackathon Winner',
    description:
      'Summary of the DST Geospatial Hackathon winning solution that delivers mission-ready geo-analytics.',
    pathname: '/highlights/dst-geospatial-hackathon',
    keywords: ['DST Geospatial hackathon', 'geo analytics', 'India'],
    type: 'article'
  },
  highlightDonorsChoose: {
    title: 'DonorsChoose Recommendation Challenge',
    description:
      'Overview of the DonorsChoose recommendation system that personalised classroom funding and won community recognition.',
    pathname: '/highlights/donors-choose-recommendation',
    keywords: ['DonorsChoose', 'recommendation system', 'education analytics'],
    type: 'article'
  },
  highlightKiva: {
    title: 'Kiva Crowdfunding Analysis',
    description:
      'Data analysis of Kiva crowdfunding patterns that uncovered social impact lending insights and award-winning visuals.',
    pathname: '/highlights/kiva-crowdfunding-analysis',
    keywords: ['Kiva', 'crowdfunding analysis', 'social impact data'],
    type: 'article'
  },
  highlightAfricanConflicts: {
    title: 'African Conflicts Visualisation',
    description:
      'Visual analytics story on African conflicts data that earned Kaggle recognition for clear communication.',
    pathname: '/highlights/african-conflicts-visualisation',
    keywords: ['African conflicts', 'data visualisation', 'Kaggle award'],
    type: 'article'
  },
  highlightCPE: {
    title: 'Center for Policing Equity Visualisation',
    description:
      'Insights from the Center for Policing Equity hackathon, focusing on community centered data visualisation.',
    pathname: '/highlights/cpe-equity-visualisation',
    keywords: ['Center for Policing Equity', 'data visualisation', 'hackathon winner'],
    type: 'article'
  },
  agAcademy: {
    title: 'AG Academy',
    description:
      'Ambarish Ganguly Academy showcases award-winning AI learning paths, workshops, and mentoring for practitioners.',
    pathname: '/ag-academy',
    keywords: ['AI academy', 'mentoring', 'learning paths']
  },
  kaggleAchievements: {
    title: 'Kaggle Achievements',
    description:
      'Kaggle competition wins, kernel awards, and data storytelling highlights delivered by Ambarish Ganguly.',
    pathname: '/highlights/kaggle-achievements',
    keywords: ['Kaggle award', 'Kaggle competition winner', 'data science kernels', 'Ambarish Ganguly'],
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Kaggle Achievements',
        url: absoluteUrl('/highlights/kaggle-achievements'),
        description:
          'Collection of Kaggle awards, kernels, and competition outcomes by data and AI leader Ambarish Ganguly.'
      }
    ]
  }
};

export const getSeoByKey = (key) => seo[key];
