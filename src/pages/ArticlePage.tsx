import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import "./Article.css";

const articles = [
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
		slug: "css-grid-vs-flexbox",
		title: "CSS Grid vs Flexbox: When to Use What",
		description:
			"Understanding the differences between CSS Grid and Flexbox, and choosing the right layout system for your project.",
		date: "2024-03-05",
		readTime: "6 min read",
		tags: ["CSS", "Frontend", "Design"],
	},
];

const ArticlePage = () => {
	const { slug } = useParams();
	const article = articles.find((a) => a.slug === slug);
	const [content, setContent] = useState("");

	useEffect(() => {
		if (article) {
			import(`../articles/${article.slug}.md`)
				.then((res) => {
					fetch(res.default)
						.then((res) => res.text())
						.then((text) => setContent(text))
						.catch(() => setContent("Error loading article content."));
				})
				.catch(() => setContent("Error loading article file."));
		}
	}, [article]);

	if (!article) {
		return <div>Article not found</div>;
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
							<CardTitle className="text-4xl font-bold mb-4">
								{article.title}
							</CardTitle>
							<CardDescription className="text-xl text-muted-foreground">
								{article.description}
							</CardDescription>
						</CardHeader>
						<CardContent>
							<ReactMarkdown className="markdown-content">
								{content}
							</ReactMarkdown>
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
};

export default ArticlePage;