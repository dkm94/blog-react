import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import './Grid.css';
//import articles from '../../data/articles';
import { getRessources } from '../../services/api_services';

const Grid = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getRessources("post").then(data => setPosts(data));
  }, [posts])

  return (
    <div className='col-sm-8'>
        {posts.map(post => (
            <Post 
              key={post.id}
              img={post.img}
              title={post.title}
              title_description={post.title_description}
              content={post.content}
              description={post.description}
            />
        ))}
    </div>
  )
}

export default Grid