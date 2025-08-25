import { url } from "inspector";
import { title } from "process";

export const ContentOrganization = () => {
  const datas = [
    {
      title: "Staff of Special Agency",
      url: "https://www.instagram.com/himakomunila/",
      organization: "Himakom Unila",
      date: "Feb 2024 - Feb 2025",
      description: (
        <>
          <li>
            As a member of the Special Agency (Badan Khusus) within Himakom, I
            actively contributed to the recruitment and training of assistant
            lecturers for the Computer Science Department. This involved
            organizing interview sessions, preparing evaluation materials, and
            ensuring the selection process aligned with academic standards.
          </li>
          <li>
            Served as the Project Leader for the Assistant Lecturer Gathering
            Forum under Himakom Unila, overseeing event planning, coordination,
            and execution to foster collaboration and knowledge-sharing among
            teaching assistants in the Computer Science Department.
          </li>
        </>
      ),
    },
    {
      title: "KMK Faculty Team",
      url: "https://www.instagram.com/kmkunilaofficial/",
      organization: "KMK Unila",
      date: "Dec 2023 - Present",
      description: (
        <>
          <li>
            As a core team member of KMK Faculty Coordination, I supported the
            planning and execution of Catholic spiritual programs, including
            liturgical events, faith formation sessions, and inter-faculty
            collaborations.
          </li>

          <li>
            Collaborated with the KMK Faculty Coordinator to facilitate
            inter-faculty spiritual initiatives, assist in event logistics, and
            maintain alignment with Catholic values and organizational goals.
          </li>
        </>
      ),
    },

    {
      title: "Assistant Lecturer - Data Structures & Algorithms",
      url: "https://ilkom.fmipa.unila.ac.id/beranda",
      organization: "Ilmu Komputer Unila",
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
                {data.organization}
              </a>
            </span>
          </h3>
          <p className="pb-5 font-mono text-sm lg:text-base">{data.date}</p>
          <ul className="flex list-inside list-disc flex-col gap-4 text-sm leading-relaxed lg:text-base">
            {data.description}
          </ul>
        </div>
      ))}
    </div>
  );
};
