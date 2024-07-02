import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const projects = [
  {
    name: "cupotea",
    description:
      "An e-commerce web app to assist a tea shop operations, built with vue, styled with tailwindcss, and contentful as headless cms, deployed on Vercel!",
    link: "https://cupot.vercel.app/",
    image: "/assets/images/cupot.jpg",
  },
  {
    name: "Portal Siswa",
    description:
      "A student portal built with react, data are stored in a json server",
    link: "https://final-project-ruangguru-class7.web.app/",
    image: "/assets/images/student-portal.jpg",
  },
  {
    name: "beliternak.com",
    description:
      "A website for a livestock company, built with Vue.js, styled with tailwindcss adn bootstrap. Part of my internship project at PT. Stechoq Robotika Indonesia.",
    link: "https://beliternak.com/",
    image: "/assets/images/beliternak.png",
  },
  {
    name: "Kostmate",
    description:
      "A payment system for boarding houses, built with vue.js, midtrans as payment gateway, and firebase as database, deployed on Vercel!",
    link: "https://kost-payment.vercel.app/",
    image: "/assets/images/kostmate.png",
  },
];

const ProjectCard = ({ projects }: { projects: any }) => {
  return (
    <div>
      {/* <h3>{projects.name}</h3>
      <p>{projects.description}</p>
      <a href={projects.link}>Read More...</a> */}
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <Image
            src={projects.image}
            alt={projects.name}
            width={500}
            height={300}
            className="rounded-t-lg"
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {projects.name}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {projects.description}
          </p>
          <a
            href={projects.link}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            Read more
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <div className="prose prose-invert max-w-none">
      <Navbar />
      <h3 className="text-center my-8">My Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
        {projects.map((project, index) => (
          <ProjectCard key={index} projects={project} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
