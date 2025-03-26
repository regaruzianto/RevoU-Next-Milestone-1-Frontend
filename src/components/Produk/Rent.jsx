import React from "react";

export const Rent = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center">
      <div className="bg-white shadow-lg p-4 flex justify-between items-center max-w-[390px] w-full rounded-t-lg">
        <div>
          <span className="text-lg font-bold">Rp 300,000</span>
          <span className="text-sm text-gray-600"> /4 Day</span>
        </div>
        <button className="bg-yellow-600 text-white px-6 py-2 rounded">
          ADD
        </button>
      </div>
    </div>
  );
};
