import React from "react";
import Post from "./Post";

export default props => {
  return (
    <ul>
      {props.posts.map(post => {
        return (
          <li className='card' key={post.id}>
            <Post 
            pid={post.id} 
            onClickHandler={props.handler} 
            author={post.author} 
            date={post.date} 
            desc={post.shortDesc}
            addLikeHandler={props.addLikeHandler}
            likesCount={post.likes}/>
          </li>
        );
      })}
    </ul>
  );
};
