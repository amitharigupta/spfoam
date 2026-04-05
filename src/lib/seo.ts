// SEO Metadata Management
export const setSEOMetadata = ({
  title,
  description,
  keywords,
  ogImage,
  ogUrl,
  twitterCard = "summary_large_image",
}: {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
}) => {
  // Set document title
  document.title = title;

  // Update or create meta tags
  const updateMeta = (name: string, content: string, property = false) => {
    const attribute = property ? "property" : "name";
    let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
    if (!element) {
      element = document.createElement("meta");
      element.setAttribute(attribute, name);
      document.head.appendChild(element);
    }
    element.setAttribute("content", content);
  };

  // Core SEO
  updateMeta("description", description);
  if (keywords) {
    updateMeta("keywords", keywords);
  }

  // Open Graph
  updateMeta("og:title", title, true);
  updateMeta("og:description", description, true);
  if (ogImage) {
    updateMeta("og:image", ogImage, true);
  }
  if (ogUrl) {
    updateMeta("og:url", ogUrl, true);
  }
  updateMeta("og:type", "website", true);

  // Twitter
  updateMeta("twitter:card", twitterCard);
  updateMeta("twitter:title", title);
  updateMeta("twitter:description", description);
  if (ogImage) {
    updateMeta("twitter:image", ogImage);
  }
};

export const setJsonLdSchema = (schema: Record<string, any>) => {
  let element = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
  if (!element) {
    element = document.createElement("script");
    element.setAttribute("type", "application/ld+json");
    document.head.appendChild(element);
  }
  element.textContent = JSON.stringify(schema);
};

export const createProductSchema = ({
  name,
  description,
  image,
  price,
  priceCurrency = "USD",
  availability = "https://schema.org/InStock",
  ratingValue,
  reviewCount,
  brand = "MAISON",
  url,
}: {
  name: string;
  description: string;
  image: string | string[];
  price: string | number;
  priceCurrency?: string;
  availability?: string;
  ratingValue?: number;
  reviewCount?: number;
  brand?: string;
  url?: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: Array.isArray(image) ? image : [image],
    brand: {
      "@type": "Brand",
      name: brand,
    },
    offers: {
      "@type": "Offer",
      price: price.toString(),
      priceCurrency,
      availability,
      url,
    },
    ...(ratingValue &&
      reviewCount && {
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: ratingValue.toString(),
          reviewCount: reviewCount.toString(),
        },
      }),
  };
};

export const createBreadcrumbSchema = (
  items: Array<{ name: string; url?: string }>
) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.url && { item: item.url }),
    })),
  };
};

export const createOrganizationSchema = ({
  name,
  logo,
  url,
  contactPoint,
}: {
  name: string;
  logo?: string;
  url?: string;
  contactPoint?: {
    type: string;
    telephone: string;
    contactOption?: string;
  };
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    ...(logo && { logo }),
    ...(url && { url }),
    ...(contactPoint && { contactPoint }),
  };
};
