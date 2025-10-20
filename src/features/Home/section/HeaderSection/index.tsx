import type { FC } from "react";

const HeaderSection: FC = () => {
  return (
    <section className="flex h-[80vh] w-full flex-col justify-center px-0 pt-44 leading-relaxed md:h-screen md:pt-16 lg:px-[70px] lg:pt-12 ">
      <p
        className="ml-1 hidden pb-3 text-sm text-accent md:block md:pb-7 md:text-base"
        data-aos="fade-up"
      >
        Hi, my name is
      </p>
      <h1
        className="pb-1 text-4xl font-semibold text-secondary md:mt-0 md:pb-4 md:text-5xl lg:text-6xl"
        data-aos="fade-up"
      >
        Bram ahimsa.
      </h1>
      <h1
        className="pb-4 text-4xl font-semibold text-primary md:pb-8 md:text-5xl lg:text-6xl"
        data-aos="fade-up"
      >
        I'm a Website Developer.
      </h1>
      <p
        className="w-full text-sm leading-relaxed text-primary md:w-[540px] md:text-base"
        data-aos="zoom-in-up"
      >
        I'm a Front-End Software Engineer passionate about crafting visually
        stunning and highly modular web experiences. With a solid foundation in
        JavaScript and growing expertise in tools like React, Next.js, and
        Tailwind CSS, I thrive on transforming ideas into clean, scalable
        interfaces—seamlessly connected to robust, maintainable backend
        architectures using modern APIs and server logic.
      </p>
      <div
        className="mt-10 text-sm md:mt-14"
        data-aos="flip-up"
        data-aos-duration="600"
      >
        <a
          className="rounded-[4px] border-2 border-accent px-7 py-5 text-accent transition-all duration-300 hover:bg-accent hover:bg-opacity-10"
          href="https://drive.google.com/file/d/1xf6AsYZ6xUKsyIPQgRnAG9T5Tocav7s5/view?usp=drive_link"
          target="_blank"
          rel="noreferrer"
        >
          <button>Visit my cv!</button>
        </a>
      </div>
    </section>
  );
};

export default HeaderSection;
