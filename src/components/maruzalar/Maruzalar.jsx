import React, { useEffect, useState } from 'react';
import axios from 'axios';
import maruza from "./Maruzalar.module.scss"
import Back from '../backto/Back';

function VideoPlaylist() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const apiKey = 'AIzaSyAZmg-v9r3HRM0eMoBXL0DtCEB-F4M5J40'; // Replace with your YouTube Data API key
    const playlistId = 'PL-11M44Qecu8UAHxSUTUr8IdCjp7DxJJP';

    axios.get(`https://www.googleapis.com/youtube/v3/playlistItems`, {
      params: {
        part: 'snippet',
        maxResults: 10, 
        playlistId: playlistId,
        key: apiKey,
      },
    })
    .then((response) => {
      setVideos(response.data.items);
    })
    .catch((error) => {
      console.error('Error fetching data from YouTube API:', error);
    });
  }, []);

  return (
    <div>
     <div className={maruza.back_top}>
     <Back/>
      <h1 className={maruza.main_text}>Maruzalar</h1>
     </div>
      <div className={maruza.video_playlist_container}>
      <div className={maruza.main_maruza}>
      <ul className={maruza.video_list}>
        {videos.map((video) => (
          <li key={video.snippet.resourceId.videoId} className={maruza.vide_item}>
            <iframe
              title={video.snippet.title}
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <p>{video.snippet.title}</p>
          </li>
        ))}
      </ul>
      </div>
      </div>
    </div>
  );
}

export default VideoPlaylist;
