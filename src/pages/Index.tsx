import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import FlippableCircle from "@/components/ui/FlippableCircle";

import grafanaLogo from '@/gallery/grafana.png';
import datadogLogo from '@/gallery/datadog.png';
import vmwareLogo from '@/gallery/vmware.jpg';
import aiesecLogo from '@/gallery/aiesec.png';
import universidadvalladolidLogo from '@/gallery/universidadvalladolid.png';
import ferPicture from '@/gallery/Fer.jpg';
import offsiteImage from '@/gallery/offsite.jpg';
import lunchandlearnImage from '@/gallery/lunchandlearnmadrid.jpg';
import videoImage from '@/gallery/video.png';
import AudioPlayer from '@/components/ui/AudioPlayer';
import DailyRoutineChart from '@/components/ui/DailyRoutineChart';
import TakeAways from '@/components/ui/TakeAways';

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
      logo: grafanaLogo,
      takeaways: ["Go", "eBPF", "Kubernetes", "Terraform", "Ansible"]
    },
    {
      title: "Senior Customer Success Manager - Strategic customers EMEA",
      company: "Grafana Labs",
      period: "October 2023 - September 2024",
      description: "Focused on high-value, complex accounts, driving long-term growth and renewals through joint account planning, strategic expansion opportunities, executive-level engagement, and value-based advocacy. This role operates at a higher business level, influencing account strategy, retention, and customer roadmap alignment.",
      logo: grafanaLogo,
      takeaways: ["Customer Success", "Account Management", "SaaS", "Observability"]
    },
    {
      title: "Senior Customer Success Manager",
      company: "Grafana Labs",
      period: "February 2021 - September 2023",
      description: "Managed a portfolio of strategic customers, driving product adoption, renewals, and long-term success. Partnered with sales on account planning to identify risks and expansion opportunities, while leading post-sales engagements such as onboarding, adoption, and risk mitigation. Strengthened partnerships through onsite meetings, business reviews, and success stories, and provided continuous product and competitive feedback to align customer needs with value-driven solutions.",
      logo: grafanaLogo,
      takeaways: ["Customer Success", "Account Management", "SaaS", "Observability"]
    },
    {
      title: "Customer Success Manager",
      company: "Datadog",
      period: "July 2018 - January 2021",
      description: "built trusted relationships across a portfolio of customers, driving onboarding, adoption, and growth through upselling and cross-selling opportunities. Partnered closely with sales for seamless transitions, acted as a customer advocate, and advised on best practices to maximise value from the Datadog platform. Proactively monitored usage trends to identify risks, promoted adoption to secure renewals, and collaborated cross-functionally with Support, Product, Finance, and Legal to ensure a positive customer experience and long-term success",
      logo: datadogLogo,
      takeaways: ["Customer Success", "Account Management", "SaaS", "APM"]
    },{
      title: "Renewals Account Manager",
      company: "VMware",
      period: "May 2017 - March 2018",
      description: "As a Sales Account Manager at VMware, managed renewals and growth across enterprise and global accounts, including Telefonica O2. Drove customer retention through license analysis, renewal management, and cross-selling, while collaborating with sales and channel partners. Consistently exceeded targets, achieving 90%+ retention, surpassing quarterly goals, and earning recognition for top performance in retention and cross-sell success.",
      logo: vmwareLogo,
      takeaways: ["Sales", "Account Management", "Enterprise Software"]
    },
    {
      title: "Renewals Account Associate",
      company: "VMware",
      period: "July 2016 - May 2017",
      description: "Managed and tracked renewal opportunities while supporting customers and partners through the renewal process. Drove lead generation campaigns and delivered strong results, achieving the highest quota attainment rate in EMEA (Q4 2016) and earning recognition for top customer retention performance (Q1 2017).",
      logo: vmwareLogo,
      takeaways: ["Sales", "Account Management", "Enterprise Software"]
    },
  ];

  const education = [
    {
      degree: "Master Degree in International Trade and Business",
      institution: "University of Valladolid",
      period: "2013 - 2014",
      logo: universidadvalladolidLogo,
    },
    {
      degree: "Bachelor in Business Administration",
      institution: "University of Valladolid",
      period: "2006 - 2012",
      logo: universidadvalladolidLogo,
    },
  ];

  const courses = [
    {
      degree: "Databases Foundation",
      institution: "Platzi",
      period: "August 2025",
      emoji: "🗃️",
    },
    {
      degree: "Git and Github",
      institution: "Platzi",
      period: "March 2025",
      emoji: "🐙",
    },
    {
      degree: "AWS Cloud Practitioner Essentials",
      institution: "Amazon Web Services (AWS)",
      period: "November 2024",
      emoji: "☁️",
    },
    {
      degree: "Regular Expressions",
      institution: "Platzi",
      period: "November 2024",
      emoji: "🤯",
    },{
      degree: "Server administration  - Resource Management",
      institution: "Platzi",
      period: "November 2024",
      emoji: "⚙️",
    },
    {
      degree: "Bash Shell",
      institution: "Platzi",
      period: "November 2024",
      emoji: "🐚",
    },{
      degree: "Command Terminal Line",
      institution: "Platzi",
      period: "October 2024",
      emoji: "💻",
    },
    {
      degree: "Docker Foundation",
      institution: "Platzi",
      period: "October 2024",
      emoji: "🐳",
    },{
      degree: "Server administration  - Linux",
      institution: "Platzi",
      period: "October 2024",
      emoji: "🐧",
    },
    {
      degree: "Complete Linux Administration Course",
      institution: "Udemy",
      period: "September 2019",
      emoji: "🐧",
    },
    {
      degree: "Complete course on AWS",
      institution: "Udemy",
      period: "July 2019",
      emoji: "☁️",
    },
    {
      degree: "Sales Management Foundations",
      institution: "Lynda.com",
      period: "June 2018",
      emoji: "📈",
    },
    {
      degree: "Key Account Management",
      institution: "Lynda.com",
      period: "May 2018",
      emoji: "🔑",
    },
    {
      degree: "Elevator Pitch",
      institution: "Lynda.com",
      period: "May 2018",
      emoji: "🎤",
    },                
  ];

  const volunteering = [
    {
      title: "English teacher and leisure monitor",
      organization: "AIESEC",
      period: "Jul 2013 - Aug 2013",
      description: "English teacher and leisure monitor in Karviná (Czech Republic) with a multicultural group of people. Classes were focused for reduced group of children. Activities programming for kids.",
      logo: aiesecLogo,

    },
  ];

  const languages = [
    { language: "Spanish", proficiency: "Native", flag: "https://flagcdn.com/es.svg" },
    { language: "Italian", proficiency: "Full professional proficiency", flag: "https://flagcdn.com/it.svg" },
    { language: "English", proficiency: "Full professional proficiency", flag: "https://flagcdn.com/gb.svg" },
    { language: "French", proficiency: "Elementary proficiency", flag: "https://flagcdn.com/fr.svg" },
    { language: "Portuguese", proficiency: "Elementary proficiency", flag: "https://flagcdn.com/pt.svg" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <section className="mb-16 text-center">
            <div className="inline-block mb-6 relative">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary via-primary-glow to-accent p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <img src={ferPicture} alt="Fernando del Olmo" className="rounded-full w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              Fernando del Olmo
            </h1>
            <p className="text-2xl text-muted-foreground mb-6">Technical Account Manager / Solutions Architect / Pre sales engineering</p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>hi@fernandodelolmo.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Spain</span>
              </div>
            </div>
            <div className="flex justify-center gap-3">
              <a href="https://www.linkedin.com/in/fernandodelolmovelayos/" target="_blank" rel="noopener noreferrer">
                <Button variant="default" size="lg" className="gap-2">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </Button>
              </a>
              <a href="https://github.com/Ferdelolmo" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="gap-2">
                  <Github className="w-5 h-5" />
                  GitHub
                </Button>
              </a>
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
                  That early curiosity became a lifelong passion. I studied BA but always kept one foot in the tech world, which led to over 8 years of working in the industry. I love solving problems, connecting with people, and helping customers succeed.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Audio CV Section */}
          <section className="mb-16 flex justify-center">
            <AudioPlayer 
              src="/podcast.mp3" 
              title="My career and resume in just 5 minutes"
              description="Relax and listen in!"
            />
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

          {/* Languages Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-primary">Languages</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-wrap justify-center gap-8">
                  {languages.map((lang) => (
                    <FlippableCircle
                      key={lang.language}
                      language={lang.language}
                      proficiency={lang.proficiency}
                      flag={lang.flag}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* A Day in the Life Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-primary">🕓 A Day in the Life of my role</h2>
            <Card>
              <CardContent className="pt-6">
                <DailyRoutineChart />
              </CardContent>
            </Card>
          </section>

          {/* Experience Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-primary">Experience</h2>
            <div className="space-y-8">
              {Object.entries(
                experiences.reduce((acc, exp) => {
                  if (!acc[exp.company]) {
                    acc[exp.company] = [];
                  }
                  acc[exp.company].push(exp);
                  return acc;
                }, {} as Record<string, typeof experiences>)
              ).map(([company, exps]) => (
                <div key={company} className="relative pl-16">
                  <img src={exps[0].logo} alt={company} className="absolute left-0 top-0 w-12 h-12 rounded-full object-contain" />
                  <div 
                    className="absolute left-12 top-0 h-full w-1 rounded-full"
                    style={{ 
                      backgroundColor: 
                        company === 'Grafana Labs' ? 'orange' :
                        company === 'Datadog' ? 'purple' :
                        company === 'VMware' ? 'green' : 'gray'
                    }}
                  ></div>
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">{company}</h3>
                  <div className="space-y-6">
                    {exps.map((exp, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <CardTitle className="text-xl">{exp.title}</CardTitle>
                          <CardDescription className="text-base">
                            {exp.period}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{exp.description}</p>
                          <TakeAways skills={exp.takeaways} company={exp.company} />
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-primary">Education</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="flex items-center gap-4">
                  <img src={edu.logo} alt={edu.institution} className="w-12 h-12 rounded-full object-contain" />
                  <Card className="hover:shadow-lg transition-shadow flex-grow">
                    <CardHeader>
                      <CardTitle className="text-xl">{edu.degree}</CardTitle>
                      <CardDescription className="text-base">
                        <span className="font-semibold text-foreground">{edu.institution}</span> • {edu.period}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              ))}
            </div>
          </section>

          {/* Volunteering Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-primary">Volunteering</h2>
            <div className="space-y-6">
              {volunteering.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <img src={item.logo} alt={item.organization} className="w-12 h-12 rounded-full object-contain" />
                  <Card className="hover:shadow-lg transition-shadow flex-grow">
                    <CardHeader>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                      <CardDescription className="text-base">
                        <span className="font-semibold text-foreground">{item.organization}</span> • {item.period}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </section>

          {/* Webinars and Conferences Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-primary">Webinars and Conferences</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <img src={offsiteImage} alt="Offsite event" className="rounded-lg w-full h-auto" />
                  <img src={lunchandlearnImage} alt="Lunch and learn event" className="rounded-lg w-full h-auto" />
                  <a href="https://grafana.com/es/go/webinar/observabilidad-de-aplicaciones-serverless-con-grafana-cloud-y-open-telemetry/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <img src={videoImage} alt="Video conference" className="rounded-lg w-full h-auto" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Courses Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-primary">Courses and Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courses.map((course, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{course.emoji} {course.degree}</CardTitle>
                    <CardDescription className="text-base">
                      <span className="font-semibold text-foreground">{course.institution}</span> • {course.period}
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