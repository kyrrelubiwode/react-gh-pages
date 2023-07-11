import React from "react";
import "./VideoSection.css";
import ReactPlayer from "react-player";
function VideoSection() {
  return (
    <div className="VideoContainer">
      <div className="video">
        <div>
          <h1>
            POZNAJ BLIŻEJ MOŻLIWOŚCI KTÓRE OFERUJE SYSTEM ATOS BASIC
          </h1>
        </div>
        <div className="videovideo">
        <ReactPlayer
          className="videovideo"
          url={"https://www.youtube.com/watch?v=83m261lAlrs"}
          controls={true}
        />
        </div>
      

        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec
            facilisis velit. Donec nisl nisi, vehicula aliquet ex.
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoSection;
