import "./background-video.styles.scss";

export const BackgroundVideo = ({ videoMp4, videoWebm }) => {
  return (
    <div className="bg-video">
      <video className="bg-video__content" autoPlay muted loop>
        <source src={videoMp4} type="video/mp4" />
        {/* <source src={videoWebm} type="video/webm" /> */}
        oops!! Video not supported by your browser
      </video>
    </div>
  );
};
