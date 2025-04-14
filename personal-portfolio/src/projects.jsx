
function Projects() {
    const projectData = [
      {
        title: "Portfolio Website",
        description: "A personal portfolio site to showcase my projects.",
        image: "https://dummyimage.com/300x180",
        demoLink: "#",
        githubLink: "#"
      },
      {
        title: "Todo App",
        description: "A simple React app for managing daily tasks.",
        image: "https://dummyimage.com/300x180",
        demoLink: "#",
        githubLink: "#"
      },
      {
        title: "Weather App",
        description: "Live weather updates using OpenWeather API.",
        image: "https://dummyimage.com/300x180",
        demoLink: "#",
        githubLink: "#"
      }
    ];
  
    return (
      <section id="projects">
        <h2>My Projects</h2>
        <div className="project-grid">
          {projectData.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="buttons">
                <a href={project.demoLink} target="_blank" rel="noreferrer">Live Demo</a>
                <a href={project.githubLink} target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  

export default Projects;