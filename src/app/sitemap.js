const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://almeechristian.site';

export default function sitemap() {
  const lastModified = new Date().toISOString();

  return [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${siteUrl}/projects`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
