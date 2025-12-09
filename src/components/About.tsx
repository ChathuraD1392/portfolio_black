import BaseComponent from "./essentials/BaseComponent";

const About = () => {
  return (
    <BaseComponent title="About" marginTop={20} id="about">
      <div className="flex justify-around w-full">
        <div>IMAGE</div>
        <div className="w-1/2">
          <h3 className="text-xl mb-5">Full-stack developer</h3>
          <p className="text-xs mb-10">
            Hi, I'm Chathura Dilshan, a passionate front-end and back-end
            developer with a strong focus on building scalable, user-friendly
            applications. I specialize in creating seamless digital experiences
            using modern technologies, ensuring clean code, performance, and
            efficiency. Whether it's designing interactive UIs or developing
            robust backend systems, I love solving complex problems and bringing
            ideas to life through code. Always eager to learn and grow, I stay
            updated with the latest industry trends to build innovative and
            efficient solutions.
          </p>

          <h3 className="text-xl mb-5">Education</h3>

          <p className="text-xs mb-5">MSc. in Information Technology (UOM)</p>
          <p className="text-xs mb-5">
            BSc. in Electrical & Information Engineering (UOR)
          </p>
        </div>
      </div>
    </BaseComponent>
  );
};

export default About;
