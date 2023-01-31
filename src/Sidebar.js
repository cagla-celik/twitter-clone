import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import PeopleIcon from '@mui/icons-material/People';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Person2Icon from '@mui/icons-material/Person2';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material'


function Sidebar() {
  return (
    <div className='sidebar'>
        <TwitterIcon className='sidebar-twitterIcon'/>
        <SidebarOption Icon = {HomeIcon} text = 'Home'/>
        <SidebarOption Icon = {SearchIcon} text = 'Explore'/>
        <SidebarOption Icon = {PeopleIcon} text = 'Communities'/>
        <SidebarOption Icon = {NotificationsIcon} text = 'Notifications'/>
        <SidebarOption Icon = {EmailIcon} text = 'Messages'/>
        <SidebarOption Icon = {BookmarkIcon} text = 'Bookmarks'/>
        <SidebarOption Icon = {Person2Icon} text = 'Profile'/>
        <SidebarOption Icon = {MoreHorizIcon} text = 'More'/>
        <Button variant='outlined' className='tweet-button' fullWidth>
           Tweet!
        </Button>

    </div>
  )
}

export default Sidebar