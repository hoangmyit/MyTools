import { FunctionComponent, useEffect, useRef } from 'react';
import { VideoRepetitionProp } from './video-repetition-model';
import PageHeader from '../../layout/common/page-header/page-header';
import { Col } from 'react-bootstrap';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import { video_container, video_body, container } from './video-repetition.module.scss';
import classNames from 'classnames';
registerPlugin(FilePondPluginFileValidateType);

const VideoRepetition: FunctionComponent<VideoRepetitionProp> = ({ title }) => {
  const videoContainerElm = useRef<HTMLDivElement>(null);
  const videoElm = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoContainerElm.current && videoElm.current) {
      const { width, height } = videoContainerElm.current.getBoundingClientRect();
      videoElm.current.width = width - 100;
      videoElm.current.height = height - 150;
    }   
  }, [videoContainerElm.current]);

  return (
    <div className={container}>
      <PageHeader title={title} active="Video" heading="Repetition" />
      <div className={classNames('row', video_body)}>
        <div className="col-12 col-sm-12">
          <div className={classNames('card', video_container)}>
            <div className="card-body" ref={videoContainerElm}>
              <video
                width={videoContainerElm.current ? videoContainerElm.current.clientWidth - 100 : '100px'}
                height={videoContainerElm.current ? videoContainerElm.current.clientHeight - 60 : '100px'}
                ref={videoElm}
                controls
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="card-footer">
              <Col sm={12} md={2}>
                <FilePond
                  onupdatefiles={(files) => {
                    files.length > 0 &&
                      videoElm.current &&
                      (videoElm.current.src = URL.createObjectURL(files[0].file), videoElm.current, videoContainerElm.current);
                  }}
                  allowMultiple={false}
                  maxFiles={1}
                  name="files"
                  labelIdle="Drag & Drop your video here or click "
                  acceptedFileTypes={['video/*']}
                />
              </Col>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoRepetition;
