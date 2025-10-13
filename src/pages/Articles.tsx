import { Calendar, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Articles = () => {
  const articles = [
    {
      id: 1,
      slug: "howistartedbuildingwebsites",
      title: "How I Started Building Websites",
      description: "A few years ago, building a website felt almost impossible to me. But after connecting some dots and learning from different tools and technologies (especially git) everything slowly started to make sense",
      date: "2025-10-05",
      readTime: "5 min read",
      tags: ["React", "TypeScript", "Web Development"],
    },
    {
      id: 2,
      slug: "faro",
      title: "How did I start collecting relevant activity and frontend data from my website?",
      description: "Believe it or not, sometimes you learn about a need you didn’t even know you had - then you cannot live without it",
      date: "2025-10-09",
      readTime: "8 min read",
      tags: ["Node.js", "RUM", "Faro"],
    },
    {
      id: 3,
      slug: "sheet",
      title: "🧠 Real Time Reporting for your (Almost) All life purposes",
      description: "Connecting Google Sheets with Grafana to build a real-time reporting dashboard — without writing a backend 🚀",
      date: "2025-10-13",
      readTime: "6 min read",
      tags: ["Google Sheets", "Grafana", "Reporting"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              Articles
            </h1>
            <p className="text-xl text-muted-foreground">
              Thoughts, tutorials, and insights on software development
            </p>
          </div>

          <div className="space-y-6">
            {articles.map((article) => (
              <Link to={`/articles/${article.slug}`} key={article.id}>
                <Card 
                  className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-border hover:border-primary/50"
                >
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {article.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Articles;
