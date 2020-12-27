import React from 'react';
import { Avatar, Button } from '@material-ui/core';
import './TweetBox.css';

function TweetBox() {
  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox__input'>
          <Avatar src='https://pbs.twimg.com/profile_images/1341630159284158466/aJ_8EaJi_400x400.jpg' />
          <input type='text' placeholder="What' s happening" />
        </div>
        <input className='tweetBox__imageInput' type='text' placeholder='Enter url' />
        <Button className='tweetBox__tweetButton'>Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
