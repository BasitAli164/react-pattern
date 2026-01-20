import React, { useEffect, useState } from "react";
import { BrandContext } from "../context";

const BrnadProvider = ({ children }) => {
  const [brand, setBrand] = useState(null);

  useEffect(() => {
    const data = { name: "Basit", Color: "#765e45" };
    setBrand(data);
  }, []);
  return <BrandContext.Provider value={{brand}}>
    {children}
  </BrandContext.Provider>;
};

export default BrnadProvider;
