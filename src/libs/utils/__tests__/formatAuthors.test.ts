import { formatAuthors } from '../formatAuthors';

describe('関数：formatAuthors', () => {
  const authors = ['test author', 'sample author'];
  const empty: string[] = [];
  // eslint-disable-next-line no-undefined
  const nodata = undefined;

  it('正常値', () => {
    const result = 'test author, sample author';
    expect(result).toEqual(formatAuthors(authors));
  });

  it('空配列', () => {
    const result = '';
    expect(result).toEqual(formatAuthors(empty));
  });

  it('undefined', () => {
    const result = '';
    expect(result).toEqual(formatAuthors(nodata));
  });
});
