import React from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@mui/material';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';

function TweetBox() {
  return (
    <div className='tweetBox'>
        <form> 
            <div className='tweetBox--input'>
                <Avatar  alt='Çağla Çelik' src= 'https://media.licdn.com/dms/image/D4D03AQF9QL6vHazPwA/profile-displayphoto-shrink_200_200/0/1666021351058?e=1680739200&v=beta&t=33bPKVtb9ZsmTMVMw1xBuqwKV1hwj7AWg8mb7EztUus'/>
                <input placeholder="What's happening?" />
            </div>
            < div className='tweetBox--otherIcons'>
                <AddPhotoAlternateOutlinedIcon/>
                <GifBoxOutlinedIcon/>
                <EmojiEmotionsOutlinedIcon/>
                <AddLocationAltOutlinedIcon/>
            </div>


            <Button className='tweetBox--tweetButton'> Tweet! </Button>
    
        </form>
    </div>
  )
}

export default TweetBox