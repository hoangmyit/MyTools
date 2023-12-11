import { PlayerReference } from "video-react";

export type VideoRepetitionProp = {
  title: string;
};

export type RepetitionVideoDef = {
  value: number,
  step: number,
  numOfLoop: number,
  waitingTime: number,
  currentLoop: number,
  autoNext: boolean,
  duration: number,
};

export type RepetitionMark = {
  value: number,
  label: string,
};

export type RepetitionVideoControlProp = {
  videoElm: PlayerReference,
  handleVideoPath: (path: string) => void;
};
