import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  BookOpen, 
  Users, 
  Award, 
  Star, 
  Clock, 
  CheckCircle,
  TrendingUp,
  Globe,
  Zap,
  Target,
  GraduationCap
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  const featuredCourses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      description: "Master React, Node.js, and MongoDB to build modern web applications",
      duration: "6 months",
      level: "Beginner",
      students: 2847,
      rating: 4.8,
      price: "$1,299",
      category: "Web Development",
    },
    {
      id: 2,
      title: "Data Science & ML",
      description: "Learn Python, statistics, and machine learning algorithms",
      duration: "8 months",
      level: "Intermediate",
      students: 1923,
      rating: 4.9,
      price: "$1,499",
      category: "Data Science",
    },
    {
      id: 3,
      title: "AI Fundamentals",
      description: "Explore artificial intelligence and deep learning frameworks",
      duration: "4 months",
      level: "Advanced",
      students: 1456,
      rating: 4.7,
      price: "$1,699",
      category: "AI",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer at Google",
      image: "/placeholder.svg",
      content: "NeoVertexLabs transformed my career. The hands-on projects and mentorship helped me land my dream job at Google.",
      rating: 5,
      course: "Full Stack Development",
    },
    {
      name: "Michael Chen",
      role: "Data Scientist at Netflix",
      image: "/placeholder.svg",
      content: "The data science program is incredibly comprehensive. I gained practical skills that I use every day in my role.",
      rating: 5,
      course: "Data Science & ML",
    },
    {
      name: "Emily Rodriguez",
      role: "AI Researcher at OpenAI",
      image: "/placeholder.svg",
      content: "The AI course opened up a whole new world for me. The instructors are world-class and the curriculum is cutting-edge.",
      rating: 5,
      course: "AI Fundamentals",
    },
  ];

  const stats = [
    { icon: Users, label: "Students Graduated", value: "15,000+" },
    { icon: Award, label: "Job Placement Rate", value: "95%" },
    { icon: Globe, label: "Countries Reached", value: "50+" },
    { icon: Star, label: "Average Rating", value: "4.8/5" },
  ];

  const features = [
    {
      icon: Target,
      title: "Industry-Focused Curriculum",
      description: "Learn skills that are directly applicable to real-world job requirements",
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of hands-on experience",
    },
    {
      icon: Zap,
      title: "Hands-On Projects",
      description: "Build a portfolio of real projects that showcase your skills to employers",
    },
    {
      icon: TrendingUp,
      title: "Career Support",
      description: "Get job placement assistance and career coaching throughout your journey",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-hero-gradient text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Master In-Demand
                <span className="block text-accent-light">Tech Skills</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Transform your career with our industry-leading programs in Web Development, 
                Data Science, and AI. Join thousands of successful graduates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/courses">
                  <Button size="xl" className="bg-white text-primary hover:bg-white/90 shadow-strong">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    Learn More
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">4.8/5 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <span>15,000+ Graduates</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  <span>95% Job Placement</span>
                </div>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <Card className="shadow-strong bg-white/10 backdrop-blur border-white/20">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Start Learning Today</CardTitle>
                  <CardDescription className="text-white/80">
                    Join our next cohort and begin your transformation
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 text-white">
                    <CheckCircle className="h-5 w-5 text-accent-light" />
                    <span>No prior experience required</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <CheckCircle className="h-5 w-5 text-accent-light" />
                    <span>Industry-recognized certificates</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <CheckCircle className="h-5 w-5 text-accent-light" />
                    <span>Job placement assistance</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <CheckCircle className="h-5 w-5 text-accent-light" />
                    <span>Lifetime community access</span>
                  </div>
                  <Link to="/enrollment" className="block pt-4">
                    <Button className="w-full bg-accent hover:bg-accent-light" size="lg">
                      Enroll Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Popular Courses
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Master the most in-demand tech skills with our comprehensive, industry-focused programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <Card key={course.id} className="group hover:shadow-strong transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 150}ms` }}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary">{course.category}</Badge>
                    <Badge variant={course.level === "Beginner" ? "default" : course.level === "Intermediate" ? "secondary" : "outline"}>
                      {course.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {course.students.toLocaleString()}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{course.rating}</span>
                    </div>
                    <span className="text-2xl font-bold text-primary">{course.price}</span>
                  </div>

                  <Link to={`/course/${course.id}`}>
                    <Button className="w-full group-hover:bg-primary-glow transition-colors">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/courses">
              <Button size="lg" variant="outline">
                View All Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why Choose NeoVertexLabs?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide more than just courses - we offer a complete transformation experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center shadow-medium hover:shadow-strong transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="h-16 w-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from our graduates who have transformed their careers and achieved their goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-medium hover:shadow-strong transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                  <Badge variant="outline">{testimonial.course}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-hero-gradient text-white shadow-strong border-0">
            <CardContent className="p-12 lg:p-16 text-center">
              <GraduationCap className="h-20 w-20 mx-auto mb-8" />
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Career?
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
                Join thousands of students who have successfully transitioned into high-paying tech careers. 
                Your journey starts today.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-md mx-auto">
                <Link to="/enrollment" className="flex-1">
                  <Button size="xl" className="w-full bg-white text-primary hover:bg-white/90">
                    Enroll Now
                  </Button>
                </Link>
                <Link to="/contact" className="flex-1">
                  <Button size="xl" variant="outline" className="w-full border-white/30 text-white hover:bg-white/10">
                    Talk to Advisor
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-white/70 mt-6">
                30-day money-back guarantee • No hidden fees • Flexible payment options
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
