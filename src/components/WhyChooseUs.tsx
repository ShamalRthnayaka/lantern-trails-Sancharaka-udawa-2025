
const WhyChooseUs = () => {
  return (
    <div className="bg-gray-50 p-8 rounded-xl">
      <div className="text-center mb-10">
        <span className="text-[#12756d] text-sm font-medium uppercase tracking-wider">Why Us</span>
        <h2 className="text-3xl font-bold mt-2">People why choose our travel adventure</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-[#12756d]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Expert Guides</h3>
            <p className="text-gray-600">Our local guides have deep knowledge of Sri Lankan culture, history, and hidden gems.</p>
          </div>
        </div>
        
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-[#12756d]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Personalized Trips</h3>
            <p className="text-gray-600">Every itinerary is tailored to your preferences, interests, and travel style.</p>
          </div>
        </div>
        
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-[#12756d]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">24/7 Support</h3>
            <p className="text-gray-600">Our team is always available to assist you throughout your journey.</p>
          </div>
        </div>
        
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-[#12756d]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Value for Money</h3>
            <p className="text-gray-600">We offer competitive prices without compromising on quality or experiences.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
