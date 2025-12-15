import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // todo: remove mock functionality - replace with actual API call
    console.log('Contact form submitted:', formData);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: 'Message Sent!',
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4" data-testid="text-contact-title">
          Get in Touch
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Have questions about our products or interested in wholesale orders? 
          We'd love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="overflow-visible">
          <CardHeader>
            <CardTitle className="font-heading">Send Us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  data-testid="input-contact-name"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  data-testid="input-contact-email"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  data-testid="input-contact-phone"
                />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements..."
                  rows={5}
                  required
                  data-testid="input-contact-message"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-wheat text-wheat-foreground"
                disabled={isSubmitting}
                data-testid="button-contact-submit"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="overflow-visible">
            <CardHeader>
              <CardTitle className="font-heading">Quick Order via WhatsApp</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                For faster response and easy ordering, connect with us on WhatsApp. 
                We typically respond within minutes during business hours.
              </p>
              <WhatsAppButton />
            </CardContent>
          </Card>

          <Card className="overflow-visible">
            <CardHeader>
              <CardTitle className="font-heading">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-wheat mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-muted-foreground text-sm">
                    Village Sundarpur, Near Grain Market<br />
                    District Karnal, Haryana 132001
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-wheat mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground text-sm">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-wheat mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground text-sm">hello@trueorganicfarms.in</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-wheat mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Business Hours</p>
                  <p className="text-muted-foreground text-sm">
                    Mon - Sat: 9:00 AM - 6:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-visible bg-wheat/10 border-wheat/20">
            <CardContent className="p-6">
              <h3 className="font-heading font-bold mb-2">Wholesale Inquiries</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Interested in bulk orders for restaurants, hotels, or retail stores? 
                We offer competitive wholesale pricing with reliable delivery.
              </p>
              <WhatsAppButton message="Hi! I'm interested in wholesale pricing for Home Root Farms atta products. Please share your bulk order rates and minimum quantities." />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
