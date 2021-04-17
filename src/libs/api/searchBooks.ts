import axios from 'axios';
import { SearchResult } from '../../redux/modules/searchResult';

type SearchRowData = {
  items: SearchResult[];
  kind: string;
  totalItems: number;
};

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

export const searchBooks = async (keyword: string): Promise<SearchResult[]> => {
  if (keyword === '') return [];
  const { data } = await axios.get<SearchRowData>(`${BASE_URL}?q=${keyword}`);
  return data.items || [];
};
