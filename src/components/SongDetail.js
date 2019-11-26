import React from 'react';

const SongDetail = (props) => {
  return (

      <li key={props.key}>{props.title} - {props.artist}</li>


  )
}

export default SongDetail;
