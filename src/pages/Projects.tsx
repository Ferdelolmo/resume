import { Calendar, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      id: 1,
      slug: "pizzashop",
      title: "Pizza Shop",
      description: "A full-stack pizza ordering application built with React, Node.js, and Stripe for payments.",
      date: "2026-05-12",
      readTime: "3 min read",
      tags: ["React", "Node.js", "Stripe"],
    },
    {
      id: 2,
      slug: "casa-itaca",
      title: "Casa Itaca Vacanze",
      description: "Public website for Casa Itaca Vacanze.",
      date: "2026-06-15",
      readTime: "2 min read",
      tags: ["React", "Tailwind"],
    },
    {
      id: 3,
      slug: "commendatore",
      title: "Commendatore",
      description: "A comprehensive wedding planning application built with React and Supabase.",
      date: "2026-07-01",
      readTime: "4 min read",
      tags: ["React", "TypeScript", "Supabase"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-6 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              Projects
            </h1>
            <p className="text-xl text-muted-foreground">
              A showcase of my recent work and side projects
            </p>
          </div>

          <div className="space-y-6">
            {projects.map((project) => (
              <Link to={`/project/${project.slug}`} key={project.id}>
                <Card
                  className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-border hover:border-primary/50"
                >
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(project.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{project.readTime}</span>
                      </div>
                    </div>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
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

export default Projects;
