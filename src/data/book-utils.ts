import { books } from "./books";

/**
 * Temporary featured logic:
 * - first published book becomes featured
 * (we can upgrade this later to explicit featured flag or homepage config)
 */
export function getFeaturedBook() {
  return books.find((b) => b.status === "published") ?? books[0];
}
