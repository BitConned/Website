
import { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CheckCircle, Clock, MapPin, Briefcase, DollarSign } from "lucide-react";

// Form schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  position: z.string().min(1, { message: "Please select a position." }),
  experience: z.string().min(1, { message: "Please select your experience level." }),
  resume: z.string().min(1, { message: "Please provide a resume link or description." }),
  coverLetter: z.string().min(10, { message: "Cover letter must be at least 10 characters." }),
});

const Careers = () => {
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();
  
  // Form definition
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      position: "",
      experience: "",
      resume: "",
      coverLetter: "",
    },
  });

  // Career listings
  const positions = [
    {
      id: 'blockchain-engineer',
      title: 'Blockchain Engineer',
      type: 'Full-time',
      location: 'Remote',
      salary: '$90K-$130K',
      description: 'Design and implement smart contracts and blockchain solutions for our cross-chain platform.',
      requirements: [
        'Strong experience with Solidity and EVM-compatible chains',
        'Familiarity with Solana development',
        'Understanding of cross-chain technologies',
        '3+ years in blockchain development'
      ]
    },
    {
      id: 'frontend-developer',
      title: 'Frontend Developer',
      type: 'Full-time',
      location: 'Remote',
      salary: '$80K-$110K',
      description: 'Create intuitive and responsive user interfaces for our dApp and website.',
      requirements: [
        'Expertise in React and TypeScript',
        'Experience with web3 libraries and wallet integration',
        'Strong UI/UX sensibilities',
        '2+ years in frontend development'
      ]
    },
    {
      id: 'security-analyst',
      title: 'Security Analyst',
      type: 'Full-time',
      location: 'Remote',
      salary: '$95K-$140K',
      description: 'Ensure the security of our blockchain systems and smart contracts.',
      requirements: [
        'Experience in smart contract auditing',
        'Knowledge of common attack vectors and exploits',
        'Familiarity with security tools and practices',
        '3+ years in cybersecurity'
      ]
    },
    {
      id: 'community-manager',
      title: 'Community Manager',
      type: 'Full-time',
      location: 'Remote',
      salary: '$60K-$90K',
      description: 'Grow and engage with our community across various platforms.',
      requirements: [
        'Experience managing crypto communities',
        'Strong communication skills',
        'Social media expertise',
        '2+ years in community management'
      ]
    }
  ];

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    // This would typically send the form data to a server
    console.log(values);
    
    // Show success message
    toast({
      title: "Application submitted!",
      description: "We'll review your application and get back to you soon.",
    });
    
    setSubmitted(true);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
            Join the BitConned Team
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're building the future of cross-chain technology and need passionate individuals to join our mission.
          </p>
        </div>
        
        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-bitconned-blue/20 to-black border border-white/10 p-6">
              <div className="h-12 w-12 rounded-full bg-bitconned-neon/20 flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Transparency</h3>
              <p className="text-gray-300 text-center">
                We believe in open communication and honesty in all aspects of our work.
              </p>
            </Card>
            
            <Card className="bg-gradient-to-br from-bitconned-blue/20 to-black border border-white/10 p-6">
              <div className="h-12 w-12 rounded-full bg-bitconned-neon/20 flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Security</h3>
              <p className="text-gray-300 text-center">
                We prioritize security and reliability in everything we build.
              </p>
            </Card>
            
            <Card className="bg-gradient-to-br from-bitconned-blue/20 to-black border border-white/10 p-6">
              <div className="h-12 w-12 rounded-full bg-bitconned-neon/20 flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Innovation</h3>
              <p className="text-gray-300 text-center">
                We constantly push the boundaries of what's possible in blockchain technology.
              </p>
            </Card>
          </div>
        </div>
        
        {/* Open Positions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Open Positions</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {positions.map((position) => (
              <Card key={position.id} className="glassmorphism overflow-hidden border border-white/10">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <h3 className="text-2xl font-bold">{position.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      <div className="flex items-center bg-white/10 px-3 py-1 rounded-full text-xs">
                        <Clock className="h-3 w-3 mr-1" />
                        {position.type}
                      </div>
                      <div className="flex items-center bg-white/10 px-3 py-1 rounded-full text-xs">
                        <MapPin className="h-3 w-3 mr-1" />
                        {position.location}
                      </div>
                      <div className="flex items-center bg-white/10 px-3 py-1 rounded-full text-xs">
                        <DollarSign className="h-3 w-3 mr-1" />
                        {position.salary}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">
                    {position.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <ul className="space-y-1 text-sm text-gray-300">
                      {position.requirements.map((req, index) => (
                        <li key={index} className="flex items-start">
                          <div className="mr-2 mt-1">
                            <CheckCircle className="h-4 w-4 text-bitconned-neon" />
                          </div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    onClick={() => form.setValue('position', position.title)}
                    className="bg-bitconned-neon text-bitconned-dark-blue hover:bg-bitconned-neon/90"
                  >
                    Apply Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Application Form */}
        <div id="application-form" className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Apply Now</h2>
          
          {!submitted ? (
            <Card className="glassmorphism border border-white/10">
              <div className="p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your full name" 
                                className="bg-white/10 border-white/20 text-white"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your email" 
                                className="bg-white/10 border-white/20 text-white"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="position"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Position</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="grid grid-cols-1 md:grid-cols-2 gap-4"
                            >
                              {positions.map((position) => (
                                <FormItem key={position.id} className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value={position.title} />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer">
                                    {position.title}
                                  </FormLabel>
                                </FormItem>
                              ))}
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="experience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Experience Level</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-wrap gap-4"
                            >
                              {["Entry Level", "Mid Level", "Senior", "Lead/Manager"].map((level) => (
                                <FormItem key={level} className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value={level} />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer">
                                    {level}
                                  </FormLabel>
                                </FormItem>
                              ))}
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="resume"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Resume/Portfolio</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Link to resume or portfolio (or description)" 
                              className="bg-white/10 border-white/20 text-white"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="coverLetter"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Cover Letter</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us why you're interested in working with BitConned" 
                              className="bg-white/10 border-white/20 text-white min-h-[150px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="bg-bitconned-neon text-bitconned-dark-blue hover:bg-bitconned-neon/90 w-full"
                    >
                      Submit Application
                    </Button>
                  </form>
                </Form>
              </div>
            </Card>
          ) : (
            <Card className="glassmorphism border border-white/10 p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 rounded-full bg-bitconned-neon/20 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-bitconned-neon" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Application Submitted!</h3>
              <p className="text-gray-300 mb-6">
                Thank you for your interest in joining the BitConned team. We'll review your application and contact you if there's a match.
              </p>
              <Button 
                onClick={() => {
                  form.reset();
                  setSubmitted(false);
                }}
                variant="outline"
                className="neon-border text-bitconned-neon hover:bg-bitconned-neon/10"
              >
                Submit Another Application
              </Button>
            </Card>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Careers;
