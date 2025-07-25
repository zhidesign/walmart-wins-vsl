import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Gift } from 'lucide-react';

const LeadCaptureForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-gradient-secondary border-primary/20 shadow-glow">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-primary rounded-full p-3">
            <Gift className="w-8 h-8 text-primary-foreground" />
          </div>
        </div>
        <CardTitle className="text-2xl font-bold text-primary">
          Get Your FREE Walmart Success Blueprint!
        </CardTitle>
        <p className="text-muted-foreground mt-2">
          Enter your details below to access the complete step-by-step system
        </p>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              className="h-12 text-lg"
            />
          </div>
          
          <div>
            <Input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="h-12 text-lg"
            />
          </div>
          
          <div>
            <Input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="h-12 text-lg"
            />
          </div>
          
          <Button 
            type="submit" 
            variant="cta" 
            className="w-full h-14 text-xl font-bold"
          >
            SEND ME THE BLUEPRINT NOW
            <ArrowRight className="ml-2 w-6 h-6" />
          </Button>
          
          <div className="text-center text-sm text-muted-foreground">
            <p>🔒 Your information is 100% secure</p>
            <p className="mt-1">No spam, unsubscribe anytime</p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default LeadCaptureForm;