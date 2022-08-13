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
    sx={{ height: '100%',width:"100%", boxShadow:"none", borderRadius: "0",  justifyContent: 'space-around', alignItems: 'center' }}
  >
    <CardContent>
      <Grid
        container
        // spacing={3}
        sx={{ width:"100%",textAlign:'center' }}
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
              width: 56,
              margin: 'auto'
            }}
          >
            <item.icon />
          </Avatar>
        </Grid>
          </Typography>
          
          <Typography
            color="textPrimary"
            variant="h3"
            height={"auto"}
            fontSize={"1.5em"}
            marginTop="6px"
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
