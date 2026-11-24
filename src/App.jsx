
import { useState } from "react";

import Navbar from "./components/Navbar.jsx";
import ProjectList from "./components/ProjectList.jsx";
import AddProjectForm from "./components/AddProjectForm.jsx";
import SearchBar from "./components/SearchBar.jsx";

import "./App.css";

// Sample projects
const initialProjects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal website showcasing my skills and projects.",
    image: "https://designnotes.blog.gov.uk/wp-content/uploads/sites/53/2020/06/Portfolio-Desk-620x410.jpg",
    technologies: "HTML, CSS, JavaScript",
    link: "https://github.com"
  },
  {
    id: 2,
    title: "Weather Application",
    description: "An application that displays weather information.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600",
    technologies: "React, CSS",
    link: "https://github.com"
  },
  {
    id: 3,
    title: "Dictionary Application",
    description: "An application that searches for word meanings.",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600",
    technologies: "React, JavaScript",
    link: "https://github.com"
  }
];

function App() {
  const [projects, setProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState("");

  // Add a new project
  const handleAddProject = (newProject) => {
    setProjects((prevProjects) => [
      ...prevProjects,
      newProject
    ]);
  };

  // Filter projects based on search
  const filteredProjects = projects.filter((project) =>
    (
      project.title +
      " " +
      project.description +
      " " +
      project.technologies
    )
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section id="home" className="hero">
          <h1>My Creative Portfolio</h1>
          <p>
            Explore my projects, skills and creativity.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects-section">
          <h2>My Projects</h2>

          <SearchBar onSearch={setSearchTerm} />

          <ProjectList projects={filteredProjects} />

          {filteredProjects.length === 0 && (
            <p>No projects found. Try another search.</p>
          )}
        </section>

        {/* Add Project Section */}
        <section className="add-project-section">
          <AddProjectForm
            onAddProject={handleAddProject}
          />
        </section>

        {/* About Section */}
        <section id="about" className="about-section">
          <h2>About Me</h2>

          <p>
            I am a passionate web developer who enjoys building
            creative, responsive and user-friendly applications.
            I love learning new technologies and turning ideas
            into practical digital experiences.
          </p>

          <h3>My Skills</h3>

          <div className="skills-list">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Git and GitHub</span>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 MyPortfolio. All rights reserved.</p>
        <p>Designed and developed with React.</p>
      </footer>
    </div>
  );
}

export default App;
