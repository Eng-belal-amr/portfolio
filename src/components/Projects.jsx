import '../styles/Projects.css';

const projectList = [
  {
    title: "iPhone 13 Pro Max Color Picker",
    description: "Interactive SPA that lets users preview and select iPhone 13 Pro Max colors. Built with React.",
    code: "https://github.com/Eng-belal-amr/iphone-color-picker",
    live: "https://vercel.com/belal-amrs-projects/iphone-color-picker",
    delay: 200,
  },
  {
    title: "StayHub – Hotel Management System",
    description: "Fullstack system with admin panel and booking client UI using Laravel + React. Hosted on GitHub.",
    code: "https://github.com/hegoo2004/StayHub",
    live: "#",
    delay: 300,
  },
  {
    title: "E-commerce Website",
    description: "Fully functional e-commerce site with product listing and cart features using React.",
    code: "https://github.com/hegoo2004",
    live: "#",
    delay: 100,
  },
  {
    title: "GameZone – ASP.NET Core Web App",
    description: "Complete web application for managing and showcasing video games. Features include listing games, detailed views, categories, devices, image uploads, and full CRUD operations. Built with ASP.NET Core, Entity Framework, C#, Razor Pages, and Bootstrap.",
    code: "https://github.com/Eng-belal-amr/GameZone",
    live: "#", // Add live URL if deployed
    delay: 400,
  }
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 data-aos="fade-up">Projects</h2>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <div
            className="project-card"
            key={index}
            data-aos="fade-up"
            data-aos-delay={project.delay}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.code} target="_blank" rel="noopener noreferrer">Code</a>
              {project.live !== "#" && (
                <a href={project.live} target="_blank" rel="noopener noreferrer">Live</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
