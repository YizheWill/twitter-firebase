import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function SideButton({ component: Component, title, color, dest }) {
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 200,
      cursor: 'pointer',
      borderRadius: 50,
      padding: '1rem 1rem 1rem 2rem',
      display: 'flex',
      '&:hover': {
        backgroundColor: 'rgba(30, 161, 241, 0.1)',
        color: color,
      },
      alignItems: 'center',
    },
    icon: {
      marginRight: '1rem',
    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.root} onClick={() => 'hello'}>
      {Component ? (
        <Component className={classes.icon} style={{ color, fontSize: 30 }} />
      ) : (
        <Typography
          className={classes.icon}
          style={{ color, marginLeft: '0.3rem', marginRight: '1.3rem', fontSize: 30 }}
        >
          #
        </Typography>
      )}
      <Typography variant='subtitle1' style={{ color, fontWeight: 700 }}>
        {title}
      </Typography>
    </div>
  );
}

export default SideButton;
