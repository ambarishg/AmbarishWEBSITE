import { useEffect } from 'react';

const SITE_NAME = 'Ambarish Ganguly';
const DEFAULT_TITLE = `${SITE_NAME} | Data & AI Leader`;
const DEFAULT_DESCRIPTION =
  'Ambarish Ganguly leads global Data & AI programmes that modernise utilities, energy, and sustainability operations.';

const getSiteUrl = () => {
  const envUrl = import.meta.env.VITE_SITE_URL;
  if (typeof envUrl === 'string' && envUrl.trim().length > 0) {
    return envUrl.replace(/\/+$/, '');
  }
  return 'https://ambarishganguly.com';
};

const toAbsoluteUrl = (pathOrUrl) => {
  if (!pathOrUrl) {
    return undefined;
  }
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl;
  }
  const site = getSiteUrl();
  const normalised = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`;
  return `${site}${normalised}`;
};

const updateMetaTag = (attribute, key, value) => {
  if (!value) {
    return;
  }
  let tag = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', value);
};

const updateLinkTag = (rel, href) => {
  if (!href) {
    return;
  }
  let link = document.head.querySelector(`link[rel="${rel}"]`);
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', rel);
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
};

const removeExistingStructuredData = () => {
  const nodes = document.head.querySelectorAll('script[data-seo-dynamic="true"]');
  nodes.forEach((node) => {
    node.remove();
  });
};

const injectStructuredData = (structuredData) => {
  if (!structuredData) {
    return;
  }
  const payloads = Array.isArray(structuredData) ? structuredData : [structuredData];
  payloads
    .filter(Boolean)
    .forEach((payload) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-dynamic', 'true');
      script.text = JSON.stringify(payload);
      document.head.appendChild(script);
    });
};

const useSEO = (config = {}) => {
  useEffect(() => {
    const {
      title,
      description,
      keywords,
      robots,
      pathname,
      canonical,
      type,
      image,
      author,
      structuredData
    } = config;

    const resolvedTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
    document.title = resolvedTitle;

    const descriptionContent = description || DEFAULT_DESCRIPTION;
    const keywordContent = Array.isArray(keywords) ? keywords.join(', ') : keywords;
    const robotsContent = robots || 'index, follow';
    const canonicalPath =
      canonical || pathname || `${window.location.pathname}${window.location.search || ''}`;
    const canonicalUrl = toAbsoluteUrl(canonicalPath);
    const ogType = type || 'website';
    const resolvedImage = toAbsoluteUrl(image || '/images/AG.jpg');
    const authorContent = author || SITE_NAME;

    updateMetaTag('name', 'description', descriptionContent);
    updateMetaTag('name', 'keywords', keywordContent);
    updateMetaTag('name', 'robots', robotsContent);
    updateMetaTag('name', 'author', authorContent);
    updateMetaTag('property', 'og:title', resolvedTitle);
    updateMetaTag('property', 'og:description', descriptionContent);
    updateMetaTag('property', 'og:type', ogType);
    updateMetaTag('property', 'og:url', canonicalUrl);
    updateMetaTag('property', 'og:image', resolvedImage);
    updateMetaTag('property', 'og:site_name', `${SITE_NAME} Portfolio`);
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', resolvedTitle);
    updateMetaTag('name', 'twitter:description', descriptionContent);
    updateMetaTag('name', 'twitter:image', resolvedImage);
    updateMetaTag('name', 'twitter:url', canonicalUrl);

    updateLinkTag('canonical', canonicalUrl);

    removeExistingStructuredData();
    injectStructuredData(structuredData);
  }, [JSON.stringify(config)]);
};

export default useSEO;
