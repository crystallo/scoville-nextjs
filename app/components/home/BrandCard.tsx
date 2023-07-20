"use client";
import { Variants, motion } from "framer-motion";

interface BrandCardProps {
  brand: Brand;
  idx: number;
  key: string;
}

const variants = (i: number): Variants => {
  return {};
};

export const BrandCard = ({ brand, idx, key }: BrandCardProps) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.06,
        rotate: idx % 2 ? 2 : -2,
        transition: {
          duration: 0.3,
        },
      }}
      className="relative px-4 py-8 overflow-hidden text-sm text-center align-middle bg-white shadow-lg md:py-12 rounded-xl border-1 shaodw-slate-300"
      key={key}
      data-test="brand-card"
    >
      <div className="bar absolute h-[5px] w-full top-0 left-0"></div>
      <h1 className="font-bold font-header">{brand.name}</h1>

      <style jsx>{`
        .bar {
          background: linear-gradient(135deg, ${brand.start}, ${brand.end});
        }
      `}</style>
    </motion.div>
  );
};
