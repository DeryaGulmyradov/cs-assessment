import React from 'react';
import { Button, Grid } from '@material-ui/core';

export const SubmitButton = (
  <Grid container item justifyContent='center' direction='row' spacing={1}>
    <Button type='submit' color='primary' variant='contained'>
      Submit
    </Button>
  </Grid>
);
