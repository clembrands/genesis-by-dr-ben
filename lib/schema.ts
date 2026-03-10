/**
 * JSON-LD Schema generation utilities for Genesis by Dr. Ben Reyhani
 */

export interface SchemaConfig {
  '@context'?: string;
  '@type': string;
  [key: string]: any;
}

/**
 * Dentist schema for homepage and about page
 */
export function dentistSchema(): SchemaConfig {
  return {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: 'Genesis by Dr. Ben Reyhani',
    image: 'https://genesisbydrben.com/images/og-image.jpg',
    description: 'Premium cosmetic and implant dentistry practice in Dallas, Texas',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '5161 Lang Ave Ste. 100',
      addressLocality: 'Dallas',
      addressRegion: 'TX',
      postalCode: '75209',
      addressCountry: 'US',
    },
    telephone: '+14698383558',
    email: 'info@genesisbydrben.com',
    url: 'https://genesisbydrben.com',
    sameAs: [
      'https://www.facebook.com/drbenreyhani/',
      'https://www.instagram.com/genesisbydrben/',
      'https://www.youtube.com/@GenesisbyDrBen',
    ],
    priceRange: '$$$',
    areaServed: ['Dallas', 'Texas', 'USA'],
    availableLanguage: 'en',
    knowsAbout: [
      'Cosmetic Dentistry',
      'Dental Implants',
      'Porcelain Veneers',
      'Smile Design',
      'Full Mouth Reconstruction',
    ],
    medicalSpecialty: 'Cosmetic Dentistry',
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'license',
      name: 'DDS',
    },
  };
}

/**
 * Service schema for service pages
 */
export function serviceSchema(
  serviceName: string,
  description: string,
  url: string
): SchemaConfig {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Genesis by Dr. Ben Reyhani',
      url: 'https://genesisbydrben.com',
      telephone: '+14698383558',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '5161 Lang Ave Ste. 100',
        addressLocality: 'Dallas',
        addressRegion: 'TX',
        postalCode: '75209',
        addressCountry: 'US',
      },
    },
    url: url,
    areaServed: 'Dallas, Texas',
    availableLanguage: 'en',
  };
}

/**
 * Article schema for blog posts
 */
export function articleSchema(
  title: string,
  description: string,
  datePublished: string,
  dateModified: string,
  url: string,
  imageUrl?: string
): SchemaConfig {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: imageUrl || 'https://genesisbydrben.com/images/og-image.jpg',
    datePublished: datePublished,
    dateModified: dateModified,
    author: {
      '@type': 'Person',
      name: 'Dr. Ben Reyhani',
      url: 'https://genesisbydrben.com/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Genesis by Dr. Ben Reyhani',
      url: 'https://genesisbydrben.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://genesisbydrben.com/images/logo.png',
        width: 200,
        height: 70,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };
}

/**
 * FAQPage schema
 */
export function faqSchema(
  faqs: Array<{ question: string; answer: string }>
): SchemaConfig {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * BreadcrumbList schema
 */
export function breadcrumbSchema(
  items: Array<{ name: string; url: string }>
): SchemaConfig {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * LocalBusiness schema for contact/location pages
 */
export function localBusinessSchema(): SchemaConfig {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://genesisbydrben.com',
    name: 'Genesis by Dr. Ben Reyhani',
    image: 'https://genesisbydrben.com/images/og-image.jpg',
    description: 'Luxury cosmetic and implant dental practice in Dallas, Texas',
    url: 'https://genesisbydrben.com',
    telephone: '+14698383558',
    email: 'info@genesisbydrben.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '5161 Lang Ave Ste. 100',
      addressLocality: 'Dallas',
      addressRegion: 'TX',
      postalCode: '75209',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 32.8343,
      longitude: -96.7893,
    },
    sameAs: [
      'https://www.facebook.com/drbenreyhani/',
      'https://www.instagram.com/genesisbydrben/',
      'https://www.youtube.com/@GenesisbyDrBen',
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
    priceRange: '$$$',
  };
}

/**
 * Helper to combine multiple schemas
 */
export function combineSchemas(schemas: SchemaConfig[]): SchemaConfig[] {
  return schemas;
}
