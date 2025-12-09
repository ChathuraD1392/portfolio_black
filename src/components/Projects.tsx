import BaseComponent from "./essentials/BaseComponent";
import image_1 from "../assets/images/ss1.png";
import image_2 from "../assets/images/ss2.png";
import image_3 from "../assets/images/ss3.png";
import image_4 from "../assets/images/ss4.png";
import image_5 from "../assets/images/ss5.png";
import image_6 from "../assets/images/ss6.png";
import ProjectCard from "./essentials/ProjectCard";

const Projects = () => {
  const projects = [
    { image: image_1, title: "" },
    { image: image_2, title: "" },
    { image: image_3, title: "" },
    { image: image_4, title: "" },
    { image: image_5, title: "" },
    { image: image_6, title: "" },
  ];
  return (
    <>
      <BaseComponent title="Projects" marginTop={20} id="projects">
        <div className="grid grid-cols-3 gap-10">
          {projects.map((m, i) => (
            <ProjectCard key={i} image={m.image} title={m.title} />
          ))}
        </div>
      </BaseComponent>
    </>
  );
};

export default Projects;
