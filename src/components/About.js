import AboutImg from "../assets/about.png";

export default function About() {
  const config = {
    line1: `Hi! I'm Madhavan R, a passionate Front-End Developer skilled in building interactive and responsive web applications using React.js, React MUI, Tailwind CSS, HTML, CSS, and JavaScript.`,
    line2: `I specialize in creating seamless user experiences with clean design and modern tools. My recent projects, like a React-based food tutorial app and an interactive to-do application, are fully responsive and portable across all devices, ensuring accessibility and usability`,
    line3: `Continuously learning, I stay updated with the latest front-end trends to deliver innovative solutions.`,
  };

  return (
    <section className="flex flex-col md:flex-row bg-secondary px-5" id="about">
      <div className="py-5 md:w-1/2">
        <img src={AboutImg} />
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col text-white justify-center">
          <h1 className="text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold">
            About me
          </h1>
          <p className="pb-5">{config.line1}</p>
          <p className="pb-5">{config.line2}</p>
          <p className="pb-5">{config.line3} </p>
        </div>
      </div>
    </section>
  );
}
