import React from "react";
import ProductCart from "./components/productCart";
import shopingBat from "./assets/ladiesbag.png";

const App = () => {
  return (
    <div className="p-20 flex gap-10  flex-wrap">
      <ProductCart
        img={shopingBat}
        title={"Stylish Bag"}
        children={
          <>
            <p>180 Rs./</p>
            <button className="bg-amber-300 border py-2 px-5 rounded-xl">
              Add to Cart
            </button>
          </>
        }
      />
      <ProductCart
        img={shopingBat}
        title={"Stylish Bag"}
        children={
          <>
            <p>180 Rs./</p>
            <button className="bg-amber-300 border py-2 px-5 rounded-xl">
              add to Cart
            </button>
          </>
        }
      />
      <ProductCart
        img={shopingBat}
        title={"Stylish Bag"}
        children={
          <>
            <p>180 Rs./</p>
            <button className="bg-amber-300 border py-2 px-5 rounded-xl">
              Delete 
            </button>
          </>
        }
      />
      <ProductCart
        img={shopingBat}
        title={"Stylish Bag"}
        children={
          <>
            <p>180 Rs./</p>
            <button className="bg-amber-300 border py-2 px-5 rounded-xl">
              Remove to Cart
            </button>
          </>
        }
      />
      <ProductCart
        img={shopingBat}
        title={"Stylish Bag"}
        children={
          <>
            <p>180 Rs./</p>
            <button className="bg-amber-300 border py-2 px-5 rounded-xl">
              Remove to Cart
            </button>
          </>
        }
      />
      <ProductCart
        img={shopingBat}
        title={"Stylish Bag"}
        children={
          <>
            <p>180 Rs./</p>
            <button className="bg-amber-300 border py-2 px-5 rounded-xl">
              Remove to Cart
            </button>
          </>
        }
      />
      <ProductCart
        img={shopingBat}
        title={"Stylish Bag"}
        children={
          <>
            <p>180 Rs./</p>
            <button className="bg-amber-300 border py-2 px-5 rounded-xl">
              Remove to Cart
            </button>
          </>
        }
      />
      <ProductCart
        img={shopingBat}
        title={"Stylish Bag"}
        children={
          <>
            <p>180 Rs./</p>
            <button className="bg-amber-300 border py-2 px-5 rounded-xl">
              Remove to Cart
            </button>
          </>
        }
      />
      <ProductCart
        img={shopingBat}
        title={"Stylish Bag"}
        children={
          <>
            <p>180 Rs./</p>
            <button className="bg-amber-300 border py-2 px-5 rounded-xl">
              Remove to Cart
            </button>
          </>
        }
      />
      <ProductCart
        img={shopingBat}
        title={"Stylish Bag"}
        children={
          <>
            <p>180 Rs./</p>
            <button className="bg-amber-300 border py-2 px-5 rounded-xl">
              Remove to Cart
            </button>
          </>
        }
      />
    </div>
  );
};

export default App;
