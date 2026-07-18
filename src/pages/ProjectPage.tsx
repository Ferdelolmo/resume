import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import "./Article.css";

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
		description: "The site is a modern marketing and booking website for Itaca Casa Vacanze, a holiday rental business in Marina di Ragusa, Sicily.",
		date: "2026-06-15",
		readTime: "2 min read",
		tags: ["React", "Tailwind"],
	},
	{
		id: 3,
		slug: "commendatore",
		title: "Commendatore",
		description: "A true life saver, a wedding planning application that saved me time and helped me keep my sanity during the wedding planning process.",
		date: "2026-07-19",
		readTime: "4 min read",
		tags: ["React", "TypeScript", "Supabase"],
	},
];

const ProjectPage = () => {
	const { slug } = useParams();
	const project = projects.find((p) => p.slug === slug);
	const [content, setContent] = useState("");

	useEffect(() => {
		if (project) {
			import(`../projects/${project.slug}.md`)
				.then((res) => {
					fetch(res.default)
						.then((res) => res.text())
						.then((text) => setContent(text))
						.catch(() => setContent("Error loading project content."));
				})
				.catch(() => setContent("Error loading project file."));
		}
	}, [project]);

	if (!project) {
		return <div>Project not found</div>;
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
									<span>{new Date(project.date).toLocaleDateString()}</span>
								</div>
								<div className="flex items-center gap-1">
									<Clock className="w-4 h-4" />
									<span>{project.readTime}</span>
								</div>
							</div>
							<CardTitle className="text-4xl font-bold mb-4">
								{project.title}
							</CardTitle>
							<CardDescription className="text-xl text-muted-foreground">
								{project.description}
							</CardDescription>
						</CardHeader>
						<CardContent>
							<ReactMarkdown className="markdown-content">
								{content}
							</ReactMarkdown>
							<div className="flex flex-wrap gap-2 mt-8">
								{project.tags.map((tag) => (
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
};

export default ProjectPage;
