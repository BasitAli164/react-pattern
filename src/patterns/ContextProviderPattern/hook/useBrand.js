//? this code write with react 19

import { use } from "react";
import { BrandContext } from "../context";

const useBrand = () => {
  return use(BrandContext);
};
export default useBrand;
