import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock, Users, Star, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const courses = [
  {
    id: 1,
    title: "Full Stack Web Development",
    description: "Master modern web development with React, Node.js, and MongoDB",
    duration: "6 months",
    level: "Beginner",
    category: "Web Development",
    price: "$1,299",
    rating: 4.8,
    students: 2847,
    instructor: "Sarah Chen",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Data Science & Machine Learning",
    description: "Learn Python, statistics, and ML algorithms to become a data scientist",
    duration: "8 months",
    level: "Intermediate",
    category: "Data Science",
    price: "$1,499",
    rating: 4.9,
    students: 1923,
    instructor: "Dr. Michael Rodriguez",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Artificial Intelligence Fundamentals",
    description: "Explore AI concepts, neural networks, and deep learning frameworks",
    duration: "4 months",
    level: "Advanced",
    category: "AI",
    price: "$1,699",
    rating: 4.7,
    students: 1456,
    instructor: "Prof. Emily Watson",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    title: "Mobile App Development",
    description: "Build native iOS and Android apps using React Native",
    duration: "5 months",
    level: "Intermediate",
    category: "Mobile Development",
    price: "$1,399",
    rating: 4.6,
    students: 987,
    instructor: "Alex Thompson",
    image: "/placeholder.svg",
  },
  {
    id: 5,
    title: "Cloud Computing & AWS",
    description: "Master cloud infrastructure and AWS services for scalable applications",
    duration: "3 months",
    level: "Intermediate",
    category: "Cloud Computing",
    price: "$999",
    rating: 4.8,
    students: 1654,
    instructor: "David Kim",
    image: "/placeholder.svg",
  },
  {
    id: 6,
    title: "Cybersecurity Essentials",
    description: "Learn ethical hacking, security protocols, and threat assessment",
    duration: "6 months",
    level: "Beginner",
    category: "Cybersecurity",
    price: "$1,199",
    rating: 4.5,
    students: 743,
    instructor: "Lisa Parker",
    image: "/placeholder.svg",
  },
];

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [levelFilter, setLevelFilter] = useState("all");

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || course.category === categoryFilter;
    const matchesLevel = levelFilter === "all" || course.level === levelFilter;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Page Header */}
      <section className="bg-hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Our Courses
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-slide-up">
            Choose from our comprehensive range of tech courses designed to advance your career
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex-1 w-full md:max-w-md">
              <Input
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            
            <div className="flex gap-4 w-full md:w-auto">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Web Development">Web Development</SelectItem>
                  <SelectItem value="Data Science">Data Science</SelectItem>
                  <SelectItem value="AI">AI</SelectItem>
                  <SelectItem value="Mobile Development">Mobile Development</SelectItem>
                  <SelectItem value="Cloud Computing">Cloud Computing</SelectItem>
                  <SelectItem value="Cybersecurity">Cybersecurity</SelectItem>
                </SelectContent>
              </Select>

              <Select value={levelFilter} onValueChange={setLevelFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="Beginner">Beginner</SelectItem>
                  <SelectItem value="Intermediate">Intermediate</SelectItem>
                  <SelectItem value="Advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <Card key={course.id} className="hover:shadow-medium transition-all duration-300 group" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-t-lg flex items-center justify-center">
                    <BookOpen className="h-16 w-16 text-primary/60" />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">{course.category}</Badge>
                    <Badge variant={course.level === "Beginner" ? "default" : course.level === "Intermediate" ? "secondary" : "outline"}>
                      {course.level}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors">
                    {course.title}
                  </CardTitle>
                  
                  <CardDescription className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {course.description}
                  </CardDescription>

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

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{course.rating}</span>
                    </div>
                    <span className="text-lg font-bold text-primary">{course.price}</span>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    Instructor: <span className="font-medium">{course.instructor}</span>
                  </p>
                </CardContent>
                
                <CardFooter className="p-6 pt-0">
                  <Link to={`/course/${course.id}`} className="w-full">
                    <Button className="w-full" variant="hero">
                      View Course
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">No courses found</h3>
              <p className="text-muted-foreground">Try adjusting your search terms or filters</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;