export const books = [
  {
    slug: 'gods-and-monsters',
    title: 'Gods and Monsters',
    series: 'The Godfire Saga',
    status: 'coming-soon',

    cover: {
      src: '/gods-and-monsters-cover.jpg',
      width: 600,
      height: 900,
    },

    blurb: [
      'Supernatural fixer Elias Fetch returns to Locust Grove, Georgia when a series of unexplained deaths begins to surface.',
      'When the case turns personal, he is drawn into a spiral of grief, memory, and impossible events.',
      'Something ancient is moving beneath the surface... and it knows his name.',
    ],

    releaseDate: '2027-02-01',

    // Preorder / buy links. Replace the "#" placeholders with real retailer
    // URLs as they become available (Amazon, B&N, Bookshop.org, etc.).
    buyLinks: [
      { retailer: 'Amazon', url: '#' },
      { retailer: 'Barnes & Noble', url: '#' },
      { retailer: 'Bookshop.org', url: 'https://bookshop.org/p/books/gods-and-monsters-the-godfire-series-1-patrick-o-dell/f52b62d8d788c1b4?ean=9798232758400' },
    ],

    seo: {
      description: 'Gods and Monsters by Patrick O’Dell',
    },
  },

  {
    slug: 'watchers-in-the-dark',
    title: 'Watchers in the Dark',
    series: 'The Godfire Saga',
    status: 'coming-soon',

    cover: {
      src: '/watchers-in-the-dark-cover.jpg',
      width: 600,
      height: 900,
    },

    blurb: ['Coming 2027'],

    seo: {
      description: 'Watchers in the Dark by Patrick O’Dell',
    },
  },

  {
    slug: 'the-dream-eaters-bargain',
    title: 'The Dream Eater’s Bargain',
    series: 'The Godfire Saga',
    status: 'coming-soon',

    cover: {
      src: '/the-dream-eaters-bargain-cover.jpg',
      width: 600,
      height: 900,
    },

    blurb: ['Coming 2027'],

    seo: {
      description: 'The Dream Eater’s Bargain by Patrick O’Dell',
    },
  },
];
