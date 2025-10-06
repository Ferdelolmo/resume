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
      date: "2024-03-15",
      readTime: "5 min read",
      tags: ["React", "TypeScript", "Web Development"],
    },
    {
      id: 2,
      slug: "building-scalable-apis-with-nodejs",
      title: "Building Scalable APIs with Node.js",
      description: "A comprehensive guide to designing and implementing RESTful APIs that can handle millions of requests.",
      date: "2024-03-10",
      readTime: "8 min read",
      tags: ["Node.js", "Backend", "API Design"],
    },
    {
      id: 3,
      slug: "css-grid-vs-flexbox",
      title: "CSS Grid vs Flexbox: When to Use What",
      description: "Understanding the differences between CSS Grid and Flexbox, and choosing the right layout system for your project.",
      date: "2024-03-05",
      readTime: "6 min read",
      tags: ["CSS", "Frontend", "Design"],
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
