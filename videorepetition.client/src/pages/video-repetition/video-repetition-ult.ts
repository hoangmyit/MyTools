import { secondToMinute } from '../../utility/time-utility';
import { RepetitionMark } from './video-repetition-model';
import { identity, map, times } from 'ramda';

export const getVideoLengthMark = (step: number): RepetitionMark[] => {
  return map(
    (x: number) => {
      const val = x * step;
      return {
        value: val,
        label: secondToMinute(val),
      };
    },
    times(identity, 100)
  );
};
