import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { projectsQuery } from "@/sanity/lib/queries";
import type { Image as SanityImage } from "sanity";

type Project = {
  _id: string;
  name: string;
  description?: string;
  link?: string;
  image?: SanityImage;
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href={project.link}>
          {project.image && (
            <Image
              src={urlFor(project.image).width(500).height(300).url()}
              alt={project.name}
              width={500}
              height={300}
              className="rounded-t-lg"
            />
          )}
        </a>
        <div className="p-5">
          <a href={project.link}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {project.name}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {project.description}
          </p>
          <a
            href={project.link}
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export const revalidate = 60;

export default async function Projects() {
  const projects = await client.fetch<Project[]>(projectsQuery);

  return (
    <div className="prose prose-invert max-w-none">
      <Navbar />
      <h3 className="text-center my-8">My Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
