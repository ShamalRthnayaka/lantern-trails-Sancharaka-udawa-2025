
const AdventureTypes = () => {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Feel real adventure and very close to nature</h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1504457047772-27faf1c00561?auto=format&fit=crop&w=400&q=80" 
            alt="Hiking" 
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="font-semibold">Hiking</h3>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1576675784432-994941412b3d?auto=format&fit=crop&w=400&q=80" 
            alt="Camping" 
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="font-semibold">Camping</h3>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=400&q=80" 
            alt="Culture" 
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="font-semibold">Culture</h3>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1511316695145-4992006ffddb?auto=format&fit=crop&w=400&q=80" 
            alt="Tea Estates" 
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="font-semibold">Tea Estates</h3>
          </div>
        </div>
      </div>
      
      <div className="mt-16 relative">
        <h2 className="text-6xl sm:text-8xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-pink-500">
          Adventure
        </h2>
        <div className="mt-4 bg-gray-100 rounded-lg overflow-hidden shadow-sm">
          <img 
            src="https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=1200&q=80" 
            alt="Sri Lankan landscape" 
            className="w-full h-32 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AdventureTypes;
