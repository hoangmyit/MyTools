import { FunctionComponent, useCallback, useEffect, useRef, useState } from 'react';
import { VideoRepetitionProp } from './video-repetition-model';
import PageHeader from '../../layout/common/page-header/page-header';
import { registerPlugin } from 'react-filepond';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import { video_container, video_body, container, footer_container } from './video-repetition.module.scss';
import classNames from 'classnames';
import { BigPlayButton, ControlBar, Player, PlayerReference } from 'video-react';
import VideoRepetitionControl from './video-repetition-control';

registerPlugin(FilePondPluginFileValidateType);

const VideoRepetition: FunctionComponent<VideoRepetitionProp> = ({ title }) => {
  const videoContainerElm = useRef<HTMLDivElement>(null);
  const videoElm = useRef<PlayerReference>(null);
  const [videoFilePath, setVideoFilePath] = useState<string>('');
  const [videoWidth, setVideoWidth] = useState<number>(100);
  const [videoHeight, setVideoHeight] = useState<number>(100);

  const handlePathChange = useCallback((path: string) => setVideoFilePath(path), []);

  useEffect(() => {
    if (videoContainerElm.current && videoElm.current) {
      const { width, height } = videoContainerElm.current.getBoundingClientRect();
      setVideoWidth(Math.min(1224, width - 100));
      setVideoHeight(height * 0.8);
    }
  }, [videoContainerElm.current]);
  return (
    <div className={container}>
      <PageHeader title={title} active="Video" heading="Repetition" />
      <div className={classNames('row', video_body)}>
        <div className="col-12 col-sm-12">
          <div className={classNames('card', video_container)}>
            <div className="card-body" ref={videoContainerElm}>
              <Player fluid={false} width={videoWidth} height={videoHeight} ref={videoElm} src={videoFilePath} >
                <ControlBar autoHide={false} />
                <BigPlayButton position='center'/>

              </Player>
            </div>
            <div className={classNames('card-footer', footer_container)}>
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
