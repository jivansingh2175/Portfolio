import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Overwatch",
      description:
        "A multi-role remote desktop control system inspired by Chrome Remote Desktop, featuring real-time screen sharing, role-based access control (Superadmin, Client, User), and PIN-based secure device connections using React, Node.js, and Socket.IO.",
      technologies: ["React.js", "Node.js", "Socket.IO", "MongoDB", "WebSockets"],
      githubLink: "https://github.com/jivansingh2175/Overwatch",
      demoLink: "" // Add live demo link if available
    },
    {
      title: "Veshbhusha",
      description:
        "A men's wear e-commerce platform built with React and Firebase, featuring product listings, cart management, user authentication, Razorpay payment gateway integration, and an admin dashboard for product and order management.",
      technologies: ["React.js", "Firebase", "Razorpay", "CSS", "Firestore"],
      githubLink: "https://github.com/jivansingh2175/veshbhusha_react",
      demoLink: "" // Add live demo link if available
    }
  ];

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
              {project.demoLink && (
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
