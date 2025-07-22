import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Clock, Users, Star, BookOpen, CheckCircle, PlayCircle, User, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CourseDetail = () => {
  const { id } = useParams();

  // Mock course data - in a real app, this would be fetched based on the ID
  const course = {
    id: 1,
    title: "Full Stack Web Development",
    description: "Master modern web development with React, Node.js, and MongoDB. This comprehensive course will take you from beginner to job-ready developer in 6 months.",
    longDescription: "This intensive Full Stack Web Development course is designed to transform you into a skilled developer capable of building modern, scalable web applications. You'll start with the fundamentals of HTML, CSS, and JavaScript, then progress to advanced topics including React.js, Node.js, Express, MongoDB, and deployment strategies.",
    duration: "6 months",
    level: "Beginner",
    category: "Web Development",
    price: "$1,299",
    rating: 4.8,
    students: 2847,
    instructor: {
      name: "Sarah Chen",
      bio: "Senior Full Stack Developer with 8+ years experience at tech companies like Google and Spotify",
      image: "/placeholder.svg"
    },
    image: "/placeholder.svg",
    modules: [
      {
        title: "HTML & CSS Fundamentals",
        lessons: 12,
        duration: "3 weeks"
      },
      {
        title: "JavaScript ES6+",
        lessons: 15,
        duration: "4 weeks"
      },
      {
        title: "React.js & Frontend Development",
        lessons: 20,
        duration: "6 weeks"
      },
      {
        title: "Node.js & Express Backend",
        lessons: 18,
        duration: "5 weeks"
      },
      {
        title: "Database Design with MongoDB",
        lessons: 10,
        duration: "3 weeks"
      },
      {
        title: "Deployment & DevOps",
        lessons: 8,
        duration: "2 weeks"
      }
    ],
    skills: [
      "HTML5 & CSS3",
      "JavaScript ES6+",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Git & GitHub",
      "REST APIs",
      "Authentication",
      "Deployment"
    ],
    requirements: [
      "Basic computer literacy",
      "No prior programming experience required",
      "Access to a computer with internet connection",
      "Willingness to learn and practice daily"
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Course Hero */}
      <section className="bg-hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary" className="bg-white/20 text-white">
                  {course.category}
                </Badge>
                <Badge variant="outline" className="border-white/30 text-white">
                  {course.level}
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {course.title}
              </h1>
              
              <p className="text-xl text-white/90 mb-8">
                {course.description}
              </p>

              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-white/80">({course.students.toLocaleString()} students)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <span>{course.instructor.name}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/enrollment" className="flex-1">
                  <Button size="xl" className="w-full bg-white text-primary hover:bg-white/90">
                    Enroll Now - {course.price}
                  </Button>
                </Link>
                <Button size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <PlayCircle className="h-5 w-5 mr-2" />
                  Preview Course
                </Button>
              </div>
            </div>

            <div className="lg:pl-12 animate-scale-in">
              <Card className="shadow-strong">
                <CardHeader>
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center mb-4">
                    <BookOpen className="h-20 w-20 text-primary/60" />
                  </div>
                  <CardTitle>Course Preview</CardTitle>
                  <CardDescription>Get a sneak peek of what you'll learn</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full justify-start">
                    <PlayCircle className="h-5 w-5 mr-2" />
                    Introduction Video (5 min)
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* About Course */}
              <div>
                <h2 className="text-3xl font-bold mb-6">About This Course</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {course.longDescription}
                </p>
              </div>

              {/* What You'll Learn */}
              <div>
                <h2 className="text-3xl font-bold mb-6">What You'll Learn</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.skills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Curriculum */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Course Curriculum</h2>
                <div className="space-y-4">
                  {course.modules.map((module, index) => (
                    <Card key={index} className="hover:shadow-soft transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">
                            Module {index + 1}: {module.title}
                          </CardTitle>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <BookOpen className="h-4 w-4" />
                              {module.lessons} lessons
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {module.duration}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Requirements</h2>
                <ul className="space-y-3">
                  {course.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="h-2 w-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Instructor Card */}
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle>Your Instructor</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-16 w-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                      <User className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{course.instructor.name}</h3>
                      <p className="text-sm text-muted-foreground">Senior Developer</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {course.instructor.bio}
                  </p>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle>Course Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-semibold">{course.duration}</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Level</span>
                    <Badge>{course.level}</Badge>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Students</span>
                    <span className="font-semibold">{course.students.toLocaleString()}</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Language</span>
                    <span className="font-semibold">English</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Certificate</span>
                    <span className="font-semibold">Yes</span>
                  </div>
                </CardContent>
              </Card>

              {/* Enroll CTA */}
              <Card className="bg-hero-gradient text-white shadow-strong">
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold mb-2">{course.price}</h3>
                  <p className="text-white/90 mb-6">One-time payment, lifetime access</p>
                  <Link to="/enrollment">
                    <Button size="lg" className="w-full bg-white text-primary hover:bg-white/90">
                      Enroll Now
                    </Button>
                  </Link>
                  <p className="text-sm text-white/80 mt-4">
                    30-day money-back guarantee
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseDetail;