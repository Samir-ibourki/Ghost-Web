import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { useProductTheme } from "./hooks/useProductTheme";
import { products } from "./utils/utils";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProduct = products[activeIndex];

  useProductTheme(activeProduct.themeKey);
  const handleSwitch = () => {
    setActiveIndex((prev) => (prev + 1) % products.length);
  };

  return (
    <section className="h-screen w-full flex flex-col overflow-hidden transition-colors duration-800">
      <Header />
      <Home
        product={activeProduct}
        onSwitch={handleSwitch}
        activeIndex={activeIndex}
        totalProducts={products.length}
      />
    </section>
  );
}

export default App;
