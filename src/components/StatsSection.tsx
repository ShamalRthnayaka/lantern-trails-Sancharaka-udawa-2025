
const StatsSection = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-[#12756d] text-sm font-medium uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl font-bold mt-2">Most stunning company travel and tours</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Where Authenticity Lights The Way... Experience the real Sri Lanka with Lantern Trails.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-3xl font-bold text-[#12756d] mb-2">356+</div>
            <p className="text-gray-600">Destinations</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-3xl font-bold text-[#12756d] mb-2">852+</div>
            <p className="text-gray-600">Travel Packages</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-3xl font-bold text-[#12756d] mb-2">99%</div>
            <p className="text-gray-600">Customer Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
