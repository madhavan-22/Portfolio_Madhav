import HeroImg from "../assets/hero.png";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

export default function Hero() {
  const config = {
    subtitle: "A Front-End Developer and Full-stack Developer",
    social: {
      linkedin: "https://www.linkedin.com/in/madhavan---r",
      github: "https://github.com/madhavan-22",
    },
  };

  return (
    <section className="flex flex-col md:flex-row px-5 py-32 bg-primary justify-center">
      <div className="md:w-1/2 flex flex-col">
        <h1 className="text-white text-6xl font-hero-font">
          Hii <br /> I'm <span className="text-black"> MADHAVAN R </span>
          <p className="text-2xl"> {config.subtitle} </p>
        </h1>
        <div className="flex py-10">
          <a href={config.social.linkedin} className="pr-5 hover:text-white">
            <AiOutlineLinkedin size={40} />
          </a>
          <a href={config.social.github} className="pr-5 hover:text-white">
            <AiOutlineGithub size={40} />
          </a>
        </div>
      </div>

      <img className="md:w-1/3" src={HeroImg} alt="" />
    </section>
  );
}
