import React from "react";

const Projects = () => {
  const projectList = [
    { name: "Projeto 1", description: "Descrição do projeto 1" },
    { name: "Projeto 2", description: "Descrição do projeto 2" },
    // Adicione mais projetos aqui
  ];

  return (
    <section id="component-projects">
      <h2>Projetos</h2>
      <ul>
        {projectList.map((project, index) => (
          <li key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
