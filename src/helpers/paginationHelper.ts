/**
 * Calculates the starting rank number for a given page
 * @param currentPage - Current page number (1-indexed)
 * @param itemsPerPage - Number of items per page
 * @returns Starting rank number for the current page
 */
export const calculateStartRank = (currentPage: number, itemsPerPage: number): number => {
  return (currentPage - 1) * itemsPerPage + 1;
};

/**
 * Paginates an array and returns pagination metadata
 * @param items - Array of items to paginate
 * @param page - Current page number (1-indexed)
 * @param itemsPerPage - Number of items per page
 * @returns Object containing paginated items and metadata
 */
export const paginateArray = <T>(
  items: T[],
  page: number,
  itemsPerPage: number
): {
  paginatedItems: T[];
  totalPages: number;
  startIndex: number;
  endIndex: number;
} => {
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = items.slice(startIndex, endIndex);

  return { paginatedItems, totalPages, startIndex, endIndex };
};
