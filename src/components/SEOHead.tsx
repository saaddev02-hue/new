import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
  canonical?: string;
  structuredData?: object;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Saher Flow Solutions | Leading Multiphase Flow Measurement Technology | Saudi Arabia",
  description = "Revolutionary DMOR technology for accurate multiphase flow measurement. Non-radioactive, AI-powered flow meters for oil & gas industry. Made in Saudi Arabia, trusted globally.",
  keywords = "multiphase flow meter, DMOR technology, oil gas measurement, Saudi Arabia, non-radioactive flow meter, water cut meter, artificial intelligence, digital twin, flow measurement, petroleum engineering, upstream oil gas, production optimization, Saudi Aramco approved, Vision 2030, made in KSA",
  image = "https://saherflow.com/og-image.jpg",
  url = "https://saherflow.com/",
  type = "website",
  publishedTime,
  modifiedTime,
  author = "Saher Flow Solutions",
  section,
  tags = [],
  noindex = false,
  canonical,
  structuredData
}) => {
  const fullTitle = title.includes('Saher Flow') ? title : `${title} | Saher Flow Solutions`;
  const fullUrl = url.startsWith('http') ? url : `https://saherflow.com${url}`;
  const canonicalUrl = canonical || fullUrl;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Robots */}
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      
      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Saher Flow Solutions" />
      <meta property="og:locale" content="en_US" />
      
      {/* Article specific */}
      {type === 'article' && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {author && <meta property="article:author" content={author} />}
          {section && <meta property="article:section" content={section} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:creator" content="@SaherFlow" />
      <meta property="twitter:site" content="@SaherFlow" />
      
      {/* LinkedIn */}
      <meta property="linkedin:owner" content="Saher Flow Solutions" />
      
      {/* Additional SEO */}
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="SA-14" />
      <meta name="geo.placename" content="Thuwal, Saudi Arabia" />
      <meta name="geo.position" content="22.308683;39.104413" />
      <meta name="ICBM" content="22.308683, 39.104413" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;