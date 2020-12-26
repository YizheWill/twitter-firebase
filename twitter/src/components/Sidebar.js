import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import { Button } from '@material-ui/core';
import {
  Twitter,
  Home,
  Search,
  NotificationsNone,
  MailOutline,
  ListAlt,
  BookmarkBorder,
  PermIdentity,
  MoreHoriz,
} from '@material-ui/icons';

function Sidebar() {
  return (
    <div className='sidebar'>
      <Twitter />
      <SidebarOption Icon={Home} text='Home' />
      <SidebarOption Icon={Search} text='Explore' />
      <SidebarOption Icon={NotificationsNone} text='Notifications' />
      <SidebarOption Icon={MailOutline} text='Messages' />
      <SidebarOption Icon={BookmarkBorder} text='Bookmarks' />
      <SidebarOption Icon={ListAlt} text='List' />
      <SidebarOption Icon={PermIdentity} text='Profile' />
      <SidebarOption Icon={MoreHoriz} text='More' />
      <Button>Tweet</Button>
    </div>
  );
}

export default Sidebar;
