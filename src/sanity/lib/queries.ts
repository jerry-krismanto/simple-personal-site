import { defineQuery } from "next-sanity";

export const experiencesQuery = defineQuery(
  `*[_type == "experience"] | order(order asc)`
);

export const projectsQuery = defineQuery(
  `*[_type == "project"] | order(order asc)`
);
