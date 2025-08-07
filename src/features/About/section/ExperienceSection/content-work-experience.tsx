export const ContentWorkExperience = () => {
  const datas = [
    {
      title: "Private Mathematics Tutor - Sahabat Edukasi",
      url: "https://www.instagram.com/bramahimm/",
      company: "Sahabat Edukasi",
      date: "Feb 2024 - May 2024",
      description: (
        <ul>
          <li>
            Delivered personalized mathematics tutoring for SD and SMP students
            through Sahabat Edukasi, focusing on foundational concepts,
            equations, and introductory algebra.
          </li>
          <li>
            Conducted offline sessions via home visits for private students and
            on-site teaching at educational foundations, ensuring a comfortable
            and focused learning environment.
          </li>
          <li>
            Designed tailored lesson plans and learning materials aligned with
            each student's academic level and progress, emphasizing clarity and
            engagement.
          </li>
          <li>
            Evaluated student performance regularly through custom exercises and
            feedback sessions, fostering measurable improvement and confidence
            in mathematics.
          </li>
          <li>
            Maintained consistent 90-minute sessions to balance depth of
            instruction with student attention span, optimizing retention and
            understanding.
          </li>
        </ul>
      ),
    },
    {
      title: "Part-Time Transportation Partner – Maxim",
      url: "https://www.instagram.com/maxim_indo/",
      company: "Maxim Indonesia",
      date: "Apr 2023 - Present",
      description: (
        <ul>
          <li>
            Operated as a part-time Maxim partner driver, providing reliable and
            customer-oriented transportation services across Jakarta and
            surrounding areas.
          </li>
          <li>
            Demonstrated punctuality, route efficiency, and strong interpersonal
            communication to ensure positive rider experiences and repeat usage.
          </li>
          <li>
            Managed flexible scheduling alongside primary commitments,
            showcasing discipline, adaptability, and time management in a
            dynamic urban environment.
          </li>
          <li>
            Maintained vehicle cleanliness and operational readiness, aligning
            with Maxim’s service standards and customer expectations.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-8 text-primary">
      {datas.map((data, index) => (
        <div key={index}>
          <h3 className="text-lg font-medium leading-loose text-secondary md:text-xl">
            {data.title}
            <span className="text-base text-accent">
              {" "}
              @
              <a
                href={data.url}
                target="_blank"
                rel="noreferrer"
                className="text-underline"
              >
                {data.company}
              </a>
            </span>
          </h3>
          <p className="pb-5 font-mono text-sm lg:text-base">{data.date}</p>
          <ul className="list-disc list-inside flex flex-col gap-4 text-sm leading-relaxed lg:text-base">
            {data.description.props.children}
          </ul>
        </div>
      ))}
    </div>
  );
};

