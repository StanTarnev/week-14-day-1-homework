import React from 'react';

const SongDetail = (props) => {
  return (
    <ol className="song-detail">
      <li>{props.title} - {props.artist}</li>
    </ol>
  )
}

export default SongDetail;
