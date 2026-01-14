import React from "react";

const ProductCart = ({ title, img, children }) => {
  return (
    <div className="  border  text-center shadow-2xl rounded-2xl overflow-hidden p-2 ">
      <div className="flex justify-center items-center bg-green-500">
        <img src={`${img}`} alt="Product-Image" className="" />
      </div>
      <div>
        <p className="font-bold my-5">{title}</p>
        <div className="flex justify-between items-center mb-5 gap-5 ">
            {children}
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
