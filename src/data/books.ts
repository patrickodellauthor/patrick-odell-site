export type Book = {
  slug: string;

  title: string;
  series?: string;
  order?: number;

  status?: "draft" | "published" | "coming-soon";

  description: string;

  cover: string;

  releaseDate?: string;

  links?: {
    preview?: string;
    buy?: string;
    page?: string;
  };

  featured?: boolean;
};

export const books: Book[] = [
  {
    slug: "gods-and-monsters",
    title: "Gods and Monsters",
    series: "The Godfire Series",
    order: 1,
    status: "coming-soon",
    description:
      "Supernatural fixer Elias Fetch returns to Locust Grove, Georgia when a series of unexplained deaths begins to surface.",
    cover: "/gods-and-monsters-cover.jpg",
    releaseDate: "February 2027",
    featured: true,
    links: {
      preview: "/books/gods-and-monsters/preview",
      page: "/books/gods-and-monsters"
    }
  },

  {
    slug: "watchers-in-the-dark",
    title: "Watchers in the Dark",
    series: "The Godfire Series",
    order: 2,
    status: "coming-soon",
    description: "",
    cover: "/watchers-in-the-dark-cover.jpg",
    links: {
      page: "/books/watchers-in-the-dark"
    }
  },

  {
    slug: "the-dream-eaters-bargain",
    title: "The Dream Eater’s Bargain",
    series: "The Godfire Series",
    order: 3,
    status: "coming-soon",
    description: "",
    cover: "/the-dream-eaters-bargain-cover.jpg",
    links: {
      page: "/books/the-dream-eaters-bargain"
    }
  }
];
