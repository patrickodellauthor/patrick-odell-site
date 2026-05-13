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

  seo?: {
    title?: string;
    description?: string;
    ogImage?: string;
  };
};

export const books: Book[] = [
  {
    slug: "gods-and-monsters",

    title: "Gods and Monsters",
    series: "The Godfire Series",
    order: 1,

    status: "coming-soon",

    description:
      "Supernatural fixer Elias Fetch returns to Locust Grove, Georgia when a series of unexplained deaths begins to surface. When the case turns personal, he is drawn into a spiral of grief, memory, and impossible events that challenge everything he believes about reality.",

    cover: "/gods-and-monsters-cover.jpg",

    releaseDate: "February 2027",

    featured: true,

    links: {
      preview: "/books/gods-and-monsters/preview",
      page: "/books/gods-and-monsters"
    },

    seo: {
      title: "Gods and Monsters | Patrick O’Dell",
      description:
        "Book One of The Godfire Series by Patrick O’Dell — supernatural urban fantasy centered on Elias Fetch and the collapse of perceived reality.",
      ogImage: "/gods-and-monsters-cover.jpg"
    }
  },

  {
    slug: "watchers-in-the-dark",

    title: "Watchers in the Dark",
    series: "The Godfire Series",
    order: 2,

    status: "coming-soon",

    description:
      "A second entry in The Godfire Series. (Replace with full synopsis when ready.)",

    cover: "/watchers-in-the-dark-cover.jpg",

    featured: false,

    links: {
      page: "/books/watchers-in-the-dark"
    },

    seo: {
      title: "Watchers in the Dark | Patrick O’Dell",
      description:
        "Book Two of The Godfire Series by Patrick O’Dell."
    }
  },

  {
    slug: "the-dream-eaters-bargain",

    title: "The Dream Eater’s Bargain",
    series: "The Godfire Mythos",

    status: "published",

    description:
      "A dark fantasy entry in the broader Godfire mythos.",

    cover: "/the-dream-eaters-bargain-cover.jpg",

    featured: false,

    links: {
      page: "/books/the-dream-eaters-bargain"
    },

    seo: {
      title: "The Dream Eater’s Bargain | Patrick O’Dell",
      description:
        "A dark fantasy story in the Godfire mythos."
    }
  }
];
