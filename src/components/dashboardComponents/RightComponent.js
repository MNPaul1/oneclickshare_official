import React from 'react'
import { Avatar, Grid,Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
let icons = [{"icon":InstagramIcon, "opacity":1}, {"icon":FacebookIcon,"opacity":0.5}, {"icon":TwitterIcon,"opacity":0.5},{"icon": YouTubeIcon,"opacity":1}]


export default function RightComponent() {
  return (<div style={{display:'flex', flexDirection:'column'}}>
    <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            CONNECTED DEVICES
    </Typography>
    <div style={{display:'flex', flexDirection:'row', justifyContent:'center', gap:'9%'}}>
        {icons.map((icon, index) =>(
            <Grid key={index}>
            <Avatar
                sx={{
                backgroundColor: 'black',
                height: 56,
                width: 56,
                opacity:icon.opacity
                }}
            >
                <icon.icon />
            </Avatar>
            </Grid>
            ))}
    </div>
  </div>
  )
}
