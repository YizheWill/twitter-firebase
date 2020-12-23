import React from 'react';
import { Button, makeStyles, Typography } from '@material-ui/core';
import SideButton from './SideButton';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EmailIcon from '@material-ui/icons/Email';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '20%',
    height: '100vh',
    backgroundColor: '#14202B',
    padding: '0 2rem',
  },
}));

function LeftSideBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TwitterIcon
        style={{
          marginLeft: '2rem',
          marginTop: '2rem',
          fontSize: 30,
          color: 'white',
          marginBottom: '1rem',
        }}
      />
      <SideButton component={HomeIcon} title='Home' dest='/' color='#1EA1F1' />
      <SideButton title='Explore' dest='/' color='white' />
      <SideButton
        component={NotificationsIcon}
        title='Notification'
        dest='/'
        color='white'
      />
      <SideButton component={EmailIcon} title='Messages' dest='/' color='white' />
      <SideButton component={BookmarkIcon} title='Bookmarks' dest='/' color='white' />
      <SideButton component={BookmarkIcon} title='List' dest='/' color='white' />
      <SideButton component={BookmarkIcon} title='Profile' dest='/' color='white' />
      <SideButton component={BookmarkIcon} title='More' dest='/' color='white' />
      <Button
        variant='contained'
        style={{
          marginLeft: '2rem',
          marginTop: '1.5rem',
          maxWidth: 200,
          width: '80%',
          borderRadius: 200,
          backgroundColor: '#1EA1F1',
          color: 'white',
          fontWeight: 700,
        }}
      >
        Tweet
      </Button>
    </div>
  );
}

export default LeftSideBar;
