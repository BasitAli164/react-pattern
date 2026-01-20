import React, { useEffect, useState } from "react";
import { BrandContext } from "../context";

const BrnadProvider = ({ children }) => {
  const [brand, setBrand] = useState(null);

  useEffect(() => {
    const data = { name: "Basit", color: "#765e45" };
    setBrand(data);
  }, []);
  return <BrandContext value={brand}>
    {children}
  </BrandContext>;
};

export default BrnadProvider;
