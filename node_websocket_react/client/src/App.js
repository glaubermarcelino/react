import React, { useState, useEffect } from "react";
import "./App.css";
import io from "socket.io-client";

const socket = io("http://localhost:3538");

function App() {
  const [code, setCode] = useState(0);
  const [status, setStatus] = useState("");
  const [video, setVideo] = useState(1);

  useEffect(() => {
    socket.on("code", (code) => setCode(code));
    socket.on("status", (status) => {
      setStatus(status);

      if (status === "received") setVideo(3);
    });

    setTimeout(() => setVideo(2), 14000);
  }, []);
  return (
    <div>
      <h2>{code}</h2>
      <h2>{status}</h2>
      {video === 1 && (
        <iframe
          title="video_instrucao"
          src="https://player.vimeo.com/video/415281101?autoplay=1&color=55CCC3"
          width="640"
          height="360"
          frameBorder="0"
          allow="autoplay;fullscreen"
          allowFullScreen
        />
      )}
      {video === 2 && (
        <iframe
          title="video_instrucao"
          src="https://player.vimeo.com/video/415281217?autoplay=1&color=55CCC3"
          width="640"
          height="360"
          frameBorder="0"
          allow="autoplay;fullscreen"
          allowFullScreen
        />
      )}
      {video === 3 && (
        <iframe
          title="video_instrucao"
          src="https://player.vimeo.com/video/415281295?autoplay=1&color=55CCC3"
          width="640"
          height="360"
          frameBorder="0"
          allow="autoplay;fullscreen"
          allowFullScreen
        />
      )}
    </div>
  );
}

export default App;
