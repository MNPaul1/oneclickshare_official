import React from 'react'

import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

let accounts = [
    {name: "INSTAGRAM",icon:InstagramIcon},
    {name: "YOUTUBE", icon: YouTubeIcon}
    ]

export default function LeftComponent(props) {
  return (<>
  {accounts.map((item, index)  => (
  <Card key={index}
    sx={{ height: '100%',width:"55%", boxShadow:"none"}}
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between',marginRight:6 }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            {item.name}
            <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'error.main',
              height: 56,
              width: 56
            }}
          >
            <item.icon />
          </Avatar>
        </Grid>
          </Typography>
          
          <Typography
            color="textPrimary"
            variant="h3"
            height={"100%"}
            fontSize={"2em"}
          >
            {props.followers[item.name.toLowerCase()]}
          </Typography>
        </Grid>
        
      </Grid>
    </CardContent>
  </Card>
  ))}
  </> )
};
