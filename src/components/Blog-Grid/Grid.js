import React from 'react';
import Post from '../Post/Post';
import './Grid.css';
import articles from '../../data/articles';

const Grid = () => {

  return (
    <div className='col-sm-8'>
        {articles.map(post => (
            <Post 
                id={post.id}
                img={post.img}
                title={post.title}
                title_description={post.title_description}
                description={post.description}
            />
        ))}
    </div>
  )
}

export default Grid