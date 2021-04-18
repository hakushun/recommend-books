import axios from 'axios';
import {
  SearchPayload,
  SearchRowData,
} from '../../redux/modules/searchResults';

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

export const searchBooks = async ({
  keyword,
  maxResults,
  startIndex,
}: SearchPayload): Promise<SearchRowData> => {
  const { data } = await axios.get<SearchRowData>(
    `${BASE_URL}?maxResults=${maxResults}&startIndex=${startIndex}&q=${keyword}`,
  );
  return data;
};
