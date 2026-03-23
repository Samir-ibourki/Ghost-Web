import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { useProductTheme } from "./hooks/useProductTheme";
import { products } from "./utils/utils";
import { Products } from "./components/Products";
import { LifeStyle } from "./components/LifeStyle";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProduct = products[activeIndex];

  const heroProductsCount = 3;
  useProductTheme(activeProduct.themeKey);
  const handleSwitch = () => {
    setActiveIndex((prev) => (prev + 1) % heroProductsCount);
  };

  return (
    <section className="w-full flex flex-col transition-colors duration-800 min-h-screen">
      <Header />
      <Home
        product={activeProduct}
        onSwitch={handleSwitch}
        activeIndex={activeIndex}
        totalProducts={heroProductsCount}
      />
      <Products />
      <LifeStyle/>
    </section>
  );
}

export default App;
