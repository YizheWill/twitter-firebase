import React, { useState, useEffect } from 'react';
import TweetBox from './TweetBox';
import Post from './Post';
import './Feed.css';
import db from './firebase.js';

function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection('posts').onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => {
          const postInfo = doc.data();
          postInfo.user.get().then((snapshot) => {
            postInfo.displayName = snapshot.data().displayName;
            postInfo.username = snapshot.data().username;
            postInfo.avatar = snapshot.data().avatar;
          });
          return postInfo;
        })
      )
    );
  }, []);
  console.log('posts', posts);
  return (
    <div className='feed'>
      <div className='feed__header'>
        <h2>Home</h2>
      </div>
      <TweetBox />
      {posts.map((post, idx) => (
        <Post key={idx} {...post} />
      ))}
    </div>
  );
}

export default Feed;
