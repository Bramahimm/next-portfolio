import { useState } from "react";

export const ContentCertification = () => {
  const [hover, setHover] = useState([]);

  const vendorList = [
    {
      type: "Course",
      name: "Dicoding",
      link: "https://www.dicoding.com",
      certificate: [
        {
          name: "Front-End Web Developer Expert",
          link: "",
        },
        {
          name: "Intermediate Front-End Web Tools",
          link: "",
        },
        {
          name: "Fundamental Web Applications with React",
          link: "",
        },
        {
          name: "Fundamental Front-End Web Development",
          link: "",
        },
        {
          name: "Create Front-End Web for Beginners",
          link: "",
        },
        {
          name: "Build Back-End Applications for Beginners",
          link: "",
        },
        {
          name: "Basics of Web Programming",
          link: "",
        },
        {
          name: "Basics of JavaScript Programming",
          link: "",
        },
        {
          name: "Computer Networking for Beginners",
          link: "",
        },
        {
          name: "Basics of DevOps",
          link: "",
        },
        {
          name: "Cloud Practitioner Essentials (Learning AWS Cloud Basics)",
          link: "",
        },
      ],
    },
    {
      type: "Course",
      name: "Progate",
      link: "https://progate.com/",
      certificate: [
        {
          name: "React",
          link: "",
        },
        {
          name: "NodeJS",
          link: "",
        },
        {
          name: "Javascript",
          link: "",
        },
        {
          name: "HTML & CSS",
          link: "",
        },
      ],
    },
    {
      type: "Competence",
      name: "BNSP",
      link: "https://www.bnsp.go.id",
      certificate: [
        {
          name: "Junior Web Developer",
          link: "",
        },
      ],
    },
    {
      type: "Course",
      name: "Sololearn",
      link: "",
      certificate: [
        {
          name: "HTML ",
          link: "",
        },
        {
          name: "Javascript ",
          link: "",
        },
      ],
    },
  ];

  return (
    <div className="cursor-default text-primary">
      {vendorList.map((vendor, index) => {
        return (
          <div key={index}>
            <h3 className="pb-3 text-lg font-medium leading-loose text-secondary md:text-xl">
              {vendor.type}
              <span className="text-base text-accent">
                {" "}
                @
                <a
                  href={vendor.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-underline"
                >
                  {vendor.name}
                </a>
              </span>
            </h3>
            <ul className="flex list-inside list-disc flex-col gap-4 pb-5 text-sm leading-relaxed lg:text-base">
              {vendor.certificate.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="static  items-center justify-start transition-all duration-300 hover:text-accent md:inline-flex"
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
