export default {
  title: "Band",
  name: "band",
  type: "document",
  fields: [
    {
      name: "band",
      title: "Band Name",
      type: "string",
      description: "Name of the band",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100,
      },
    },
    {
      name: "previewImage",
      title: "Preview Image",
      type: "image",
        options: {
          hotspot: true
      }
      },
    /*
    TODO: Add fields for:

    1. Main image
    2. Supporting Image
    3. Representative quote
    4. body text
    5. Links to similar bands
    6. Tags (this should be a relation???)
    */
  ],
}