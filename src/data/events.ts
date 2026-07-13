// -----------------------------------------------------------------------
// Add / edit events here. This is the single source of truth — both the
// Events page (/events) and the "Latest News" feed on the homepage pull
// from this same list, so you only ever update one place.
//
// Fields:
//   slug        - unique id, used for the URL anchor (/events#slug)
//   title       - full event title, shown on the Events page
//   date        - ISO date (YYYY-MM-DD), used for sorting/upcoming logic
//   dateLabel   - how the date displays (e.g. "February 2027" if the exact
//                 day isn't confirmed yet). Falls back to a formatted
//                 `date` if left blank.
//   time        - optional, leave '' until confirmed
//   location    - optional, leave '' until confirmed
//   description - full description shown on the Events page
//   link        - optional external link (ticket page, RSVP form, etc.)
//   bookSlug    - optional, matches a slug in books.ts — when set, that
//                 book's buyLinks automatically render as buttons
//   newsTitle   - shorter headline for the homepage card (falls back to
//                 `title` if left blank)
//   newsText    - shorter blurb for the homepage card (falls back to
//                 `description` if left blank)
// -----------------------------------------------------------------------
export const events = [
  {
    slug: 'gods-and-monsters-launch',
    title: 'Book Launch: Gods and Monsters',
    date: '2027-02-01',
    dateLabel: 'February 2027',
    time: '',
    location: '',
    description:
      'The official launch of Gods and Monsters, Book One of The Godfire Saga. Join me to celebrate the release of Elias Fetch’s first case — details on venue and time to come as the date gets closer.',
    link: '',
    bookSlug: 'gods-and-monsters',
    newsTitle: 'Gods and Monsters launch event announced',
    newsText: 'Join me for the launch of Book One of The Godfire Saga — February 2027.',
  },
];
