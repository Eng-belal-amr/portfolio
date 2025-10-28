import "../styles/Projects.css";

const projectList = [
  {
    title: "Smart Mobile Hub – Inventory System",
    description:
      "A comprehensive, multi-tenant full-stack web application for mobile shop owners to manage inventory, repairs, sales, and customer relations. Built with React, ASP.NET Core, and MySQL.",
    code: "https://github.com/Eng-belal-amr/smart-mobile-inventory-system",
    live: "#", // Add link if deployed
    delay: 100,
  },
  {
    title: "GameZone – ASP.NET Core Web App",
    description:
      "Complete web application for managing and showcasing video games. Includes CRUD operations, categories, image uploads, and detailed views. Built with ASP.NET Core, Entity Framework, and Bootstrap.",
    code: "https://github.com/Eng-belal-amr/GameZone",
    live: "#",
    delay: 200,
  },
  {
    title: "StayHub – Hotel Management System",
    description:
      "Full-stack booking system with admin dashboard and client panel. Built using Laravel and React for seamless hotel management.",
    code: "https://github.com/hegoo2004/StayHub",
    live: "#",
    delay: 300,
  },
  {
    title: "E-commerce Website",
    description:
      "Fully functional e-commerce platform with authentication, product listing, cart, and admin dashboard. Developed using React.",
    code: "#",
    live: "#",
    delay: 400,
  },
  {
    title: "iPhone 13 Pro Max Color Picker",
    description:
      "Interactive SPA allowing users to preview and select iPhone 13 Pro Max colors dynamically. Built with React.",
    code: "https://github.com/Eng-belal-amr/iphone-color-picker",
    live: "https://vercel.com/belal-amrs-projects/iphone-color-picker",
    delay: 500,
  },
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
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
              {project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
