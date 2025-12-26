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
      title: "Graphic Designer (Remote) - Creative Design Division",
      url: "https://www.linkedin.com/company/teman-ambiss",
      company: "TemanAmbiss",
      date: "Feb 2025 - Aug 2025",
      description: (
        <ul>
          <li>
            Designed and produced visual content for social media platforms,
            including Instagram feeds, stories, and promotional posters, aligned
            with TemanAmbiss brand identity.
          </li>
          <li>
            Collaborated remotely with the creative and content teams to
            translate campaign concepts into engaging and visually consistent
            designs.
          </li>
          <li>
            Developed creative layouts, typography, and color schemes to enhance
            audience engagement and brand recognition.
          </li>
          <li>
            Utilized design tools such as Figma, Adobe Illustrator, and Canva to
            deliver high-quality assets within deadlines.
          </li>
          <li>
            Iterated designs based on feedback and performance insights to
            improve visual effectiveness across digital campaigns.
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
    {
      title: "Assistant Lecturer - Data Structures & Algorithms",
      url: "https://ilkom.fmipa.unila.ac.id/beranda",
      company: "Ilmu Komputer Unila",
      date: "Feb 2025 - Aug 2025",
      description: (
        <>
          <li>
            Led weekly lab sessions and coordinated assistant team efforts to
            deliver structured, student-centered learning in the Data Structures
            & Algorithms course at Universitas Lampung.
          </li>
          <li>
            Co-developed modular teaching materials and adaptive explanations to
            support diverse student levels, while strengthening clarity,
            collaboration, and technical communication.
          </li>
        </>
      ),
    },
    {
      title: "Assistant Lecturer - Object-Oriented Programming",
      url: "https://ilkom.fmipa.unila.ac.id/beranda",
      company: "Ilmu Komputer Unila",
      date: "Jul 2025 - Dec 2025",
      description: (
        <>
          <li>
            Assisted in teaching Object-Oriented Programming with Java, focusing
            on object design, encapsulation, inheritance, and polymorphism.
          </li>
          <li>
            Facilitated lab sessions and guided students through debugging,
            refactoring, and applying OOP principles in real-world project
            contexts.
          </li>
          <li>
            Collaborated with lecturers to design assignments and evaluation
            criteria that reinforce clean code and modular thinking.
          </li>
        </>
      ),
    },
    {
      title: "Assistant Lecturer - Data Structures",
      url: "https://ilkom.fmipa.unila.ac.id/beranda",
      company: "Ilmu Komputer Unila",
      date: "Jul 2025 - Dec 2025",
      description: (
        <>
          <li>
            Led weekly lab sessions and guided students through practical
            implementation of core data structures and algorithms using C++.
          </li>
          <li>
            Coordinated a team of teaching assistants to ensure structured,
            student-centered learning and consistency across lab sections.
          </li>
          <li>
            Developed modular materials and adaptive explanations to accommodate
            diverse learning levels and improve conceptual understanding.
          </li>
        </>
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
          <ul className="flex list-inside list-disc flex-col gap-4 text-sm leading-relaxed lg:text-base">
            {data.description.props.children}
          </ul>
        </div>
      ))}
    </div>
  );
};
