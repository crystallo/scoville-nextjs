import { brandCards } from "@/data/brandCards";
import { BrandCard } from "./BrandCard";

export const Brands = () => {
  return (
    <section
      className="grid grid-cols-3 gap-4 mx-4 my-16 lg:gap-12 lg:grid-cols-6"
      data-test="brands-section"
    >
      {brandCards.map((brand, idx) => (
        <BrandCard brand={brand} idx={idx} key={brand.name} />
      ))}
    </section>
  );
};
