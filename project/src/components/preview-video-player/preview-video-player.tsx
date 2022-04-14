import {Film} from '../../types/films';
import {useEffect, useRef, useState} from 'react';
import {LATENCY_BEFORE_PLAY_PREVIEW} from '../../const';

type PreviewVideoPlayerProps = {
  film: Film;
}

function PreviewVideoPlayer({film}: PreviewVideoPlayerProps) {

  const [videoPlay, setVideoPlay] = useState(false);
  let timer: NodeJS.Timeout;

  const playVideo = () => {
    timer = setTimeout(() => {
      setVideoPlay(true);
    }, LATENCY_BEFORE_PLAY_PREVIEW);
  };

  const stopVideo = () => {
    clearTimeout(timer);
    setVideoPlay(false);
  };

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (videoPlay) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
    videoRef.current.load();
  }, [videoPlay]);

  return (
    <div className="small-film-card__image" onMouseEnter={playVideo} onMouseLeave={stopVideo}>
      <video ref={videoRef} src={film.previewVideoLink} width="280" height="175" poster={film.previewImage} muted />
    </div>
  );
}

export default PreviewVideoPlayer;
