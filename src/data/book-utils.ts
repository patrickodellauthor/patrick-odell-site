import { books } from "./books";

export function getFeaturedBook() {
  return books.find((b) => b.featured);
}

export function getBookBySlug(slug: string) {
  return books.find((b) => b.slug === slug);
}

export function getBooksBySeries(series: string) {
  return books.filter((b) => b.series === series);
}
