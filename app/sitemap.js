const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default async function sitemap() {
  return [
    {
      url: BASE_URL,
    },
  ];
}
