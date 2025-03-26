import React from "react";
import designer from "../../assets/designer.png";

function DesignerInfo() {
  return (
    <div className="mt-1 w-[347px] flex flex-col">
      <div className="w-[350px] h-[2px] bg-[#E5E5E5]"></div>
      <div className="mt-2">
        <div className="flex justify-between mb-1">
          <p className="font-bold text-[13px] text-gray-500">DESIGNER</p>
          <p className="text-[11px] text-black">VIEW THE COLLECTION</p>
        </div>
        <img src={designer} alt="designerImage" className="-w[343px] h[61px]" />
      </div>
    </div>
  );
}

export default DesignerInfo;
