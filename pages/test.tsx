import React, { useEffect, useState } from "react";

const CameraTest = () => {
  const [hasStream, setHaStream] = useState(false);

  const getUserMedia = async () => {
    try {
      let video = document.getElementById("video");
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          facingMode: {
            exact: "environment",
          },
        },
      });

      // @ts-ignore
      video.srcObject = stream;
      // @ts-ignore
      video.play();
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  };

  useEffect(() => {
    getUserMedia();
  }, []);

  return (
    <div>
      <h1>Hi there</h1>

      <video id="video">Hello</video>
    </div>
  );
};

export default CameraTest;
