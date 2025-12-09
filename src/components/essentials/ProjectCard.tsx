interface Props {
  image: string;
  title: string;
}

const ProjectCard = ({ image, title }: Props) => {
  return (
    <div className="relative rounded-md overflow-hidden hover:scale-105 duration-300 ease-in-out">
      <img src={image} alt={title} className="rounded-md" />
      <div className="absolute inset-0 bg-black/40 hover:bg-black/20 duration-300 ease-in-out"></div>
    </div>
  );
};

export default ProjectCard;
