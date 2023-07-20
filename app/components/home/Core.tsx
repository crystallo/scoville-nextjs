import styles from "@/styles/home/Core.module.css";
import Image from "next/image";

export const Core = () => {
  return (
    <section
      className="relative flex px-8 py-12 overflow-hidden bg-gradient-to-r from-neutral-700 to-neutral-400"
      data-test="core-section"
    >
      <div className="absolute right-[-100px] top-[120px] opacity-40 hover:scale-110 hover:opacity-80 transition duration-500">
        <Image
          width={300}
          height={200}
          className={styles.background_img}
          src="/core-background.webp"
          alt="Geometric shape"
        />
      </div>
      <div className="flex flex-col gap-8 text-white font-header">
        <h1 className="text-xs font-light">Our Core Competencies</h1>
        <h2 className="">
          Great Products, Great Marketing, Great Distribution.
        </h2>
        <h3 className="text-2xl font-light leading-snug">
          Digital Transformation. <br />
          HR Transformation. <br />
          Empowering Workforces.
        </h3>
      </div>
    </section>
  );
};
