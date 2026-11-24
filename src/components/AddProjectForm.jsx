
import { useState } from "react";

function AddProjectForm({ onAddProject }) {

  // Store the user's form information
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [link, setLink] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new project object
    const newProject = {
      id: Date.now(),
      title,
      description,
      image,
      technologies,
      link,
    };

    // Send project to the parent component
    onAddProject(newProject);

    // Clear the form after submission
    setTitle("");
    setDescription("");
    setImage("");
    setTechnologies("");
    setLink("");
  };

  return (
    <div className="add-project-form">
      <h2>Add a New Project</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          placeholder="Project Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <input
          type="url"
          placeholder="Project Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Technologies Used"
          value={technologies}
          onChange={(e) => setTechnologies(e.target.value)}
          required
        />

        <input
          type="url"
          placeholder="Project URL"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
        />

        <button type="submit">
          Add Project
        </button>

      </form>
    </div>
  );
}

export default AddProjectForm;

