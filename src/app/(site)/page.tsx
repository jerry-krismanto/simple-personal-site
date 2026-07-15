import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { client } from "@/sanity/lib/client";
import { experiencesQuery } from "@/sanity/lib/queries";

type Experience = {
  _id: string;
  title: string;
  subtitle?: string;
  startDate?: string;
  endDate?: string;
  bullets?: string[];
};

function formatDateRange(startDate?: string, endDate?: string) {
  if (!startDate) return null;
  const format = (d: string) =>
    new Date(d).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  return `${format(startDate)} - ${endDate ? format(endDate) : "Present"}`;
}

export const revalidate = 60;

export default async function Home() {
  const experiences = await client.fetch<Experience[]>(experiencesQuery);

  return (
    <main className="prose prose-invert max-w-none">
      <Navbar />
      <h1 className="text-3xl text-white my-10">
        Jerry Yan Krismanto - Programmer, System Analyst
      </h1>
      <div className="mb-10">
        <p className="text-white">
          I am a Programmer and System Analyst with experiences in translating business needs into technical requirements 
          and implements it. Eager to broaden my horizon and engage with professional in hopes of 
          fortifying my skills and experiences.
        </p>
      </div>
      <div>
        <h2 className="text-xl mb-6 font-bold">Experiences</h2>
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {experiences.map((experience) => {
            const dateRange = formatDateRange(
              experience.startDate,
              experience.endDate
            );
            return (
              <li key={experience._id} className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-green-100 rounded-full -left-3 ring-8 ring-white dark:ring-green-900 dark:bg-green-800">
                  <svg
                    className="w-2.5 h-2.5 text-green-700 dark:text-green-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  {experience.title}
                </h3>
                {dateRange && (
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {dateRange}
                  </time>
                )}
                {experience.subtitle && (
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    {experience.subtitle}
                  </p>
                )}
                {experience.bullets && experience.bullets.length > 0 && (
                  <ul className="list-disc ml-4 text-sm space-y-1">
                    {experience.bullets.map((bullet, index) => (
                      <li key={index}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ol>
        <div className="space-y-1">
          <h2 className="text-xl mb-6 font-bold">Social Platforms</h2>
          <p>Say hi to me on</p>
          <table>
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody className="[&>td]:text-green-600">
              <tr>
                <td>Email</td>
                <td>
                  <a href="mailto:@jerryykrismanto">
                    jerryykrismanto@gmail.com
                  </a>
                </td>
              </tr>
              <tr>
                <td>LinkedIn</td>
                <td>
                  <a href="https://www.linkedin.com/in/jerryykrismanto/">
                    jerryykrismanto
                  </a>
                </td>
              </tr>
              <tr>
                <td>Instagram</td>
                <td>
                  <a href="https://www.instagram.com/jerrykrismanto/">
                    @jerryykrismanto
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Footer />
      </div>
    </main>
  );
}
