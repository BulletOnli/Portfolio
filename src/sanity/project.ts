import { Rule } from "sanity";

export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "type",
      title:
        "Project Type 0-2 (0: Personal, 1: Freelance, 2: Team Project/Collab)",
      type: "number",
      validation: (rule: Rule) => rule.required().min(0).max(2),
    },
    {
      name: "link",
      title: "Live Preview",
      type: "url",
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "techStack",
      title: "Tech Stacks",
      type: "array",
      validation: (rule: Rule) => rule.required(),
      of: [
        {
          type: "string",
          validation: (rule: Rule) => rule.required(),
        },
      ],
    },
    {
      name: "imgSrc",
      title: "Image Source",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (rule: Rule) => rule.required(),
    },
  ],
};
