// import type { MetadataRoute } from 'next';

// export default function sitemap(): MetadataRoute.Sitemap {
//   const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

//   return [
//     {
//       url: `${baseUrl}/home-page`,
//       lastModified: new Date(),
//       changeFrequency: 'weekly',
//       priority: 1.0,
//     },
//     {
//       url: baseUrl,
//       lastModified: new Date(),
//       changeFrequency: 'monthly',
//       priority: 0.8,
//     },
//   ];
// }


import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://spfoam.netlify.app';

  const currentDate = new Date();

  // ✅ Static Pages
  const staticRoutes = [
    '',
    '/home-page',
    '/sofas',
    '/sectional-sofa',
    '/arm-chairs',
    '/banch',
    '/bed-mattress',
    '/barstool',
    '/puffy',
    '/raw-material',
    '/live-workshop',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.9,
  }));

  // ✅ Dynamic Product Pages (IMPORTANT)
  const products = [
    'aubrey-sofa',
    'lewis-sectional',
    'bryant-u-sofa',
    'luxury-recliner',
  ];

  const productRoutes = products.map((slug) => ({
    url: `${baseUrl}/product/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...productRoutes];
}