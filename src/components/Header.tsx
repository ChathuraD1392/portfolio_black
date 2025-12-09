import {
  FaBlogger,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import background from "../assets/images/bg2.jpg";

const Header = () => {
  return (
    <>
      <section
        className="relative w-full min-h-screen overflow-hidden"
        id="header"
      >
        <img
          src={background}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-0"
        />
        <div className="relative z-10 flex justify-around items-center font-extralight mt-80 text-white text-center">
          <div className="text-left w-1/2">
            <h1 className="text-5xl">Chathura Dilshan Rupasinghe</h1>
            <h3 className="text-lg mt-2">full-stack developer</h3>

            <p className="text-xs mt-2">
              A passionate full-stack developer specializing in both front-end
              and back-end technologies. I build scalable, user-friendly
              applications with a focus on clean code and seamless user
              experiences.
            </p>

            <div className="mt-5 flex space-x-4">
              <FaFacebookF className="rounded-full border p-2 size-10" />
              <FaInstagram className="rounded-full border p-2 size-10" />
              <FaLinkedin className="rounded-full border p-2 size-10" />
              <FaBlogger className="rounded-full border p-2 size-10" />
            </div>

            <button className="mt-5 border p-2 rounded-sm cursor-pointer">
              DOWNLOAD RESUME
            </button>
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold">image</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
