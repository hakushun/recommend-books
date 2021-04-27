import { replaceToHttps } from '../replaceToHttps';

describe('replaceToHttps', () => {
  const http = 'http://google.com';
  const https = 'https://google.com';
  // eslint-disable-next-line no-undefined
  const nourl = undefined;

  it('http', () => {
    const result = 'https://google.com';
    expect(result).toEqual(replaceToHttps(http));
  });
  it('https', () => {
    const result = 'https://google.com';
    expect(result).toEqual(replaceToHttps(https));
  });
  it('undefined', () => {
    const result = '';
    expect(result).toEqual(replaceToHttps(nourl));
  });
});
