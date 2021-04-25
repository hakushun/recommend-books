export const replaceToHttps = (url: string | undefined): string => {
  if (!url) return '';

  const regex = new RegExp('^https');
  let result: string;

  if (regex.test(url)) {
    result = url;
  } else {
    result = url.replace('http', 'https');
  }
  return result;
};
