import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const skills = [
    "Bash",
    "TypeScript", "Python", "SQL",
    "Prometheus", "Loki", "Tempo", "Ubuntu",
    "AWS", "Docker", "Git", "REST APIs", "Kubernetes",
  ];

  const experiences = [
    {
      title: "Senior Observability Architect",
      company: "Grafana Labs",
      period: "October 2024 - Present",
      description: "The Observability Architect acts as the primary technical contact for customers, guiding account strategy, growth, and cost optimisation while fostering strong client relationships and advocating for their needs. I drive customer success by designing observability maturity paths, supporting implementation and optimisation, and ensuring technology adoption. Additionally, I provide technical troubleshooting, conduct reviews and RCAs, and lead onboarding, training, and workshops to maximise customer value and best practices.",
    },
    {
      title: "Senior Customer Success Manager - Strategic customers EMEA",
      company: "Grafana Labs",
      period: "October 2023 - September 2024",
      description: "Focused on high-value, complex accounts, driving long-term growth and renewals through joint account planning, strategic expansion opportunities, executive-level engagement, and value-based advocacy. This role operates at a higher business level, influencing account strategy, retention, and customer roadmap alignment.",
    },
    {
      title: "Senior Customer Success Manager",
      company: "Grafana Labs",
      period: "October 2022 - September 2023",
      description: "Managed a portfolio of strategic customers, driving product adoption, renewals, and long-term success. Partnered with sales on account planning to identify risks and expansion opportunities, while leading post-sales engagements such as onboarding, adoption, and risk mitigation. Strengthened partnerships through onsite meetings, business reviews, and success stories, and provided continuous product and competitive feedback to align customer needs with value-driven solutions.",
    },
    {
      title: "Customer Success Manager",
      company: "Datadog",
      period: "July 2018 - January 2021",
      description: "built trusted relationships across a portfolio of customers, driving onboarding, adoption, and growth through upselling and cross-selling opportunities. Partnered closely with sales for seamless transitions, acted as a customer advocate, and advised on best practices to maximise value from the Datadog platform. Proactively monitored usage trends to identify risks, promoted adoption to secure renewals, and collaborated cross-functionally with Support, Product, Finance, and Legal to ensure a positive customer experience and long-term success",
    },{
      title: "Renewals Account Manager",
      company: "VMware",
      period: "May 2017 - March 2018",
      description: "As a Sales Account Manager at VMware, managed renewals and growth across enterprise and global accounts, including Telefonica O2. Drove customer retention through license analysis, renewal management, and cross-selling, while collaborating with sales and channel partners. Consistently exceeded targets, achieving 90%+ retention, surpassing quarterly goals, and earning recognition for top performance in retention and cross-sell success.",
    },
    {
      title: "Renewals Account Associate",
      company: "VMware",
      period: "July 2016 - May 2017",
      description: "Managed and tracked renewal opportunities while supporting customers and partners through the renewal process. Drove lead generation campaigns and delivered strong results, achieving the highest quota attainment rate in EMEA (Q4 2016) and earning recognition for top customer retention performance (Q1 2017).",
    },
  ];

  const education = [
    {
      degree: "Master Degree in International Trade and Business",
      institution: "University of Valladolid",
      period: "2013 - 2014",
    },
    {
      degree: "Bachelor in Business Administration",
      institution: "University of Valladolid",
      period: "2006 - 2012",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <section className="mb-16 text-center">
            <div className="inline-block mb-6 relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary via-primary-glow to-accent p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-4xl font-bold text-primary">
                  JD
                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              Fernando del Olmo
            </h1>
            <p className="text-2xl text-muted-foreground mb-6">Technical Account Manager</p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>fernandodelolmo@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Spain</span>
              </div>
            </div>
            <div className="flex justify-center gap-3">
              <Button variant="default" size="lg" className="gap-2">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Github className="w-5 h-5" />
                GitHub
              </Button>
            </div>
          </section>

          {/* About Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-primary">About Me</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  It all started when I was 10, with a computing course where I learned the ins and outs of Windows 98. Soon after, my parents brought home a Pentium II computer, and I spent countless afternoons tinkering with it, troubleshooting problems, and figuring out how it all worked.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">   
                  That early curiosity became a lifelong passion. I studied BA but always kept one foot in the tech world, which led to over 8 years of working in the industry. I love solving problems, connecting with people, and helping customers succeed..
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Skills Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-primary">Skills</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="text-base px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Experience Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-primary">Experience</h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <CardDescription className="text-base">
                      <span className="font-semibold text-foreground">{exp.company}</span> • {exp.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-primary">Education</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                    <CardDescription className="text-base">
                      <span className="font-semibold text-foreground">{edu.institution}</span> • {edu.period}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
