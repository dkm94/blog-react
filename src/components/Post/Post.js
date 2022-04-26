import React from 'react';
import './Post.css';

const Post = ({key, img, title, title_description, content, description}) => {

  return (
    <div key={key} className="card custom-card">
        <img src={img} className="card-img-top" alt="description" style={{width: "100%"}} />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{title_description}</p>
            <p className="card-text">{description}</p>
            <p className="card-text">{content}</p>
        </div>
    </div>
  )
}

export default Post