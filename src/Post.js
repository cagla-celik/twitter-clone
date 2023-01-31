import React from 'react';
import './Post.css';
import { Avatar } from '@mui/material';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import UpgradeOutlinedIcon from '@mui/icons-material/UpgradeOutlined';

function Post( ) {
  return (
    <div className='post'>
      <div className='post--avatar'>
        <Avatar alt='ATK' src='https://i0.wp.com/bakikaracay.com/wp-content/uploads/2016/07/Ay-Ill%C4%B1zyonu-Fotograf-Cekim.jpg?resize=810%2C540&ssl=1'/>
      </div> 
      < div className='post--otherIcons'>
        <SmsOutlinedIcon/>
        <LoopOutlinedIcon/>
        <FavoriteBorderOutlinedIcon/>
        <BarChartOutlinedIcon/>
        <UpgradeOutlinedIcon/>
      </div>
    </div>
  )
}

export default Post