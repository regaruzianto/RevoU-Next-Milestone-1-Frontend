import React from "react";

const ReviewSection = () => {
  return (
    <div className="max-w-[390px] mx-auto my-6">
      <div className="mb-4">
        {/* Header Review */}
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-semibold">REVIEWS (7)</h2>
          <a href="#" className="text-sm text-gray-600">
            View More
          </a>
        </div>

        {/* Review Bar */}
        <div className="mb-4">
          {[
            { label: "Small", width: "2%" },
            { label: "True to Size", width: "85%" },
            { label: "Large", width: "13%" },
          ].map((item, index) => (
            <div className="flex items-center mb-1" key={index}>
              <span className="w-20 text-sm">{item.label}</span>
              <div className="flex-1 bg-gray-200 h-2 rounded-full mr-2">
                <div
                  className="bg-green-600 h-2 rounded-full"
                  style={{ width: item.width }}
                ></div>
              </div>
              <span className="text-sm text-gray-600">{item.width}</span>
            </div>
          ))}
        </div>

        {/* Review Card */}
        <div className="border border-gray-200 rounded-lg p-4 shadow-sm">
          <div className="flex justify-between mb-2">
            <div className="flex items-center">
              <img
                src="/api/placeholder/40/40"
                alt="Reviewer"
                className="w-10 h-10 rounded-full mr-2"
              />
              <div>
                <span className="text-xs text-gray-600">
                  165 CM | 65 KG | 88/78/10 CM
                </span>
              </div>
            </div>
          </div>
          <p className="text-sm">
            This black kaftan is a wardrobe staple for me now! The quality is
            outstanding, and it's incredibly versatile. I've worn it to brunch
            with friends, to the beach as a cover-up, and even to a formal
            dinner with the right accessories. It's so comfortable and easy to
            style. I can't recommend it enough! ps. btw I'm using my boyfriend's
            account xixi!
          </p>
          <p className="text-xs text-gray-600 mt-2">Nov 29, 2023</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
