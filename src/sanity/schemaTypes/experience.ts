import { defineArrayMember, defineField, defineType } from "sanity";

export const experience = defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Organization / Subtitle",
      type: "string",
    }),
    defineField({
      name: "startDate",
      title: "Start date",
      type: "date",
    }),
    defineField({
      name: "endDate",
      title: "End date",
      description: "Leave empty if ongoing",
      type: "date",
    }),
    defineField({
      name: "bullets",
      title: "Bullet points",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "order",
      title: "Order",
      description: "Lower numbers show first",
      type: "number",
    }),
  ],
  orderings: [
    {
      title: "Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
