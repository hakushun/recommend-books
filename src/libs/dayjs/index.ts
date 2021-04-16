import dayjs from 'dayjs';

export const getNow = (): number => dayjs().valueOf();

export const parseDate = (timestamp: number): string =>
  dayjs(timestamp).format('YYYY/MM/DD HH:mm:ss');
