
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-white min-h-[80vh]">
      <div className="container mx-auto px-4 pt-12 pb-20 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
          <div className="mb-6">
            <img 
              src="/lovable-uploads/139b9be9-0386-43d1-94fd-66999f69963b.png" 
              alt="Lantern Trails" 
              className="h-16"
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Explore Dream Tour & Travels
          </h1>
          <p className="text-xl italic text-[#12756d] font-medium mb-6">
            Where Authenticity Lights The Way…
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            Experience the authentic beauty of Sri Lanka with our curated cultural adventures and unforgettable experiences.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm flex items-center">
              <span className="w-2 h-2 bg-[#12756d] rounded-full mr-2"></span>
              Adventure Tours
            </span>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm flex items-center">
              <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
              Cultural Experiences
            </span>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Nature Escapes
            </span>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-[#12756d] hover:bg-[#0d5952] text-white">
              Get Started
            </Button>
            <Button variant="outline" className="border-gray-300">
              Explore Tours
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <img
            src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80"
            alt="Sri Lanka landscape"
            className="rounded-xl shadow-xl object-cover w-full h-[500px]"
          />
          <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center gap-2">
              <div className="bg-green-100 p-2 rounded-full">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm font-medium">Trusted by 10,000+ travelers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
