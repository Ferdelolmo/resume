import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Calendar, Clock } from "lucide-react";

import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { articles as articlesList, findArticleBySlug } from "@/data/articles";

import "./Article.css";

const Articles = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? findArticleBySlug(slug) : undefined;
  const [content, setContent] = useState("");

  useEffect(() => {
    if (!article) {
      setContent("");
      return;
    }

    let isMounted = true;

    import(`../articles/${article.slug}.md`)
      .then((mod) => fetch(mod.default))
      .then((response) => response.text())
      .then((text) => {
        if (isMounted) {
          setContent(text);
        }
      })
      .catch(() => {
        if (isMounted) {
          setContent("Error loading article content.");
        }
      });

    return () => {
      isMounted = false;
    };
  }, [article]);

  if (slug) {
    if (!article) {
      return (
        <div className="min-h-screen bg-background">
          <Navigation />
          <main className="container mx-auto px-6 pt-24 pb-12">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Article not found</CardTitle>
                  <CardDescription>We could not find an article matching that URL.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/articles" className="text-primary underline">
                    Back to articles
                  </Link>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="container mx-auto px-6 pt-24 pb-12">
          <div className="max-w-4xl mx-auto">
            <Card>
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
                <CardTitle className="text-4xl font-bold mb-4">{article.title}</CardTitle>
                <CardDescription className="text-xl text-muted-foreground">{article.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ReactMarkdown className="markdown-content">{content}</ReactMarkdown>
                <div className="flex flex-wrap gap-2 mt-8">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-6 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              Articles
            </h1>
            <p className="text-xl text-muted-foreground">Thoughts, tutorials, and insights on software development</p>
          </div>

          <div className="space-y-6">
            {articlesList.map((item) => (
              <Link to={`/articles/${item.slug}`} key={item.id}>
                <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-border hover:border-primary/50">
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(item.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{item.readTime}</span>
                      </div>
                    </div>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">{item.title}</CardTitle>
                    <CardDescription className="text-base">{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
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
