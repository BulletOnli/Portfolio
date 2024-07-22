import { groq } from "next-sanity";

export const PROJECT_QUERIES = groq`*[_type == 'project'] | order(_createdAt desc) {
  _id,
  imgSrc,
  title,
  description,
  techStack,
  link,
  }`;
