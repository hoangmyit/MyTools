import { FunctionComponent, useState } from 'react';
import { RepetitionVideoControlProp, RepetitionVideoDef } from './video-repetition-model';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { PlayerReference } from 'video-react';
import { FilePond } from 'react-filepond';
import { Box, Slider } from '@mui/material';
import { getVideoLengthMark } from './video-repetition-ult';
import { secondToMinute } from '../../utility/time-utility';

const setRepetitionData = (repetition: RepetitionVideoDef, updateData: any): RepetitionVideoDef => {
  return {
    ...repetition,
    ...updateData,
  };
};

const VideoRepetitionControl: FunctionComponent<RepetitionVideoControlProp> = ({ videoElm, handleVideoPath }) => {
  const [repetitionProps, setVideoProps] = useState<RepetitionVideoDef>({
    min: 0,
    max: 100,
    numOfLoop: 3,
    step: 5,
    value: 0,
    waitingTime: 7,
    currentLoop: 2,
  });

  const { min, max, numOfLoop, step, value, waitingTime, currentLoop } = repetitionProps;

  const playVideo = (elm: PlayerReference, currentRepetition: RepetitionVideoDef) => {
    if (currentRepetition.value > currentRepetition.max) return;
    const newRepetition = setRepetitionData(currentRepetition, {
      currentLoop: currentRepetition.currentLoop - 1,
    });
    if (currentRepetition.currentLoop <= 0) {
      newRepetition.value += currentRepetition.step;
      newRepetition.currentLoop = currentRepetition.numOfLoop;
    } else {
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

  return (
    <div className="row">
      <div className="col-12 col-sm-12">
        <Row className="row-xs">
          <Col sm={12} md={4}>
            <FilePond
              onupdatefiles={(files) => {
                files.length > 0 && handleVideoPath(URL.createObjectURL(files[0].file));
              }}
              allowMultiple={false}
              maxFiles={1}
              name="files"
              labelIdle="Drag & Drop your video here or click "
              acceptedFileTypes={['video/*']}
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
                    });
                    setVideoProps(newRepetition);
                  }}
                  valueLabelDisplay="on"
                  value={value}
                  aria-labelledby="discrete-slider-always"
                  min={min}
                  max={max}
                  defaultValue={0}
                  step={step}
                  marks={getVideoLengthMark(step)}
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
          <Col sm={4} md={2}>
            <div className="form-group">
              <div className="form-label">Current loop</div>
              {/* <input
        type="number"
        className="form-control"
        value={currentLoop}
        placeholder="Current step"
        disabled
      /> */}
              <Form.Control
                type="text"
                className="form-control"
                id="inputName"
                placeholder="Name"
                value={currentLoop}
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
                  setVideoProps(setRepetitionData(repetitionProps, { numOfLoop: e.target.valueAsNumber }));
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
                  setVideoProps(setRepetitionData(repetitionProps, { step: e.target.valueAsNumber }));
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
                  setVideoProps(setRepetitionData(repetitionProps, { waitingTime: e.target.valueAsNumber }));
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
