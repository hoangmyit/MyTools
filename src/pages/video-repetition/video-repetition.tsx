import { FunctionComponent, useCallback, useEffect, useRef, useState } from 'react';
import { VideoRepetitionProp } from './video-repetition-model';
import PageHeader from '../../layout/common/page-header/page-header';
import { registerPlugin } from 'react-filepond';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import { video_container, video_body, container } from './video-repetition.module.scss';
import classNames from 'classnames';
import { ControlBar, Player, PlayerReference } from 'video-react';
import VideoRepetitionControl from './video-repetition-control';

registerPlugin(FilePondPluginFileValidateType);

const VideoRepetition: FunctionComponent<VideoRepetitionProp> = ({ title }) => {
  const videoContainerElm = useRef<HTMLDivElement>(null);
  const videoElm = useRef<PlayerReference>(null);
  const [videoFilePath, setVideoFilePath] = useState<string>('');
  const [videoWidth, setVideoWidth] = useState<number>(100);
  const [videoHeight, setVideoHeight] = useState<number>(100);

  const handlePathChange = useCallback((path: string) => setVideoFilePath(path), []);

  // const [repetitionProps, setVideoProps] = useState<RepetitionVideoDef>({
  //   min: 0,
  //   max: 100,
  //   numOfLoop: 3,
  //   step: 20,
  //   value: 0,
  //   waitingTime: 30,
  // });

  useEffect(() => {
    if (videoContainerElm.current && videoElm.current) {
      const { width, height } = videoContainerElm.current.getBoundingClientRect();
      setVideoWidth(Math.min(1224, width - 100));
      setVideoHeight(height * 0.85);
    }
  }, [videoContainerElm.current]);

  return (
    <div className={container}>
      <PageHeader title={title} active="Video" heading="Repetition" />
      <div className={classNames('row', video_body)}>
        <div className="col-12 col-sm-12">
          <div className={classNames('card', video_container)}>
            <div className="card-body" ref={videoContainerElm}>
              <Player
                fluid={false}
                width={videoWidth}
                height={videoHeight}
                ref={videoElm}
                src={videoFilePath}
                startTime={seekTime}
                // onDurationChange={(e: any) => {
                //   const duration = (e.target as HTMLVideoElement).duration;
                //   setVideoProps(
                //     setRepetitionData(repetitionProps, {
                //       max: duration,
                //     })
                //   );
                // }}
              >
                <ControlBar autoHide={false} />
              </Player>
            </div>
            <div className="card-footer">
              {videoElm.current && (
                <VideoRepetitionControl
                  videoElm={videoElm.current}
                  handleVideoPath={handlePathChange}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoRepetition;
