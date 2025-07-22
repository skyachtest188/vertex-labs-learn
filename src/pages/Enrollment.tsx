import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CheckCircle, CreditCard, Shield, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Enrollment = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    course: "",
    experience: "",
    motivation: "",
    paymentMethod: "card",
    agreeTerms: false,
    agreeMarketing: false,
  });

  const courses = [
    "Full Stack Web Development",
    "Data Science & Machine Learning", 
    "Artificial Intelligence Fundamentals",
    "Mobile App Development",
    "Cloud Computing & AWS",
    "Cybersecurity Essentials"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeTerms) {
      toast({
        title: "Terms Required",
        description: "Please agree to the terms and conditions to continue.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Enrollment Submitted!",
      description: "We'll contact you within 24 hours to complete your enrollment.",
    });

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      course: "",
      experience: "",
      motivation: "",
      paymentMethod: "card",
      agreeTerms: false,
      agreeMarketing: false,
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="bg-hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Start Your Journey
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-slide-up">
            Complete your enrollment and begin transforming your career today
          </p>
        </div>
      </section>

      {/* Enrollment Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="text-2xl">Enrollment Application</CardTitle>
                  <CardDescription>
                    Fill out the form below to secure your spot in our program
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Personal Information</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange("firstName", e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange("lastName", e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    {/* Course Selection */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Course Selection</h3>
                      
                      <div>
                        <Label htmlFor="course">Choose Your Course</Label>
                        <Select value={formData.course} onValueChange={(value) => handleInputChange("course", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a course" />
                          </SelectTrigger>
                          <SelectContent>
                            {courses.map((course) => (
                              <SelectItem key={course} value={course}>
                                {course}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="experience">Previous Experience</Label>
                        <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your experience level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">No prior experience</SelectItem>
                            <SelectItem value="some">Some experience</SelectItem>
                            <SelectItem value="intermediate">Intermediate</SelectItem>
                            <SelectItem value="advanced">Advanced</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="motivation">Why do you want to take this course?</Label>
                        <Textarea
                          id="motivation"
                          placeholder="Tell us about your goals and motivation..."
                          value={formData.motivation}
                          onChange={(e) => handleInputChange("motivation", e.target.value)}
                          rows={4}
                        />
                      </div>
                    </div>

                    {/* Payment Method */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Payment Method</h3>
                      
                      <RadioGroup
                        value={formData.paymentMethod}
                        onValueChange={(value) => handleInputChange("paymentMethod", value)}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="card" id="card" />
                          <Label htmlFor="card" className="flex items-center gap-2">
                            <CreditCard className="h-4 w-4" />
                            Credit/Debit Card
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="installments" id="installments" />
                          <Label htmlFor="installments" className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            Monthly Installments
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="terms"
                          checked={formData.agreeTerms}
                          onCheckedChange={(checked) => handleInputChange("agreeTerms", checked as boolean)}
                        />
                        <Label htmlFor="terms" className="text-sm">
                          I agree to the{" "}
                          <a href="#" className="text-primary hover:underline">
                            Terms and Conditions
                          </a>{" "}
                          and{" "}
                          <a href="#" className="text-primary hover:underline">
                            Privacy Policy
                          </a>
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="marketing"
                          checked={formData.agreeMarketing}
                          onCheckedChange={(checked) => handleInputChange("agreeMarketing", checked as boolean)}
                        />
                        <Label htmlFor="marketing" className="text-sm">
                          I would like to receive course updates and promotional emails
                        </Label>
                      </div>
                    </div>

                    <Button type="submit" size="lg" className="w-full" variant="hero">
                      Submit Enrollment Application
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Benefits */}
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle>What's Included</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span className="text-sm">Lifetime access to materials</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span className="text-sm">1-on-1 mentorship sessions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span className="text-sm">Industry-recognized certificate</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span className="text-sm">Career placement assistance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span className="text-sm">Access to alumni network</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span className="text-sm">Real-world project portfolio</span>
                  </div>
                </CardContent>
              </Card>

              {/* Security */}
              <Card className="bg-secondary/50">
                <CardContent className="p-6 text-center">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Secure Enrollment</h3>
                  <p className="text-sm text-muted-foreground">
                    Your information is protected with industry-standard encryption
                  </p>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card>
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Have questions about the enrollment process? Our team is here to help.
                  </p>
                  <Button variant="outline" className="w-full">
                    Contact Support
                  </Button>
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

export default Enrollment;