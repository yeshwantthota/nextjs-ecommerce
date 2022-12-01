export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }], // array of type images
      options: {
        hotspot: true, // for better postioning of the images
      },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug", //url
      title: "Slug",
      type: "slug",
      options: {
        source: "name", // makes the url according to the name
        maxLength: 90,
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "details",
      title: "Details",
      type: "string",
    },
  ],
};
