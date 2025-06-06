
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const BrochureRequestForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Log for tracking
    console.log(`Brochure request from: ${email} - to be forwarded to info@lanterntrails.travel`);
    
    // In a real implementation, this would be a server-side API call
    // to handle the email forwarding securely
    
    // Simulate form submission delay
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      toast({
        title: "Success!",
        description: "Your brochure request has been received. We'll send it to your email shortly.",
      });
      
      // In a production environment, you would use:
      // 1. A server-side API endpoint
      // 2. An email service like SendGrid, Mailchimp, etc.
      // 3. Or a simple mailto link (less recommended but simplest option)
      
      // Simple mailto link option (for demo purposes):
      try {
        const mailtoLink = `mailto:info@lanterntrails.travel?subject=Brochure Request&body=Please send a brochure to: ${email}`;
        window.open(mailtoLink);
      } catch (error) {
        console.error("Error opening mailto:", error);
      }
    }, 1500);
  };

  return (
    <div>
      <div className="text-center mb-10">
        <span className="text-[#12756d] text-sm font-medium uppercase tracking-wider">Free Guide</span>
        <h2 className="text-3xl font-bold mt-2">Request Your Lantern Trails Brochure</h2>
        <p className="text-gray-600 mt-4 max-w-md mx-auto">
          Enter your email below and receive our curated travel brochure—featuring unique 
          Sri Lankan adventures and authentic cultural experiences!
        </p>
      </div>

      <Card className="w-full max-w-md mx-auto p-6 shadow-lg border-[#bfe3db]">
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Your email address"
                required
                className="w-full p-3 border-[#bfe3db] focus-visible:ring-[#12756d]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-[#12756d] hover:bg-[#0d5952] text-white font-semibold py-3"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <Mail size={18} />
                  Send Me the Brochure
                </span>
              )}
            </Button>
          </form>
        ) : (
          <div className="text-center py-6">
            <div className="flex justify-center mb-4">
              <div className="rounded-full bg-[#e6f5f2] p-3">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-8 w-8 text-[#12756d]" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-medium text-[#12756d] mb-2">Thank you!</h3>
            <p className="text-gray-600">
              Check your inbox for your Lantern Trails brochure.
            </p>
          </div>
        )}
        
        <p className="text-sm text-gray-400 mt-4 text-center">
          We respect your privacy. Unsubscribe any time.
        </p>
      </Card>
    </div>
  );
};

export default BrochureRequestForm;
