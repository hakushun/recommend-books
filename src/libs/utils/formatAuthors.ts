export const formatAuthors = (authors: string[] | undefined): string => {
  if (!authors || authors.length === 0) return '';
  return authors.join(', ');
};
