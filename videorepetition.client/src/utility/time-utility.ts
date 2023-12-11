import { trunc } from './number-utility';

export const secondToMinute = (value: number): string => {
  const h = trunc(value / 3600);
  const m = trunc((value - h * 3600) / 60);
  const s = value % 60;
  return h > 1 ? `${h}:${m}:${s}` : `${m}:${s}`;
};
