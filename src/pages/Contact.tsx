import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Send, Mail, MapPin, Phone, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    console.log('Form submitted:', {
      ...formData,
      timestamp: new Date().toISOString()
    });

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you within 24-48 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sarah.johnson@university.edu",
      link: "mailto:sarah.johnson@university.edu"
    },
    {
      icon: Phone,
      label: "Office Phone",
      value: "(510) 555-0123",
      link: "tel:+15105550123"
    },
    {
      icon: MapPin,
      label: "Office Address",
      value: "Department of Mathematics\nUniversity of California, Berkeley\nBerkeley, CA 94720",
      link: null
    },
    {
      icon: Clock,
      label: "Office Hours",
      value: "Tuesday & Thursday\n2:00 PM - 4:00 PM\n(By appointment)",
      link: null
    }
  ];

  return (
    <main className="flex-1 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Get in Touch</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'd love to hear from you! Whether you have questions about my books, 
            research collaboration opportunities, or just want to connect.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Send className="w-5 h-5 mr-2 text-accent" />
                  Send me a message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me more about your inquiry..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full sm:w-auto gradient-primary text-white hover:shadow-glow transition-smooth"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <info.icon className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-foreground">{info.label}</h4>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="text-sm text-muted-foreground hover:text-accent transition-smooth"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm text-muted-foreground whitespace-pre-line">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <a 
                  href="#" 
                  className="block text-sm text-muted-foreground hover:text-accent transition-smooth"
                >
                  → UC Berkeley Mathematics Department
                </a>
                <a 
                  href="#" 
                  className="block text-sm text-muted-foreground hover:text-accent transition-smooth"
                >
                  → Research Publications
                </a>
                <a 
                  href="#" 
                  className="block text-sm text-muted-foreground hover:text-accent transition-smooth"
                >
                  → Course Materials
                </a>
                <a 
                  href="#" 
                  className="block text-sm text-muted-foreground hover:text-accent transition-smooth"
                >
                  → Academic Calendar
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;