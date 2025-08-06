"use client";

import type { FC } from "react";
import Image from "next/image";
import { ImageSecret } from "@/constants/images";
import { Dominos } from "@/components";

const MainContent: FC = () => {
  return (
    <section className="flex h-[650px] w-full flex-col items-center justify-center py-24 text-center ">
      <div className="absolute mb-[-430px] mr-[10px] md:mb-[400px] md:mr-[200px] lg:mr-[300px] xl:mr-[480px]">
        <Image
          src={ImageSecret}
          alt="secret game"
          width={1000}
          height={1000}
          className="h-[150px] w-full md:h-[200px] lg:h-[250px]"
        />
      </div>
      <div className="z-40 mb-0 md:mb-10">
        <h2
          className="pb-2 text-3xl font-bold leading-tight text-secondary md:pb-0 md:text-4xl md:leading-relaxed lg:text-5xl lg:leading-relaxed"
          data-aos="zoom-in-up"
          data-aos-duration="300"
        >
          Delivering modern,
          <br />
          chill & instuitive web rhytms.
        </h2>
        <p
          className="text-sm text-primary md:text-base"
          data-aos="fade-up"
          data-aos-duration="300"
        >
          Ideas flow best when the mind is loose. I build digital journeys while
          grounded in nature, fueled by caffeine and smoke🚬 shaping interfaces
          with soul
        </p>
      </div>
      <div className="bg-base-100 absolute z-0 m-auto h-[600px] w-[350px] opacity-50 md:w-[672px] lg:w-[825px] xl:w-[1080px]">
        <Dominos />
      </div>
    </section>
  );
};

export default MainContent;
