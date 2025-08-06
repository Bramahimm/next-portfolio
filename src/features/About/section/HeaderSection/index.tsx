import type { FC } from "react";
import Image from "next/image";
import bram from "@images/bram.webp";

const HeaderSection: FC = () => {
  return (
    <section className="mt-32 flex h-auto flex-col items-center justify-between lg:mt-6 lg:h-screen lg:flex-row xl:mt-0">
      <div className="flex flex-col justify-center text-primary">
        <div className="flex items-center gap-5 pb-10">
          <h1
            className="text-xl font-semibold text-secondary lg:text-2xl"
            data-aos="fade-left"
            data-aos-duration="300"
          >
            <span className="font-mono text-lg font-normal text-accent lg:text-xl">
              02.{" "}
            </span>
            About Me
          </h1>
          <div
            className="h-[1px] w-32 bg-primary md:w-96"
            data-aos="zoom-in-left"
            data-aos-duration="600"
          ></div>
        </div>
        <div className="flex flex-col gap-5 pr-0 text-sm md:text-base lg:pr-10 xl:pr-0">
          <p data-aos="zoom-in-right">
            Hi!, My name is Bram Ahimsa Lafayet, a Computer Science student in
            Universitas Lampung, I'm a{" "}
            <span className="text-accent">Frontend Web Developper </span> and
            wanna expand my <span className="text-red-500">Backend Stack</span>
          </p>
          <p data-aos="zoom-in-right" data-aos-delay="100">
            As a Computer Science student, I don’t just study how systems work —
            I dissect them, refine them, and rebuild them with intention. My
            expertise in frontend development and UI design is shaped by a deep
            obsession with structure, clarity, and expressive visual logic. I
            create websites and interfaces that feel intuitive to use, immersive
            to experience, and philosophically consistent at every breakpoint.
          </p>
          <p data-aos="zoom-in-right" data-aos-delay="200">
            I approach self-learning as a recursive discipline—each project
            brings clarity that reshapes the next. From orbit-based layouts to
            scalable class architecture, I build digital experiences that are
            visually distinct, structurally modular, and deeply aligned with
            brand identity. My workflow blends experimental branding with clean
            logic—from auditing Tailwind structures to future-proofing
            deployment pipelines—driven by a pursuit not just of progress, but
            precision.
          </p>
          <p data-aos="zoom-in-right" data-aos-delay="300">
            -i’ve been quietly orbiting the layers beneath—where data meets
            design logic. It’s not a detour, but a deepening: exploring
            structure, scale, and how meaning emerges when visuals and code
            align with precision.
          </p>
        </div>
      </div>
      <div
        className="-my-20 pl-0 md:-my-40 lg:-my-0 xl:pl-24"
        data-aos="zoom-in"
        data-aos-duration="300"
      >
        <div className="grayscale transition-all duration-500 hover:grayscale-0">
          <Image
            src={bram}
            alt="bram"
            height={1000}
            className="scale-50 rounded-full lg:scale-100 2xl:scale-75"
          />
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
