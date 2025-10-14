export type ArticleMeta = {
  id: number;
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
};

export const articles: ArticleMeta[] = [
  {
    id: 1,
    slug: "howistartedbuildingwebsites",
    title: "How I Started Building Websites",
    description:
      "A few years ago, building a website felt almost impossible to me. But after connecting some dots and learning from different tools and technologies (especially git) everything slowly started to make sense",
    date: "2024-03-15",
    readTime: "5 min read",
    tags: ["React", "TypeScript", "Web Development"],
  },
  {
    id: 2,
    slug: "faro",
    title: "How did I start collecting relevant activity and frontend data from my website?",
    description:
      "Believe it or not, sometimes you learn about a need you didn’t even know you had - then you cannot live without it",
    date: "2025-10-09",
    readTime: "8 min read",
    tags: ["Node.js", "RUM", "Faro"],
  },
  {
    id: 3,
    slug: "sheet",
    title: "Real Time Reporting for your (almost) All life purposes",
    description:
      "Connecting Google Sheets with Grafana to build a real-time reporting dashboard — without writing a backend!",
    date: "2025-10-13",
    readTime: "6 min read",
    tags: ["Google Sheets", "Grafana", "Reporting"],
  },
];

export const findArticleBySlug = (slug: string) => articles.find((article) => article.slug === slug);
