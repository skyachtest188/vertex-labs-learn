import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Lightbulb, Globe, Heart, Star, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const stats = [
    { icon: Users, label: "Students Graduated", value: "15,000+" },
    { icon: Award, label: "Industry Partners", value: "200+" },
    { icon: Globe, label: "Countries Reached", value: "50+" },
    { icon: Star, label: "Average Rating", value: "4.8/5" },
  ];

  const team = [

    
    {
      name: "Dr. Sarah Chen",
      role: "Founder & CEO",
      specialization: "AI & Machine Learning",
      experience: "15+ years",
      bio: "Former Google AI researcher with a passion for democratizing tech education.",
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Curriculum",
      specialization: "Full Stack Development",
      experience: "12+ years",
      bio: "Ex-Netflix engineer focused on creating industry-relevant learning paths.",
    },
    {
      name: "Prof. Emily Watson",
      role: "Academic Director",
      specialization: "Data Science",
      experience: "20+ years",
      bio: "PhD in Computer Science, published researcher, and dedicated educator.",
    },
    {
      name: "David Kim",
      role: "Industry Relations",
      specialization: "Cloud Computing",
      experience: "10+ years",
      bio: "Former AWS architect building bridges between education and industry.",
    },
    {
      name: "Lisa Parker",
      role: "Student Success Manager",
      specialization: "Cybersecurity",
      experience: "8+ years",
      bio: "Ethical hacker turned educator, ensuring every student reaches their potential.",
    },
    {
      name: "Alex Thompson",
      role: "Lead Instructor",
      specialization: "Mobile Development",
      experience: "9+ years",
      bio: "Mobile app developer with apps downloaded by millions worldwide.",
    },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We constantly evolve our curriculum to match industry trends and emerging technologies.",
    },
    {
      icon: Heart,
      title: "Student-Centric",
      description: "Every decision we make puts our students' success and learning experience first.",
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "Quality tech education should be accessible to everyone, regardless of background.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in education quality and student outcomes.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            About NeoVertexLabs
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-slide-up">
            Empowering the next generation of tech innovators through world-class education and hands-on experience
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                To bridge the gap between academic learning and industry requirements by providing 
                cutting-edge, practical tech education that transforms students into job-ready professionals.
              </p>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To become the global leader in technology education, creating a world where anyone 
                with passion and determination can master in-demand tech skills and build a successful career.
              </p>
            </div>
            
            <div className="animate-scale-in">
              <Card className="bg-card-gradient shadow-strong border-0">
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <stat.icon className="h-12 w-12 text-primary mx-auto mb-3" />
                        <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Founded in 2019 by tech industry veterans who saw the need for practical, 
              industry-aligned education in the rapidly evolving technology landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-medium hover:shadow-strong transition-shadow">
              <CardHeader>
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>2019</CardTitle>
                <CardDescription>The Beginning</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Started with a vision to create practical, industry-relevant tech education 
                  that bridges the skills gap in the technology sector.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-medium hover:shadow-strong transition-shadow">
              <CardHeader>
                <div className="h-16 w-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <CardTitle>2021</CardTitle>
                <CardDescription>Rapid Growth</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Expanded our programs and reached 5,000 students worldwide, 
                  establishing partnerships with leading tech companies.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-medium hover:shadow-strong transition-shadow">
              <CardHeader>
                <div className="h-16 w-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-success" />
                </div>
                <CardTitle>2024</CardTitle>
                <CardDescription>Global Impact</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Now serving over 15,000 graduates across 50 countries, with 95% job placement rate 
                  and industry recognition for educational excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do and shape our approach to education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center shadow-medium hover:shadow-strong transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="h-16 w-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Industry experts and passionate educators dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="shadow-medium hover:shadow-strong transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="h-24 w-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">{member.name}</CardTitle>
                  <CardDescription className="font-medium">{member.role}</CardDescription>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <Badge variant="secondary">{member.specialization}</Badge>
                    <Badge variant="outline">{member.experience}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm text-center">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-hero-gradient text-white shadow-strong border-0">
            <CardContent className="p-12 text-center">
              <BookOpen className="h-16 w-16 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of students who have transformed their careers with our industry-leading programs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/courses">
                  <Button size="xl" className="bg-white text-primary hover:bg-white/90">
                    Explore Courses
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;