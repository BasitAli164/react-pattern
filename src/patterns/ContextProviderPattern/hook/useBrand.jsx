//? this code write with react 19 

import { use } from "react";
import { BrandContext } from "../context";

const useBrand = () => {
  const brand = use(BrandContext);

  return brand;
};
export default useBrand;
