import React, { useEffect } from 'react';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website' 
}) => {
  const siteTitle = 'ZunaWeb.com';
  const fullTitle = title ? `${title} - ${siteTitle}` : siteTitle;
  const defaultDescription = 'Nền tảng thiết kế và phát triển web hiện đại với giao diện đẹp mắt, tối ưu SEO và trải nghiệm người dùng tuyệt vời.';
  const defaultImage = 'https://zunaweb.com/og-image.jpg';
  const defaultUrl = 'https://zunaweb.com';

  useEffect(() => {
    // Update document title
    document.title = fullTitle;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description || defaultDescription;
    
    // Update meta keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.name = 'keywords';
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.content = keywords;
    }
    
    // Update Open Graph tags
    const updateMetaTag = (property, content) => {
      let metaTag = document.querySelector(`meta[property="${property}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', property);
        document.head.appendChild(metaTag);
      }
      metaTag.content = content;
    };
    
    updateMetaTag('og:title', fullTitle);
    updateMetaTag('og:description', description || defaultDescription);
    updateMetaTag('og:type', type);
    updateMetaTag('og:url', url || defaultUrl);
    updateMetaTag('og:image', image || defaultImage);
    
    // Update Twitter Card tags
    const updateTwitterTag = (name, content) => {
      let metaTag = document.querySelector(`meta[name="${name}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.name = name;
        document.head.appendChild(metaTag);
      }
      metaTag.content = content;
    };
    
    updateTwitterTag('twitter:card', 'summary_large_image');
    updateTwitterTag('twitter:title', fullTitle);
    updateTwitterTag('twitter:description', description || defaultDescription);
    updateTwitterTag('twitter:image', image || defaultImage);
    
    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url || defaultUrl;
    
  }, [title, description, keywords, image, url, type, fullTitle, defaultDescription, defaultImage, defaultUrl]);

  return null; // This component doesn't render anything
};

export default SEO; 