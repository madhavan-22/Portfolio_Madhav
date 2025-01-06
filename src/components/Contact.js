import ResumeImg from "../assets/resume.jpg";

export default function Contact() {
  const config = {
    email: "madhavan3437@gmail.com",
    phone: "+1234567890",
  };

  return (
    <section
      id="contact"
      className="flex flex-col bg-primary px-5 py-32 text-white"
    >
      <div className="flex flex-col items-center">
        <h1 className="text-4xl border-b-4  border-secondary mb-5 w-[140px] font-bold">
          Contact
        </h1>
        <p className="pb-5">
          If you want to discuss in detail please contact me{" "}
          {/* <a className="btn" href="#">
            Download
          </a>{" "} */}
        </p>
        <p className="py-2">
          <span className="font-bold">Email : {config.email} </span>{" "}
        </p>
        {/* <p className="py-2">
          <span className="font-bold">Phone : {config.phone}</span>{" "}
        </p> */}
      </div>
    </section>
  );
}
