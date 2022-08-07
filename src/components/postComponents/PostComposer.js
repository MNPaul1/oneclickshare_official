import React from 'react'
import './PostComposer.css'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';

export default function PostComposer() {
  return (
    <>
    <FormLabel>Post to</FormLabel>
    <FormGroup row>
      <FormControlLabel control={<Checkbox defaultChecked />} label='YouTube' labelPlacement='right'/>
      <FormControlLabel control={<Checkbox />} label='Instagram' labelPlacement='right'/>
    </FormGroup>
    
    <TextField
          id="outlined-multiline-flexible"
          label="Caption"
          multiline
          minRows={6}
          maxRows={10}
        />
    <Stack direction="row" alignItems="center" spacing={2}>
      <Button variant="contained" component="label">
        Upload
        <input hidden accept="image/*" multiple type="file" />
      </Button>
      <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <PhotoCamera />
      </IconButton>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </Stack>
    </>
  )
}
