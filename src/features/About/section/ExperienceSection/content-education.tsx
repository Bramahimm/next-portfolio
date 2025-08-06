export const ContentEducation = () => {
  return (
    <div className="text-primary">
      <h3 className="text-lg font-medium leading-loose text-secondary md:text-xl">
        Computer Science
        <span className="text-base text-accent">
          {" "}
          @
          <a
            href="https://ilkom.unila.ac.id/"
            target="_blank"
            rel="noreferrer"
            className="text-underline"
          >
            Ilkom Unila
          </a>
        </span>
      </h3>
      <p className="pb-5 font-mono text-sm lg:text-base">Aug 2023 - Present</p>
      <ul className="flex list-inside list-disc flex-col gap-4 text-sm leading-relaxed lg:text-base">
        <li>
          I chose Computer Science not just to follow technology trends, but to
          understand and shape the systems that drive them. I’ve always been
          drawn to structure, detail, and the philosophy behind clean design.
          From orbital layouts to scalable visual systems, my journey has
          evolved from curiosity to conviction.
        </li>
        <li>
          In the early semesters, I explored visual design and system
          logic—often experimenting with layout structures, interface behavior,
          and the relationship between form and function. These explorations
          sparked a deeper interest in how code could embody clarity, identity,
          and intent.
        </li>
        <li>
          By the fifth semester, I committed fully to programming. I began
          studying frontend development with a focus on modular architecture,
          responsive design, and maintainable code. Coding became my way of
          thinking—where every component, every config, and every pixel serves a
          purpose within a larger, scalable system.
        </li>
      </ul>
    </div>
  );
};
