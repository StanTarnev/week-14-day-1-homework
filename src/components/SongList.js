import React from 'react';
import SongDetail from './SongDetail.js';

const SongList = (props) => {
  const songInfo = props.songs.map((song) => {
    return(
      <SongDetail key={song.id} position={props.songs.indexOf(song) + 1} title={song['im:name'].label} artist={song['im:artist']}/>
    )
  })

  return (
    <div className="song-list">
      {songInfo}
    </div>
  )

}

export default SongList;
