import React, { useState } from 'react';
import { Avatar, Button } from '@material-ui/core';
import db from './firebase';
import './TweetBox.css';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('');
  const [url, setUrl] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection('posts').add({
      text: tweetMessage,
      image: url,
      user: db.doc(localStorage.getItem('userId')),
    });
    setTweetMessage('');
    setUrl('');
  };
  return (
    <div className='tweetBox'>
      <form onSubmit={handleSubmit}>
        <div className='tweetBox__input'>
          <Avatar src='https://pbs.twimg.com/profile_images/1341630159284158466/aJ_8EaJi_400x400.jpg' />
          <input
            type='text'
            placeholder="What' s happening"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <input
          className='tweetBox__imageInput'
          type='text'
          placeholder='Enter url'
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button type='submit' className='tweetBox__tweetButton'>
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
