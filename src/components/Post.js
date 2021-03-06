import React from 'react';
import { Avatar } from '@material-ui/core';
import './Post.css';
import {
  ChatBubbleOutline,
  FavoriteBorder,
  VerifiedUser,
  Repeat,
  Publish,
} from '@material-ui/icons';

function Post({ displayName, username, verified, text, avatar, image, user }) {
  // console.log('displayName', displayName);
  // console.log('username', username);
  // console.log('avatar', avatar);
  // console.log('verified', verified);
  // console.log('text', text);
  // console.log('image', image);
  
  return (
    <div className='post'>
      <div className='post__avatar'>
        <Avatar
          src={
            avatar ||
            'https://pbs.twimg.com/profile_images/1341630159284158466/aJ_8EaJi_400x400.jpg'
          }
        />
      </div>
      <div className='post__body'>
        <div className='post__header'>
          <div className='post__headerText'>
            <h3>
              {displayName || 'Will Wang'}{' '}
              <span className='post__headerSpecial'>
                {verified ? <VerifiedUser className='post__badge' /> : ''}{' '}
                {username || '@bzwill'}
              </span>
            </h3>
          </div>
          <div className='post__headerDescription'>
            <p>{text || 'I challenge you to build a Twitter clone with react'}</p>
          </div>
        </div>
        <img
          src={
            image ||
            'https://pbs.twimg.com/profile_images/1341630159284158466/aJ_8EaJi_400x400.jpg'
          }
          alt='twitter descriptions'
        />
        <div className='post__footer'>
          <ChatBubbleOutline fontSize='small' />
          <Repeat fontSize='small' />
          <FavoriteBorder fontSize='small' />
          <Publish fontSize='small' />
        </div>
      </div>
    </div>
  );
}

export default Post;
