import type { FC } from "react";
import Home from "@/features/Home";

export const metadata = {
  title: "Bram Ahimsa",
  description:
    "Bramahimsa is a Front-End software engineer specializes in building (and sometimes designing) amazing and new digital experiences.",
};

const Homepage: FC = () => {
  return <Home />;
};

export default Homepage;
