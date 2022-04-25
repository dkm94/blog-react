import React from 'react';
import './Post.css';

const Post = ({id, img, title, title_description, description}) => {

  return (
    <div key={id} className="card custom-card">
        <img src={img} className="card-img-top" alt="description" style={{width: "100%"}} />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{title_description}</p>
            <p className="card-text">{description}</p>
        </div>
    </div>
  )
}

export default Post