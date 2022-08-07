import React from 'react'
import './PostPreview.css'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';

export default function PostPreview() {
  return (
    <>
    <Typography variant='h4'>Preview</Typography>

    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        className='radiogroup'
      >
        <FormControlLabel value="female" control={<Radio />} label="YouTube" />
        <FormControlLabel value="male" control={<Radio />} label="Instagram" />
      </RadioGroup>
    </FormControl>
    
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="70%"
        image="https://image.cnbcfm.com/api/v1/image/107043909-1649419130774-gettyimages-1239416791-AFP_326N7TG.jpeg?v=1655800477&w=740&h=416"
      />
      <CardContent>
        <Typography variant="body2" color="text.primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quo. Error ipsa vitae autem voluptatum?
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
    </>
  )
}
