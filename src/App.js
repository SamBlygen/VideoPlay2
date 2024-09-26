import { useState, useRef } from "react";

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);
    nextIsPlaying ? videoRef.current.play() : videoRef.current.pause();
  }

  function handlePlay() {
    console.log("play");
    setIsPlaying(false);
  }

  function handlePause() {
    console.log("Pause");
    setIsPlaying(false);
  }

  return (
    <>
      <button onClick={handleClick}>{isPlaying ? "Pause" : "Play"}</button>
      <video
        width="75%"
        ref={videoRef}
        onPlay={handlePlay}
        onPause={handlePause}
      >
        <source src="stock.mov" type="video/mp4" />
      </video>
    </>
  );
}
