import { FunctionComponent, useState } from 'react';
import { RepetitionVideoControlProp, RepetitionVideoDef } from './video-repetition-model';
import { Button, Col, Row } from 'react-bootstrap';
import { PlayerReference } from 'video-react';
import { FilePond } from 'react-filepond';
import { Box, Slider } from '@mui/material';
import { getVideoLengthMark } from './video-repetition-ult';
import { secondToMinute } from '../../utility/time-utility';

const localRepetitionKey = 'repetition-data';

const setRepetitionData = (repetition: RepetitionVideoDef, updateData: any): RepetitionVideoDef => {
  return {
    ...repetition,
    ...updateData,
  };
};

const getRepetitionDataOrDefault = (): RepetitionVideoDef => {
  const saveData = localStorage.getItem(localRepetitionKey);
  return saveData
    ? JSON.parse(saveData)
    : {
        numOfLoop: 3,
        step: 30,
        value: 0,
        waitingTime: 7,
        currentLoop: 2,
        autoNext: true,
        duration: 0,
      };
};

const setRepetitionDataInLocal = (data: RepetitionVideoDef) => {
  data.currentLoop = data.numOfLoop;
  localStorage.setItem(localRepetitionKey, JSON.stringify(data));
};

const VideoRepetitionControl: FunctionComponent<RepetitionVideoControlProp> = ({ videoElm, handleVideoPath }) => {
  const [repetitionProps, setVideoProps] = useState<RepetitionVideoDef>(getRepetitionDataOrDefault());
  const [isForceStope, setForceStop] = useState<boolean>(false);

  const { numOfLoop, step, value, waitingTime, currentLoop, duration, autoNext } = repetitionProps;

  const playVideo = (elm: PlayerReference, currentRepetition: RepetitionVideoDef) => {
    if (currentRepetition.value > currentRepetition.duration || isForceStope) return;
    const newRepetition = setRepetitionData(currentRepetition, {
      currentLoop: currentRepetition.currentLoop - 1,
    });
    if (currentRepetition.currentLoop <= 0) {
      newRepetition.value += currentRepetition.step;
      newRepetition.currentLoop = currentRepetition.numOfLoop;
      currentRepetition.autoNext && setTimeout(() => playVideo(elm, newRepetition), waitingTime);
    } else {
      elm.seek(currentRepetition.value);
      elm.play();
      setTimeout(
        () => {
          elm.pause();
          setTimeout(() => {
            playVideo(elm, newRepetition);
          }, 3000);
        },
        step * 1000 + 500
      );
    }
    setVideoProps(newRepetition);
  };

  const handlePathChange = (file: Blob) => {
    handleVideoPath(URL.createObjectURL(file));
    setTimeout(() => {
      // toDo: the type defined is wrong so we will update later -> use handleOnDurationChange
      setVideoProps(
        setRepetitionData(repetitionProps, {
          duration: (videoElm.getState() as any).player.duration, // the type is wrong
          value: 0,
        })
      );
    }, 200);
  };

  return (
    <div className="row">
      <div className="col-12 col-sm-12">
        <Row className="row-xs">
          <Col sm={12} md={4}>
            <FilePond
              onupdatefiles={(files) => {
                files.length > 0 && handlePathChange(files[0].file);
              }}
              allowMultiple={false}
              maxFiles={1}
              name="files"
              labelIdle="Drag & Drop your video here or click "
              acceptedFileTypes={['video/*', '.mkv', 'audio/*']}
            />
          </Col>
          <Col sm={12} md={8}>
            <div className="col-lg-12 mt-4">
              <Box sx={{ width: '100%' }}>
                <Slider
                  onChange={(_, value) => {
                    const time = value as number;
                    const newRepetition = setRepetitionData(repetitionProps, {
                      value: time,
                      currentLoop: numOfLoop,
                    });
                    setVideoProps(newRepetition);
                  }}
                  valueLabelDisplay="on"
                  value={value}
                  aria-labelledby="discrete-slider-always"
                  min={0}
                  max={duration}
                  defaultValue={0}
                  step={step}
                  marks={getVideoLengthMark(step, duration)}
                  getAriaValueText={secondToMinute}
                  getAriaLabel={secondToMinute}
                />
              </Box>
            </div>
          </Col>
        </Row>
      </div>
      <div className="col-12 col-sm-12">
        <Row className="row-xs">
          <Col sm={4} md={2}>
            <div className="form-group">
              <div className="form-label">Start</div>
              <Button className="col" onClick={() => playVideo(videoElm, repetitionProps)}>
                Start
              </Button>
            </div>
          </Col>
          <Col sm={2} md={1}>
            <div className="form-group">
              <div className="form-label">Auto</div>
              <input
                type="checkbox"
                className="btn-check"
                checked={autoNext}
                onChange={() =>
                  setVideoProps(
                    setRepetitionData(repetitionProps, {
                      autoNext: !autoNext,
                    })
                  )
                }
              />
              <label
                className="btn btn-outline-primary form-control"
                onClick={() =>
                  setVideoProps(
                    setRepetitionData(repetitionProps, {
                      autoNext: !autoNext,
                    })
                  )
                }
              >
                {autoNext ? 'On' : 'Off'}
              </label>
            </div>
          </Col>
          <Col sm={2} md={1}>
            <div className="form-group">
              <div className="form-label">Force stop</div>
              <input type="checkbox" className="btn-check" checked={isForceStope} />
              <label className="btn btn-outline-primary form-control" onClick={() => setForceStop(!isForceStope)}>
                {isForceStope ? 'On' : 'Off'}
              </label>
            </div>
          </Col>
          <Col sm={4} md={2}>
            <div className="form-group">
              <div className="form-label">Current loop</div>
              <input
                type="text"
                className="form-control"
                id="inputName"
                placeholder="Name"
                value={currentLoop}
                disabled
              />
            </div>
          </Col>
          <Col sm={4} md={2}>
            <div className="form-group">
              <div className="form-label">Num of loops</div>
              <input
                type="number"
                className="form-control"
                value={numOfLoop}
                placeholder="Num of loops"
                onChange={(e) => {
                  const newData = setRepetitionData(repetitionProps, { numOfLoop: e.target.valueAsNumber });
                  setVideoProps(newData);
                  setRepetitionDataInLocal(newData);
                }}
              />
            </div>
          </Col>
          <Col sm={4} md={2}>
            <div className="form-group">
              <div className="form-label">Step</div>
              <input
                type="number"
                className="form-control"
                value={step}
                placeholder="Step"
                onChange={(e) => {
                  const newData = setRepetitionData(repetitionProps, { step: e.target.valueAsNumber });
                  setVideoProps(newData);
                  setRepetitionDataInLocal(newData);
                }}
              />
            </div>
          </Col>
          <Col sm={4} md={2}>
            <div className="form-group">
              <div className="form-label">Waiting time</div>
              <input
                type="number"
                className="form-control"
                value={waitingTime}
                placeholder="Waiting time"
                onChange={(e) => {
                  const newData = setRepetitionData(repetitionProps, { waitingTime: e.target.valueAsNumber });
                  setVideoProps(newData);
                  setRepetitionDataInLocal(newData);
                }}
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default VideoRepetitionControl;
