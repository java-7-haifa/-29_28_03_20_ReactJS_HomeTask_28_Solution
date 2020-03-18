import React from 'react';
import LikeCounter from './LikeCounter';

export default props => {
    return (
    <>
    <h2>{props.author}</h2>
    <h3>{props.date}</h3>
    <p>{props.desc}</p>
    <LikeCounter count={props.likesCount} addLikeHandler={(count) => props.addLikeHandler(props.pid,count)}/>
    <button className='btn btn-success' onClick={()=> props.onClickHandler(props.pid)}>More</button>
    </>
    );
}