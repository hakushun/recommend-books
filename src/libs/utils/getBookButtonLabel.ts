import { Type } from '../../redux/modules/book';

export const getBookButtonLabel = (type: Type): string => {
  let result: string;
  switch (type) {
    case 'read':
      result = '読んだ';
      break;
    case 'want':
      result = '読みたい';
      break;
    case 'stock':
      result = '積んでる';
      break;
    default:
      result = '';
      break;
  }
  return result;
};
