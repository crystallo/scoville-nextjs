import Image from "next/image";

export const Hero = () => {
  return (
    <section
      className="flex justify-center px-4 py-16 mt-48 relative overflow-y-clip min-h-max bg-neutral-100 -z-20
      [ sm:px-12 ]
      [ md:mt-16 md:py-24 ]
      "
      data-test="hero-section"
    >
      {/* Background */}
      <div
        className="
            hidden absolute top-0 right-0 -z-10 
            [ sm:flex ]
        "
      >
        <Image
          width={750}
          height={200}
          alt="Background image"
          src="/hero-background.webp"
        />
      </div>
      {/* Content */}
      <div
        className="
            [ sm:mr-16 ]
            [ md:max-w-[650px] md:mr-96 ]
        "
      >
        <h1 className="text-sm font-normal text-primary-1 font-header">
          Enterprise Digital Solutions
        </h1>
        <h2 className="my-12 text-3xl font-medium font-header tracking-wide [ sm:text-5xl ] [ md:leading-none md:text-6xl md:my-16 ]">
          Digital Solutions Empowering the Workforce.
        </h2>
        <p className="text-base font-light tracking-wide text-md [ md:leading-relaxed ] ">
          We integrate strategy, design and technical development to create
          desirable products and services that delight our target audiences.{" "}
          <br />
          <br />
          Our dedicated workforce of more than 170 members located around the
          world are all committed to the shared goal of empowering people
          through better HR and Technology solutions.
        </p>
      </div>
    </section>
  );
};
