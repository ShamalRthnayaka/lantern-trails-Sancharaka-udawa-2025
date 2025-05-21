
import { Button } from "@/components/ui/button";

const DestinationGrid = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div className="rounded-xl overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=800&q=80" 
          alt="Adventure in Sri Lanka" 
          className="w-full h-[500px] object-cover"
        />
      </div>
      
      <div className="p-4">
        <span className="text-[#12756d] text-sm font-medium uppercase tracking-wider">Adventure Awaits</span>
        <h2 className="text-3xl font-bold mt-2 mb-6">Great opportunity for adventure & travels</h2>
        
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-2 rounded-full">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-gray-700">Personalized itineraries for all types of travelers</span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-2 rounded-full">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-gray-700">Authentic cultural experiences with local guides</span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-2 rounded-full">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-gray-700">Eco-friendly and sustainable travel options</span>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex -space-x-3">
            <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="User" />
            <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=100&q=80" alt="User" />
            <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="User" />
          </div>
          <div className="text-gray-700">
            <div className="font-bold">2500+ Reviews</div>
            <div className="flex text-yellow-400">
              ★★★★★
            </div>
          </div>
        </div>
        
        <Button className="mt-6 bg-[#12756d] hover:bg-[#0d5952]">Explore Tours</Button>
      </div>
    </div>
  );
};

export default DestinationGrid;
