import Image from "next/image";

export default function Home() {
  return (
    <main className="prose prose-invert max-w-none">
      <div className="m-8 not-prose">
        <ul className="text-white flex gap-8 items-start justify-center">
          <li>Home</li>
          <li>Projects</li>
          <li>Resume</li>
        </ul>
      </div>
      <h1 className="text-3xl text-white my-10">
        Jerry Yan Krismanto - Web Developer, Informatics Engineering Student,
        and a digital aficionado{" "}
      </h1>
      <div className="mb-10">
        <p className="text-white">
          I`m a web developer focusing on frontend development. Currently a
          Informatics Engineering student at{" "}
          <a href="unesa.ac.id" className="text-green-600">
            State University of Surabaya
          </a>
        </p>
      </div>
      <div>
        <h2 className="text-xl mb-6 font-bold">Experiences</h2>
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          <li className="mb-10 ml-6">
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
              Personal Project
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Built an e-commerce web app to assist a tea shop operations.
            </p>
            <ul className="list-disc ml-4 text-sm space-y-1">
              <li>Created the plan and workflow for the project</li>
              <li>
                Implemented Scrum methodology as the management framework for
                the project
              </li>
              <li>
                Developed the client-side item displays and shopping operation
              </li>
              <li>Used Vercel to deploy the web to public networks</li>
            </ul>
          </li>
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-green-100 rounded-full -left-3 ring-8 ring-white dark:ring-green-900 dark:bg-green-800">
              <svg
                className="w-2.5 h-2.5 text-green-800 dark:text-green-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Courses
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              16 February 2023 - 30 June 2023
            </time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Ruangguru Career Acceleration Bootcamp, Frontend Development
            </p>
            <ul className="list-disc ml-4 text-sm space-y-1">
              <li>
                Learned general competence skills and finished a study case to
                apply the knowledge
              </li>
              <li>
                Learned and finished basic and advanced Frontend development
                course using JavaScript
              </li>
              <li>
                Learned and finished basic and advanced Frontend development
                course using JavaScript
              </li>
              <li>Learned and worked with JavaScript framework like React</li>
              <li>Built and deployed a Library app using Netlify</li>
              <li>
                Built and deployed a Student Portal Website using Firebase
              </li>
            </ul>
          </li>
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
      </div>
    </main>
  );
}
