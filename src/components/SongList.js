import React from 'react';
import SongDetail from './SongDetail.js';

const SongList = (props) => {
  const songInfo = props.songs.map((song, index) => {
    return(
      <SongDetail key={index} position={props.songs.indexOf(song) + 1} title={song['im:name'].label} artist={song['im:artist'].label}/>
    )
  })

  return (
    <div className="song-list">
    <ol>
      {songInfo}
      </ol>
    </div>
  )

}

export default SongList;
