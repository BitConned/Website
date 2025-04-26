
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface CareerFormPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const positions = [
  "Blockchain Developer",
  "Frontend Developer",
  "Backend Developer",
  "Smart Contract Auditor",
  "Community Manager",
  "Marketing Specialist",
  "UX/UI Designer",
  "Product Manager"
];

const CareerFormPopup = ({ isOpen, onClose }: CareerFormPopupProps) => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    position: '',
    experience: '',
    portfolio: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handlePositionChange = (value: string) => {
    setForm(prev => ({ ...prev, position: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.fullName || !form.email || !form.position) {
      toast({
        title: "Incomplete form",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    
    setSubmitted(true);
    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you soon",
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center overflow-y-auto py-10">
      <div className="w-full max-w-2xl mx-auto relative">
        <Button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 h-auto bg-transparent hover:bg-white/10 text-white rounded-full"
          variant="ghost"
        >
          <X className="h-5 w-5" />
        </Button>
        
        <Card className="glassmorphism overflow-hidden border-white/10">
          <div className="p-8">
            <div className="flex justify-center mb-4">
              <img src="/bitconned-logo.png" alt="BitConned Logo" className="h-16" />
            </div>
            
            {!submitted ? (
              <>
                <h3 className="text-2xl font-bold text-gradient text-center mb-6">
                  Join the BitConned Team
                </h3>
                
                <p className="text-gray-300 text-center mb-6">
                  We're looking for talented individuals to help us build the future of cross-chain technology.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input 
                      id="fullName"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Your full name" 
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Your email address" 
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="position">Position *</Label>
                    <Select value={form.position} onValueChange={handlePositionChange}>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Select a position" />
                      </SelectTrigger>
                      <SelectContent>
                        {positions.map((pos) => (
                          <SelectItem key={pos} value={pos}>{pos}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Input 
                      id="experience"
                      name="experience"
                      value={form.experience}
                      onChange={handleChange}
                      placeholder="Years of relevant experience" 
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="portfolio">Portfolio / Github / LinkedIn</Label>
                    <Input 
                      id="portfolio"
                      name="portfolio"
                      value={form.portfolio}
                      onChange={handleChange}
                      placeholder="Link to your work" 
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Why do you want to join BitConned?</Label>
                    <Textarea 
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about yourself and why you're interested" 
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-[100px]"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="bg-bitconned-neon text-bitconned-dark-blue hover:bg-bitconned-neon/90 w-full"
                  >
                    Submit Application
                  </Button>
                </form>
              </>
            ) : (
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gradient mb-6">
                  Application Received!
                </h3>
                
                <p className="text-gray-300 mb-6">
                  Thank you for your interest in joining BitConned. Our team will review your application and contact you soon.
                </p>
                
                <Button onClick={onClose} className="bg-bitconned-neon text-bitconned-dark-blue hover:bg-bitconned-neon/90">
                  Close
                </Button>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CareerFormPopup;
