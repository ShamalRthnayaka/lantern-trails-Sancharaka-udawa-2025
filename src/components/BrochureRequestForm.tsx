
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
    
    // Simulate form submission delay
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      toast({
        title: "Success!",
        description: "Your brochure request has been received.",
      });
    }, 1500);
  };

  return (
    <Card className="w-full max-w-[420px] p-8 shadow-lg">
      <div className="flex justify-center mb-5">
        <img 
          src="https://lanterntrails.travel/wp-content/uploads/2024/05/lantern-trails-logo.png" 
          alt="Lantern Trails" 
          className="w-28"
        />
      </div>
      
      <h1 className="text-2xl md:text-3xl font-bold mb-3 text-center text-[#12756d]">
        Request Your Lantern Trails Brochure
      </h1>
      
      <p className="text-gray-600 mb-6 text-center">
        Enter your email below and receive our curated travel brochure—featuring unique 
        Sri Lankan adventures and authentic cultural experiences!
      </p>
      
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
        <div className="text-center py-4">
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
      
      <p className="text-sm text-gray-400 mt-5 text-center">
        We respect your privacy. Unsubscribe any time.
      </p>
    </Card>
  );
};

export default BrochureRequestForm;
