import websiteImg1 from "../assets/ecommerce-websites.jpg";
import websiteImg2 from "../assets/food-ecommerce.jpg";
import websiteImg3 from "../assets/website-blog.jpg";
import FoodApp from "../assets/FoodApp.webp";
import ToDO from "../assets/ToDO.webp";

export default function Projects() {
  const config = {
    projects: [
      {
        image: FoodApp,
        description: "Food Ecommerce website like Swiggy with React",
        link: "https://a-foodapp.netlify.app/",
      },
      {
        image: ToDO,
        description:
          "This To-Do App, built with React and Tailwind CSS, delivers a seamless, responsive experience across devices, from phones to desktops",
        link: "https://react-todo-app-interactive.netlify.app/",
      },
      {
        image: websiteImg3,
        description:
          "This Social Media UI, crafted with MUI, provides a sleek, responsive design that adapts effortlessly to all devices, offering an intuitive user experience on mobile, tablet, and desktop screens",
        link: "",
      },
    ],
  };

  return (
    <section
      id="projects"
      className="flex flex-col py-20 px-5 justify-center bg-primary text-white"
    >
      <div className="w-full">
        <div className="flex flex-col px-10 py-5">
          <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">
            Projects
          </h1>
          <p></p>
        </div>
      </div>

      <div className="w-full">
        <div className="flex flex-col md:flex-row px-10 gap-5">
          {config.projects.map((project) => (
            <a href={project.link}>
              <div className="relative">
                <img className="h-[200px] w-[500px]" src={project.image} />
                <div className="project-desc">
                  <p className="text-center px-5 py-5">{project.description}</p>
                  <div className="flex justify-center">
                    <a className="btn" target="_blank" href={project.link}>
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
