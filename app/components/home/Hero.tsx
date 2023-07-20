import Image from "next/image";

export const Hero = () => {
  return (
    <section
      className="px-4 relative overflow-y-clip min-h-max bg-neutral-100 -z-20
      [ sm:px-12 py-16 mt-48 ]
      "
      data-test="hero-section"
    >
      {/* Background */}
      <div
        className="
        hidden
      [ sm:flex absolute top-0 right-0 -z-10 ]"
      >
        <Image
          width={700}
          height={200}
          alt="Background image"
          src="/hero-background.webp"
        />
      </div>
      {/* Content */}
      <div
        className="
      [ sm:mr-16 md:max-w-[600px] ]"
      >
        <h1 className="text-sm font-medium text-primary-1 font-header">
          Enterprise Digital Solutions
        </h1>
        <h2 className="my-12 text-3xl font-semibold leading-tight sm:text-5xl font-header">
          Digital Solutions Empowering the Workforce.
        </h2>
        <p className="text-base tracking-wide text-md">
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
