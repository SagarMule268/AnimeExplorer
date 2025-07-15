import React, { useState } from 'react';
import axios from 'axios';

function ZoroPlayer({ title }) {
  const [videoUrl, setVideoUrl] = useState(null);

  const handleClick = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/stream/${encodeURIComponent(title)}`);
      setVideoUrl(res.data.videoUrl);
    } catch (err) {
      console.error('Error fetching video:', err);
    }
  };

  return (
    <div>
      {!videoUrl ? (
        <button onClick={handleClick}>▶️ Watch Episode 1</button>
      ) : (
        <iframe
          src={videoUrl}
          title="Anime Stream"
          allowFullScreen
          style={{ width: '100%', height: '500px', border: 'none' }}
        ></iframe>
      )}
    </div>
  );
}

export default ZoroPlayer;