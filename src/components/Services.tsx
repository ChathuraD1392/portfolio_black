import BaseComponent from "./essentials/BaseComponent";
import Card from "./essentials/Card";

const Services = () => {
  const schemes = [
    {
      title: "frontend development",
      para: "Developing scalable and responsive front-end applications that deliver seamless user experiences across all devices.I ensure high performance, maintainability, and a visually appealing UI. My focus is on creating dynamic, interactive, and efficient web solutions to evolve user needs and business requirements.",
    },
    {
      title: "backend development",
      para: "I specialize in developing scalable and responsive back-end systems that ensure high performance and efficiency. Clean architecture and optimized databases, solutions that can handle growth and adapt to changing requirements. My goal is to create secure, reliable, and well-structured back-end services.",
    },
    {
      title: "Mobile Development",
      para: "Developing scalable and responsive mobile applications that deliver seamless user experiences across all devices.I build apps that adapt to different screen sizes while maintaining speed and functionality. Goal is to create innovative, user-friendly solutions while ensuring clean, maintainable code.",
    },
  ];
  return (
    <>
      <BaseComponent title="Services" marginTop={2} id="services">
        <div className="mockup-window bg-white/10 rounded-xl">
          <div className="flex justify-around items-center space-x-10 p-10">
            {schemes.map((s, i) => (
              <Card key={i} title={s.title} para={s.para} />
            ))}
          </div>
        </div>
      </BaseComponent>
    </>
  );
};

export default Services;
