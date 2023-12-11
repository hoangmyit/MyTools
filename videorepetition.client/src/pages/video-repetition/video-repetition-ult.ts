import { secondToMinute } from '../../utility/time-utility';
import { RepetitionMark } from './video-repetition-model';

export const getVideoLengthMark = (step: number, duration: number): RepetitionMark[] => {
  const marks: RepetitionMark[] = [];
  let value = 0;
  while(value <= duration) {
    marks.push({
      value: value,
      label: secondToMinute(value),
    });
    value += step;
  }
  return marks;
};
