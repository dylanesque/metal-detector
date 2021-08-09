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
      name: "blurb",
      title: "Band Blurb",
      type: "string",
      description: "Short description of the band",
    },
    {
      name: "lyric",
      title: "Song lyric",
      type: "string",
      description: "a lyric quote to be used with the hero image",
    },
    {
      name: "bodyText",
      title: "Body Text",
      type: "string",
      description: "a longform description of the band for a main article",
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
        hotspot: true,
      },
    },
    {
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "bodyImage1",
      title: "First Body Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "bodyImage2",
      title: "Second Body Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: [{ type: "tag" }] }],
    },
    {
      name: "similarArtists",
      title: "Similar Artists",
      type: "array",
      of: [{ type: "string"}],
    },
    /*
    TODO: Add fields for:
    - spotify
    - bandcamp
    - metal archives
    - signature records
    - allmusic

    */
  ],
}