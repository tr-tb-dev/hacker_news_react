export const extractDomain = (url?: string): string => {
  if (!url) return '';
  try {
    const urlObj = new window.URL(url);
    return urlObj.hostname.replace('www.', '');
  } catch {
    return '';
  }
};

export const getPageFromUrl = (searchParams: URLSearchParams): number => {
  return Number(searchParams.get('page')) || 1;
};
